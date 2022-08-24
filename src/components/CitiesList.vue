<script>
import City from "./City.vue";

export default {
  components:{
    City
  },
  data() {
    return {
      cities: [
    {
      id: 1,
      name: 'Valence',
      weather: 'Ensoleillé',
      temperature: 22.0,
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Paris',
      weather: 'Peu nuageux',
      temperature: 19.5,
      updatedAt: new Date()
        },
        {
      id: 3,
      name: 'Marseille',
      weather: 'Ensoleillé',
      temperature: 28.5,
      updatedAt: new Date()
    }
  ]
    }
  }
}

</script>

<template>
  <div class="greetings">
  <h1 class="green">Météo des Villes</h1>
  </div>
  <!--v-for bouclera sur les data cities
  les autres props deviendront dynamiques avec : -->
  <ul>
    <li>

        <City v-for="city in cities" :id="city.id" :name="city.name" :weather="city.weather" :temperature="city.temperature" :updatedAt="city.updatedAt"/>

    </li>
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
.greetings h1,
.greetings h3 {
  text-align: center;
}
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
