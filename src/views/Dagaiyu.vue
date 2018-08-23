<template>
    <PostList v-bind:fetchMore="fetchMore" />
</template>

<script>
import { getAllPostsFromDagaiyu, } from '../api/firebaseApi.js';
import PostList from "../components/PostList";

export default {
  name: 'dgy',
  components: {
      PostList,
  },
  methods: {
      fetchMore: getAllPostsFromDagaiyu,
  }
}
</script>