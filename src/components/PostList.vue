<template>
    <div v-if="posts && posts.length > 0" class="postlist">
        <CardBox>
            <transition-group class="cardswrapper" name="list" tag="div">
                <SlidingCard v-for="post in posts" v-bind:post="post" v-bind:key="post.id" />
            </transition-group>
        </CardBox>
        <button v-if="mode!=='search'" class="morebtn" v-on:click="fetchMore();">load more</button>
    </div>
    <div v-else>
        {{mode==='search'?"searching...":"loading..."}}
    </div>
</template>

<script>
import CardBox from "./CardBox.vue";
import SlidingCard from "./SlidingCard.vue";

export default {
    name: 'PostList',
    props: [ 'fetchMore', 'posts', 'mode' ],
    components: {
        SlidingCard,
        CardBox,
    }
}
</script>

<style lang="scss" scoped>
    div.postlist {
        // border: 1px solid greenyellow;
        .list-enter-active, .list-leave-active {
            transition: all 1s;
        }
        .list-enter, .list-leave-to {
            opacity: 0;
        }
        .morebtn {
            width: 100px;
            height: 27px;
            border-radius: 3px;
            &:hover {
                background-color: bisque;
                color: deepskyblue;
            }
        }
    }
</style>
