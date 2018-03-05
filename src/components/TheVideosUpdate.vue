<template>
        <form v-on:submit.prevent='sendData(videoUpdate)'>
              <p class='form--title'> Update Youtube Video! </p>
                   <br>
                <input v-model='videoUpdate.description'
                class='input--default'
                placeholder='Description'>
                   <br>
                <input v-model='videoUpdate.url'
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
  name: 'videoUpdate',
  data() {
    return {
      baseURL: 'https://powerful-ravine-91600.herokuapp.com/video/',
      videoUpdate: {
        description: '',
        url: ''
      },
      };
      },
  methods: {
    sendData(data) {
      fetch(`${this.baseURL}${this.videoUpdate.name}`, {
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