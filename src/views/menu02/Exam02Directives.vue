<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Directives
    </div>
    <div class="card-body">
      
      <div>
        <img class="mr-2" src="@/assets/photos/photo1.jpg" height="100"/>
        <!-- 자바 스크립트 코드가 포함되면 넣는다.-->
        <!-- 아래처럼 쓰면 안된다.-->
        <img class="mr-2" v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100"/>
        <img class="mr-2" :src="require(`@/assets/photos/${photoFileName}`)" height="100"/>
      </div>
      <hr/>
      <button class="btn btn-info btn-sm" @click="changeData">변경</button>

    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam02Directives",
  //추가하고 싶은 컴포넌트를 등록
  components:{

  },
  //컴포넌트에서 사용하는 데이터를 정의
  data: function(){
    return {
      photoFileName: "photo2.jpg"
    };
  },
  //컴포넌트에서 사용하는 메서드
  methods: {
    changeData(){
      if(this.photoFileName === "photo2.jpg"){
        this.photoFileName = "photo3.jpg";
      } else {
        this.photoFileName = "photo2.jpg";
      }
    }
  }
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>
