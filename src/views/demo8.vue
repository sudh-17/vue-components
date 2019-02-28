<template>
  <div>
    <SubDemo8 :person="person"></SubDemo8>
  </div>
</template>
<script>
import SubDemo8 from '../components/SubDemo8.vue'
import Person from '../js/person.js'

export default {
  components: {
    SubDemo8
  },
  data () {
    return {
      person: new Person('张', '三丰')
    } 
  }
}
</script>

