<template>
  <div>
    
    <router-link to="/"><img class="fleche-h" src="../assets/img/fleches/Fleche-h.svg" alt=""></router-link>

    <div class="photo">
      <span class="rect-rond-g"></span>
      <img src="../assets/img/Photo_Moise.png" alt="">
    </div>

    <h2>A propos</h2>
    <span class="soulignement-apropos"></span>

    <div class="t-apropos">
      <p>Bonjour et encore bienvenue sur mon portfolio.</p>
      <p>Je m'appelle Moïse YOMBO et je suis un jeune apprenti webdesigner de 20 ans.</p>
      <p>Ce site regroupe mes créations dont je suis le plus fière et qui sont, à mes yeux, les plus révélatrices de mes compétences.</p>
      <p>Si vous le souhaitez, mon CV est disponible en téléchargement. Il vous suffit de cliquer sur le bouton qui suit.</p>
    </div>
    

    <a href="https://www.moiseyombo.fr/static/img/Moïse_Yombo_CV.pdf" download="Moïse_Yombo_CV.pdf"><button type="button" value="download">Télécharger mon CV</button></a>
                
    <span class="rect-rond-d"></span>
    <router-link to="/Contact"><img class="fleche-d" src="../assets/img/fleches/Fleche-d.svg" alt=""></router-link>

    <img class="grille" src="../assets/img/Grille_profondeur.svg" alt="">

    <span class="fond"></span>

    <footer>
      <div class="texte">
        <p>Merci d'avoir pris le temps de visiter mon site.</p>
        <p>N'hésitez pas à me contacter !</p>
      </div>

      <div class="icon">
          <ul>
            <li><a href="https://www.instagram.com/moise.ymb/"><i class="fab fa-instagram"></i></a></li>
            <li><a href="mailto:moise.yombo18@gmail.com"><i class="far fa-envelope"></i></a></li>
            <li><a href="https://www.linkedin.com/in/mo%C3%AFse-yombo-187a42199/"><i class="fab fa-linkedin"></i></a></li>
          </ul>
      </div>

      <p>All of the creations above are the property of Moïse Yombo</p>

    </footer>

  </div>
</template>

<script>
export default {
  name: 'A propos',
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
  background: linear-gradient(368deg,rgba(61,38,79) 30%,rgba(2,84,248,0) 100%);
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

h2{
  font-size: 37px;
  width: max-content;
  text-shadow: 0 10px 10px #EF00FF;
  margin: -2vh 0 10vh 32vw;
}

.t-apropos{
  margin-left: 30vw;
  width: 50vw;
}
.t-apropos p{
  margin: 3vh 0;
}

.fleche-h{
  margin: -6vh 0 0 48vw;
}
.fleche-d{
  float: right;
  margin: -32vh 4.9vw 0 0;
}

.rect-rond-d, .rect-rond-g{
  position: absolute;
  z-index: 2;
  display: block;
  background-color: #323874;
  opacity: 42%;
  width: 60vw;
  height: 45vh;
  border-radius: 200px;
  margin: -40vh 0 0 -15vw;
  transform: rotate(90deg);
}
.rect-rond-d{
  transform: rotate(0deg);
  margin: -60vh 0 0 82vw;
}

.photo img{
  position: relative;
  float: left;
  z-index: 3;
  width: 22.2vw;
  margin: -44vh 0 0 3.89vw;
}

.soulignement-apropos{
  position: relative;
  z-index: 10;
  display: block;
  width: 7vw;
  height: 0.5vh;
  background-color: white;
  border-radius: 70px;
  margin: -8vh 0 0 37vw;
}

button{
  background-color: #00DDFF;
  box-shadow: 0 5px 10px #EF00FF;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.30);
  padding: 2.7vh 1.5vw;
  font-family: MAXWELL REGULAR;
  font-size: 25px;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 40px;
  margin: 0 0 0 40vw;
}

.grille{
  position: relative;
  top: -14.8vh;
  left: -13vw;
  z-index: 2;
  height: 40vh;
  margin-bottom: -33vh;
}


@media all and (max-width: 480px) {
  #app > div{
    height: 80vh;
  }

  .fond{
    height: 130vh;
  }
  .rect-rond-d, .rect-rond-g{
    display: none;
  }

  h2{
    font-size: 30px;
    margin: 5vh 0 2vh 10vw;
  }
  .soulignement-apropos{
    display: none;
  }

  p{
    font-size: 25px;
  }
  .t-apropos{
  margin-left: 10vw;
  width: 83vw;
  }

  .photo img{
    position: relative;
    z-index: 1;
    float: right;
    width: 30vw;
    margin: -8.3vh 5vw 0 0;
  }

  button{
    padding: 3vh 6vw;
    font-family: MAXWELL REGULAR;
    font-size: 20px;
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 40px;
    margin: 0 0 0 27vw;
  }

  .grille{
  top: -12vh;
  left: -153vw;
  height: 30vh;
  margin-bottom: 0;
  }

  footer{
    top: -26vh;
    height: 28vh;
  }
  footer p{
    font-size: 20px;
    margin: 0;
  }
  footer .icon{
    margin-top: -3vh;
    margin-right: 26vw;
  }
  footer > p{
    width: 83vw;
    font-size: 15px;
    margin: 12vh auto 0 auto;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
  #app > div{
    height: 60vh;
  }

  .fond{
    height: 100vh;
  }
  .rect-rond-d, .rect-rond-g{
    display: none;
  }

  h2{
    font-size: 40px;
    margin: 5vh 0 2vh 10vw;
  }
  .soulignement-apropos{
    display: none;
  }

  p{
    font-size: 30px;
  }
  .t-apropos{
    margin-left: 5vw;
    width: 83vw;
  }

  .photo img{
    position: relative;
    z-index: 1;
    float: right;
    width: 30vw;
    margin: -10.3vh 5vw 0 0;
  }

  button{
    padding: 3vh 6vw;
    font-family: MAXWELL REGULAR;
    font-size: 25px;
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 40px;
    margin: 0 0 0 34vw;
  }

  .grille{
    top: -12vh;
    left: -75vw;
    height: 30vh;
    margin-bottom: 0;
  }

  footer{
    top: -25vh;
    height: 28vh;
  }
  footer p{
    font-size: 30px;
    margin: 0;
  }
  footer .icon{
    margin-top: -5vh;
    margin-right: 10vw;
  }
  footer > p{
    width: 54vw;
    font-size: 20px;
    margin: 12vh auto 0 auto;
  }
}
</style>