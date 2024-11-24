<template>
  <div id="inicio-proyectos">
    <div class="fade">
      <Banner />
    </div>
    <div class="fade">
      <Gallery />
    </div>
    <div style="display: flex; justify-content: center;">
      <img src="../../../assets/img/logoconquer.png" alt="">
    </div>
    <div class="PiePages fade">
      <PiePages />
    </div>
</div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import Banner from '../../../shared/components/Banner.vue';
import Gallery from './components/Gallery.vue';
import GalleryTab from './components/GalleryTab.vue';
import PiePages from '../../../shared/components/PiePages.vue';

const observeElements = () => {
  const elementsToObserve = document.querySelectorAll('.fade');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

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

</style>
