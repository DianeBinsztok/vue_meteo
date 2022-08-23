<script>
export default {
    data() {
    return {
    name: 'Valence', 
    weather: 'Peu nuageux', 
    temperature: 20.55,
    updatedAt: new Date().toLocaleDateString() 
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
      <li>{{updatedAt}}</li>
    </ul>
  </div>
</template>