<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="couponModal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="newData">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="tempCoupon.title"
              placeholder="請輸入標題"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input
              type="text"
              class="form-control"
              id="coupon_code"
              v-model="tempCoupon.code"
              placeholder="請輸入優惠碼"
            />
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input type="date" class="form-control" id="due_date" v-model="due_date" />
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input
              type="number"
              class="form-control"
              id="price"
              min="0"
              v-model.number="tempCoupon.percent"
              placeholder="請輸入折扣百分比"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                v-model="tempCoupon.is_enabled"
                id="is_enabled"
              />
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="updateCoupon">
            更新優惠券
          </button>
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
      tempCoupon: {},
      modal: '',
      newData: false,
      due_date: '',
      id: '',
    };
  },
  methods: {
    updateCoupon() {
      this.tempCoupon.due_date = Date.parse(this.due_date) / 1000;
      if (this.newData) {
        this.$http
          .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`, {
            data: this.tempCoupon,
          })
          .then((res) => {
            this.$swal(res.data.message);

            this.$emit('reget');
            this.modal.hide();
          });
      } else {
        this.$http
          .put(
            `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.id}`,
            {
              data: this.tempCoupon,
            },
          )
          .then((res) => {
            this.modal.hide();
            this.$emit('reget');
            this.$swal(res.data.message);
          });
      }
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.couponModal);
  },
};
</script>
