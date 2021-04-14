<template>
<div>
	<div class="">
		<h1>Hello WOrld From Calculate</h1>
	</div>  
	<div>
		{{ myDatas }}
	</div>
	<div>
		<form @submit="submitForm" method="post">
			<div class="space-y-2">
				<div>
					<input type="text" class="border" v-model="num1">
				</div>
				<div >
					<input type="text" class="border" v-model="num2">
				</div> 
				<input 
					type="submit" 
					class="border px-2 shadow bg-blue-500 text-white hover:opacity-80 hover:cursor-pointer"
					value="Save"	
				>
					 
			</div>
		</form>
		<div v-if="display">
			{{ display.num1 }} + {{ display.num2 }} = {{ display.total }}
		</div>
	</div>
	<br>
	<hr> 
</div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';



 
export default {
	setup(){	

		const myDatas = ref();
		const myAnswer = ref();
		const num1 = ref();
		const num2 = ref();
		const display = ref();


		const getMyDatas = async () => {
			myDatas.value = await axios.get('http://localhost:3030/todos').then((response) => response.data );
		}

		onMounted(() => {
			getMyDatas();
			
		});

		const clearForm = () => {
			num1.value = '';
			num2.value = '';
		}

		const submitForm = (e) => {
			 axios.post('http://localhost:3030/todos', {
				num1: num1.value,
				num2: num2.value
			 }).then((response) => {
				display.value = response.data;
				clearForm();				
			 });

			e.preventDefault(); 
		}

		return{
			myDatas, 
			getMyDatas,
			submitForm,
			num1,
			num2,
			display
		}	
	}
}
</script>

<style>

</style>