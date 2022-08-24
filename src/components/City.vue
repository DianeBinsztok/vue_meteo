<script>
import { format } from 'timeago.js'; 

export default {
    props: {
    name: String, 
    weather: String, 
    temperature: Float32Array,
    updatedAt: Date
    },
    computed: {
        formatedDate() {
            return format(this.updatedAt);
        }
    }
}
</script>

<template>
    <h3 class="green">{{name}}</h3>
    <ul>
      <li>{{weather}}</li>
      <li>{{temperature}} C°</li>
      <li>{{formatedDate}}</li>
    </ul>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
h3 {
  font-size: 1.2rem;
}
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
  ul{
    justify-content: space-between;
    margin: 2em;
  }
}
</style>

