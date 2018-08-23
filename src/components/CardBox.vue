<template>
    <div class="cardbox">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CardBox'
}
</script>


<style lang="scss" scoped>
div.cardbox {
    // border: 2px solid red;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
