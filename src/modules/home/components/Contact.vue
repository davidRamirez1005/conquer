<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1a202c" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,165.3C384,181,480,203,576,197.3C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  <div class="bg-gray-900 text-gray-100 p-8 shadow-lg container-contact">
    <!-- Título de la sección -->
    <h2 class="mt-2 text-3xl font-bold tracking-tight text-white mb-8 sm:text-4xl text-center">{{translations.contacto}}</h2>
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/3 mb-8 md:mb-0">
        <!-- Información de contacto -->
        <div class="mt-12 text-center">
          <p class="text-lg font-semibold mb-2">{{translations.direccion}}</p>
          <p class="text-gray-400">SW 6th St, Miami, FL 33130</p>
    
          <p class="text-lg font-semibold mt-6 mb-2">{{translations.telefono}}</p>
          <p class="text-gray-400">+1 (786) 553-2320</p>
    
          <p class="text-lg font-semibold mt-6 mb-2">{{translations.correo}}</p>
          <p class="text-gray-400">joseroa7725@gmail.com</p>
        </div>
      </div>
      <div class="md:w-2/3">
        <div class="formulario">
          <form action="">
            <div class="mb-4">
              <label for="name" class="block text-lg font-semibold mb-2">{{translations.nombre}}</label>
              <input
                type="text"
                id="name"
                class="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-lg font-semibold mb-2">{{translations.correo}}</label>
              <input
                type="email"
                id="email"
                class="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-lg font-semibold mb-2">{{translations.mensaje}}</label>
              <textarea
                id="message"
                class="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full py-2 bg-gray-700 text-white font-semibold rounded hover:bg-gray-500 transition-all duration-300 ease-in-out"
            >
              {{translations.enviar}}
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- Redes Sociales -->
    <div class="flex justify-center mt-8 space-x-6">
      <a
        href="https://www.instagram.com"
        target="_blank"
        class="text-gray-400 hover:text-white text-2xl transition-all duration-300 ease-in-out"
      >
        <i class="fab fa-instagram"></i>
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        class="text-gray-400 hover:text-white text-2xl transition-all duration-300 ease-in-out"
      >
        <i class="fab fa-facebook"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useLanguageProvider } from '../../../store/useLanguage.js';

const { translations, language } = useLanguageProvider();
</script>

<style scoped>
svg{
  margin-top: -10rem;
  z-index: -1;
}
.container-contact {
  background-color: #1a202c;
}

button {
padding: 3rem;
}

@media (max-width: 840px) {
.flex-col {
  flex-direction: column-reverse;
}
svg{
  margin-top: -3rem;
  z-index: -1;
  margin-bottom: -1rem;
}
}
</style>