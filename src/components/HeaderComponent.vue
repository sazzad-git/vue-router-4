<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Vue Router</router-link>

    <div id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/"
            >Home <span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'posts' }"
            >Posts</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/notFound">Not Found</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
