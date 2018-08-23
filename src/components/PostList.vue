<template>
  <div v-if="posts.length > 0" class="postlist">
      <CardBox>
          <transition-group class="cardswrapper" name="list" tag="div">
            <SlidingCard v-for="post in posts" v-bind:post="post" v-bind:key="post.id" />
          </transition-group>
      </CardBox>
      <button class="morebtn" v-on:click="loadMore">load more</button>
  </div>
  <div v-else>
      loading...
  </div>
</template>

<script>
import CardBox from "./CardBox.vue";
import SlidingCard from "./SlidingCard.vue";

export default {
    name: 'PostList',
    props: ['fetchMore'],
    components: {
        SlidingCard,
        CardBox,
    },
    data: function() {
        return {
            posts: [],
            count: 10,
        }
    },
    methods: {
        loadMore: function () {
            this.count += 10;
        }
    },
    created: async function() {
        this.posts = await this.fetchMore(this.count);
    },
    watch: {
        count: async function() {
            this.posts = await this.fetchMore(this.count);
        },
        posts: function(newv, oldv) {
            if (newv.length > oldv.length && oldv.length>0) {
                setTimeout(() => {
                window.scrollTo({
                    top: document.body.scrollHeight-1600,
                    behavior: 'smooth'
                });
                }, 200)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
div.postlist {
    .list-enter-active, .list-leave-active {
    transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
}
</style>
