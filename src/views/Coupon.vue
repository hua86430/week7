<template>
  <h1 class="mt-3 mb-3">優惠卷管理</h1>
  <div class="text-end mt-4">
    <button type="button" class="btn btn-primary" @click="openModal('isNew', item)">
      建立新的優惠券
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>
          {{ new Date(item.due_date * 1000).toLocaleDateString('zh-TW') }}
        </td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              @click="openModal('edit', item)"
              class="btn btn-outline-primary btn-sm"
            >
              編輯
            </button>
            <button
              @click="openModal('del', item)"
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
  <CouponModal ref="coupon" @reget="getCoupon"></CouponModal>
  <CouponDeleteModal
    ref="couponDelete"
    :couponObj="couponObj"
    @reNew="getCoupon"
  ></CouponDeleteModal>
</template>

<script>
import CouponModal from '../components/CouponModal.vue';
import CouponDeleteModal from '../components/CouponDeleteModal.vue';

export default {
  data() {
    return {
      coupons: [],
      couponObj: {},
    };
  },
  methods: {
    getCoupon(page) {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`)
        .then((res) => {
          if (res.data.success) {
            this.coupons = res.data.coupons;
          }
        });
    },

    openModal(status, item) {
      if (status === 'isNew') {
        this.$refs.coupon.modal.show();
        this.$refs.coupon.tempCoupon = { is_enabled: 0 };
        this.$refs.coupon.due_date = '';
        this.$refs.coupon.newData = true;
      } else if (status === 'edit') {
        this.$refs.coupon.modal.show();
        this.$refs.coupon.id = item.id;
        this.$refs.coupon.tempCoupon = { ...item };
        this.$refs.coupon.due_date = new Date(this.$refs.coupon.tempCoupon.due_date * 1000)
          .toISOString()
          .split('T', 1);
        this.$refs.coupon.newData = false;
      } else {
        this.$refs.couponDelete.modal.show();
        this.couponObj = item;
      }
    },
  },
  components: {
    CouponModal,
    CouponDeleteModal,
  },
  created() {
    this.getCoupon();
  },
};
</script>
