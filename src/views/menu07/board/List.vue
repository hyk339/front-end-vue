<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      게시물 목록
    </div>
    <div class="card-body">
      <div v-if="page != null">
        <table class="table table-sm table-striped table-bordered">
          <thead>
            <tr>
              <th class="text-center" style="width:70px">번호</th>
              <th class="text-center">제목</th>
              <th class="text-center" style="width:90px">글쓴이</th>
              <th class="text-center" style="width:120px">날짜</th>
              <th class="text-center" style="width:70px">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="board in page.boards" :key="board.bno">
              <td class="text-center" style="width:70px">{{board.bno}}</td>
              <td>{{board.btitle}}</td>
              <td class="text-center" style="width:90px">{{board.mid}}</td>
              <td class="text-center" style="width:120px">{{new Date(board.bdate).toLocaleDateString()}}</td>
              <td class="text-center" style="width:70px">{{board.bhitcount}}</td>
            </tr>
            <tr>
              <td colspan="5" style="text-align: center;">
                <button class="btn btn-outline-primary btn-sm mr-1" @click="changePageNo(1)">처음</button>
                <button class="btn btn-outline-info btn-sm mr-1" v-if="page.pager.groupNo > 1" @click="changePageNo(page.pager.startPageNo-1)">이전</button>
                <button v-for="pageNo in range(page.pager.startPageNo, page.pager.endPageNo)" :key="pageNo"
                        @click="changePageNo(pageNo)"
                        :class="`btn ${(pageNo != page.pager.pageNo)?'btn-outline-success':'btn-danger'} btn-sm mr-1`">{{pageNo}}</button>
                        
                <button class="btn btn-outline-info btn-sm mr-1" 
                        v-if="page.pager.groupNo < page.pager.totalGroupNo"
                        @click="changePageNo(page.pager.endPageNo+1)"
                        >다음</button>
                <button class="btn btn-outline-primary btn-sm" @click="changePageNo(page.pager.totalPageNo)">맨끝</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
      page: null
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
        this.page = response.data;
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
    },
    range(start, end){
      const arr = [];
      for(var i=start; i<=end; i++){
        arr.push(i);
      }
      return arr;
    }
  },
  //컴포넌트가 생성될 때 실행되는 훅
  created(){ //list가 처음 생성될때는 페이지에 보이기 전에 1page 내용을 가져오게 한다.
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
