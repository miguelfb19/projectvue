<template>
    <sliderComponent texto="Página de pruebas #2"></sliderComponent>
    <div class="center">
        <section id="content">
            <h1 class="sub-header">{{ titulo }}</h1>    
            
            <h2>{{react}}</h2>
            <input type="text" style="width: 50%;" v-model="nombre"/> <!--El v-model me sirve para conectar una variable en la 
                                                                        data del script a mi html y ver los cambios en tiempo real
                                                                        (en este ejemplo un input tipo text)-->

            <h4>Mi nombre es: <strong>{{ nombre }}</strong></h4>
            
            <!--Ejemplo practico del v-model y v-if-->
            <h2>Directivas conidcionales</h2>
            <input type="number" v-model="edad">
            <h4>Mi edad es: <strong>{{ edad }}</strong></h4>

            <strong style="color: green; font-weight: bold;">
                <h2 v-if="edad && edad>=18 && edad<65">Eres MAYOR de edad</h2>

                <h2 v-else-if="edad && edad>=65" style="color: purple;">Eres de edad AVANZADA</h2>

                <h2 v-else-if="edad && edad<18" style="color: red;">Eres MENOR de edad</h2>

                <h2 v-else style="color: blue;">Digita tu edad por favor</h2>
            </strong>

            <!--ejemplo de v-for-->
            <h1>Propiedad iterativa</h1>

            <ol>
                <li v-for="pelicula in peliculas" :key="pelicula">{{ pelicula }}</li>
            </ol>
        
        </section>
        <sideBarComponent></sideBarComponent>
    </div>
</template>

<script>
import sideBarComponent from '@/components/sideBar.vue'
import sliderComponent from '@/components/slider.vue'

export default {
    name: 'ErrorComponent',
    components: {
        sideBarComponent,
        sliderComponent,
    },

    data() {
        return {
            titulo: 'Página 2',
            react: 'Reactividad',
            nombre:'',
            edad:'',
            peliculas: ['Iron Man', 'Batman', 'Superman', 'El señor de los anillos', 'Spiderman 2']
        }
    }
}
</script>