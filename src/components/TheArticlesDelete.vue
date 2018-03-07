<template>
    <form v-on:submit.prevent='sendData(articleFormDelete)'>
    <p class='form--title'> Delete submitted article </p>
    <br>
    <input v-model='articleFormDelete.description'
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
  name: 'articleFormDelete',
  data() {
    return {
      baseURL: 'https://powerful-ravine-91600.herokuapp.com/article/',
      articleFormDelete: {
        description: ' ',
      },
    };
  },
  methods: {
    sendData(data) {
      fetch(`${this.baseURL}${this.articleFormDelete.description}`, {
        method: 'DELETE',
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }
  }
};
</script>