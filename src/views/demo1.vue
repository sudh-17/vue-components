<template>
  <div>
    <h1>{{count}}</h1>
    <Count :count="count"/>
  </div>
</template>

<script>
import Count from '../components/Count.vue'
export default {
  data () {
    return {
      count: 10
    }
  },
  components: {
    Count 
  },
  created () {
    this.$on('change',res =>{
      console.log('ffffffffffffff')
      this.count = res
    })
  }
}
</script>

