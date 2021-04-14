<template>
  <div class="text-center">
      <h1 class="text-6xl text-green-500 p-4"> 
        This is Home
      </h1>

      <MyForm />
      <Hello />
  </div> 
</template>

<script>
import MyForm from './MyForm.vue';
import Hello from './Hello.vue'; 
export default {
  components: {
    Hello,
    MyForm
  }, 
  setup(){
 
    return{
      MyForm,
      Hello
    }
  }
}
</script>

<style>

</style>