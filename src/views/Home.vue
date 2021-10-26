<template>
  <div class="card">
    <div class="card-header">
      Home
    </div>
    <div class="card-body">
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";


//components를 써서 Helloword라고 쓰면 Helloworld에 작성한 태그가 온다.
//그리고 위에서 사용만 하면 된다.
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
