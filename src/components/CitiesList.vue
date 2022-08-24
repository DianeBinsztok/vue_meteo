<script setup>
import City from "./City.vue";

// Je require la librairie axios qui permet de faire des requêtes HTTP vers une API
import { get } from "axios";
import { ref, onMounted } from "vue";

// je n'ai pas besoin de l'objet data quand mon script est en mode setup
/*
const data = {
   cities: [],
            loading: false,
            error: null
}
*/
//ref est une variable dont vue va écouter les changement. la méthode ref() est un équivalent de addEventListener
// Vue surveillera les changements de cet objet et accèdera à ses valeurs data par cities.value
let cities = ref([]);
console.log();
onMounted(async () => {
  try {
    const response = await get(
      "https://api.openweathermap.org/data/2.5/find?lat=45.188&lon=5.724&cnt=20&cluster=yes&lang=fr&units=metric&APPID=61f50f35bbbbf8e0614462bc819a3cd8"
    );
    console.log(response);

    //le map a une seule valeur de retour : on peut encapsuler cette valeur dans () sans encapsuler les instruction dans {}
    cities.value = response.data.list.map((city) => ({
      name: city.name,
      weather: city.weather[0].description,
      temperature: city.main.temp,
      // dt est un timestamps : un nb de secondes depuis 1970
      // je le change en milisecondes pour qu'il soit reconnaissable par l'objet js Date
      //
      updatedAt: new Date(city.dt * 1000),
    }));
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">Météo des Villes</h1>
  </div>
  <!--v-for bouclera sur les data cities
  les autres props deviendront dynamiques avec : -->
  <ul>
    <!--Ici, vue accèdera aux valeurs de cities sans le .value car cities est le ref -> l'état à surveiller-->
    <li v-for="city in cities">
      <City
        :name="city.name"
        :weather="city.weather"
        :temperature="city.temperature"
        :updatedAt="city.updatedAt"
      />
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
