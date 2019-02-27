<template>
  <div>
    <div>{{obj}}</div>
    <input type="text" v-model="obj.title">
    <SubDemo5 v-model="obj"></SubDemo5>
  </div>
</template>
<script>
import SubDemo5 from '../components/SubDemo5.vue'
export default {
  components: {
    SubDemo5
  },
  data () {
    return {
      obj: {
        title: 'this.msg1',
        content: 'ss'
      }
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

