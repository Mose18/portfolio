<template>
  <div>

    <router-link to="/" id="logo"><img src="../../src/assets/img/logo.svg" alt=""></router-link>
    <span class="rect-rond-g"></span>
    <router-link to="/"><img class="fleche-g" src="../assets/img/fleches/Fleche-g.svg" alt=""></router-link>

    <h2>Portfolio</h2>
    <span class="soulignement-portfolio"></span>

    <p class="first-p">Découvrez mes projets</p>

    <span class="fond"></span>

    <div class="projets">

        <div class="projet1">
          <router-link to="/Projet1"><h3>Indiglu</h3></router-link>
          <p id="refresh">Actualisez la page</p>
          <router-link to="/Projet1"><span class="rect-img img-projet1" data-aos="fade-left" data-aos-duration="700"></span></router-link>
        </div>

        <div class="projet2">
          <router-link to="/Projet2"><h3>Boss</h3></router-link>
          <router-link to="/Projet2"><span class="rect-img img-projet2" data-aos="fade-right" data-aos-duration="700"></span></router-link>
        </div>

        <div class="projet3">
          <router-link to="/Projet3"><h3>Deathstromania</h3></router-link>
          <router-link to="/Projet3"><span class="rect-img img-projet3" data-aos="fade-left" data-aos-duration="700"></span></router-link>
        </div>

        <div class="projet4">
          <router-link to="/Projet4"><h3>Projet 4</h3></router-link>
          <router-link to="/Projet4"><span class="rect-img img-projet4" data-aos="fade-right" data-aos-duration="700"></span></router-link>
        </div>
      
    </div>

    <router-link to="/Contact"><img class="fleche-b" src="../assets/img/fleches/Fleche-b.svg" alt=""></router-link>
    <span class="fond-fleche"></span>

  </div>
</template>

<script>
AOS.init();

export default {
  name: 'Portfolio',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fond{
  display: block;
  position: absolute;
  z-index: 0;
  top: 0;
  background: linear-gradient(195.6deg,rgba(61,38,79) 30%,rgba(2,84,248,0) 100%);
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}

#logo img{
  position: absolute;
  display: block;
  z-index: 10;
  width: 23vw;
  top: -21vh;
}

h2{
  font-size: 37px;
  width: max-content;
  text-shadow: 0 10px 10px #EF00FF;
  margin: 0 0 0 15vw;
  top: -28vh;
}
.soulignement-portfolio{
  position: relative;
  z-index: 10;
  display: block;
  width: 7vw;
  height: 0.5vh;
  background-color: white;
  border-radius: 70px;
  margin: 2vh 0 0 22vw;
  top: -28vh;
}

.first-p{
  font-size: 60px;
  margin: 0 auto 0 45vw;
  letter-spacing: 10px;
  top: -28vh;
}

#refresh{
  color: black;
  position: absolute;
  top: 125vh;
  left: 55vw;
}


.projet1,.projet2,.projet3,.projet4{
  display: flex;
  justify-content: space-around;
  margin-top: 30vh;
}
.projet1{
  padding-top: 10vh;
  margin-top: 6vh;
}
.projet2,.projet4{
  flex-direction: row-reverse;
}
.projet4{
  display: none;
}
.rect-img{
  display: block;
  width: 40vw;
  height: 50vh;
}

.projets{
  display: block;
  background-color: white;
  margin-top: 0;
  height: 310vh;
  width: 100%;
}
.projets h3{
  margin-top: 20vh;
}

.projet1 h3{
  text-shadow: 0 10px 10px rgba(2, 84, 248, 1);
  color: white;
  transition: ease-in 0.2s;
}
.projet1 h3:hover{
  color: rgba(2, 84, 248, 1);
  transition: ease-out 0.2s;
}
.img-projet1{
  background: url(../assets/img/Projet1/mockup_accueil.jpg);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.projet2 h3{
  text-shadow: 0 10px 10px #EF00FF;
  color: white;
  transition: ease-in 0.2s;
}
.projet2 h3:hover{
  text-shadow: 0 10px 10px #EF00FF;
  color: #EF00FF;
  transition: ease-out 0.2s;
}
.img-projet2{
  background: url(../assets/img/Projet2/accueil1.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.projet3 h3{
  text-shadow: 0 10px 10px #FFED00;
  color: white;
  transition: ease-in 0.2s;
}
.projet3 h3:hover{
  text-shadow: 0 10px 10px #FFED00;
  color: #FFED00;
  transition: ease-in 0.2s;
}
.img-projet3{
  background: url(../assets/img/Projet3/logo.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.projet4 h3{
  text-shadow: 0 10px 10px #00DDFF;
  color: white;
  transition: ease-in 0.2s;
}
.projet4 h3:hover{
  text-shadow: 0 10px 10px #00DDFF;
  color: #00DDFF;
  transition: ease-in 0.2s;
}
.img-projet4{
  background: url(../assets/img/Projet1/mockup_accueil.jpg);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.fleche-g{
  position: relative;
  margin: 0 0 0 4.9vw;
  top: -15vh;
}
.fleche-b{
  margin: 10vh auto 8vh 47vw;
}
.fond-fleche{
  position: absolute;
  display: block;
  background-color: #0747C6;
  opacity: 42%;
  width: 17vw;
  height: 17vh;
  border-radius: 15px;
  top: 416vh;
  left: 41vw;
}

.rect-rond-g{
  position: relative;
  z-index: 2;
  display: block;
  background-color: #323874;
  opacity: 42%;
  width: 60vw;
  height: 45vh;
  border-radius: 200px;
  top: 11vh;
  left: -25vw;
}


@media all and (max-width: 480px) {
  .fond{
    height: 110vh;
  }

  #logo img{
    position: absolute;
    display: block;
    z-index: 10;
    width: 40vw;
    top: -1vh;
    left: 4vw;
  }

  .rect-rond-d, .rect-rond-g, .fond-fleche{
    display: none;
  }

  h2{
    font-size: 40px;
    margin: 30vh 0 2vh 20vw;
    top: 0vh;
  }
  .soulignement-portfolio{
    display: none;
  }

  .first-p{
    font-size: 30px;
    margin: 10vh 10vw 0 10vw;
    letter-spacing: 10px;
    text-align: right;
    top: 0vh;
  }

  .projets{
    margin-top: 35vh;
    height: 210vh;
    width: 100%;
  }
  .projets h3{
    margin: 0 auto 5vh auto;
    text-align: center;
    font-size: 30px;
  }

  #refresh{
    display: none;
  }

  .projet1,.projet2,.projet3,.projet4{
    justify-content: space-between;
    flex-direction: column;
    margin-top: 10vh;
  }
  .projet1{
    padding-top: 5vh;
    margin-top: 6vh;
  }
  .projet2,.projet4{
    flex-direction: column;
  }
  .rect-img{
    display: block;
    width: 90vw;
    height: 30vh;
    margin-left: -22vw;
  }
  [data-aos^=fade][data-aos^=fade] {
    opacity: 1;
    transition-property: opacity,transform;
  }

  .projet1 h3{
    color: rgba(2, 84, 248, 1);
  }

  .projet2 h3{
    color: #EF00FF;
  }

  .projet3 h3{
    color: #FFED00;
  }

  .projet4 h3{
    color: #00DDFF;
  }

  .projet2 .rect-img,.projet4 .rect-img{
    margin-left: 31.5vw;
  }
  
}

@media (min-width: 481px) and (max-width: 1024px) {
  .fond{
    height: 110vh;
  }

  #logo img{
    position: absolute;
    display: block;
    z-index: 10;
    width: 40vw;
    top: -6vh;
    left: 4vw;
  }

  .rect-rond-d, .rect-rond-g, .fond-fleche{
    display: none;
  }

  h2{
    font-size: 50px;
    margin: 20vh 0 2vh 20vw;
    top: 0vh;
  }
  .soulignement-portfolio{
    display: none;
  }

  .first-p{
    margin: 15vh 10vw 0 10vw;
    letter-spacing: 10px;
    text-align: right;
    top: 0vh;
  }

  .projets{
    margin-top: 35vh;
    height: 210vh;
    width: 100%;
  }
  .projets h3{
    margin: 0 auto 5vh auto;
    text-align: center;
    font-size: 40px;
  }

  #refresh{
    display: none;
  }

  .projet1,.projet2,.projet3,.projet4{
    justify-content: space-between;
    flex-direction: column;
    margin-top: 10vh;
  }
  .projet1{
    padding-top: 5vh;
    margin-top: 6vh;
  }
  .projet2,.projet4{
    flex-direction: column;
  }
  .rect-img{
    display: block;
    width: 90vw;
    height: 40vh;
    margin-left: -8vw;
  }
  [data-aos^=fade][data-aos^=fade] {
    opacity: 1;
    transition-property: opacity,transform;
  }

  .projet1 h3{
    color: rgba(2, 84, 248, 1);
  }

  .projet2 h3{
    color: #EF00FF;
  }

  .projet3 h3{
    color: #FFED00;
  }

  .projet4 h3{
    color: #00DDFF;
  }

  .projet2 .rect-img,.projet4 .rect-img{
    margin-left: 18vw;
  }
  
}
</style>
