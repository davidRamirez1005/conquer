<template>
  <div>
    <div class="redirigir-contacto" @click="scrollToContact">
      <i class="fas fa-phone-alt"></i>
    </div>
    <div>
      <Banner />
    </div>
    <div>
      <SectionMain />
    </div>
    <div>
      <Highlights />
    </div>
    <div id="aboutUs">
      <aboutUs />
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue";
import Banner from "./components/Banner.vue";
import SectionMain from "./components/SectionMain.vue";
import Highlights from "./components/Highlights.vue";
import aboutUs from "./components/AboutUs.vue";
import VueMultiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css';

const scrollToContact = () => {
  const contactSection = document.getElementById('section-contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};


</script>

<style scoped>
.redirigir-contacto {
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  font-size: 2.1rem;
  color: #E3B100;
  cursor: pointer;
  z-index: 999;
}
</style>
