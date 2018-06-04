<template>
  <div id="app">
    <header>
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-alignment-left">
          <span>Pitam Management App</span>
        </div>
        <div class="md-layout-item md-alignment-right">
          <span style="text-align: right">

              <md-button @click.prevent="logout" v-if="activeUser" class="md-icon-button md-accent">
                  <md-icon>exit_to_app</md-icon>
              </md-button>

              <md-menu>
                
                <md-icon md-menu-trigger>more_vert</md-icon>
                <md-menu-content style="background-color: #fff">
                  <md-menu-item><router-link :to="{name: 'Drivers'}">Drivers</router-link></md-menu-item>
                  <md-menu-item><router-link :to="{name: 'Bottles'}">Bottles</router-link></md-menu-item>
                  <md-menu-item><router-link :to="{name: 'Sachets'}">Satchets</router-link></md-menu-item>
                </md-menu-content>
              </md-menu>
            </span>
        </div>
      
      </div>
    </header>
    <main>
      <img src="./assets/pitam.png" alt="Pitam App">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeUser: null
    }
  },
  async created () {
    await this.refreshActiveUser()
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    '$route': 'refreshActiveUser'
  },

  methods: {
    async logout () {
      await this.$auth.logout()
      await this.refreshActiveUser()
      this.$router.push('/')
    },

    async refreshActiveUser () {
      this.activeUser = await this.$auth.getUser()
    }
    
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
