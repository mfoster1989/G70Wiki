<template>
<div>
     <h1>Items matching</h1>
    <form action="">
        <label for="search"></label>
        <input v-model="searchTerm" type="search" name="search" id="search" >
        <button type="submit" name="button">Search for submitted links</button>
    </form>
    <h3>{{searchTerm}}</h3>
</div>
  
</template>

<script>
    export default {
        name: "TheItems.vue",
        data() {
            return {
                searchTerm: ""
            }
        }
    }
</script>
    
<style>

</style>
