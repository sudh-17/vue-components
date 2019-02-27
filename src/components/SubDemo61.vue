<template>
  <div>
    <input type="text" v-model="obj.title">
    <button @click="change">change</button>
  </div>
</template>

<script>
import bus from '../bus.js'

export default {
  props: ['value','test'],
  data () {
    return {
      obj: JSON.parse(JSON.stringify(this.value)),
      testMsg: JSON.parse(JSON.stringify(this.test))
    }
  },
  created () {
    alert(JSON.stringify(this.testMsg))
  },
  methods: {
    change () {
      bus.$emit('change',this.obj)
    }
  },
  watch: {
    
  }
}
</script>
