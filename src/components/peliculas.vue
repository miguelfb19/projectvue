<template>
    <div class="center">
        <section id="content">
            <h2 class="sub-header">PELÍCULAS</h2>
            <h3>Esta pagina muestra ejemplo de como usar el V-FOR y directivas v-bind e interpolado de doble llaves con OBJETOS JS</h3>
            <!--Listado articulos-->
            <div class="favorita" v-if="peliFav">
                <h2 style="color: red;">Pelicula marcada como favorita (desde el hijo):</h2>
                <h4>{{ peliFav.title }}</h4>
            </div>
            <div id="articles">
                <div v-for="pelicula in peliculas" :key="pelicula.title">
                    <peliSingle :pelis="pelicula" v-on:favorito="MostrarFavorita"></peliSingle>
                </div>
            </div>   
        </section>
        <sideBarComponent></sideBarComponent>
    </div>     
</template>

<script>

import peliSingle from '@/components/peliSingle.vue'
import sideBarComponent from '@/components/sideBar.vue'

export default {
    name: 'peliculasComp',
    components: {
        peliSingle,
        sideBarComponent,
    },
    methods:{
        MostrarFavorita(fav){
            this.peliFav=fav
        }
    },
    data(){
        return{
                peliFav: null,
                peliculas: [
                {
                title: 'Batman vs superman',
                year: 2017,
                image: 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
                },
                {
                    title: 'El señor de los anillos',
                    year: 2002,
                    image: 'https://hips.hearstapps.com/hmg-prod/images/el-senor-de-los-anillos-la-comunidad-del-anillo-pelicula-2001-1639853382.jpg?crop=1xw:0.9995061728395062xh;center,top&resize=2048:*'
                },
                {
                    title: 'Fast and Furious 9',
                    year: 2022,
                    image: 'https://intervez.com/wp-content/uploads/2021/07/Rapidos-y-Furiosos-9.jpg'
                },
            ]
        }
    }
}
</script>