 <template>
  <div class="nav">
    <nuxt-link class="nav-item" to="/">List</nuxt-link>&nbsp;|
    <nuxt-link class="nav-item" to="/basicroute">Basic Route</nuxt-link>&nbsp;|
    <nuxt-link class="nav-item" to="/basicroute/subroute">Try directly to subroute of basicRoute</nuxt-link>&nbsp;|
    <nuxt-link class="nav-item" to="/create">Create</nuxt-link>
  </div>
</template>
    
 <style scoped>
.brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin: 0 20rem;
}

.nav .nav-item {
  color: #39b982;
  text-decoration: none;
}

.nav a {
  display: inline-block;
}
</style>