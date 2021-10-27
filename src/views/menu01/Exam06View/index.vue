<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam06View
    </div>
    <div class="card-body">
      <h6>params(path variable)로 데이터 얻기</h6>
      <div>bno: {{ $route.params.bno }}</div>
      <div>prop1: {{ bno }}</div>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam06View",
  //추가하고 싶은 컴포넌트를 등록
  components:{

  },
  //컴포넌트에서 사용하는 데이터를 정의
  data: function(){
    return {

    };
  },
  //컴포넌트에서 사용하는 메서드
  methods: {
    
  },
  //컴포넌트가 생성될때 실행
  created(){
    console.log("Exam06View 컴포넌트가 생성됨");
    console.log(this.$route);
    console.log(this.$route.params.bno);
  },
  props: [
    //prop이 뭐냐? property의 약자이다. //문자열 같지만 변수다.
    //prop으로 어떻게 밭을까? router > index.js에 명시해주면 된다.
    "bno"
  ]
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>
