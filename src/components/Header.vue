<template>
<div>
  <b-navbar toggleable="md">
    <img src="../assets/logo.png" class="nav-logo" alt="F1 logo">
    <b-navbar-brand class="nav-title">Formula One</b-navbar-brand>

    <b-navbar-toggle target="nav-collaps"></b-navbar-toggle>

    <b-collapse id="nav-collapse" class="items-far-right" is-nav>
        <b-navbar-nav>
            <router-link 
                v-for="route in routes" 
                :key="route.path" 
                :to="route.path"
                class="nav-link">
            {{route.name}}
            </router-link>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      routes: this.$router.options.routes
    }
  }
}
</script>

<style scoped>
.navbar {
    background-color: #ff1616;
    border-bottom: 1px solid white;
    height: 5em;
}

.nav-title {
    font-family: 'Orbitron', 'sans-serif';
    color: white !important;
    -webkit-text-stroke-width: 0.9px;
    -webkit-text-stroke-color: black;
}

.navbar-brand {
    font-size: 2rem;
}

.nav-logo {
        margin: 0 0.5em;
}

.items-far-right {
    justify-content: flex-end;
}

.nav-link {
color: white !important;
font-family: 'Orbitron', 'sans-serif';
font-size: 2em;
-webkit-text-stroke-width: 0.7px;
-webkit-text-stroke-color: black;
text-decoration: none;
}

/* X-Small devices (landscape phones, 544px and up) */
@media (min-width: 0px) {  
    .nav-title {
        font-size: 2rem;
    }

    .nav-logo {
        height: 2em;
    }
}

/* Small devices (landscape phones, 544px and up) */
@media (min-width: 544px) {  
    .nav-title {
        font-size: 2.5rem;
    }

    .nav-logo {
        height: 3em;
    }
}
 
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {  
    .nav-title {
        font-size: 2rem;
    }

    .nav-link {
        font-size: 1.5em;
    }

    .nav-logo {
        height: 3em;
    }
}
 
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
    .nav-title {
        font-size: 2.5rem;
    }

    .nav-link {
        font-size: 1.5em;
    }

    .nav-logo {
        height: 3.5em;
    }
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
    .nav-title {
        font-size: 3rem;
    }

    .nav-logo {
        height: 3.5em;
    }
}

</style>

