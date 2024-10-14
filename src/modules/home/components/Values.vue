<template>
  <div>
    <el-segmented v-model="value" :options="options">
      <template #default="{ item }">
        <div 
          class="flex flex-col items-center gap-2 p-2" 
          style="background-color: gray; color: aliceblue; border-radius: 10px"
          @mouseover="value = item.value"
        >
          <el-icon size="25">
            <component :is="item.icon" />
          </el-icon>
          <div>{{ item.label }}</div>
        </div>
      </template>
    </el-segmented>
    <div class="text-item">
      <p class=" text-lg leading-8 font-semibold">{{ value }}</p>
    </div>
  </div>
</template>
<script setup>
    import { ref, computed } from 'vue'
    import {
    Trophy,
    Medal,
    Finished,
    Checked,
    Opportunity,
    } from '@element-plus/icons-vue'
    import { useLanguageProvider } from '../../../store/useLanguage.js';

    const { translations, language } = useLanguageProvider();

    const value = ref(language.value === 'es' ? 'Nos esforzamos por superar las expectativas en cada proyecto.' : 'We strive to exceed expectations in every project.')

    const options = computed(() => [
        {
            label: language.value === 'es' ? 'Excelencia' : 'Excellence',
            icon: Trophy,
            value: language.value === 'es' ? 'Nos esforzamos por superar las expectativas en cada proyecto.' : 'We strive to exceed expectations in every project.',
        },
        {
            label: language.value === 'es' ? 'Responsabilidad' : 'Responsibility',
            icon: Finished,
            value: language.value === 'es' ? 'Cumplimos con los más altos estándares de seguridad y sostenibilidad.' : 'We adhere to the highest safety and sustainability standards.',
        },
        {
            label: language.value === 'es' ? 'Transparencia' : 'Transparency',
            icon: Medal,
            value: language.value === 'es' ? 'Nos manejamos con integridad en todas nuestras relaciones comerciales.' : 'We act with integrity in all our business relationships.',
        },
        {
            label: language.value === 'es' ? 'Innovación' : 'Innovation',
            icon: Opportunity,
            value: language.value === 'es' ? 'Adaptamos nuestras soluciones a las últimas tendencias y tecnologías del sector.' : 'We adapt our solutions to the latest industry trends and technologies.',
        },
        {
            label: language.value === 'es' ? 'Compromiso con el Cliente' : 'Commitment to the Customer',
            icon: Checked,
            value: language.value === 'es' ? 'Nuestra prioridad es siempre la satisfacción y el éxito de nuestros clientes.' : 'Our priority is always the satisfaction and success of our clients.',
        }
    ]);
</script>
<style>
.el-segmented{
    width: 100%;
    overflow-x: auto;
}
.el-segmented__item-selected{
    background-color: goldenrod !important;
    border-radius: 15px !important;
}
.el-segmented__item:not(.is-disabled):not(.is-selected):hover {
    background-color: transparent !important;
}
.text-item {
    background-color: #c0c0cf;
    padding: 1rem;
    width: 90%;
    justify-content: center;
    align-self: center;
    display: flex;
    margin: 2rem auto;
    border-radius: 15px 50px 15px 40px;
    align-items: center;
}
</style>