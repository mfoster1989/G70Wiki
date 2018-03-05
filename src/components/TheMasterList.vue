<template>
<div id="tbd">
  <div id="article">
    <div v-bind:key="article.description" v-for="article in data.article" class="card">
                <div class="corner">Article
                </div>
                <p class="description__text">{{ article.description }}</p>
              <div class="articleinfo--wrapper">
                <p class="label--text__url">URL:
                  <span class="displayed--text">{{ article.url }}
                  </span>
                  </p>
                </div>
                <br>
          </div>
    </div>
<!-- <br> -->
  <div id="youtube">
    <div v-bind:key="video.description" v-for="video in data.video" class="card">
                <div class="corner">Video
                </div>
            <p class="video--name__text">{{ video.description }}</p>
            <div>
            <p class="url">url:
              <span class="displayed--text">{{ video.url }}
              </span>
            </p>
            <br>
            </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "TheMasterList.vue",
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      fetch("https://powerful-ravine-91600.herokuapp.com/")
        .then(res => res.json())
        .then(data => {
          this.data = data;

        });
    }
  }
};
</script>