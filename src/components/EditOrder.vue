<template>
  <div class="modal  fade" ref="modal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header justify-content-center bg-info text-light">
          <h3 class="modal-title w-100">修改訂單</h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3 row">
              <label for="orderDate" class="col-sm-2 col-form-label">訂單日期</label>
              <div class="form-group col-sm-4">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="orderDate"
                  v-model="unix"
                />
              </div>
              <label for="orderpaid" class="col-sm-2 col-form-label">付款狀態</label>
              <div class="form-group col-sm-4">
                <select
                  class="form-select"
                  id="orderpaid"
                  :value="orderObj.is_paid ? 1 : 0"
                  @change="change($event)"
                >
                  <option value="0">未付款</option>
                  <option value="1">已付款</option>
                </select>
              </div>
            </div>
            <h2 class="mb-4">訂購人資訊</h2>
            <div class="row mb-3">
              <label for="name" class="col-sm-2 col-form-label">姓名</label>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model.trim="orderObj.user.name"
                />
              </div>
              <label for="name" class="col-sm-2 col-form-label">電話</label>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model.number="orderObj.user.tel"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="name" class="col-sm-2 col-form-label">電子信箱</label>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model.trim="orderObj.user.email"
                />
              </div>
              <label for="name" class="col-sm-2 col-form-label">地址</label>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model.trim="orderObj.user.address"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="name" class="col-sm-2 col-form-label">備註</label>

              <div class="col-sm">
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model.trim="orderObj.message"
                ></textarea>
              </div>
            </div>
            <div class="row mb-3">
              <label for="name" class="col-sm-2 col-form-label">付款方式</label>

              <div class="col-sm">
                <div
                  class="btn-group w-100"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autocomplete="off"
                    :checked="pay_methods == 1"
                    @click="payment($event)"
                    value="1"
                  />
                  <label class="btn btn-outline-primary" for="btnradio1">貨到付款</label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autocomplete="off"
                    :checked="pay_methods == 2"
                    @click="payment($event)"
                    value="2"
                  />
                  <label class="btn btn-outline-primary" for="btnradio2">信用卡</label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio3"
                    :checked="pay_methods == 3"
                    autocomplete="off"
                    @click="payment($event)"
                    value="3"
                  />
                  <label class="btn btn-outline-primary" for="btnradio3">銀行匯款</label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer container-fluid">
          <button @click="deleteOne" class="btn btn-danger mr-auto">
            刪除訂單
          </button>
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="edit">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      modal: '',
      orderObj: { is_paid: '', user: {}, payment_method: '' },
      unix: '',
      pay_methods: '',
    };
  },

  methods: {
    edit() {
      const { id } = this.orderObj;
      this.$http
        .put(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`, {
          data: this.orderObj,
        })
        .then((res) => {
          this.$swal(res.data.message);
          this.$emit('reget');
          this.modal.hide();
        });
    },
    deleteAll() {
      this.$http
        .delete(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`)
        .then((res) => {
          this.$swal(res.data.message);
          this.$emit('reget');
          this.modal.hide();
        });
    },
    deleteOne() {
      const { id } = this.orderObj;
      this.$http
        .delete(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`)
        .then((res) => {
          this.$swal(res.data.message);
          this.$emit('reget');
          this.modal.hide();
        });
    },
    change(e) {
      const status = e.target.value;
      if (status === '1') {
        this.orderObj.is_paid = true;
      } else {
        this.orderObj.is_paid = false;
      }
      console.log(this.orderObj.is_paid);
    },
    payment(e) {
      const methods = e.target.value;
      if (methods === '1') {
        this.orderObj.payment_method = 'cash_on_delivery';
      } else if (methods === '2') {
        this.orderObj.payment_method = 'credit_card';
      } else {
        this.orderObj.payment_method = 'bank_transfer';
      }
    },
  },
  created() {},
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
