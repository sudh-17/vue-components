<template>
  <div>
    <input type="text" v-model="obj.title">
  </div>
</template>

<script>
import bus from '../bus.js'

export default {
  props: ['value'],
  data () {
    return {
      obj: JSON.parse(JSON.stringify(this.value))
    }
  },
  created () {
    bus.$on('change', function (val) {
      alert(JSON.stringify(val))
    })
  }
}
</script>
