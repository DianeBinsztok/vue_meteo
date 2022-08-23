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
    <h3>{{name}}</h3>
    <ul>
      <li>{{weather}}</li>
      <li>{{temperature}} C°</li>
      <li>{{formatedDate}}</li>
    </ul>

</template>
