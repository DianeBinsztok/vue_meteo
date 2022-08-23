<script>

export default {
    props: {
    name: String, 
    weather: String, 
    temperature: Float32Array,
    updatedAt: Date
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
      <li>{{updatedAt}}</li>
    </ul>
  </div>
</template>