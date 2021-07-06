<template>
  <h1 class="mt-3 mb-3">訂單管理</h1>
  <div class="container">
    <table class="table table-hover align-middle">
      <thead>
        <tr>
          <th width="120">訂單日期</th>
          <th width="50">訂購人</th>
          <th width="50">電話</th>
          <th width="50">信箱</th>
          <th width="100">地址</th>
          <th width="120">備註</th>
          <th width="50">付款狀態</th>
          <th width="50"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orderList" :key="item.id">
          <td>
            {{ new Date(item.create_at).toLocaleDateString('zh-TW') }}
            {{ new Date(item.create_at).toLocaleTimeString('zh-TW') }}
          </td>
          <td>{{ item.user.name }}</td>
          <td>{{ item.user.tel }}</td>
          <td>{{ item.user.email }}</td>
          <td>{{ item.user.address }}</td>
          <td class="text-truncate" style="max-width: 120px;">
            {{ item.message }}
          </td>
          <td>{{ item.is_paid ? '已付款' : '未付款' }}</td>
          <td><button class="btn btn-outline-info" @click="openModal(item)">修改訂單</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="d-flex justify-content-center mt-5">
    <pagination :page="pagination" @page-change="getOrderList"></pagination>
  </div>
  <EditOrder ref="editModal" @reget="getOrderList"></EditOrder>
</template>

<script>
import Pagination from '../components/Pagination.vue';
import EditOrder from '../components/EditOrder.vue';

export default {
  data() {
    return {
      orderList: [],
      pagination: {},
    };
  },
  methods: {
    getOrderList(page) {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          if (res.data.success) {
            this.orderList = res.data.orders;
            this.pagination = res.data.pagination;
          }
        });
    },
    openModal(item) {
      this.$refs.editModal.modal.show();
      this.$refs.editModal.orderObj = { ...item };
      this.$refs.editModal.unix = `${new Date(item.create_at).toLocaleDateString(
        'zh-TW',
      )}  ${new Date(item.create_at).toLocaleTimeString('zh-TW')}`;
      if (this.$refs.editModal.orderObj.payment_method === 'bank_transfer') {
        this.$refs.editModal.pay_methods = '3';
      } else if (this.$refs.editModal.orderObj.payment_method === 'cash_on_delivery') {
        this.$refs.editModal.pay_methods = '1';
      } else if (this.$refs.editModal.orderObj.payment_method === 'credit_card') {
        this.$refs.editModal.pay_methods = '2';
      }
      console.log(item);
    },
  },
  components: {
    Pagination,
    EditOrder,
  },
  created() {
    this.getOrderList();
  },
};
</script>
