<template>
        <form v-on:submit.prevent='sendData(articleAdd)'>
            <p class='form--title'> Submit a link! </p>
                   <br>
                <input v-model='articleAdd.description'
                class='input--default'
                type='text'
                placeholder='Description'>
                   <br>
                <input v-model='articleAdd.url'
                class='input--default'
                type='text'
                placeholder='http://'>
                   <br>
                <input class='form--button'
                type='submit'
                value='Submit'>
        </form>
</template>


<script>
export default {
  name: 'articleAdd',
  data() {
    return {
      baseURL: "https://powerful-ravine-91600.herokuapp.com/article/",
      articleAdd: {
        description: '',
        url: '',
      }
    };
  },
  methods: {
    sendData(data) {
      fetch(this.baseURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }
  }
};
</script>