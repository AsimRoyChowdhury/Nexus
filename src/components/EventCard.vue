<template>
  <div class="card" :style="{ backgroundImage: `url(${img})` }">
    <div class="gradient"></div>
    <div class="card-title">
      {{ event }}
    </div>
    <div class="card-tag">
      {{ tag }}
    </div>
    <!-- <div class="card-desc">
      Max 20 Participants
    </div> -->
    <div class="register-button">
      <RegisterButton />
    </div>
  </div>
</template>
<script>
import defaultImage from '@/assets/debugging.png';
import RegisterButton from './RegisterButton.vue';

export default {
  name: "EventCard",
  props: {
    img: {
      type: String,
      default: defaultImage,
    },
    event: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    }
  },
  components: {
    RegisterButton,
  },
};
</script>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 25rem;
  overflow: hidden;
  position: relative;
  height: 90vh;
  /* border-radius: 20px; */
  background-size: cover;
  background-position: center;
  background-blend-mode: luminosity;
  background-color: hsl(var(--background));

  .gradient {
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.941) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  .card-title {
    z-index: 1;
    font-size: 4rem;
    color: hsl(var(--highlight));
    font-family: "Montserrat";
    line-height: 4rem;
    padding: 0 1rem;

  }

  .card-tag{
    z-index: 1;
    font-size: 1.2rem;
    color: hsla(var(--highlight), 0.5);
    background: hsla(var(--accent));
    width: fit-content;
    border-radius: 2rem;
    font-family: "Raleway";
    font-weight: 500;
    line-height: 2rem;
    margin: 0 1.2rem;
    padding: 0 1rem;
  }

  .card-desc{
    z-index: 1;
    font-size: 1.2rem;
    color: hsla(var(--highlight), 0.5);
    font-family: "Raleway";
    font-weight: 500;
    line-height: 2rem;
    margin: 0 1.2rem;
    /* padding: 0 1rem; */
  }

  .register-button {
    z-index: 1;
  }

}

@media (max-width: 768px) {
  .card {
    width: 20rem;
    height: 70vw;

    .card-title {
      font-size: 3rem;
      line-height: 3rem;
    }

    .card-tag {
      font-size: 0.8rem;
      line-height: 1rem;
      padding: 0.2rem 0.5rem;
    }

    .card-desc {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .register-button {
      margin: 0.5rem 1.2rem;
    }
  }
}

@media (max-width: 500px) {
  .card {
    width: 15rem;
    height: 70vh;

    .card-title {
      font-size: 2rem;
      line-height: 2rem;
    }

    .card-tag {
      font-size: 0.6rem;
      line-height: 0.8rem;
      padding: 0.2rem 0.5rem;
    }

    .card-desc {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }

    .register-button {
      margin: 0.5rem 1rem;
    }
  }
}
</style>
