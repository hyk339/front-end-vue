<template>
    <div class="card">
    <div class="card-header">
        HelloWorld
    </div>
    <div class="card-body">
      <div class="hello">
        Welcome to Vue!
      </div>
    </div>
  </div>

</template>

<script>
//아래 부분을 생략하면 모든 Vue파일은 아래부분이 자동으로 추가된다!!
//중요중요!!
//생략이 되면 vue 파일마다 모두 추가가 된다.
//또 들어가는게 template이 모두 javascript로 바뀐다.
//vue는 모듈 파일이다. javascript만 들어가야하는 파일다.
//우리는 tag로 작성하지만 javascript로 바뀐다.
//그러면 export default의 어딘가에 들어간다.
//compile하게 되면 이 내용이 javascript로 바뀌고
//export default 어딘가로 들어간다.
//그래서 Vue 파일은 모듈 파일이라고 생각해야한다.

//추가로 template 안에 javascript 를 쓸수가 있다.
//vue라고 하는 파일은 module파일이다. import 할수있다.
//모듈 파일을 vue에서는 component로 사용하겠다는 것이다.

export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
