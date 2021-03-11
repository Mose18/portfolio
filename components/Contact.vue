<template>
  <div>
    
    <router-link to="/Portfolio"><img class="fleche-h" src="../assets/img/fleches/Fleche-h.svg" alt=""></router-link>

    <span class="rect-rond-g"></span>
    <router-link to="/Apropos"><img class="fleche-g" src="../assets/img/fleches/Fleche-g.svg" alt=""></router-link>

    <h2>Contact</h2>
    <span class="soulignement-apropos"></span>

    <div class="t-contact">
      <p>Merci d'avoir pris le temps de visiter mon site.<br/>
      Si vous avez des questions, des remarques, des conseils ou des demandes de collaboration sur un projet, vous pouvez me les addresser par 
      l'intermédiaire de l'un de ces moyens.</p>
      <p>Merci d'avance pour vos futurs messages.</p>
    </div>

    <div class="icon">
        <ul>
          <li><a href="https://www.instagram.com/moise.ymb/"><i class="fab fa-instagram"></i></a></li>
          <li><a href="mailto:moise.yombo18@gmail.com"><i class="far fa-envelope"></i></a></li>
          <li><a href="https://www.linkedin.com/in/mo%C3%AFse-yombo-187a42199/"><i class="fab fa-linkedin"></i></a></li>
        </ul>
    </div>

    <img class="grille" src="../assets/img/Grille_profondeur.svg" alt="">

    <span class="fond"></span>

  </div>
</template>

<script>
export default {
  name: 'Contact',
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

#app{
  overflow: hidden;
}

.fond{
  display: block;
  position: absolute;
  z-index: 0;
  top: 0;
  background: linear-gradient(349.7deg,rgba(61,38,79) 30%,rgba(2,84,248,0) 100%);
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}

h2{
  font-size: 37px;
  width: max-content;
  text-shadow: 0 10px 10px #EF00FF;
  margin: 15vh 0 0 15vw;
}

.soulignement-apropos{
  position: relative;
  z-index: 10;
  display: block;
  width: 7vw;
  height: 0.5vh;
  background-color: white;
  border-radius: 70px;
  margin: 2vh 0 0 20vw;
}

.t-contact{
  margin: -18vh 0 0 40vw;
  width: 55vw;
}
.t-contact p{
  margin-top: 3vh;
  font-size: 35px;
}

.icon{
  float: right;
  font-size: 90px;
  margin: -9vh 10vw 0 0;
  height: 30vh;
}
.icon li{
  display: inline-block;
}
.icon a{
  color:#EEF7FC;
  margin-left: 2vw;
}

.fleche-h{
  margin: -6vh 0 0 38.1vw;
}
.fleche-g{
  float: left;
  margin: 23vh 0 0 4.9vw;
}

.rect-rond-g{
  position: absolute;
  z-index: 2;
  display: block;
  background-color: #323874;
  opacity: 42%;
  width: 60vw;
  height: 45vh;
  border-radius: 200px;
  left: -25vw;
}


.grille{
  position: relative;
  top: -13vh;
  left: -13vw;
  z-index: 2;
  height: 40vh;
}


@media all and (max-width: 480px) {
  #app > div{
    height: 90vh;
    overflow: hidden;
    margin-bottom: -21vh;
  }
  
  .fond{
    height: 100%;
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

  .t-contact{
    margin-left: 10vw;
    width: 83vw;
  }
  .t-contact p{
    margin-top: 20vh;
    font-size: 27px;
  }
  div.t-contact > p:nth-child(2){
    margin-top: 0;
  }

  .icon{
    float: none;
    font-size: 70px;
    margin: -2vh auto 0 auto;
    height: 20vh;
    width: 90vw;
  }

  .grille{
    top: -6vh;
    left: -155vw;
    height: 30vh;
    margin-bottom: 0;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
  #app > div{
    height: 90vh;
    overflow: hidden;
    margin-bottom: -21vh;
  }
  
  .fond{
    height: 100%;
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

  .t-contact{
    margin-left: 10vw;
    width: 83vw;
  }
  .t-contact p{
    margin-top: 25vh;
    font-size: 40px;
  }
  div.t-contact > p:nth-child(2){
    margin-top: 0;
  }

  .icon{
    float: none;
    font-size: 100px;
    margin: -2vh auto 0 auto;
    height: 20vh;
    width: 60vw;
  }

  .grille{
    top: -8vh;
    left: -75vw;
    height: 30vh;
    margin-bottom: 0;
  }
}
</style>