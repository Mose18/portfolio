<template>
  <div id="app">

    <header>
      <router-link to="/">Moïse Yombo</router-link>
      <nav>
          <ul>
              <li><router-link to="/Apropos">A propos</router-link></li>
              <li><router-link to="/Portfolio">Portfolio</router-link></li>
              <li><router-link to="/Contact">Contact</router-link></li>
          </ul>
          <span class="rect"></span>
      </nav>
    </header>

    
      <transition
         :name="transitionName"
         mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
       >
<router-view/>
      </transition>
    

  </div>
</template>

<script>
    AOS.init();

const DEFAULT_TRANSITION = 'slide';
 export default {
   name: 'App',
   data() {
     return {
      transitionName: DEFAULT_TRANSITION,
     };
   },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        const toDepth2 = to.path.split('/').length;
        const fromDepth2 = from.path.split('/').length;
        transitionName = toDepth2 < fromDepth2 ? 'slide-bottom' : 'slide-top';
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;

      next();
    });
  }
};
</script>

<style>
@font-face{
  font-family: lazer84;
  src: url('./assets/font/Lazer84.ttf') format('truetype');
}
@font-face{
  font-family: neondesmon;
  src: url('./assets/font/Neon_Desmon.otf') format('opentype');
}
@font-face{
  font-family: MAXWELL REGULAR;
  src: url('./assets/font/MAXWELL_REGULAR.ttf') format('truetype');
}

        /*ANIMATIONS TRANSITIONS DE PAGE*/
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.75s ease-out;
  overflow: hidden;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100vw, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 1;
  transform: translate(-100vw, 0);
}

.slide-top-enter-active,
.slide-top-leave-active,
.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition-duration: 0.5s, 0.5s, 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: ease-in-out;
  overflow: hidden;
}
.slide-top-enter,
.slide-bottom-leave-active {
  opacity: 0;
  transform: translate(0, 100vh);
}
.slide-top-leave-active,
.slide-bottom-enter {
  opacity: 0;
  transform: translate(0, -100vh);
}


        /*APP*/
html{
  height: 100vh;
}

#app {
  font-family: MAXWELL REGULAR, Helvetica, Arial, sans-serif;
  z-index: 10;
  height: 100vh;
}


#app > div{
  position: relative;
  display: block;
  height: 100vh;
  top: -21vh;
  padding-top: 21vh;
}

body{
  background-color: rgba(2,84,248,1);
  margin: 0;
  overflow-x: hidden;
}

header{
  position: relative;
  display: block;
  z-index: 1;
}

h1, h2{
  position: relative;
  z-index: 10;
  font-family: lazer84;
  color: white;
}

h3{
  font-family: NeonDesmon;
  font-size: 50px;
  color: black;
}

p, a{
  position: relative;
  z-index: 10;
  font-family: MAXWELL REGULAR;
}
p{
  color: white;
  font-size: 30px;
}
a{
  text-decoration: none;
}

nav{
  text-align: right;
}
nav li{
  display: inline;
}
nav ul{
  margin-right: 5vw;
}
nav a{
  color: white;
  margin-right: 3vw;
  font-size: 35px;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.30);
}
nav a:hover{
  color: #FFED00;
}
.rect{
  position: relative;
  z-index: 9;
  display: block;
  margin: -4vh 0 0 45vw;
  width: 50vw;
  height: 13vh;
  background-color: #323874;
  opacity: 42%;
}

.fleche-h, .fleche-d, .fleche-b, .fleche-g{
  width: 5vw;
}

footer{
  position: relative;
  display: block;
  z-index: 10;
  height: 30vh;
  background-color: #2D2D2D;
  color: #ECECEC;
}
footer p{
  font-size: 28px;
  margin: 0;
}
footer .texte{
  margin-left: 5vw;
  padding-top: 9vh;
}
footer .icon{
  float: right;
  font-size: 70px;
  margin: -17vh 10vw 0 0;
  height: 20vh;
}
footer .icon li{
  display: inline-block;
}
footer .icon a{
  color:#EEF7FC;
  margin-left: 2vw;
}
footer > p{
  width: 26.6vw;
  font-size: 20px;
  margin: 5vh auto 0 auto;
}


@media all and (max-width: 480px) {
  #app{
    overflow-x: hidden;
  }

  header{
  z-index: 2;
}

  .fleche-h, .fleche-d, .fleche-b, .fleche-g{
  display: none;
  }
  .rect-rond-d, .rect-rond-g{
    display: none;
  }

  nav ul{
    margin-right: 5vw;
  }
  nav a{
    color: white;
    margin-right: 3vw;
    font-size: 25px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.30);
  }
  .rect{
    height: 5vh;
  }

  footer{
    height: 28vh;
  }
  footer p{
    font-size: 20px;
  }
  footer .texte{
    margin-left: 7vw;
    padding-top: 3vh;
  }
  footer .icon{
    font-size: 50px;
    margin: -4vh 25vw 0 auto;
    height: 10vh;
  }
  footer > p{
    width: 83vw;
    font-size: 15px;
    margin: 5vh auto 0 auto;
  }
  footer .icon ul{
    margin-bottom: 0;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
  #app{
    overflow-x: hidden;
  }

  header{
    z-index: 2;
  }

  .fleche-h, .fleche-d, .fleche-b, .fleche-g{
  display: none;
  }
  .rect-rond-d, .rect-rond-g{
    display: none;
  }

  nav ul{
    margin-right: 5vw;
  }
  nav a{
    color: white;
    margin-right: 3vw;
    font-size: 35px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.30);
  }
  .rect{
    height: 7vh;
  }

  footer{
    height: 28vh;
  }
  footer p{
    font-size: 20px;
  }
  footer .texte{
    margin-left: 7vw;
    padding-top: 3vh;
  }
  footer .icon{
    font-size: 65px;
    margin: -4vh 25vw 0 auto;
    height: 10vh;
  }
  footer > p{
    width: 83vw;
    font-size: 15px;
    margin: 5vh auto 0 auto;
  }
  footer .icon ul{
    margin-bottom: 0;
  }
}
</style>
