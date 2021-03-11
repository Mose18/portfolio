<template>
  <div>

    <span class="rond-g"></span>
    <router-link to="/Portfolio"><img class="fleche-g" src="../../assets/img/fleches/Fleche-g.svg" alt=""></router-link>

    <h2>Deathstromania</h2>
    <span class="soulignement-portfolio"></span>

    <span class="rect-img"></span>

    <span class="fond"></span>

    <div class="projet">

        <div class="part1">
          <h3>Contexte</h3>
          <p>Ceci est le tout 1er projet que j'ai réalisé à mon entrée en MMI. Il consistait en la création d'un site web mobile first dont le thème était "le bilan carbone d'un.e super-héros.ine/super-vilain.e". Le choix de notre héro.ine/vilain.e était libre et j'ai choisi d'opter pour Deathstroke et de parler de la pollution lié à la fabrication et à l'utilisation des armes à feu et explosifs.
          <br>(Malheureusement, ce site n'est pas responsive. Pour profiter d'une expérience optimale, consultez le dans sa version mobile.)</p>
          <p>Si vous le souhaitez, vous pouvez consulter la charte graphique et le dossier de communication pour ce projet grâce aux 2 boutons qui suivent :</p>
          <a href="https://www.moiseyombo.fr/static/img/CharteGraphique_deathstromania.pdf" download="Moïse_Yombo_CharteGraphique_deathstromania.pdf"><button type="button" value="download">Charte graphique</button></a>
          <a href="https://www.moiseyombo.fr/static/img/DossierCommunication_deathstromania.pdf" download="Moïse_Yombo_DossierCommunication_deathstromania.pdf"><button type="button" value="download">Dossier de communication</button></a>
        </div>

        <div class="part2">
          <h3>Maquette</h3>
          <p>Diffère par quelques aspects du site final</p>
          <div class="maquettes">
            <span class="rect-img maquette1"></span>
            <span class="rect-img maquette2"></span>
            <span class="rect-img maquette3"></span>
            <span class="rect-img maquette4"></span>
            <span class="rect-img maquette5"></span>
            <span class="rect-img maquette6"></span>
            <span class="rect-img maquette7"></span>
            <span class="rect-img maquette8"></span>
          </div>
        </div>
      
    </div>

    <a href="http://deathstromania.moiseyombo.fr/"><button>Accéder au site</button></a>

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
  width: 7vw;
  height: 0.5vh;
  background-color: white;
  border-radius: 70px;
  margin: 2vh 0 0 32vw;
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
  height: 1150vh;
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
  height: 66vh;
  border-radius: 40px;
  background: url(../../assets/img/Projet3/logo.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.rect-img{
  display: block;
  margin: 0 0 0 7vh;
  width: 20vw;
  height: 50vh;
  background: grey;
}

.maquette1{
  background: url(../../assets/img/Projet3/Accueil.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 310vh;
}
.maquette2{
  background: url(../../assets/img/Projet3/Deathstroke.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 470vh;
}
.maquette3{
  background: url(../../assets/img/Projet3/Destruction_Inconsciente.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 440vh;
}
.maquette4{
  background: url(../../assets/img/Projet3/Alternatives_problèmes.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 406vh;
}
.maquette5{
  background: url(../../assets/img/Projet3/galerie.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 200vh;
}
.maquette6{
  background: url(../../assets/img/Projet3/apropos.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 251vh;
}
.maquette7{
  background: url(../../assets/img/Projet3/Voir_aussi.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 503vh;
}
.maquette8{
  background: url(../../assets/img/Projet3/menu.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 72vh;
}

.maquette1, .maquette2, .maquette3, .maquette4{
  display: inline-block;
  vertical-align: top;
  margin-bottom: 5vh;
}
.maquette5, .maquette6, .maquette7, .maquette8{
  display: inline-block;
  vertical-align: top;
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
#app > div > div > div.part1 > a:nth-child(5) > button{
    margin-top: 4vh;
    margin-left: 40vw;
}
#app > div > a:nth-child(8){
    top: -41vh;
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
  top: -30vh;
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
    font-size: 35px;
    margin: 0 0 5vh 5vw;
  }
  .soulignement-portfolio{
    display: none;
  }

  #app > div > span.rect-img{
    top: 5vh;
    right: 5vw;
    width: 90vw;
    height: 28vh;
    border-radius: 40px;
    margin-bottom: 22vh;
  }

  p{
    font-size: 25px;
  }
  #app > div > div > div.part2 > p{
    font-size: 18px;
    margin-top: -5vh;
    margin-bottom: 5vh;
  }

  .projet{
    height: 2593vh;
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
    width: 75vw;
    height: 28vh;
    margin: 0;
  }

  .maquettes{
    width: 75vw;
    margin: 0 auto;
  }

  .maquette1{
    height: 266vh;
    margin-bottom: 5vh;
  }
  .maquette2{
    height: 404vh;
    margin-bottom: 5vh;
  }
  .maquette3{
    height: 378vh;
    margin-bottom: 5vh;
  }
  .maquette4{
    height: 348vh;
    margin-bottom: 5vh;
  }
  .maquette5{
    height: 171vh;
    margin-bottom: 5vh;
  }
  .maquette6{
    height: 216vh;
    margin-bottom: 5vh;
  }
  .maquette7{
    height: 432vh;
    margin-bottom: 5vh;
  }
  .maquette8{
    height: 62vh;
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
  #app > div > div > div.part1 > a:nth-child(5) > button{
    width: 70vw;
    margin-left: 15vw;
  }
  #app > div > a:nth-child(8) > button{
    margin-top: 10vh;
    margin-left: 25vw;
  }

  footer{
    top: -28vh;
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
    margin: -2vh 0 2vh 10vw;
  }
  .soulignement-portfolio{
    display: none;
  }

  #app > div > span.rect-img{
    top: 5vh;
    right: 5vw;
    width: 90vw;
    height: 45vh;
    border-radius: 40px;
    margin-bottom: 10vh;
  }

  p{
    font-size: 30px;
  }
  #app > div > div > div.part2 > p{
    font-size: 25px;
    margin-top: -5vh;
    margin-bottom: 5vh;
  }

  .projet{
    height: 2960vh;
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
    width: 55vw;
    height: 28vh;
    margin: 0;
  }

   .maquettes{
    width: 55vw;
    margin: 0 auto;
  }

  .maquette1{
    height: 316vh;
    margin-bottom: 5vh;
  }
  .maquette2{
    height: 480vh;
    margin-bottom: 5vh;
  }
  .maquette3{
    height: 450vh;
    margin-bottom: 5vh;
  }
  .maquette4{
    height: 415vh;
    margin-bottom: 5vh;
  }
  .maquette5{
    height: 204vh;
    margin-bottom: 5vh;
  }
  .maquette6{
    height: 257vh;
    margin-bottom: 5vh;
  }
  .maquette7{
    height: 514vh;
    margin-bottom: 5vh;
  }
  .maquette8{
    height: 73vh;
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
  #app > div > div > div.part1 > a:nth-child(5) > button{
    margin-left: 29vw;
  }
  #app > div > a:nth-child(8) > button{
    margin-top: 15vh;
    margin-left: 35vw;
  }

  footer{
    top: -28vh;
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
