<template>
  <div>
    <input :value="searchedMovie" type="text" placeholder="Title">
    <button>Search</button>
  </div>
</template>

<script>
export default {
  name: "ItemList2",
  props: ['searchedMovie']
}
</script>

<style scoped>

</style>