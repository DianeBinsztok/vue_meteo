<script>
import { format } from 'timeago.js'; 

export default {
    props: {
    name: String, 
    weather: String, 
    temperature: Float32Array,
    updatedAt: Date
    },
    methods: {
        convertToTimeago(date) {
            return format(date);
        }
    }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">Welcome</h1>
    <h3>{{name}}</h3>
    <ul>
      <li>{{weather}}</li>
      <li>{{temperature}} C°</li>
      <li>{{convertToTimeago(updatedAt)}}</li>
    </ul>
  </div>
</template>