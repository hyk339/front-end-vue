<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      게시물 목록
    </div>
    <div class="card-body">

    </div>
 <alert-dialog v-if="alertDialog"
                  :loading="loading"
                  :message="alertDialogMessage"
                  @close="alertDialog=false"/>


  </div>
</template>

<script>
import board from "@/apis/board";
import AlertDialog from "@/components/menu07/AlertDialog.vue"

export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "List",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    AlertDialog
  },
  //컴포넌트에서 사용하는 데이터를 정의
  data() {
    return {
      loading : false,
      alertDialog : false,
      alertDialogMessage : "",
    };
  },
  //컴포넌트에서 사용하는 메서드
  methods: {
    changePageNo(pageNo){
      this.loading = true;
      this.alertDialog = true;
      board.getBoardList(pageNo)
      .then(response => {
        console.log(response.data);
        this.loading = false;
        this.alertDialog = false;
      })
      .catch(error => {
        if(error.response){
          if(error.response.status === 403){
            this.loading = false;
            this.alertDialog = false;
            this.$router.push("/menu07/auth/jwtauth");
          }
        } else {
          this.loading = false;
          this.alertDialogMessage = "네트워크 통신 오류";
        }
        
      });
    }
  },
  //컴포넌트가 생성될 때 실행되는 훅
  created(){
    var pageNo = this.$route.query.pageNo; //url을 통해서 QueryString으로 넘긴 값을 얻을때
    if(pageNo === "undefined"){
      pageNo = 1;
    }
    this.changePageNo(pageNo);
  }
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>
