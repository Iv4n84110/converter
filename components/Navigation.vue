<template>
  <div class="wrapper">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <nuxt-link class="nav-link" exact-active-class="active" to="/"
          >Конвертер</nuxt-link
        >
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" exact-active-class="active" to="/portfolio"
          >Портфель</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  margin: 30px 0;
}

.nav-link {
  color: #22223b;
  font-size: 18px;
}

.nav-link:hover {
  border: 1px solid #c9ada7;
}

.nav-link.active {
  background: #f2e9e4;
  border: 1px solid #c9ada7;
  border-bottom: 1px solid #f2e9e4;
  color: #22223b;
}

.nav-tabs {
  border-bottom: 1px solid #c9ada7;
}
</style>