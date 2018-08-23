<template>
  <PostList v-bind:fetchMore="fetchMore" />
</template>

<script>
import { getAllPostsFromXinshidai, } from '../api/firebaseApi.js';
import PostList from "../components/PostList";

export default {
  name: 'xsd',
  components: {
      PostList
  },
  methods: {
      fetchMore: getAllPostsFromXinshidai,
  },
}
</script>