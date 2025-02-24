<template>
  <button class="button-wrapper">
    <span id="register" @click=register>Register Now</span>
    <div class="arrow">
      <i class="pi pi-arrow-right"></i>
    </div>
  </button>
</template>
<script>
import { gsap } from "gsap";
import SplitType from 'split-type'


export default {
  methods: {
    register() {
      this.$router.push({ name: "Register" });
    },
  },
  mounted() {
    // const text = new SplitType('#register', { types: 'char' })

    // gsap.timeline().from(".button-wrapper", {
    //   opacity: 0,
    //   y: 100,
    //   duration: 1.5,
    //   ease: "power3.inOut",
    // }).from("#register .char", {
    //   y: 100,
    //   duration: 1,
    //   stagger: 0.02,
    //   ease: "power3.inOut"
    // }, ">-1").from(".arrow", {
    //   x: -100,
    //   duration: 1,
    //   ease: "power3.inOut"
    // }, "<")


  }
}
</script>
<style scoped>
.button-wrapper {
  display: flex;
  padding: clamp(0.2rem, 1vw, 0.5rem);
  margin: 1rem;
  background: hsl(var(--highlight));
  border-radius: 10rem;
  border: none;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: clamp(9rem, 20vw, 12rem);
  overflow: hidden;
  transition: background-color 0.2s ease-in;

  &:hover {
    cursor: pointer;
    background: hsl(var(--popover));
  }

  #register {
    font-family: "Bubbler One";
    font-weight: bold;
    font-size: clamp(1rem, 2vw, 1.5rem);
  }

  .arrow {
    background: hsla(var(--card-foreground)/0.5);
    border-radius: 10rem;
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .pi {
      font-size: 1rem;
    }
  }
}

@media (max-width: 768px) {

  .button-wrapper {
    margin: 0;
    width: fit-content;
    padding: 0.2rem 0.5rem;

    #register {
      font-size: 0.8rem;
    }

    .arrow {
      height: 1rem;
      width: 1rem;

      .pi {
        font-size: 0.5rem;
      }
    }
  }
}
</style>
