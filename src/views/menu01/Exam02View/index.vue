<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02View
    </div>
    <div class="card-body">
      <!-- 아래에 subAComponent가 들어간다. -->
      <sub-a-component class="mb-2"/>
      <!-- <SubAComponent> 이렇게 써도 된다.-->
      <!-- ////////////////////////////////-->

      <!-- 프로그래밍 방식 화면 이동 -->
      <!--아래 methods 부분에 작성하자. -->
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl()">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl()">/menu01/exam01view</button>
    </div>
  </div>
</template>

<script>
import SubAComponent from './SubAComponent.vue';

export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam02View",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    SubAComponent

  },
  //컴포넌트에서 사용하는 데이터를 정의
  data: function(){
    return {

    };
  },
  //컴포넌트에서 사용하는 메서드
  methods: {
    goUrl(){
      //현재 component의 router라는 속성을 통해서 push는 url정보를 넣어준다.
      //push가 promise를 return한다.
      this.$router.push("/menu01/exam01view");
      
      //현재 URL과 동일한 URL로 화면 이동을 할 경우 예외가 발생하므로 예외 처리 코드 필요
      //this.$router.push("/menu01/exam01view").catch(()=>{});

      //this.$router.push({path: "/menu01/exam01view"});
      //this.$router.push({name: "menu01_exam01view"});
    }
  }
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>
