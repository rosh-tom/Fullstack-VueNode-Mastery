<template>
  <div>
      <div class="p-2 bg-green-500 flex space-x-2 text-white">
            <div>
                <router-link to="/"> Home </router-link>
                <router-link to="/guide"> Guide </router-link>
            </div> 
      </div>
  </div>
  <router-view />
</template>

<script>
export default {

}
</script>

<style>
 
 a.router-link-exact-active {
     color: black
 }

</style>