<template>
    <div class="container-about">
        <div class="row">
            <h2 class="mt-2 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl">{{ translations.sobreNosotros }}</h2>
        </div>
        <div class="row description">
            <div class="col description-col">
                <p class="mt-6 text-lg text-gray-600 leading-8">{{ translations.descripctionAbout }}</p>
            </div>
            <div class="col images-container">
                <div class="image-1">
                    <img src="../../../assets/img/baño2.png" alt="sobrenosotros" class="responsive-img">
                </div>
                <div class="image-2">
                    <img src="../../../assets/img/bañow.png" alt="sobrenosotros" class="responsive-img">
                </div>
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c0c0cf" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,165.3C384,181,480,203,576,197.3C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
</template>

<script setup>
  import { useLanguageProvider } from '../../../store/useLanguage.js';
  
  const { translations, language } = useLanguageProvider();
</script>

<style scoped>
svg{
    margin-top: -2rem;
    z-index: -1;
}
.container-about {
    height: auto;
    background-color: #c0c0cf;
    padding: 2rem;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

p{
    font-weight: 600;
    font-size: 1.3rem;
    z-index: 2;
}
.description {
    display: flex;
    width: 80%;
    flex-wrap: wrap;
}

.description-col {
    display: flex;
    justify-content: center;
    flex: 1;
    padding: 1rem;
    align-items: center;
}

.images-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    max-width: 200px;
    z-index: 1;
}

.image-2 {
    width: 100%;
    max-width: 400px;
}

.responsive-img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 840px) {
    svg{
        margin-top: -1rem;
    }
    p{
        font-weight: 600;
        font-size: 1rem;
    }
    .container-about {
        row-gap: 0rem;
        padding-top: 3rem !important;
        padding: 1rem;
    }

    .description {
        flex-direction: column;
        align-items: center;
        width: 100%;
        row-gap: 0rem;
    }

    .images-container {
        flex-direction: column;
        /* align-items: flex-start; */
        justify-content: center;
    }

    .image-1 {
        position: relative;
        top: 1rem;
        right: -6rem;
        width: 50%;
        max-width: 150px;
    }

    .image-2 {
        width: 100%;
        max-width: 300px;
    }

    .responsive-img {
        max-width: 100%;
    }
}
</style>