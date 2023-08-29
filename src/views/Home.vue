
<template>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>

    <Navbar></Navbar>

      <section>
        <!-- <div class="container"> -->
          <div class="row leftside">
  
              <div class="col-sm">
                    <div class="bigguy">
                      <h1 class="display-4">UNLEASH POTENTIAL</h1>
                    </div>

                
                  
                    <div class="lighttext">
                      <p class="light">Innovation propels us beyond boundaries,<br> 
                      awakening our inherent curiosity and driving<br>
                      rogress. It's the spark that transforms<br>
                      challenges into opportunities and reshapes<br>
                      the world as we know it. Fueled by the<br>
                      relentless pursuit of improvement,
                      </p>
                    </div>
                    
                    <div>
                      <div class="homesecond">
                        <img src="../assets/images/homesecond.png" alt="losthome" class="homesec">
                      </div>
                    </div>

                </div>
                  
              <div class="col-sm">
                      <img src="../assets/images/homeimage.png" alt="lostBase" class="footbase">
              </div>
              
            </div>
            
        <!-- </div> -->
      </section>

      <section>
        <!-- <div class="container"> -->
          <div class="row sectiontwo">
            <div class="col-sm">
              <p class="section-two-text">Innovation propels us beyond boundaries, awakening our inherent curiosity and driving rogress. It's the spark that <br>
                  challenges into opportunities and reshapes he world as we know it. Fueled by the relentless pursuit of improvement,
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-sm">
              <div class="cardclasss">
                <div class="card cardone">
                  <img src="../assets/images/cardImage/teamwork.jpg" alt="" class="card-img-top card-img">
                </div>

                <div class="card">
                  <img src="../assets/images/cardImage/selfwork.jpg" alt="" class="card-img-top card-img">
                </div>

                <div class="card">
                  <img src="../assets/images/cardImage/givesupport.jpg" alt="" class="card-img-center card-img givesuport">
                </div>

                <div class="card">
                  <img src="../assets/images/cardImage/help.jpg" alt="" class="card-img-top card-img">
                </div>

                <div class="card">
                  <img src="../assets/images/cardImage/patent.jpg" alt="" class="card-img-top card-img">
                </div>

              </div>
            </div>
          </div>
        <!-- </div> -->
      </section>

      <section class="imagewrapper">
        <div class="slider-wrapper">
          <div class="slider">
            <img id="slide-1" src="../assets/images/slider/mercedes-amg-a-45-5k-9m.jpg" alt="lost image1">

            <img id="slide-2" src="../assets/images/slider/mercedes-amg-g63-rear-8q.jpg" alt="lost image2">

            <img id="slide-3" src="../assets/images/slider/mercedes-benz-g-class-g63-black-4k-z4.jpg" alt="lost image3">
          </div>
          <div class="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div>
        </div>
      </section>

      <section class="sectionfourmain">
        <div class="">
          <div class="sectionfour">
              <p class="sectionfourtext">Innovation propels us beyond boundaries, awakening our inherent curiosity and driving rogress. It's the spark that <br>
                  challenges into opportunities and reshapes he world as we know it. Fueled by the relentless pursuit of improvement,
              </p>
              <div class="seperator"></div>
            </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="image">
            <img src="../assets/images/footercover.png" alt="lostfooterimage" class="imagefooter">
          </div>
        </div>
      </section>


      <Footer></footer>
  </body>
  </html>
</template>

<script>
import Navbar from '../components/navbar.vue';
import Footer from '../components/footer.vue';
export default{
  components:{
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.imagefooter{
  object-fit: cover;
  background-size: cover;
  overflow: none;
  width:100%;
  height: auto;
}

.sectionfour{
  margin-top: 5vh;

}

.seperator::before{
  content: '';
  position:absolute;
  width:100%;
  height: 25%;
  background: #1d1b1bd7;
  clip-path: polygon(100% 0,0 -100%,100% 100%);
}

.sectionfourtext{
  display: flex;
  background-color:#1d1b1bd7;
  font-size: larger;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 15px;
  color: aliceblue;
}




/* .imagewrapper{
  margin-bottom: 5vh;
} */
.slider-wrapper{
  position: relative;
  max-width: 82%;
  margin: 0 auto;
}

.slider{
  display: flex;
  aspect-ratio: 30 / 9; /*default comes with 16/9 but i don't want small one it*/
  overflow-x: hidden;
  scroll-snap-type:x mandatory; 
  scroll-behavior: smooth;
  box-shadow: 1px 1px 5x black;
  border-radius: 0.5rem ;
}

.slider img{
  flex:1 0 100%;
  /* scroll-snap-align: start ; */
  object-fit: cover;
}

.slider-nav{
  display: flex;
  column-gap: 1rem;
  position: absolute;
  bottom:1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index:1;
}

.slider-nav a{
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: white;
  opacity: 0.75;
  transition: opacity ease 250ms;
}

.slider-nav a:hover{
  opacity: 1;
}


.slider {
  animation: slide 2s linear infinite;
}

.givesuport{
  margin-top: 20px;
}
.cardclasss{
  display: flex;
  align-items: center;
  justify-content: center;
}

.cardclasss img{
  max-width: 100%;
  height: auto;
}
.card{
  margin: 20px;
  border-radius: 25px;
  box-shadow: 1px 1px 5px;
  max-width: 200px;
  height: 200px; 
  overflow: hidden;
}

.section-two-text{
  margin-top: 5vh;
  background-color: rgba(230, 132, 3, 0);
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: larger;

}

.bigguy{
  text-overflow: clip;
}

.footbase{
  width:100%;
  height: auto;
}
.leftside{
  background-color: rgba(0, 0, 0, 0);
  height: 100%;
}

.bigguy{
  padding: 5vh 0vh 0vh 6vh;
  font-weight: bold;
}

.lighttext{
  padding-left: 6vh;
  font-size:larger;
  text-align: left;
}

.homesec{
  width:60vh;
  padding-left: 10vh;
}
</style>

