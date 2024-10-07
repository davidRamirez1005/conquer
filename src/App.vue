<template>
	<component :is="layout" />
  </template>
  
  <script setup>
  import { computed, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import defaultLayout from './shared/layouts/default.vue';
  import { useLanguage } from './store/useLanguage.js';
  
  useLanguage();
  
  const layouts = {
	default: defaultLayout,
  };
  
  const route = useRoute();
  
  const layout = computed(() => {
	if (route?.name && route?.meta?.layout) return layouts[route.meta.layout];
	else return layouts.default;
  });
  
  watch(route, () => {
	if (route.meta) {
	  document.title = 'Conquer - Building - ' + (route.meta.title || 'Home');
	} else {
	  document.title = 'Home';
	}
  }, {
	immediate: true,
	deep: true,
  });
  </script>
  