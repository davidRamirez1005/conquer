<template>
<div id="inicio-servicios">
    <div>
      <Banner />
    </div>
    <div class="section-main">
      <SectionMain />
    </div>
    <div class="obraBlanca">
      <div>
        <ObraBlanca />
      </div>
      <div class="cont-2">
        <Limpieza />
      </div>
    </div>
    <div class="PiePages">
      <PiePages />
    </div>
</div>
</template>

<script setup>
import {ref} from 'vue';
import Banner from '../../../shared/components/Banner.vue';
import SectionMain from './components/SectionMain.vue';
import ObraBlanca from './components/ObraBlanca.vue';
import Limpieza from './components/Limpieza.vue';
import PiePages from '../../../shared/components/PiePages.vue';

import { useLanguageProvider } from '../../../store/useLanguage.js';

const { translations, language } = useLanguageProvider();

</script>
<style scoped>
.cont-2{
    margin-top: -10rem
}
@media (max-width: 800px){
    .cont-2{
      margin-top: -3rem
    }
}
</style>
