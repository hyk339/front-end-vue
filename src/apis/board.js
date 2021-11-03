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

function updateBoard(multipartFormData){
  //멀티파트 폼으로 보내는 것은 반드시 post만 된다.
  //원래 업데이트는 put이나 patch가 된다.
  return axios.post("/board/update", multipartFormData);
}

function deleteBoard(bno){
  return axios.delete(`/board/${bno}`);
}

export default {
  //getBoardList : getBoardList
  getBoardList,
  createBoard,
  readBoard,
  updateBoard,
  deleteBoard
}