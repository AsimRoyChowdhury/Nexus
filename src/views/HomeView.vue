<template>
  <main>
    <div class="hero-section">
      <div class="title-subtitle">
        <div class="title">
          <span id="ne">
            Ne
          </span>
          <div id="x">
            x
            <div class="version">
              2.0
            </div>
          </div>
          <span id="us">
            us
          </span>
        </div>
        <!-- <div class="subtitle">
          unleash your inner wizard
        </div> -->
        <div class="subtitle">
          Your Next Stop for&nbsp;
          <div id="events">&nbsp;</div>
        </div>
        <div class="date">
          <span id="date">06 / 04 / 2025</span>
        </div>
      </div>
      <img id="castle" src="../assets/hogwarts_castle_silhoute.png" />
      <img id="star-background" src="../assets/star_background.jpg" />
    </div>
    <div class="events">
      <div class="title">
        Events
      </div>
      <div class="event-section">
        <div class="event-section-inner">
          <EventCard class="event-card-component" event="CodeQuest" tag="Competitive Coding" :img="codingImg"
            eventName="Coding-Register" />
          <EventCard class="event-card-component" event="Bug Beware" tag="Debugging" :img="debuggingImg"
            eventName="Debugging-Register" />
          <EventCard class="event-card-component" event="Campus Clash" tag="Gaming" :img="gamingImg"
            eventName="Gaming-Register" />
          <EventCard class="event-card-component" event="Webverse" tag="Web Designing" :img="webdesignImg"
            eventName="Web-Designing-Register" />
          <EventCard class="event-card-component" event="TriviaX" tag="Quiz" :img="quizImg" eventName="Quiz-Register" />
        </div>
      </div>
    </div>
    <div class="prizes">
      <div class="title">
        Prizes
      </div>
      <div class="prize-section">
        <PrizeCard class="prize-cards" position="1" title="Gold Winner" money="1000" color="--highlight" />
        <PrizeCard class="prize-cards" position="2" title="Silver Winner" money="500" color="--silver" />
      </div>
    </div>
    <div class="organisers-footer">
      <div class="organisers">
        <div class="filler">Organised by</div>
        <div class="header">Computer Science Department</div>
        <div class="header">Central University of Kerala</div>
        <br>
        <div class="filler">in Collaboration with</div>
        <div class="header">Association of Student in Computational Intelligence</div>
      </div>
      <FooterSection />
    </div>
  </main>
</template>
<script>
import SplitType from 'split-type'
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RegisterButton from "../components/RegisterButton.vue";
import EventCard from "../components/EventCard.vue";
import PrizeCard from "../components/PrizeCard.vue";
import FooterSection from "../components/FooterSection.vue";
import gamingImg from "@/assets/gaming.jpg";
import debuggingImg from "@/assets/debugging.png";
import codingImg from "@/assets/coding.jpg";
import webdesignImg from "@/assets/webdesign.jpg";
import quizImg from "@/assets/quiz.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    RegisterButton,
    EventCard,
    PrizeCard,
    FooterSection,
  },
  data() {
    return {
      debuggingImg,
      codingImg,
      gamingImg,
      webdesignImg,
      quizImg,
    };
  },
  mounted() {

    gsap.registerPlugin(TextPlugin);


    // Parallax effect for star background
    if (window.matchMedia("(pointer: fine)").matches) {
      // Desktop: Move animation based on mouse movement
      window.addEventListener("mousemove", (e) => {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        gsap.to("#star-background", {
          x: x * 70,
          y: y * 70,
        });
      });
    } else {
      // Mobile: Move animation based on device orientation
      window.addEventListener("deviceorientation", (event) => {
        let x = event.gamma;  // Left/Right tilt (-90 to 90)
        let y = event.beta;   // Front/Back tilt (-180 to 180)

        // Normalize values between -1 and 1
        let xNormalized = x / 45; // Dividing by 45 makes it more sensitive
        let yNormalized = y / 90;

        gsap.to("#star-background", {
          x: xNormalized * 100, // Adjust movement strength
          y: yNormalized * 100,
          ease: "power2.out",
        });
      });
    }



    const text = new SplitType('#date', { types: 'char' })

    const textArray = ["Gaming", "Coding", "Debugging", "Web Designing"];
    let index = 0;

    // Blinking cursor effect
    gsap.to("#events", {
      borderRightColor: "transparent",
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    function typeAnimation() {
      const text = textArray[index % textArray.length];

      let tl = gsap.timeline({
        onComplete: () => {
          index++;
          setTimeout(typeAnimation, 0); // Delay before next word starts
        }
      });

      // Type the t ext
      tl.to("#events", {
        text: text,
        duration: text.length * 0.1, // Adjust speed
        ease: "power1.out"
      });

      // Pause
      tl.to("#events", {
        duration: 1
      });

      // Delete the text
      tl.to("#events", {
        text: text.substring(0, 0),
        duration: text.length * 0.05, // Adjust delete speed
        ease: "power1.in"
      });
    }

    // Start typing animation
    typeAnimation();
    // Start animation

    // Hero section animations
    let tl = gsap.timeline();
    tl.from(".hero-section #castle", {
      y: 800,
      duration: 1,
      ease: "back.out(1.7)",
    })
      .from(
        "#ne",
        { y: 100, x: 250, opacity: 0, duration: 1.2, ease: "power3.inOut" },
        "<"
      )
      .from(
        "#us",
        { y: 100, x: -250, opacity: 0, duration: 1.2, ease: "power3.inOut" },
        "<"
      )
      .from(
        "#x",
        { y: 100, opacity: 0, duration: 1.2, ease: "power3.inOut" },
        "<"
      )
      .from(
        ".subtitle",
        { y: 250, opacity: 0, duration: 1, stagger: 1, ease: "power3.inOut" },
        "<"
      )
      .from(
        ".version",
        { y: 200, scale: 0, opacity: 0, duration: 1, stagger: 1, ease: "power3.inOut" },
        "<"
      )

    gsap.from("#date .char", {
      y: 800,
      duration: 1,
      opacity: 0,
      stagger: 0.02,
      ease: "power3.inOut"
    });


    gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "+=200",
        end: "bottom top",
        scrub: 1,
        // markers: true,
      },
    }).to(".hero-section .title", {
      y: 800,
      ease: "power3.inOut"
    }).to("#date .char", {
      y: 800,
      stagger: 0.02,
      ease: "power3.inOut"
    }, "<").to(".hero-section .subtitle", {
      y: 800,
      ease: "power3.inOut"
    }, "<").to(".hero-section .version", {
      scale: 0,
      y: 800,
      ease: "power3.inOut"
    }, "<").to("#castle", {
      y: 800,
    }, "<");

    if (window.innerWidth > 768) {
      let eventTitleY = 800;
      gsap.timeline({
        scrollTrigger: {
          trigger: ".events",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          toggleActions: "play none none none",
          onUpdate: (self) => {
            eventTitleY = gsap.getProperty(".events .title", "y");
          }
        },
      })
        .from(".events .title", {
          y: -800,
          duration: 2
        }).from(
          ".event-card-component",
          {
            x: -100,
            opacity: 0,
            stagger: 0.5,
          },
          ">").to(".event-section-inner", {
            transform: "translateX(-100%)",
            delay: 2,
            scrollTrigger: {
              trigger: ".event-section-inner",
              scroller: "body",
              start: "+=100%",
              end: "+=70%",
              scrub: 2,
            },
          },
            ">+100"
          );

      gsap.timeline({
        scrollTrigger: {
          trigger: ".prizes",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      })
        .fromTo(
          ".events .title",
          { y: () => eventTitleY },
          {
            y: 800,
            scrollTrigger: {
              trigger: ".prizes",
              start: "-=100%",
              end: "top top",
              scrub: 1,
            },
          })
        .from(".prizes .title", {
          y: -800,
          scrollTrigger: {
            trigger: ".prizes",
            start: "-=100%",
            end: "top top",
            scrub: 2,
          },
        }) // New section enter animation
        .from(".prize-section .prize-cards", {
          x: -100,
          opacity: 0,
          stagger: 0.3,
        }, "<")


    } else if (window.innerWidth > 450) {
      let eventTitleY = 800;
      gsap.timeline({
        scrollTrigger: {
          trigger: ".events",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          toggleActions: "play none none none",
          onUpdate: (self) => {
            eventTitleY = gsap.getProperty(".events .title", "y");
          }
        },
      })
        .from(".events .title", {
          y: -800,
          duration: 2
        }).from(
          ".event-card-component",
          {
            x: -100,
            opacity: 0,
            // stagger: 0.5,
          },
          ">").to(".event-section-inner", {
            transform: "translateX(-100%)",
            delay: 2,
            scrollTrigger: {
              trigger: ".event-section-inner",
              scroller: "body",
              start: "+=100%",
              end: "+=70%",
              scrub: 2,
            },
          },
            ">+100"
          );


      gsap.timeline({
        scrollTrigger: {
          trigger: ".prizes",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      })
        .fromTo(
          ".events .title",
          { y: () => eventTitleY },
          {
            y: 800,
            scrollTrigger: {
              trigger: ".prizes",
              start: "-=100%",
              end: "top top",
              scrub: 2,
            },
          })
        .from(".prizes .title", {
          y: -800,
          scrollTrigger: {
            trigger: ".prizes",
            start: "-=100%",
            end: "top top",
            scrub: 2,
          },
        })
        .from(".prize-section .prize-cards", {
          x: -100,
          opacity: 0,
          stagger: 0.5,
        }, "<");


    } else {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".events",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          // markers: true,
          toggleActions: "play none none none",
        },
      }).from(".events .title", {
        y: -800,
        duration: 2,
      })
        .from(".event-card-component", {
          x: -100,
          opacity: 0,
          stagger: 0.5,
        }, ">")
        .to(".event-section-inner", {
          transform: "translateX(-40%)",
          delay: 2,
          scrollTrigger: {
            trigger: ".event-section-inner",
            scroller: "body",
            start: "+=100%",
            end: "+=150",
            scrub: 2,
            // markers: true,
          }
        }, ">+100");


      gsap.timeline({
        scrollTrigger: {
          trigger: ".prizes",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      })

        .from(".prizes .title", {
          y: -800,
          scrollTrigger: {
            trigger: ".prizes",
            start: "-=100%",
            end: "top top",
            scrub: 1,
          },
        }) // New section enter animation
        .from(".prize-section .prize-cards", {
          x: -100,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
        }, "<");
    }


  }
}
</script>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .title-subtitle {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(15rem, 40vw, 22rem);
    text-transform: uppercase;
    letter-spacing: 1.6rem;
    line-height: clamp(15rem, 10vw, 18rem);

    color: hsl(var(--popover));
    font-family: "Bubbler One";
    font-style: normal;
  }

  #ne,
  #us {
    font-size: clamp(10rem, 25vw, 16rem);
  }

  #x {
    position: relative;
  }

  .version {
    position: absolute;
    top: 35%;
    left: 30%;
    font-size: 2rem;
    color: hsl(var(--highlight));
    background: hsl(var(--popover));
    border-radius: 10rem;
    height: 4rem;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat";
    font-weight: 400;
    letter-spacing: 0;
  }

  .subtitle {
    padding: 0rem 5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: clamp(1.5rem, 5vw, 2rem);
    line-height: 2.5rem;
    text-transform: uppercase;
    letter-spacing: clamp(0.5rem, 0.7vw, 1rem);
    color: hsl(var(--popover));
    font-family: "Bubbler One";
    font-weight: 400;

    /* #events-wrapper{
      display: inline-block;
      min-width: 100px;
      text-align: center;
    } */

    #events {
      font-size: clamp(1.5rem, 5vw, 2rem);
      font-weight: bold;
      text-align: center;
      transform-origin: center;
      perspective: 500px;
      color: hsl(var(--highlight));
      border-right: solid hsl(var(--highlight)) 5px;
      text-transform: uppercase;
      font-weight: bold;
      animation: cursor 1s ease-in-out infinite;
      display: inline-block;
      height: 2.3rem;
      text-align: center;
    }
  }

  /* .subtitle2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    line-height: 2rem;
    text-transform: uppercase;
    color: hsl(var(--popover));
    font-family: "Bubbler One";
    font-weight: 400;


  } */

  #castle {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    scale: 1.2;
    filter: brightness(10%);
    /* mix-blend-mode: overlay; */
    opacity: 1;
    z-index: -1;
  }

  #star-background {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    scale: 1.2;
    filter: brightness(20%);
    opacity: 0.8;
    z-index: -10;
  }

  .date {
    font-size: 1.5rem;
    color: white;
    font-family: "Bubbler One";
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
}

.events {
  display: flex;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  .title {
    display: flex;
    rotate: 180deg;
    justify-content: center;
    align-items: center;
    font-size: clamp(5rem, 15vw, 9rem);
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    color: hsl(var(--highlight));
    width: fit-content;
    writing-mode: vertical-lr;
  }


  .event-section {
    display: flex;
    align-items: center;
    overflow: hidden;
    scroll-snap-type: x mandatory;

    .event-section-inner {
      transform: translateX(10%);
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  }

}

.prizes {
  display: flex;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(5rem, 15vw, 9rem);
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    color: hsl(var(--highlight));
    width: fit-content;
    writing-mode: vertical-lr;
    rotate: 180deg;
  }

  .prize-section {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 5rem 0;
    width: 100%;

  }
}

.organisers-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
  height: fit-content;
  overflow: hidden;
  position: relative;

  .organisers {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 80%;
    background: hsl(var(--background));

    .filler {
      font-family: "Bubbler One";
      font-size: clamp(0.8rem, 2vw, 1.5rem);
      font-weight: 400;
      letter-spacing: 0.1rem;
    }

    .header {
      font-family: "Bubbler One";
      color: hsl(var(--highlight));
      font-size: clamp(1.2rem, 3vw, 2.5rem);
      font-weight: 800;
      letter-spacing: 0.2rem;
      line-height: clamp(2.2rem, 3vw, 3rem);
    }
  }
}

@media (max-width: 700px) {
  .hero-section {


    .title {
      font-size: clamp(10rem, 30vw, 15rem);
      letter-spacing: 1rem;
      line-height: clamp(10rem, 20vw, 18rem);
    }

    #ne,
    #us {
      font-size: clamp(6rem, 18vw, 10rem);
    }

    .version {
      font-size: clamp(0.8rem, 3vw, 2rem);
      height: clamp(1.8rem, 6vw, 4rem);
      width: clamp(1.8rem, 6vw, 4rem);
    }

    .subtitle {
      font-size: clamp(1.8rem, 6vw, 5rem);
      line-height: 2.5rem;
      letter-spacing: clamp(0.2rem, 0.5vw, 0.5rem);
      flex-direction: column;

      #events {
        font-size: clamp(1.8rem, 6vw, 5rem);
        height: clamp(1.8rem, 6vw, 5rem);
      }
    }

    .date {
      font-size: clamp(1rem, 3vw, 2rem);
    }


    #castle {
      scale: 2;
      transform: translateY(100px);
    }

    #star-background {
      scale: 2;
    }
  }

  .organisers-footer {
    .organisers {
      .filler {
        font-size: clamp(0.8rem, 2vw, 2rem);
      }

      .header {
        font-size: clamp(1.2rem, 3vw, 3rem);
      }
    }
  }
}

@media (max-width: 550px) {
  .prizes {

    .prize-section {
      flex-direction: column;
      gap: 2rem;
    }
  }
}

@media (max-width: 450px) {
  .hero-section {


    .title {
      font-size: clamp(6rem, 30vw, 10rem);
      letter-spacing: 0.2rem;
      line-height: clamp(5rem, 25vw, 15rem);
    }

    #ne,
    #us {
      font-size: clamp(3rem, 20vw, 5rem);
    }

    .version {
      font-size: clamp(0.4rem, 2vw, 1rem);
      height: clamp(1rem, 6vw, 2rem);
      width: clamp(1rem, 6vw, 2rem);
    }

    .subtitle {
      font-size: clamp(1.2rem, 8vw, 1.8rem);
      line-height: 2rem;
      letter-spacing: clamp(0.2rem, 0.5vw, 0.5rem);
      padding: 0rem 0.5rem;

      #events {
        font-size: clamp(1.2rem, 8vw, 1.8rem);
        height: clamp(1.4rem, 8vw, 1.8rem);
      }
    }


    #castle {
      scale: 2.5;
      transform: translateY(70px);
    }

    .register-button {
      margin-top: 0.2rem;
    }
  }

  .events {
    flex-direction: column;
    align-items: center;
    padding: 5vh 0;

    .title {
      rotate: 0deg;
      writing-mode: horizontal-tb;
      font-size: clamp(3rem, 15vw, 9rem);
    }

    .event-section {
      height: 70vh;

      .event-section-inner {
        transform: translateX(38%);
        height: 70vh;
      }
    }
  }

  .prizes {
    flex-direction: column;
    align-items: center;

    .title {
      rotate: 0deg;
      writing-mode: horizontal-tb;
      font-size: clamp(3rem, 15vw, 9rem);
    }

    .prize-section {
      padding: 0;
      height: 80%;
    }
  }

  .organisers-footer {
    gap: 1rem;

    .organisers {
      height: fit-content;

      .filler {
        font-size: clamp(0.5rem, 4vw, 1rem);
      }

      .header {
        font-size: clamp(0.8rem, 5vw, 2rem);
        line-height: clamp(1rem, 6vw, 2.4rem);
      }
    }
  }

}
</style>
