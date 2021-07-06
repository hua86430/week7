<template>
  <div class="modal fade" ref="couponDeleteModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">確認刪除以下優惠券</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>{{ couponObj.title }}</p>
          <p>到期日 ： {{ new Date(couponObj.due_date * 1000).toLocaleDateString('zh-TW') }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteCoupon(couponObj.id)">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['couponObj'],
  data() {
    return {
      modal: '',
    };
  },
  methods: {
    deleteCoupon(id) {
      this.$http
        .delete(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.$emit('reNew');
            this.modal.hide();
            this.$swal(res.data.message);
          }
        });
    },
  },
  created() {},
  mounted() {
    this.modal = new Modal(this.$refs.couponDeleteModal);
  },
};
</script>
