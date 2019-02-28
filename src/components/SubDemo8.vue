<template>
  <div>
    <p>{{obj.firstName + ' ' + obj.lastName}}</p>
    <input type="text" :value="obj.firstName">
  </div>
</template>

<script>

import Person from '../js/person.js'

export default {
  props: {
    person: Person
  },
  data () {
    return {
      obj: JSON.parse(JSON.stringify(this.person))
    }
  }
}
</script>
