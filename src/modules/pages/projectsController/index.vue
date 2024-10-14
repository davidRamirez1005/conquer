<template>
<div id="inicio-proyectos">
    <div>
      <Banner />
    </div>
    <div>
      <Gallery />
    </div>
    <div>
      <!-- <GalleryTab />478 -->
    </div>
    <div class="PiePages">
      <PiePages />
    </div>
</div>
</template>

<script setup>
import {ref} from 'vue';
import Banner from '../../../shared/components/Banner.vue';
import Gallery from './components/Gallery.vue';
import GalleryTab from './components/GalleryTab.vue';
import PiePages from '../../../shared/components/PiePages.vue';
</script>

<style scoped>

</style>
