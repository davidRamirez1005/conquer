<template>
    <div class="bg-white py-8 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7" style="color: #E3B100;">{{ translations.destacados }}</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ translations.EverythingYouNeed }}</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">{{ translations.Description }}</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div v-for="feature in features" :key="feature.name" class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg" style="background-color: #08034f;">
                  <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {{ feature.name }}
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/vue/24/outline';
  import { useLanguageProvider } from '../../../store/useLanguage.js';
  import { computed } from 'vue';
  
  const { translations, language } = useLanguageProvider();
  
  const features = computed(() => [
    {
      name: language.value === 'es' ? 'Obra Blanca y Acabados' : 'White Work and Finishes',
      description: language.value === 'es' 
        ? 'Nos especializamos en la construcción de interiores y acabados que combinan funcionalidad y estilo.' 
        : 'We specialize in the construction of interiors and finishes that combine functionality and style.',
      icon: CloudArrowUpIcon,
    },
    {
      name: language.value === 'es' ? 'Limpieza y Mantenimiento Locativo' : 'Cleaning and Locative Maintenance',
      description: language.value === 'es' 
        ? 'Ofrecemos soluciones completas para el cuidado y la higiene de tus instalaciones.' 
        : 'We offer complete solutions for the care and hygiene of your facilities.',
      icon: LockClosedIcon,
    },
    {
      name: language.value === 'es' ? 'Mantenimiento Preventivo' : 'Preventive Maintenance',
      description: language.value === 'es' 
        ? 'Nos aseguramos de que tu infraestructura se mantenga en óptimas condiciones a través de servicios preventivos y correctivos.' 
        : 'We ensure that your infrastructure remains in optimal condition through preventive and corrective services.',
      icon: ArrowPathIcon,
    },
  ]);
  </script>
  