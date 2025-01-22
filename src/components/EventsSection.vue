<template>
  <main>
    <div class="event-section">
    </div>
  </main>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
export default {
  components: {
  },
  methods: {
  },
  mounted() {
  }
}
</script>
<style scoped>
.event-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;


}

@media (max-width: 700px) {}

@media (max-width: 425px) {}
</style>
