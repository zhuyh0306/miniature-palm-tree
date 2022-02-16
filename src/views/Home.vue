<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld1 msg="Welcome to Your Vue.js App" />
    <HelloWorld2 msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorld1 from '@/components/HelloWorld.vue'
import HelloWorld2 from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HelloWorld1,
    HelloWorld2
  }
}
</script>
