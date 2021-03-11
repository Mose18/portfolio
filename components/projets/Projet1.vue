<template>
  <div>

    <span class="rond-g"></span>
    <router-link to="/Portfolio"><img class="fleche-g" src="../../assets/img/fleches/Fleche-g.svg" alt=""></router-link>

    <h2>Indiglu</h2>
    <span class="soulignement-portfolio"></span>

    <span class="rect-img"></span>

    <span class="fond"></span>

    <div class="projet">

        <div class="part1">
          <h3>Contexte</h3>
          <p>Ce projet est un projet individuel réalisé lors de la 1ère année de ma formation en DUT MMI (Métiers du Multimédia et de l'Internet). Le but était de proposer une refonte graphique du site <a href="https://indiglu.com/">Indiglu</a>.<br>Pour ce faire, j'ai effectué des analyses de l'existent et des concurrents, une étude de la cible et des recherches autour de la conception d'un nouveau logo.</p>
          <p>Retrouvez tous ces éléments dans la charte graphique disponible en cliquant sur le bouton qui suit :</p>
          <a href="https://www.moiseyombo.fr/static/img/CharteGraphique_Indiglu.pdf" download="Moïse_Yombo_CharteGraphique_Indiglu.pdf"><button type="button" value="download">Charte graphique</button></a>
        </div>

        <div class="part2">
          <h3>Maquette</h3>
          <span class="rect-img maquette1"></span>
          <span class="rect-img maquette2"></span>
          <span class="rect-img maquette3"></span>
          <span class="rect-img maquette4"></span>
        </div>
      
    </div>

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
AOS.init();

export default {
  name: 'Portfolio',
  data () {
    document.documentElement.style.overflow = 'visible';
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
  height: 100%;
}

h2{
  font-size: 37px;
  width: max-content;
  text-shadow: 0 10px 10px #00DDFF;
  margin: 0 0 0 16vw;
  top: -3vh;
}

.soulignement-portfolio{
  position: relative;
  z-index: 10;
  display: block;
  width: 5vw;
  height: 0.5vh;
  background-color: white;
  border-radius: 70px;
  margin: 2vh 0 0 21vw;
  top: -3vh;
}

.projet p{
  color: #151515;
  padding: 2vh 7vw;
  line-height: 6vh;
  letter-spacing: 1.5px;
}

.part1 p a{
  font-weight: bold;
  color: #00DDFF;
  transition: 0.2s ease-in-out;
}
.part1 p a:hover{
  color: #FFED00;
  transition: 0.1s ease-in-out;
}

.projet{
  position: relative;
  display: flex;
  flex-flow: column ;
  background-color: white;
  height: 270vh;
  width: 100%;
  top: -20vh;
}

.part1 h3, .part2 h3, .part3 h3, .part4 h3{
  color: #151515;
  text-align: right;
  padding-right: 10vw;
}

#app > div > span.rect-img{
  position: relative;
  z-index: 10;
  display: block;
  float: right;
  top: -30vh;
  right: 7vw;
  width: 50vw;
  height: 60vh;
  border-radius: 40px;
  background: url(../../assets/img/Projet1/mockup_accueil.jpg);
  background-size: 100%;
  background-position: center;
    background-repeat: no-repeat;
}

.rect-img{
  display: block;
  margin: 0 auto;
  width: 40vw;
  height: 50vh;
  background: grey;
}

.maquette1{
  background: url(../../assets/img/Projet1/accueil1.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.maquette2{
  background: url(../../assets/img/Projet1/accueil2.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin: 5vh 1vw 5vh 10vw;
}
.maquette3{
  background: url(../../assets/img/Projet1/accueil3.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.maquette4{
  background: url(../../assets/img/Projet1/accueil4.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.maquette2, .maquette3{
  display: inline-block;
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
  margin: 0 0 0 42vw;
}

.fleche-g{
  position: relative;
  margin: 0 0 0 4.9vw;
  top: 10vh;
}

.rond-g{
  position: relative;
  z-index: 2;
  display: block;
  background-color: #323874;
  opacity: 42%;
  width: 10vw;
  height: 20vh;
  border-radius: 100px;
  top: 24.5vh;
  left: 3vw;
}

footer{
  position: relative;
  top: -20vh;
  margin-bottom: -20vh;
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
    font-size: 45px;
    margin: 0 0 5vh 25vw;
  }
  .soulignement-portfolio{
    display: none;
  }

  #app > div > span.rect-img{
    top: 5vh;
    right: 5vw;
    width: 90vw;
    height: 28vh;
    border-radius: 20px;
    margin-bottom: 20vh;
  }

  p{
    font-size: 25px;
  }

  .projet{
    height: 320vh;
    width: 100%;
    top: 10vh;
  }

  .part1 h3, .part2 h3, .part3 h3, .part4 h3{
    font-size: 40px;
  }
  .part2 h3{
    margin-top: 15vh;
  }

  .rect-img{
    width: 90vw;
    height: 28vh;
  }

  .maquette2, .maquette3{
    margin: 3vh auto;
    display: block;
  }

  button{
    padding: 3vh 10vw;
    font-family: MAXWELL REGULAR;
    font-size: 20px;
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 40px;
    margin: 0 0 0 23vw;
  }

  footer{
    top: -16vh;
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
    height: 80vh;
  }

  .fond{
    height: 130vh;
  }
  .rect-rond-d, .rect-rond-g{
    display: none;
  }

  h2{
    font-size: 45px;
    margin: 0 0 2vh 10vw;
  }
  .soulignement-portfolio{
    display: none;
  }

  #app > div > span.rect-img{
    top: 5vh;
    right: 5vw;
    width: 90vw;
    height: 41vh;
    border-radius: 40px;
    margin-bottom: 10vh;
  }

  p{
    font-size: 30px;
  }

  .projet{
    height: 310vh;
    width: 100%;
    top: 10vh;
  }

  .part1 h3, .part2 h3, .part3 h3, .part4 h3{
    font-size: 50px;
  }
  .part2 h3{
    margin-top: 15vh;
  }

  .rect-img{
    width: 90vw;
    height: 38vh;
  }

  .maquette2, .maquette3{
    margin: 3vh auto;
    display: block;
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

  footer{
    top: -18vh;
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
