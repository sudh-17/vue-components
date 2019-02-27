<template>
  <div>
    <div>{{msg1}}</div>
    <Man v-model="msg1"></Man>
  </div>
</template>
<script>
import Man from '../components/Man.vue'
export default {
  components: {
    Man
  },
  data () {
    return {
      msg1: 'parent pass to sub',
    }
  },
  created () {
    this.$on('input', function (e) {
      this.msg1 = e
    })
  },
  methods: {
    change (v) {
      this.msg1 = v
    }
  }
}
</script>

