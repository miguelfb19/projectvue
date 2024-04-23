<template>
    <sliderComponent 
        texto="Página de pruebas #1"
        showBtn="true"
    ></sliderComponent>
    <div class="center">
        <section id="content">
            <h1 class="sub-header">Página 1</h1>    
            <h3>{{id_desde_url}}</h3> 
            <button  @click="actualizarNombre()">Actualizar nombre</button>
            <button  @click="redirigirAlBlog()">Redirigir al blog</button> 
            <h4>{{ nombre }}</h4>
        </section>
        <sideBarComponent></sideBarComponent>
    </div>
</template>

<script>

import sideBarComponent from '@/components/sideBar.vue'
import sliderComponent from '@/components/slider.vue'

export default {
    name: 'pagina1Component',

    components: {
        sliderComponent,
        sideBarComponent,
    },

    updated() {//este metodo se ejecuta cuando se actualiza el componente
        console.log('Componente actualizado')
    },
    created() {//este metodo se ejecuta cuando se creea el componente
        console.log('Componente creado')
    },
    mounted() { //este metodo se ejecuta apenas se ejecute este componente
        this.id_desde_url = this.$route.params.id
        console.log('Componente montado')
    },
    unmounted() {//este metodo se ejecuta cuando se elimina el componente
        console.log('Componente eliminado')
    },
    data() {
        return {
            id_desde_url: null,
            nombre: "Miguel Angel"
        }
    },
    methods: { //aqui puedo crear metodos personalizados
        actualizarNombre(){
        this.nombre='MIGUEL ANGEL FERNANDEZ'
        },
        redirigirAlBlog(){
            this.$router.push('/blog')
        },
    },
}
</script>