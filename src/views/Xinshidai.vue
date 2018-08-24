<template>
    <PostList v-bind:fetchMore="()=>fetchMorePosts({ postType: 'cl-xsd', amount: 10 })" v-bind:posts="posts" />
</template>

<script>
import { mapActions, mapState, } from "vuex";
import PostList from "../components/PostList";

export default {
  name: 'xsd',
  components: {
      PostList
  },
  methods: {
    ...mapActions([
        'fetchMorePosts'
    ])
  },
  computed: {
    ...mapState({
        posts: state => state.cl['cl-xsd'].data,
        counter: state => state.cl['cl-xsd'].counter,
    })
  },
  mounted: async function() {
      if (this.counter === 0) {
          await this.fetchMorePosts({
              postType: 'cl-xsd',
              amount: 10
          });
      }
  }
}
</script>