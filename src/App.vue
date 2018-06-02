<template>
  <div id="app">
    <header>
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-alignment-left">
          <span>Pitam Management App</span>
        </div>
        <div class="md-layout-item md-alignment-right">
          <span style="text-align: right">
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
  name: 'app'
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
