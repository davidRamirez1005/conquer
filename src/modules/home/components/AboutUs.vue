<template>
    <div class="container-about">
        <div class="row">
            <h2 class="mt-2 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl">{{ translations.sobreNosotros }}</h2>
        </div>
        <div class="row">
            <div class="col">
                <p>{{ translations.descripctionAbout }}</p>
            </div>
            <div class="col">
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
  import { useLanguageProvider } from '../../../store/useLanguage.js';
  
  const { translations, language } = useLanguageProvider();
</script>

<style scoped>
.container-about {
    height: auto;
    background-color: #c0c0cf;
    padding: 2rem;
}
</style>
