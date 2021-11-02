import axios from "axios";

function join(user){ //user = {id:xxx, name:xxx, password:xxx, role:xxx, email:xxx}
  //axios의 메서드는 모두 promise를 return 한다.
  return axios.post(
    "/member/join2", //앞부분을 제외한 나무지 부분만, 우리가 axioscofig에서 설정 이미함.
    {
      mid:user.id,
      mname:user.name,
      mpassword:user.password,
      mrole:user.role,
      memail:user.email
    }
  );
}

function login(user) { //user = {id:xxx, password:xxx}
  return axios.post(
    "/member/login1",
    `mid=${user.id}&mpassword=${user.password}`
  );
}

export default {
  join,
  login
}