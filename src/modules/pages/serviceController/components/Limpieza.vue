<template>
    <div>
        <div class="row container-obra">
            <div class="col-4 p-5 cont-i">
                <h1 class="mb-5 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">{{translations.tituloLimpieza}}</h1>
                <div>
                    <p class="text-center" style="color: #4a5568;">{{ translations.descripcionLimpieza }}</p>
                </div>
            </div>
            <div class="col">
                <div class="container mx-auto p-4 cont-cards">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="col bg-white shadow-lg rounded-lg p-6 relative">
                            <div class="icon-container">
                                <i class="fas fa-broom text-white"></i>
                            </div>
                            <h2 class="mt-2 font-bold tracking-tight text-gray-700 text-center">{{translations.limpiezacomercial}}</h2>
                            <div>
                                <p>{{ translations.descripcionLimpiezacomercial }}</p>
                            </div>
                        </div>
                    <div class="col bg-white shadow-lg rounded-lg p-6 relative">
                        <div class="icon-container">
                            <i class="fas fa-tools text-white"></i>
                        </div>
                        <h2 class="mt-2 font-bold tracking-tight text-gray-700 text-center">{{ translations.mantenimiento }}</h2>
                        <div>
                            <p>{{ translations.descripcionMantenimiento }}</p>
                        </div>
                    </div>
                    <div class="col bg-white shadow-lg rounded-lg p-6 relative">
                        <div class="icon-container">
                            <i class="fas fa-cogs text-white"></i>
                        </div>
                        <h2 class="mt-2 font-bold tracking-tight text-gray-700 text-center">{{ translations.gestion }}</h2>
                        <div>
                            <p>{{ translations.descripciongestion }}</p>
                        </div>
                    </div>
                    <div class="col bg-white shadow-lg rounded-lg p-6 relative">
                        <div class="icon-container">
                            <i class="fas fa-recycle text-white"></i>
                        </div>
                        <h2 class="mt-2 font-bold tracking-tight text-gray-700 text-center">{{ translations.limipiezaAreas }}</h2>
                        <div>
                            <p>{{ translations.descripcionLimipiezaAreas }}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c0c0cf" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,165.3C384,181,480,203,576,197.3C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div class="row container-beneficios">
            <h1 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center">{{ translations.beneficios }}</h1>
            <div class="row cont-ben">
                <div class="col-4 cont-img">
                    <img src="../../../../assets/img/Group.png" alt="">
                </div>
                <div class="col cont-ul p-4">
                    <ul class="list-disc list-inside">
                    <li class="flex items-center mb-4">
                        <i class="fas fa-check-circle text-green-500 mr-2"></i>
                        {{ translations.ambienteslimpios }}
                    </li>
                    <li class="flex items-center mb-4">
                        <i class="fas fa-check-circle text-green-500 mr-2"></i>
                        {{ translations.mantenimientoPreventivo }}
                    </li>
                    <li class="flex items-center mb-4">
                        <i class="fas fa-check-circle text-green-500 mr-2"></i>
                        {{ translations.optimizacion }}
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script setup>
    import { ref } from 'vue';
    import { useLanguageProvider } from '../../../../store/useLanguage.js';
    
    const { translations } = useLanguageProvider();
    </script>
    
    <style scoped>
    h2{
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    p{
        font-size: 1.2rem;
    }
    li{
        font-size: 1.2rem;  
    }
    .cont-img{
        display: flex;
        justify-content: end;
    }
    img{
        width: 70%;
    }
    .cont-ul{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container-obra{
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        padding-top: 5rem;
        row-gap: 2rem;
        align-items: center;
        border-radius: 10px;
        background-color: #c0c0cf;
        position: relative;
        z-index: 2;
    }
    svg{
        position: relative;
        top: -7rem;
    }
    .container-beneficios{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        padding-top: 5rem;
        row-gap: 2rem;
        border-radius: 10px;
        position: relative;
        top: -18rem;
    }
    .icon-container {
      position: absolute;
      top: -1rem;
      left: -1rem;
      background-color: #4a5568;
      padding: 0.5rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
    }
    
    @media (max-width: 800px) {
        .cont-i{
            width: 100%;
        }
        .container-obra{
            flex-direction: column;
            padding-top: 0rem;
            padding: 0rem;
        }
    
        .container-beneficios{
            top: -6rem;
        }
        .cont-cards{
            top: -3rem;
            position: relative;
        }
        svg{
            top: -1rem;
        }
        .cont-ben{
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-content: center;
            align-items: center;
            flex-wrap: wrap;
        }
        img{
            width: 100% !important;
        }
    }
    </style>
    