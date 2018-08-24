<template>
    <div class="scard" v-bind:class="hovering?'focus':''" v-on:mouseover="onHover" v-on:mouseleave="onLeave">
        <div class="img" v-bind:style="{ backgroundImage: 'url(' + post.photoUrls[this.idx] + ')' }"></div>
        <p class="title">{{title}}</p>
    </div>
</template>

<script>
export default {
    name: 'SlidingCard',
    props: ['post'],
    data: function() {
        return {
            idx: 0,
            hovering: false,
            itv: null,
        }
    },
    computed: {
        title: function() {
            return this.post.title.replace(/\[.{1,10}\]|\s/g,'');
        }
    },
    methods: {
        onHover: function() {
            this.hovering = true;
        },
        onLeave: function() {
            this.hovering = false;
        }
    },
    watch: {
        hovering: function(newValue) {
            if (newValue) {
                this.itv = setInterval(() => {
                    if (this.idx < this.post.photoUrls.length) {
                        this.idx ++
                    } else {
                        this.idx = 0;
                    }
                },2000)
            } else {
                clearInterval(this.itv);
                this.idx = 0;
            }
        }
    }
}
</script>


<style lang="scss" scoped>
div.scard {
    // border: 1px solid grey;
    border-radius: 5px;
    width: 30%;
    margin: 1%;
    display: inline-block;
    &.focus {
        div.img {
            transform: scale(1.1);
        }
        p.title {
            position: relative;
            transform: translateY(20%);
            transition: all 0.8s linear;
        }
    }
    div.img {
        transition: all 1s ease-out;
        width: 100%;
        height: 450px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        // transform: scale(0.95);
    }
}
</style>
