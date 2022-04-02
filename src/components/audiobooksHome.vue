<template>
      <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Douglas Audiobooks</router-link>
      <div class="navbar-nav">
        <li class="nav-item">
          <router-link to="/audiobooks" class="nav-link">Audiobooks</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>

      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>