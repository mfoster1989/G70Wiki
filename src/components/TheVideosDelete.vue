
<template>
    <form v-on:submit.prevent='sendData(videoFormDelete)'>
    <p class='form--title'> Delete submitted video </p>
    <br>
    <input v-model='videoFormDelete.description'
    placeholder='Search by description'>
    <br>
    <input class='form--button'
        type='submit'
        value='Submit'>
    </form>
</template>

<script>
/* eslint-disable */
export default {
  name: 'videoFormDelete',
  data() {
    return {
      baseURL: 'https://powerful-ravine-91600.herokuapp.com/video/',
      videoFormDelete: {
        description: ' ',
      },
    };
  },
  methods: {
    sendData(data) {
      fetch(`${this.baseURL}${this.videoFormDelete.description}`, {
        method: 'DELETE',
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }
  }
};
</script>