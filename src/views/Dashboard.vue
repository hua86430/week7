<template>
  <nav class="navbar navbar-expand-lg fw-bolder navbar-dark bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand" href="#">後台管理系統</span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link" to="/dashboard/products">產品頁面</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/order">訂單管理</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/coupon">優惠券管理</router-link>
          </li>
        </ul>
        <span class="navbar-text">
          <button type="button" class="btn btn-warning" @click="logOut">登出</button>
        </span>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  date() {
    return {
      isToken: '',
    };
  },
  methods: {
    isLogin() {
      if (this.isToken === '') {
        this.$swal('請重新登入');
        this.$router.push('/');
      }
    },
    logOut() {
      document.cookie = 'huaToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      this.$swal('登出成功');
      setTimeout(() => {
        this.$router.push('/');
      }, 100);
    },
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)huaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    this.isToken = token;
    this.isLogin();
  },
};
</script>

// 自定義bootstrap樣式
