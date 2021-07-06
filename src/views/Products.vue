<template>
  <h1 class="mt-3 mb-3">產品總覽</h1>
  <div class="container">
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button @click="openModal('add', item)" class="btn btn-lg btn-primary">新增產品</button>
    </div>
    <table class="table table-hover align-middle mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="100"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productData" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            {{ item.is_enabled ? '啟用' : '未啟用' }}
          </td>
          <td>
            <div class="btn-group">
              <button
                @click="openModal('edit', item)"
                type="button"
                class="btn btn-outline-primary btn-sm"
              >
                編輯
              </button>
              <button
                @click="openModal('delete', item)"
                type="button"
                class="btn btn-outline-danger btn-sm"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="d-flex justify-content-center mt-5">
    <pagination :page="pagination" @page-change="getData"></pagination>
  </div>
  <ProductModal @refresh="getData" ref="modal"></ProductModal>
  <DeleteModal @deldata="getData" ref="deleteModal"></DeleteModal>
</template>

<script>
import Pagination from '../components/Pagination.vue';
import ProductModal from '../components/ProductModal.vue';
import DeleteModal from '../components/DeleteModal.vue';

export default {
  data() {
    return {
      productData: [],
      pagination: {},
    };
  },
  methods: {
    getData(page) {
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`,
        )
        .then((res) => {
          this.productData = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((res) => {
          this.$swal(res.data.message);
        });
    },
    openModal(status, item) {
      if (status === 'edit') {
        this.$refs.modal.modal.show();
        this.$refs.modal.productObj = { ...item };
        this.$refs.modal.buttomStatus = '編輯';
      } else if (status === 'add') {
        this.$refs.modal.modal.show();
        this.$refs.modal.productObj = { imagesUrl: [] };
        this.$refs.modal.buttomStatus = '新增';
      } else if (status === 'delete') {
        this.$refs.deleteModal.modal.show();
        this.$refs.deleteModal.productObj = { imagesUrl: [], ...item };
      }
    },
  },
  components: {
    Pagination,
    ProductModal,
    DeleteModal,
  },
  created() {
    this.getData();
  },
};
</script>
