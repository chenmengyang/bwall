<template>
    <div class="search">
        <label for="searchInput">關鍵詞过滤: </label>
        <input id="searchInput" type="text" v-model="text">
    </div>
</template>

<script>
export default {
    name: 'Search',
    data: () => ({
        text: '',
    }),
    watch: {
        text: function(newValue) {
            this.$emit('searchChanged', newValue);
        }
    }
}
</script>

<style lang="scss" scoped>
div.search {
    display: inline-block;
    margin-bottom: 20px;
}
</style>
