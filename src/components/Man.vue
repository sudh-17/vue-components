<template>
  <div>
     <input type="text" v-model="val">
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      val: this.value
    }
  },
  watch: {
    val (v) {
      this.$emit('input', v)
    }
  }

}
</script>
