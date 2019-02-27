<template>
  <div>
    <h1>{{count}}</h1>
    <input type="text" v-model="count">
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: 10
    }
  }
}
</script>

