<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/">Home</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>


.nav-item a{
    color: black;
    padding: 5px;
}

.nav-item a:hover{
    background-color: gray;
    color: white;
}

.nav-item a:active{
    background-color: black;
}
a.router-link-active{
  background: gray;
}
</style>