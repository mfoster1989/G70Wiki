<template>
        <form v-on:submit.prevent='sendData(videoAdd)'>
            <p class='form--title'> Submit a YouTube Video! </p>
                   <br>
                <input v-model='videoAdd.description'
                class='input--default'
                type='text'
                placeholder='Description'>
                   <br>
                <input v-model='videoAdd.url'
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
  name: 'videoAdd',
  data() {
    return {
      baseURL: "https://powerful-ravine-91600.herokuapp.com/video/",
      videoAdd: {
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