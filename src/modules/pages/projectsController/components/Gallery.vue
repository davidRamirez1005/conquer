<template>
<div>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4 container-gallery">
      <div class="grid gap-4">
        <div>
          <img
            class="max-w-full rounded-lg object-cover object-center"
            src="../../../../assets/img/img15.png"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
          class="h-auto max-w-full rounded-lg object-cover object-center"
            src="../../../../assets/img/img5.png"
            alt="gallery-photo"
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                  <p class="title">{{ translations.despues }}</p>
                  <img
                    class="h-auto max-w-full rounded-lg object-cover object-center"
                    src="../../../../assets/img/img1.png"
                    alt="gallery-photo"
                  />
              </div>
              <div class="flip-card-back">
                  <p class="title">{{ translations.antes }}</p>
                  <img
                    class="h-auto max-w-full rounded-lg object-cover object-center "
                    src="../../../../assets/img/img2.png"
                    alt="gallery-photo"
                  />
              </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                  <p class="title">{{ translations.despues }}</p>
                  <img
                    class="h-auto max-w-full rounded-lg object-cover object-center"
                    src="../../../../assets/img/img3.png"
                    alt="gallery-photo"
                  />
              </div>
              <div class="flip-card-back">
                  <p class="title">{{ translations.antes }}</p>
                  <img
                    class="h-auto max-w-full rounded-lg object-cover object-center "
                    src="../../../../assets/img/img4.png"
                    alt="gallery-photo"
                  />
              </div>
          </div>
        </div>
      </div>
      <div class="grid gap-4">
        <div class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                  <p class="title">{{ translations.despues }}</p>
                  <img
                    class="h-auto max-w-full rounded-lg object-cover object-center"
                    src="../../../../assets/img/img8.png"
                    alt="gallery-photo"
                  />
              </div>
              <div class="flip-card-back">
                  <p class="title">{{ translations.antes }}</p>
                  <img
                    class="h-auto max-w-full rounded-lg object-cover object-center "
                    src="../../../../assets/img/img9.png"
                    alt="gallery-photo"
                  />
              </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                  <p class="title">{{ translations.despues }}</p>
                  <img
                    class="h-auto max-w-full rounded-lg object-cover object-center"
                    src="../../../../assets/img/img13.png"
                    alt="gallery-photo"
                  />
              </div>
              <div class="flip-card-back">
                  <p class="title">{{ translations.antes }}</p>
                  <img
                    class="h-auto max-w-full rounded-lg object-cover object-center "
                    src="../../../../assets/img/img11.png"
                    alt="gallery-photo"
                  />
              </div>
          </div>
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg object-cover object-center"
            src="../../../../assets/img/img10.png"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg object-cover object-center"
            src="../../../../assets/img/img14.png"
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>
</div>
</template>

<script setup>
import { useLanguageProvider } from '../../../../store/useLanguage.js';

const { translations } = useLanguageProvider();
</script>

<style scoped>
.container-gallery{
  margin: 3rem;
}

.flip-card {
  background-color: transparent;
  perspective: 1000px;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 100%;
  height: 95%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 1rem;
}

.flip-card-front {
  background: linear-gradient(120deg, #CACACA 60%, rgb(167, 167, 167) 88%,
     rgb(227, 227, 227) 40%, #1a202c 48%);
  color: 08034f;
}

.flip-card-back {
  background: linear-gradient(120deg, #1a202c 30%, #1f2736 88%,
     bisque 40%, #CACACA 78%);
  color: white;
  transform: rotateY(180deg);
}

@media (max-width: 800px){
    .container-gallery{
      margin: 0.5rem;
      margin-bottom: 4rem;
    }
}
</style>
