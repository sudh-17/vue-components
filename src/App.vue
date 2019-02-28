<template>
  <div id="app">
    <!-- <input type="text" :value="message" @input="change"> -->
    <!-- <p>{{message}}</p> -->
    <!-- <p>{{num}}</p> -->
    <!-- <HelloWorld :msg="message" v-model="obj" /> -->
    <!-- <Bar v-model="num"/>
    <Foo v-model="num"/> -->
    <router-link to="/demo1">demo1</router-link> |
    <router-link to="/demo2">demo2</router-link> |
    <router-link to="/demo3">demo3</router-link> |
    <router-link to="/demo4">demo4</router-link> |
    <router-link to="/demo5">demo5</router-link> |
    <router-link to="/demo6">demo6</router-link> |
    <router-link to="/demo8">demo8</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
/*
import HelloWorld from './components/HelloWorld.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Foo,
    Bar
  },
  data () {
    return {
      message: 'props down',
      num: 10,
      obj: {
        name: 'tony',
        age: 18
      }
    }
  },
  methods: {
    showNumber (num) {
      console.log(num)
    },
    change (value) {
      this.num = value
      // console.log(e.target.value)
    }
  }
}*/
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
