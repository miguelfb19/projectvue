<template>
    <article class="article-item">
        <div class="image-wrap">
            <img :src="pelis.image" :alt="pelis.title" :title="pelis.title"/>
        </div>

        <h2 style="text-transform: uppercase;">{{ pelis.title }}</h2>
        <span class="date" :class="{ //aqui establezco una class con el v-bind, usando condiciones 
                                    //para la aplicacion de la class (v-bind condicional)

                yeargreen: pelis.year >= 2020,
                yearred: pelis.year <2020,

            }" style="margin: 0px;">{{ pelis.year }}</span>

        <span class="date" style="margin-top: 5px;"> Hace 5 minutos </span>

        <a href="#">Leer más</a>

        <input type="button" value="Marcar como favorito" @click="pasarFavoritoAlPadre(pelis)"/>

        <div class="clearfix"></div>
    </article>
</template>

<script>
export default {
    name: 'peliSingle',
    props: ['pelis'],
    methods: {
        pasarFavoritoAlPadre(pelicula){
            this.$emit('favorito', pelicula)
        },
    },
    mounted() {
        console.log(this.pelis)
    },
}
</script>