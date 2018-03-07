<template>
  <div id="app">
    <img src="../static/g70.png">
    <TheMasterList />
    <TheArticlesAdd />
    <TheArticlesUpdate />
    <TheArticlesDelete />
    <TheArticles />
    <TheVideosAdd />
    <TheVideos />
    <TheVideosDelete />
    <TheVideosUpdate />
  </div>
</template>

<script>
import VuePullRefresh from 'vue-pull-refresh'
import TheArticles from './components/TheArticles.vue'
import TheArticlesDelete from './components/TheArticlesDelete.vue'
import TheArticlesUpdate from './components/TheArticlesUpdate.vue'
import TheArticlesAdd from './components/TheArticlesAdd.vue'
import TheVideos from './components/TheVideos.vue'
import TheVideosAdd from './components/TheVideosAdd.vue'
import TheVideosUpdate from "./components/TheVideosUpdate.vue"
import TheVideosDelete from "./components/TheVideosDelete.vue"
import TheMasterList from "./components/TheMasterList.vue"
import TheVueTypeahead from './components/TheVueTypeahead.vue'
import TheLinkPrevue from "./components/TheLinkPrevue.vue"


export default {
  name: 'App',
  components: {
    TheMasterList,
    TheArticles, 
    TheArticlesAdd,
    TheArticlesUpdate,
    TheArticlesDelete, 
    TheVideos, 
    TheVideosAdd,
    TheVideosUpdate,
    TheVideosDelete,
  },
  components: {
        'vue-pull-refresh': VuePullRefresh
    },
    data: function () {
        return {};
    },
    methods: {
        onRefresh: function() {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, 1000);
            });
        }
    },
    template: '<vue-pull-refresh :on-refresh="onRefresh"></vue-pull-refresh>'
}
</script>

<style>
img {
  width: 20vw;
  height: auto;
}
</style>
