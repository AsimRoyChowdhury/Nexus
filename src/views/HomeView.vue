<template>
  <main>
    <div class="hero-section">
      <div class="title-subtitle">
        <div class="title">
          <span id="ne">
            Ne
          </span>
          <span id="x">
            x
          </span>
          <span id="us">
            us
          </span>
        </div>
        <div class="subtitle">
          unleash your inner wizard
        </div>
        <div class="register-button">
          <RegisterButton />
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
          <EventCard class="event-card-component" />
          <EventCard class="event-card-component" />
          <EventCard class="event-card-component" />
          <EventCard class="event-card-component" />
        </div>
      </div>
    </div>
    <div class="circle">
    </div>
    <div style="min-height: 100vh;">
    </div>
  </main>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RegisterButton from "../components/RegisterButton.vue";
import EventCard from "../components/EventCard.vue";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    RegisterButton,
    EventCard,
  },
  mounted() {
    // Parallax effect for star background
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", (e) => {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        gsap.to("#star-background", {
          x: x * 70,
          y: y * 70,
        });
      });
    }

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
      );


    gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "+=200",
        end: "bottom top",
        scrub: 1,
        // markers: true,
      },
    }).to(".hero-section .title", {
      y: 600,
    }).to(".hero-section .subtitle", {
      y: 600,
    }, "<").to(".hero-section .register-button", {
      y: 600,
    }, "<").to("#castle", {
      y: 800,
    }, "<");


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
        // duration: 4,
        stagger: 0.5,
      }, ">")
      .to(".event-section-inner", {
        transform: "translateX(-30%)",
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

    gsap.to(".circle", {
      width: "100rem",
      height: "100rem",
      transform: "translateX(-49.5vw)",
      scrollTrigger: {
        trigger: ".events",
        start: "bottom 30%",
        end: "bottom top",
        scrub: 1,
        markers: true,
        pin: true,
      },
    });
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(15rem, 40vw, 22rem);
    text-transform: uppercase;
    letter-spacing: 1.6rem;
    line-height: clamp(18rem, 40vw, 20rem);

    color: hsl(var(--popover));
    font-family: "Bubbler One";
    font-style: normal;
  }

  #ne,
  #us {
    font-size: clamp(10rem, 25vw, 16rem);
  }

  .subtitle {
    padding: 0rem 5rem;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 2.5rem;
    text-transform: uppercase;
    letter-spacing: clamp(0.5rem, 1vw, 2rem);
    color: hsl(var(--popover));
    font-family: "Bubbler One";
    font-weight: 400;
    ;
  }

  #castle {
    position: absolute;
    transform: translateY(70px);
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

  .register-button {
    margin-top: 1rem;
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
      transform: translateX(20%);
      display: flex;
      gap: 2rem;
      align-items: center;
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

    .subtitle {
      font-size: clamp(1.8rem, 6vw, 5rem);
      line-height: 2.5rem;
      letter-spacing: clamp(0.2rem, 0.5vw, 0.5rem);
    }


    #castle {
      scale: 2;
      transform: translateY(100px);
    }

    #star-background {
      scale: 2;
    }
  }
}

@media (max-width: 425px) {
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

    .subtitle {
      font-size: clamp(1.2rem, 8vw, 1.8rem);
      line-height: 2rem;
      letter-spacing: clamp(0.2rem, 0.5vw, 0.5rem);
      padding: 0rem 0.5rem;
    }


    #castle {
      scale: 2.5;
      transform: translateY(70px);
    }

    .register-button {
      margin-top: 0.2rem;
    }
  }
}
</style>
