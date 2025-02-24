<template>
  <div class="prize" :style="{ borderColor: formattedColor }">
    <div class="logo-date">
      <div class="logo" :style="{ background: formattedColor }">
        {{ position }}
      </div>
      <div class="date" :style="{ color: formattedColor }">
        6 Mar <br> 2025
      </div>
    </div>
    <div class="title-desc">
      <div class="prize-title" :style="{ color: formattedColor }">
        {{ title }}
      </div>
      <span class="desc" :style="{ color: formattedColor }">Win Prizes Worth</span>
      <span class="money" :style="{ background: formattedColor }">₹{{ money }}</span>
    </div>
    <div class="uni" :style="{ color: formattedColor }">
      Central University of <br>Kerala
    </div>
  </div>

</template>
<script>
export default {
  name: "PrizeCard",
  props: {
    position: {
      type: Number,
      required: true,
    },
    money: {
      type: [Number, String],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedColor() {
      return this.color ? `hsl(var(${this.color}))` : (this.color || "black");
    }

  }
};
</script>
<style scoped>
.prize {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  border: 1px solid;
  padding: 1rem;
  border-radius: 1rem;
  height: clamp(25rem, 25vw, 40rem);
  width: clamp(20rem, 20vw, 30rem);
  justify-content: space-between;

  .logo-date {
    display: flex;
    justify-content: space-between;
    align-items: center;


    .logo {
      font-size: 3rem;
      font-family: "Bubbler One";
      font-weight: 400;
      width: 4rem;
      height: 4rem;
      text-align: center;
      line-height: 4rem;
      border-radius: 1rem;
      color: hsl(var(--background));
    }

    .date {
      font-size: 1rem;
      font-family: "Bubbler One";
      font-weight: 400;
      letter-spacing: 0.2rem;
      text-align: end;
    }
  }

  .title-desc {
    display: flex;
    flex-direction: column;


    .prize-title {
      writing-mode: horizontal-tb;
      rotate: 0deg;
      font-family: "Bubbler One";
      font-size: 2rem;
    }

    .desc {
      font-size: 1rem;
      font-family: "Bubbler One";
      font-weight: 400;
      letter-spacing: 0.1rem;
    }

    .money {
      font-size: 2rem;
      font-family: "Montserrat";
      font-weight: 400;
      letter-spacing: 0.2rem;
      padding: 0 0.5rem;
      width: fit-content;
      color: hsl(var(--background));
      border-radius: 0.5rem;
    }
  }

  .uni {
    font-size: 1rem;
    font-family: "Bubbler One";
    font-weight: 400;
    letter-spacing: 0.1rem;
  }
}

@media (max-width: 768px) {
  .prize {
    height: clamp(15rem, 40vw, 40rem);
    width: clamp(10rem, 30vw, 30rem);

    .logo-date {
      .logo {
        font-size: 2rem;
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
      }

      .date {
        font-size: 0.8rem;
      }
    }

    .title-desc {
      .prize-title {
        font-size: clamp(0.8rem, 2vw, 1.5rem);
      }

      .desc {
        font-size: clamp(0.6rem, 1.2vw, 1rem);
      }

      .money {
        font-size: clamp(0.8rem, 2vw, 1.5rem);
      }
    }

    .uni {
      font-size: clamp(0.6rem, 1.2vw, 1rem);
    }
  }
}
</style>
