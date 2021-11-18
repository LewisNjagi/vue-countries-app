<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="py-3">
      <b-navbar-brand href="/" class="ml-5">The world</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">PhoneValidate</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav a.router-link-exact-active {
  color: rgb(157, 157, 157);
}
#nav a {
  color: black;
}
.navbar.navbar-dark.bg-dark {
  background-color: white !important;
}
</style>
