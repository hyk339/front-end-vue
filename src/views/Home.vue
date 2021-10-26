<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld/> 
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    test() {
      var var1 = "111111";
      var var2 = 2;
      var var3 = [1, 2, 3];
      console.log(var2);
    },
  },
};
</script>
