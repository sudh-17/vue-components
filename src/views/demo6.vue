<template>
  <div>
    <div>{{obj}}</div>
    <input type="text" v-model="obj.title">
    <SubDemo6 v-model="obj" v-on:save="saveData"></SubDemo6>
    <SubDemo61 v-model="obj" v-on:save="saveData" :test="test"></SubDemo61>
  </div>
</template>
<script>
import SubDemo6 from '../components/SubDemo6.vue'
import SubDemo61 from '../components/SubDemo61.vue'

export default {
  components: {
    SubDemo6,
    SubDemo61
  },
  data () {
    return {
      obj: {
        title: 'this.msg1',
        content: 'this is a test'
      },
      test: {
        title: 'the test'
      }
    } 
  },
  methods: {
    saveData (obj) {
      alert(JSON.stringify(obj))
    }
  }
}
</script>

