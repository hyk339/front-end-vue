import axios from "axios";


function getBoardList(pageNo=1){ //pageNo가 default값을 갖게끔 할 수있다.
  return axios.get("/board/list", {params:{pageNo}});

}

export default {
  //getBoardList : getBoardList
  getBoardList
}