<template>
    <div>
        <Search v-on:searchChanged="($event) => searchPosts($event)" />
        <PostList v-if="searchKeywords.length===0" v-bind:fetchMore="()=>fetchMorePosts({ postType: 'cl-dgy', amount: 10 })" v-bind:posts="posts" />
        <PostList v-else v-bind:mode="'search'" v-bind:posts="searchResults" />
    </div>
</template>

<script>
import { mapActions, mapState, } from "vuex";
import PostList from "../components/PostList";
import Search from "../components/Search";

export default {
  name: 'dgy',
  components: {
      PostList,
      Search,
  },
  data: function() {
      return {
          searchKeywords: '',
          searchResults: [],
      }
  },
  methods: {
    searchPosts: function(words) {
        this.searchKeywords = words;
        this.searchResults = this.posts.filter(p => p.title.toLowerCase().includes(this.searchKeywords));
    },
    ...mapActions([
        'fetchMorePosts'
    ])
  },
  computed: {
    ...mapState({
        posts: state => state.cl['cl-dgy'].data,
        counter: state => state.cl['cl-dgy'].counter,
    })
  },
  mounted: async function() {
      if (this.counter === 0) {
          await this.fetchMorePosts({
              postType: 'cl-dgy',
              amount: 10
          });
      }
  }
}
</script>