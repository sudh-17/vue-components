<template>
  <div>
    <p>bar</p>
    {{number}}
    
    <button @click="change">change</button>
  </div>
</template>

<script>
import bus from '../bus'
export default {
  props: ['value'],
  data () {
    return {
      number: this.value
    }
  },
    created () {
    bus.$on('change', value => {
      this.number = value
    })
  },
     methods: {
    change () {
      bus.$emit('change', ++this.number)
    }
     }
}
</script>
