<template> 
  <div class="text-center">
      <h1 class="text-green-500 text-6xl p-4">
          THis is guide
      </h1>
      <br>
      <h1>
        <Calculate />
      </h1>

      <ul>
        <li v-for="data in datas" v-bind:key="data">
          {{ data.name }} || {{ data.message }}
        </li>
      </ul> 
  </div> 
</template>

<script>
import Calculate from './Calculate.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  components:{
    Calculate
  },   

  // onMounted () {
  //    axios
  //     .get('http://localhost:3030/todos')
  //     .then(response => (this.info = response))
  // },


  setup(){ 

    const datas = ref([]);
    const getDatas = async () => {
      datas.value = await axios.get('http://localhost:3030/todos').then((response) => response.data);
    }
    
    onMounted(getDatas);

    return{
      datas,
      getDatas
    }
  }

}
</script>

<style>

</style>