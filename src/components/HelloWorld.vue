<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <button @click="eventsUp">changeNumber</button> -->


    姓名<input type="text" v-model="templateObj.name">
    <br>
    年龄<input type="text" v-model="templateObj.age">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    // msg: String,
    // value: Number,
    value: Object
  },
  data () {
    return {
      // num: 100
      // number: this.value,
      templateObj: JSON.parse(JSON.stringify(this.value))
    }
  },
  methods: {
    eventsUp () {
      this.number++
      this.$emit('input',this.number)
    }
  },
  watch: {
    templateObj: {
      deep: true,
      handler(newValue, oldValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
