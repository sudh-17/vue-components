<template>
  <div>
    <span>{{val}} </span> <button @click="more()">more</button>
  </div>
</template>
<script>
export default {
    name: 'count',
    props: ['count'],
    data () {
      return {
        val: this.count
      }
    },
    methods: {
       more () {
         this.val ++
         this.$emit('change',this.val)
       }
    }
}
</script>

