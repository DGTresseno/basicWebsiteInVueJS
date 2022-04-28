<template>
  <div id="app">

    <header-component />
    <router-view path="$router.key" />
    <footer-component />

  </div>
</template>

<script>
import './styles/global.css'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'


export default {
  components: {
    HeaderComponent, FooterComponent
  }
}
</script>