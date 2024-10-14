<template>
    <div class="bg-gray-900 text-gray-100 p-8 shadow-lg container-contact">
      <div class="flex flex-col justify-center md:flex-row">
        <div class="justify-center md:w-1/3 mb-8 md:mb-0">
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
  import { useLanguageProvider } from '../../store/useLanguage.js';
  
  const { translations, language } = useLanguageProvider();
  </script>
  
  <style scoped>
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