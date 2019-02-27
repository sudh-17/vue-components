<template>
  <div>
     <input type="text" v-model="obj.title">
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      obj: this.value
    }
  },
  watch: {
    obj (v) {
      this.$emit('input', v)
    }
  }

}
</script>
