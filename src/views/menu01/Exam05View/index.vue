<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam05View
    </div>
    <div class="card-body">
      <h6>params(path variable)로 전달</h6>
      <ul>
        <li><router-link to="/menu01/exam06view/1">exam06view/1</router-link></li>
        <li><router-link v-bind:to="`/menu01/exam06view/${bno1}`">exam06view/3</router-link></li>
        <li><router-link :to="{path: `/menu01/exam06view/${bno2}`}">exam06view/5</router-link></li>
        <!-- {}부분이 자바스크립트 코드다. -->
        <li><router-link :to="{name: 'menu01_exam06view', params:{bno:bno3}}">exam06view/7</router-link></li>
      </ul>

      <h6>정적 프롭 객체 전달</h6>
       <ul>
        <li><router-link to="/menu01/exam07view">exam07view</router-link></li>
       </ul>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam05View",
  //추가하고 싶은 컴포넌트를 등록
  components:{

  },
  //컴포넌트에서 사용하는 데이터를 정의
  data(){
    return {
      bno1: 3,
      bno2: 5,
      bno3: 7
    }
  },
  //컴포넌트에서 사용하는 메서드
  methods: {
    
  }
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>
