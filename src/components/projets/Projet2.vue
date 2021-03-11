<template>
  <div>

    <span class="rond-g"></span>
    <router-link to="/Portfolio"><img class="fleche-g" src="../../assets/img/fleches/Fleche-g.svg" alt=""></router-link>

    <h2>Boss</h2>
    <span class="soulignement-portfolio"></span>

    <span class="rect-img"></span>

    <span class="fond"></span>

    <div class="projet">

        <div class="part1">
          <h3>Contexte</h3>
          <p>Pour un examen lors de ma 2ème année de DUT MMI, nous avons dû concevoir et développer un site web en VueJs en 16h sur 2 jours. Le sujet était imposé et consistait en la réalisation du site d'un.e réalisateur.trice, décidé par nos professeurs, en reprenant son identité graphique et en l'interprétant. Personnellement je suis tombé sur la réalisatrice Josiane Balasko.
          <br>Le matin du 1er jour, sur 4h, nous devions réaliser la maquette graphique de ce site puis l'intégrer en HTML/CSS l'après-midi sur la même durée.
          <br>Le 2ème jour, nous devions intégrer le site, cette fois-ci, en VueJs et utilisé dans une à plusieurs pages le système Ajax pour récuperer des flux de données.
          <br>(Malheureusement, ce site n'est pas responsive...)</p>
          
        </div>

        <div class="part2">
          <h3>Maquette ordinateur</h3>
          <div class="part2-img">
            <span class="rect-img maquette-pc-1"></span>
            <span class="rect-img maquette-pc-2"></span>
            <span class="rect-img maquette-pc-3"></span>
          </div>
        </div>

        <div class="part3">
          <h3>Maquette mobile</h3>
          <div class="part3-img">
            <span class="rect-img maquette-mobile-1"></span>
            <span class="rect-img maquette-mobile-2"></span>
            <span class="rect-img maquette-mobile-3"></span>
            <span class="rect-img maquette-mobile-4"></span>
          </div>
        </div>
      
    </div>

      <a href="http://boss.moiseyombo.fr/"><button>Accéder au site</button></a>
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
  margin: 2vh 0 0 18vw;
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
  height: 780vh;
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
  background: url(../../assets/img/Projet2/accueil1.png);
  background-size: 120%;
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
.projet .rect-img{
    width: 50vw;
    height: 40vh;
}

.part2-img{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 12vh;
    margin-bottom: 15vh;
}
.part2-img .rect-img{
    width: 25vw;
    margin: 0;
}
.maquette-pc-1{
  background: url(../../assets/img/Projet2/desktop_accueil.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.rect-img.maquette-pc-1{
    height: 115vh;
}
.maquette-pc-2{
  background: url(../../assets/img/Projet2/desktop_biographie.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin: 5vh 1vw 5vh 10vw;
}
.rect-img.maquette-pc-2{
    height: 133vh;
}
.maquette-pc-3{
  background: url(../../assets/img/Projet2/desktop_filmographie.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.rect-img.maquette-pc-3{
    height: 135vh;
}

.part3-img{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 12vh;
}
.part3-img .rect-img{
    width: 15vw;
    margin: 0;
}
.maquette-mobile-1{
  background: url(../../assets/img/Projet2/mobile_accueil.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.rect-img.maquette-mobile-1{
    height: 205vh;
}
.maquette-mobile-2{
  background: url(../../assets/img/Projet2/mobile_biographie.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.rect-img.maquette-mobile-2{
    height: 450vh;
}
.maquette-mobile-3{
  background: url(../../assets/img/Projet2/mobile_filmographie.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.rect-img.maquette-mobile-3{
    height: 468.5vh;
}
.maquette-mobile-4{
  background: url(../../assets/img/Projet2/mobile_menu.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.rect-img.maquette-mobile-4{
    height: 65.5vh;
}

button{
    position: relative;
    top: -37vh;
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
    top: -29.1vh;
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
    margin: 0 0 5vh 35vw;
  }
  .soulignement-portfolio{
    display: none;
  }

  #app > div > span.rect-img{
    top: 5vh;
    right: 5vw;
    width: 90vw;
    height: 25vh;
    border-radius: 40px;
    margin-bottom: 23vh;
  }

  p{
    font-size: 25px;
  }

  .projet{
    height: 1595vh;
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

 .part2-img{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 0vh;
    margin-bottom: 15vh;
  }
  .part2-img .rect-img{
      width: 60vw;
      margin: 0 auto;
  }
  .rect-img.maquette-pc-1{
      height: 63vh;
  }
  .rect-img.maquette-pc-2{
      height: 74vh;
  }
  .rect-img.maquette-pc-3{
      height: 74vh;
  }

  .part3-img{
    flex-direction: column;
    margin-top: 0;
  }
  .part3-img .rect-img{
      width: 60vw;
      margin: 0 auto 7vh auto;
  }
  .rect-img.maquette-mobile-1{
      height: 188vh;
  }
  .rect-img.maquette-mobile-2{
      height: 413vh;
  }
  .rect-img.maquette-mobile-3{
      height: 429vh;
  }
  .rect-img.maquette-mobile-4{
      height: 60vh;
  }

  button{
    padding: 3vh 6vw;
    font-family: MAXWELL REGULAR;
    font-size: 20px;
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 40px;
    margin: 25vh 0 0 29vw;
  }

  footer{
    top: -25vh;
    height: 26vh;
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
    height: 40vh;
    border-radius: 40px;
    margin-bottom: 10vh;
  }

  p{
    font-size: 30px;
  }

  .projet{
    height: 2380vh;
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
    height: 28vh;
  }

 .part2-img{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 0vh;
    margin-bottom: 15vh;
  }
  .part2-img .rect-img{
      width: 60vw;
      margin: 0 auto;
  }
  .rect-img.maquette-pc-1{
      height: 110vh;
  }
  .rect-img.maquette-pc-2{
      height: 130 vh;
  }
  .rect-img.maquette-pc-3{
      height: 130vh;
  }

  .part3-img{
    flex-direction: column;
    margin-top: 0;
  }
  .part3-img .rect-img{
      width: 60vw;
      margin: 0 auto 7vh auto;
  }
  .rect-img.maquette-mobile-1{
      height: 310vh;
  }
  .rect-img.maquette-mobile-2{
      height: 680vh;
  }
  .rect-img.maquette-mobile-3{
      height: 700vh;
  }
  .rect-img.maquette-mobile-4{
      height: 100vh;
  }

  button{
    padding: 3vh 6vw;
    font-family: MAXWELL REGULAR;
    font-size: 30px;
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 40px;
    margin: 25vh 0 0 34vw;
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
