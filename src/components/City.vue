<script setup>

const data = {
    name: 'Valence', 
    weather: 'Peu nuageux', 
    temperature: 20.55,
    updatedAt: new Date().toLocaleDateString() 
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">Welcome</h1>
    <h3>{{data.name}}</h3>
    <ul>
      <li>{{data.weather}}</li>
      <li>{{data.temperature}} C°</li>
      <li>{{data.updatedAt}}</li>
    </ul>
  </div>
</template>