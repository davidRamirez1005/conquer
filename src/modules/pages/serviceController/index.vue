<template>
<div id="inicio-servicios">
    <div class="fade">
      <Banner />
    </div>
    <div class="section-main fade">
      <SectionMain />
    </div>
    <div class="obraBlanca ">
      <div class="fade">
        <ObraBlanca />
      </div>
      <div class="cont-2 fade">
        <Limpieza />
      </div>
    </div>
    <div class="PiePages fade">
      <PiePages />
    </div>
</div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import Banner from '../../../shared/components/Banner.vue';
import SectionMain from './components/SectionMain.vue';
import ObraBlanca from './components/ObraBlanca.vue';
import Limpieza from './components/Limpieza.vue';
import PiePages from '../../../shared/components/PiePages.vue';

import { useLanguageProvider } from '../../../store/useLanguage.js';

const { translations, language } = useLanguageProvider();

const observeElements = () => {
  const elementsToObserve = document.querySelectorAll('.fade');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-visible');
        observer.unobserve(entry.target); // Dejar de observar después de mostrar
      }
    });
  }, { threshold: 0.2 }); // Detecta cuando el 20% del elemento es visible

  elementsToObserve.forEach(element => observer.observe(element));
};

onMounted(() => {
  observeElements();
});

</script>
<style scoped>

.fade {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .fade-visible {
    opacity: 1;
    transform: translateY(0);
  }

.cont-2{
    margin-top: -10rem
}

@media (max-width: 800px){
    .cont-2{
      margin-top: -3rem
    }
}
</style>
