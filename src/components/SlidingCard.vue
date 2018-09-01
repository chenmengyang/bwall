<template>
    <div class="scard" v-bind:class="hovering?'focus':''" v-on:mouseover="onHover" v-on:mouseleave="onLeave">
        <div class="img" v-bind:style="{ backgroundImage: 'url(' + post.photoUrls[this.idx] + ')' }"></div>
        <a class="cllink" href="">{{title}}</a>
        <i class="fas fa-chevron-left"  v-on:click="onLeftSliding"></i>
        <i class="fas fa-chevron-right" v-on:click="onRightSliding"></i>
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
            return this.post.title;
        }
    },
    methods: {
        onHover: function() {
            this.hovering = true;
        },
        onLeave: function() {
            this.hovering = false;
        },
        onLeftSliding: function() {
            if (this.idx > 0) {
                this.idx -= 1;
            } else {
                this.idx = this.post.photoUrls.length-1;
            }
        },
        onRightSliding: function() {
            if (this.idx === this.post.photoUrls.length-1) {
                this.idx = 0;
            } else {
                this.idx += 1;
            }
        }
    },
    watch: {
        hovering: function(newValue) {
            // if (newValue) {
            //     this.itv = setInterval(() => {
            //         if (this.idx < this.post.photoUrls.length) {
            //             this.idx ++
            //         } else {
            //             this.idx = 0;
            //         }
            //     },2000)
            // } else {
            //     clearInterval(this.itv);
            // }
        }
    }
}
</script>


<style lang="scss" scoped>
div.scard {
    border-radius: 5px;
    width: 30%;
    margin: 1%;
    display: inline-block;
    position: relative;
    a.cllink {
        color: black;
        text-decoration: none;
        &:hover {
            // text-decoration: underline;
        }
    }
    i {
        display: none;
        cursor: pointer;
        font-size: 40px;
        // border: 1px solid;
    }
    &.focus {
        i {
            position: absolute;
            display: block;
            &.fas {
                top: 50%;
                &.fa-chevron-left {
                    left: 0;
                }
                &.fa-chevron-right {
                    right: 0;
                }
            }
        }
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
