<template>
  <div>

    <div class="header">
      <span class="rect-acc"></span>
    </div>
    
    <router-link to="/" id="logo"><img src="../../src/assets/img/logo.svg" alt=""></router-link>

    <h1>Bienvenue</h1>

    <img class="ell-bleue" src="../assets/img/ellipses/Ellipse-bleue.svg" alt="">
    <img class="ell-violette" src="../assets/img/ellipses/Ellipse-violette.svg" alt="">

    <span class="soulignement-bienvenue"></span>

    <p>Sur le portfolio d'un jeune apprenti Webdesigner</p>

    <img class="ell-jaune" src="../assets/img/ellipses/Ellipse-jaune.svg" alt="">
    
    <span class="soulignement-portfolio"></span>

      <span class="rect-rond-d"></span>
      <span class="rect-rond-g"></span>

      <router-link to="/Portfolio"><img class="fleche-d" src="../assets/img/fleches/Fleche-d.svg" alt="" ></router-link>
      <router-link to="/Apropos"><img class="fleche-b" src="../assets/img/fleches/Fleche-b.svg" alt=""></router-link>

    <span class="fond"></span>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#app > div{
  overflow: hidden;
  height: 79vh;
}

#logo img{
  position: absolute;
  display: block;
  z-index: 10;
  width: 30vw;
  top: -18vh;
  left: 2vw;
}

.fond{
  display: block;
  position: absolute;
  z-index: 0;
  top: 0;
  background: linear-gradient(170deg,rgba(61,38,79) 30%,rgba(2,84,248,0) 100%);
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}

.rect-acc{  
  position: relative;
  z-index: 2;
  display: none;
  margin: -13vh 0 0 0;
  width: 45vw;
  height: 13vh;
  background-color: #323874;
  opacity: 42%;
}

h1{
  font-size: 80px;
  width: max-content;
  text-shadow: 0 10px 10px rgba(2, 84, 248, 1);
  margin: 13vh 0 10vh 32vw;
}
p{
  width: max-content;
  color: white;
  font-size: 50px;
  letter-spacing: 5px;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.30);
  margin: 10vh 0 0 13vw;
}

.soulignement-bienvenue{
  position: relative;
  z-index: 10;
  display: block;
  width: 14vw;
  height: 0.5vh;
  background-color: white;
  border-radius: 70px;
  margin: -8vh 0 0 44vw;
}
.soulignement-portfolio{
  position: relative;
  z-index: 10;
  display: block;
  width: 12vw;
  height: 0.5vh;
  background-color: white;
  border-radius: 70px;
  margin: 0 0 0 23.5vw;
}

.rect-rond-d, .rect-rond-g{
  position: relative;
  z-index: 2;
  display: block;
  float: right;
  background-color: #323874;
  opacity: 42%;
  width: 50vw;
  height: 45vh;
  border-radius: 200px;
  margin: -35vh -32vw 0 0;
}

.rect-rond-g{
  position: absolute;
  float: left;
  margin: 30vh 0 0 -10vw;
  transform: rotate(90deg);
  border-radius: 200px 0 0 200px;
}

.fleche-d{
  float: right;
  margin: -16.5vh -12vw 0 0;
}
.fleche-b{
  margin: 15vh 0 0 48vw;
}

.ell-bleue, .ell-jaune, .ell-violette{
  position: absolute;
  z-index: 5;
  width: 20vw;
}
.ell-bleue{
  top: 16vh;
  left: 21vw;
  width: 24vw;
}
.ell-jaune{
  top: 47vh;
  left: 6vw;
  width: 20vw;
}
.ell-violette{
  top: 34vh;
  right: 8vw;
}


@media all and (max-width: 480px) { 
  #app > div{
    height: 90vh;
    margin-bottom: -21vh;
  }
  .fond{
    padding-bottom: 10vh;
  }

  #logo img{
    position: absolute;
    display: block;
    z-index: 10;
    width: 40vw;
    top: 0vh;
    left: 4vw;
  }

  .rect-rond-d, .rect-rond-g{
    display: none;
  }
  .rect-acc{  
    display: none;
}

  h1{
    font-size: 60px;
    margin: 20vh auto 10vh auto;
  }
  p{
    font-size: 30px;
    width: 80vw;
    margin: 10vh auto 0 10vw;
    text-align: center;
  }
  .soulignement-bienvenue, .soulignement-portfolio{
    display: none;
  }
  .ell-bleue, .ell-jaune, .ell-violette{
  display: none;
  }
}

@media (min-width: 481px) and (max-width: 1024px) { 
  #app > div{
    height: 90vh;
    margin-bottom: -21vh;
  }
  .fond{
    padding-bottom: 10vh;
  }

  #logo img{
    position: absolute;
    display: block;
    z-index: 10;
    width: 40vw;
    top: -6vh;
    left: 4vw;
  }

  .rect-rond-d, .rect-rond-g{
    display: none;
  }
  .rect-acc{  
    display: none;
  }

  .fleche-b{
    position: relative;
    z-index: 10;
    display: block;
    width: 10vw;
    margin: 20vh auto 0 auto;
  }

  h1{
    font-size: 80px;
    margin: 20vh auto 10vh auto;
  }
  p{
    font-size: 30px;
    width: 80vw;
    margin: 10vh auto 0 10vw;
    text-align: center;
  }
  .soulignement-bienvenue, .soulignement-portfolio{
    display: none;
  }
  .ell-bleue, .ell-jaune, .ell-violette{
  display: none;
  }
}
</style>