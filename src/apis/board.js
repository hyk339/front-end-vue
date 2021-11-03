import axios from "axios";


function getBoardList(pageNo=1){ //pageNo가 default값을 갖게끔 할 수있다.
  return axios.get("/board/list", {params:{pageNo}});

}

function createBoard(multipartFormData){
  return axios.post("/board/create", multipartFormData);
}

function readBoard(bno, hit){
  return axios.get(`/board/${bno}`,{params:{hit}})
}


export default {
  //getBoardList : getBoardList
  getBoardList,
  createBoard,
  readBoard
}