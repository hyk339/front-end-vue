<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01LifeCycleHook
    </div>
    <div class="card-body">
      <p>data: {{data}}</p>
      <button class="btn btn-info btn-sm mt-2" @click="changeData">변경</button>
      <hr/>
      <child :data="data"/>
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue"

export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam01LifeCycleHook",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    Child
  },
  //컴포넌트에서 사용하는 데이터를 정의
  data() {
    return {
      data: ""
    };
  },
  //컴포넌트에서 사용하는 메서드
  methods: {
    changeData(){
      this.data += Math.floor(10*Math.random());
    }
  },
  //LifeCycleHook 정의
  beforeCreate(){
    console.log("beforeCreate state");
  },
  created(){
    console.log("created state");
  },
  beforeMount(){
    console.log("beforeMount state");
  },
  mounted(){
    console.log("mounted state");
  },
  beforeUpdate(){
    console.log("beforeUpdate state");
  },
  updated(){
    console.log("updated state");
  },
  beforeDestroy(){
    console.log("beforeDestory state");
  },
  destroyed(){
    console.log("destoryed state");
  }
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>
