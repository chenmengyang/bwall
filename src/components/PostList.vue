<template>
    <div v-if="posts && posts.length > 0" class="postlist">
        <CardBox>
            <transition-group class="cardswrapper" name="list" tag="div">
                <SlidingCard v-for="post in posts" v-bind:post="post" v-bind:key="post.id" />
            </transition-group>
        </CardBox>
        <button class="morebtn" v-on:click="fetchMore();">load more</button>
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
    props: [ 'fetchMore', 'posts' ],
    components: {
        SlidingCard,
        CardBox,
    }
}
</script>

<style lang="scss" scoped>
    div.postlist {
        .list-enter-active, .list-leave-active {
            transition: all 1s;
        }
        .list-enter, .list-leave-to {
            opacity: 0;
        }
    }
</style>
