import Vue from 'vue' //vue 모듈을 가져온다.
import Vuex from 'vuex' //vuex모듈을 가져온다.


Vue.use(Vuex) //vue에서 사용되도록한다.

//Vuex가 가지고 있는 Store객체를 만들어서
//어떤 state를 저장할것이냐
//state는 root상태를 추가한다.
//mutations 는 상태를 변경하는 setter, 동기방식 처리한다.
//actions 는 비동기 처리를 말한다.
//mutation과 actions는 세트다.

export default new Vuex.Store({
  //루트 상태 정의
  state: {
    userId: "",
  },
  //루트 상태 값을 읽는 메소드 정의(Getter)
  getters: {
    getUserId(state){
      return state.userId;
    }
  },
  //루트 상태값을 변경하는 동기 메소드 정의(Setter)
  mutations: {
    setUserId(state, payload){
      state.userId = payload;
    }
  },
  //루트 상태값을 변경하는 비동기 메소드 정의(Setter) //네트워크값이 언제 돌아올지 모르니까 
  actions: {
    setUserIdByAsync(context, payload){ //payload = {userId:xxx, duration:3000}
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit("setUserId", payload.userId);
          resolve(context.state.userId);
        }, payload.duration); //setTimeout(함수, 지연시간)
      }).then((data) =>{
        console.log(`userId 상태 변경 성공: ${data}`);
      }).catch((err)=>{
        console.log(`userId 상태 변경 실패: ${err}`);
      });
    }
  },
  //루트가 아닌 자식 상태를 정의한 모듈을 가져오기
  modules: {

  }
})
