<template>
        <form v-on:submit.prevent='sendData(articleUpdate)'>
              <p class='form--title'> Update Article! </p>
                   <br>
                <input v-model='articleUpdate.description'
                class='input--default'
                placeholder='Description'>
                   <br>
                <input v-model='articleUpdate.url'
                class='input--default'
                placeholder=''>
                <input
                class='form--button'
                type='submit'
                value='Submit'>
        </form>
</template>

<script>
export default {
  name: 'articleUpdate',
  data() {
    return {
      baseURL: 'https://powerful-ravine-91600.herokuapp.com/article/',
      articleUpdate: {
        description: '',
        url: ''
      },
      };
      },
  methods: {
    sendData(data) {
      fetch(`${this.baseURL}${this.articleUpdate.name}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: new Headers({
    'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    }
  }
};
</script>