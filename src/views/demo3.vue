<template>
  <div>
    <h1>{{msg1}}</h1>
    <input type="text" :value="msg1" @input="msg1=$event.target.value">
    <h1>{{msg2}}</h1>
    <input type="text" v-bind:value="msg2" v-on:input="msg2=$event.target.value">
    <h1>{{msg3}}</h1>
    <input type="text" v-bind:value="msg3" v-on:input="change($event)">
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg1: 'v-model msg1',
      msg2: 'v-model msg2',
      msg3: 'v-model msg3'
    }
  },
  methods: {
    change (e) {
      this.msg3 = e.target.value
    }
  }
}
</script>

