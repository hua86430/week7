<template>
  <div
    class="modal fade"
    id="delProductModal"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
    ref="deleteModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">刪除以下商品</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>{{ productObj.title }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button @click="deleteItem" type="button" class="btn btn-danger">確認刪除</button>
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
      productObj: { imagesUrl: [] },
    };
  },
  methods: {
    deleteItem() {
      this.$http
        .delete(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.productObj.id}`,
        )
        .then((res) => {
          if (res.data.success) {
            this.$emit('deldata');
            this.$swal(res.data.message);
            this.modal.hide();
          }
        });
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.deleteModal);
  },
};
</script>
