<template>
    
        <div class="text-center pt-10 space-y-2 text-gray-600">
            <div>
                <input 
                class   = "border px-2 py-1 focus:outline-none focus:border-green-500 rounded"
                type    = "text" 
                placeholder= "Name"
                autocomplete="nope"
                v-model="name" 
                v-on:keyup.enter="submitForm"
                autofocus
                >
            </div>

            <div>
                <button
                class = "border px-2 rounded "
                @click="submitForm"
                v-bind:disabled="name.length == 0"
                v-bind:class="[name.length == 0 ? 'disabled:opacity-50 text-gray-500 cursor-not-allowed' : 'hover:bg-green-500 hover:text-white border-2 border-green-500 text-green-500 hover:border-green-500']"
                >
                    Send
                </button>
            </div>

            <div>
                <h1>Display: </h1>
                <h1>{{ name }}</h1>
                <h1>{{ message }}</h1>
            </div>
        </div>

</template>


<script>
import { ref } from 'vue';
export default {
    setup(){
        const name = ref(''); 
        const submitForm = () => {
            if(!name.value == 0){
                alert(`Your name is ${name.value}`); 
            }
            
        }
 

        return {
            name,
            submitForm 
        }
    }
}
</script>