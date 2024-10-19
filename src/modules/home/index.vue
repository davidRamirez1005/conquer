<template>
  <div>
    <div id="home" class="redirigir-contacto" @click="scrollToContact">
      <i class="fas fa-phone-alt"></i>
    </div>
    <div class="fade">
      <Banner />
    </div>
    <div class="fade">
      <SectionMain />
    </div>
    <div class="fade">
      <Highlights />
    </div>
    <div id="aboutUs" class="aboutUs fade"></div>
    <div class="fade">
      <aboutUs />
    </div>
    <div class="container-misionvision fade">
      <VisionMision />
    </div>
    <div class="conatiner-values fade">
      <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">{{ translations.valores }}</h2>
      <div class="values">
        <Values />
      </div>
    </div>
    <div class="fade">
      <hr class="my-8 border-t-2 border-gray-300 border-dashed" />
    </div>
    <div class="container fade">
      <div>
        <h2 class="mt-2 mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">{{ translations.testimonios }}</h2>
      </div>
      <div class="testimonials-wrapper">
        <Testimonials 
          :image="cocina3" 
          title="Ana Rodriguez" 
          :description="translations.testimonio1"
        />
        <Testimonials 
          :image="bañoPersona" 
          title="Javier Lopez" 
          :description="translations.testimonio2"
        />
        <Testimonials 
          :image="baño4" 
          title="Christian Mendoza" 
          :description="translations.testimonio3"
        />
      </div>
    </div>
    <br>
    <br>
    <br>
    <div class="contacto fade" id="contactos">
      <Contact />
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue";
import Banner from "../../shared/components/Banner.vue";
import SectionMain from "./components/SectionMain.vue";
import Highlights from "./components/Highlights.vue";
import aboutUs from "./components/AboutUs.vue";
import VisionMision from "./components/VisionMision.vue";
import Testimonials from "./components/Testimonials.vue";
import Values from "./components/Values.vue";
import Contact from "./components/Contact.vue";
import VueMultiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css';
import { useLanguageProvider } from '../../store/useLanguage.js';
import cocina3 from '../../assets/img/cocina3.png';
import baño4 from '../../assets/img/baño4.png';
import bañoPersona from '../../assets/img/bañoPersona.png';

const { translations } = useLanguageProvider();

const scrollToContact = () => {
  const contactSection = document.getElementById('contactos');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

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
.redirigir-contacto {
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  font-size: 2.1rem;
  color: #E3B100;
  cursor: pointer;
  z-index: 999;
}
hr {
  border: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, #11085c, transparent);
  margin: 3rem 0;
  margin-top: 5rem
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
}

.testimonials-wrapper {
  display: flex;
  gap: 6rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.values{
  margin-top: 3rem;
}
.conatiner-values{
  margin-top: 5rem;
}
.contacto{
  margin-top: 5rem;
}
.container-misionvision{
  margin-top: -5rem;
}
@media (max-width: 600px) {
  .testimonials-wrapper {
    gap: 4rem;
    width: 19rem;
  }
}

@media (max-width: 800px) {
  hr {
    margin-top: 3rem
  }
  .container {
    margin-top: 0rem;
  }
  .conatiner-values{
    margin-top: 2rem;
  }
  .container-misionvision{
  margin-top: 0rem;
}
}
</style>
