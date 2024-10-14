<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-2.5 p-1.5">
          <span class="sr-only">{{ translations.companyName }}</span>
          <img class="h-12 w-auto" src="../../assets/img/logo.png" alt="logo" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <router-link 
          v-for="item in navigation" 
          :key="item.name" 
          :to="item.href" 
          @click.prevent="handleScroll(item.name)" 
          class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-5 text-gray-900 hover:bg-gray-50">
          {{ translations[item.name] }}
        </router-link>
        <Popover class="relative">
          <PopoverButton class="flex items-center text-gray-700">
            <span class="sr-only">Change Language</span>
            <GlobeAltIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
          <PopoverPanel class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="py-1">
                  <a href="#" @click="changeLanguage('es')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <i class="fa-solid fa-flag"></i> Español
                  </a>
                  <a href="#" @click="changeLanguage('en')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <i class="fa-solid fa-flag-usa"></i> English
                  </a>
                </div>
          </PopoverPanel>
        </Popover>
      </PopoverGroup>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel style="height: 60% !important;" class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">{{ translations.companyName }}</span>
            <img class="h-12 w-auto" src="../../assets/img/logo.png" alt="logo" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <router-link 
                v-for="item in navigation" 
                :key="item.name" 
                :to="item.href" 
                @click.prevent="handleScroll(item.name)" 
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-5 text-gray-900 hover:bg-gray-50">
                {{ translations[item.name] }}
              </router-link>
              <Popover class="relative">
                <PopoverButton class="flex items-center text-gray-700">
                  <span class="sr-only">Change Language</span>
                  <GlobeAltIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
                <PopoverPanel class="rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="py-1">
                  <a href="#" @click="changeLanguage('es'); mobileMenuOpen = false" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <i class="fa-solid fa-flag"></i> Español
                  </a>
                  <a href="#" @click="changeLanguage('en'); mobileMenuOpen = false" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <i class="fa-solid fa-flag-usa"></i> English
                  </a>
                </div>
              </PopoverPanel>
              </Popover>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
  GlobeAltIcon,
} from '@heroicons/vue/24/outline'
import { useLanguageProvider } from '../../store/useLanguage.js';

const mobileMenuOpen = ref(false);
const router = useRouter();
const route = useRoute();

const navigation = [
  { name: 'home', href: '/' },
  { name: 'aboutUs', href: '/' },
  { name: 'services', href: '/servicios' },
  { name: 'projects', href: '/proyectos' },
  { name: 'contactUs', href: '/' },
];

const handleScroll = (name) => {

  if (name === 'contactUs') {
    router.push('/').then(() => {
      const contactSection = document.getElementById('contactos');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  if (name === 'services') {
    router.push('/servicios').then(() => {
      const contactSection = document.getElementById('inicio-servicios');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  if (name === 'projects') {
    router.push('/proyectos').then(() => {
      const contactSection = document.getElementById('inicio-proyectos');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  if (name === 'aboutUs') {
    router.push('/').then(() => {
      const aboutUsSection = document.getElementById('aboutUs');
      if (aboutUsSection) {
        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
};

const { translations, changeLanguage } = useLanguageProvider();
</script>
