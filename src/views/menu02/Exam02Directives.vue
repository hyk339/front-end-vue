<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Directives
    </div>
    <div class="card-body">
      <!-- 데이터 바인딩 -->
      <div>
        <img class="mr-2" src="@/assets/photos/photo1.jpg" height="100"/>
        <!-- 자바 스크립트 코드가 포함되면 넣는다.-->
        <!-- 아래처럼 쓰면 안된다.-->
        <img class="mr-2" v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100"/>
        <img class="mr-2" :src="require(`@/assets/photos/${photoFileName}`)" height="100"/>
      </div>
      <hr/>

       <!--Vue의 template에서는 id를 사용하지 말라고 하신다.
          component는 한번만 사용될수도 있고 여러 화면에서 사용될수도 있다.
          이때 똑같은 id가 여러개 생기게 되는 것이다.
          id는 전체 DOM에서 하나여야한다.
          spa는 html이 하나니까 id가 여러개가 된다는 의미가 된다.
          id가 필요가 없다.
          css 적용하거나 javascript 객체를 찾기 위해서다.
          근데 필요가 없다.
          찾을때 이러한 방식으로 찾지 않는다.
          그러니까 id를 쓰지 않는 것이 낫다.
        -->
      <hr/>
      <!-- 요소 숨김 여부 -->
      <span v-if="sale" class="mr2"> <!-- false가 되면 DOM에 부착을 안한다.-->
         <img class="mr-2" v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100"/>
      </span>
      <span v-show="sale"> <!-- false가 되면 DOM에 부착은 한다. not visible로 한다.-->
         <img class="mr-2" v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100"/>
      </span>
      
      <hr/>
      <!-- HTML 태그 처리 -->
      <p>정보: {{info}}</p>
      <p>정보: <span v-html="info"></span></p>
      
      
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
      photoFileName: "photo2.jpg",
      sale: true,
      info: `<div style="background-color: #eeeeee">스타일 적용 확인</div>`
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
      this.sale = !this.sale;
    }
  }
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>
