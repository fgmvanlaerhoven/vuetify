<template>
  <v-app class="grey lighten-4">

    <app-navbar/>
    <v-content class="mx-3 mb-4">
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { 
    'app-navbar' : Navbar 
  },    
  data () {
    return {
      //
    }
  },
}
</script>
