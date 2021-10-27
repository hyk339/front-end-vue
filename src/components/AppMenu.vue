<template>
  <ul class="nav flex-column">
    <li class="nav-item">
      <h6 class="text-white">Vue Home</h6>
      <router-link to="/" class="nav-link text-warning">Home</router-link>
      <router-link to="/about" class="nav-link text-warning">About</router-link>
    </li>
    <li class="nav-item">
      <h6 class="text-white">Menu01: Routing</h6>
      <router-link to="/menu01/exam01view" class="nav-link text-warning">선언적 화면이동</router-link>
      <router-link to="/menu01/exam02view" class="nav-link text-warning">프로그래밍 방식 화면이동</router-link>
    </li>
  </ul>
</template>
