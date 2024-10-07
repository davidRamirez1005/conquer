import { useLanguageProvider  } from '../../store/useLanguage';

export default {
    install(app) {
      // No se puede llamar a useLanguageProvider aquí directamente porque puede no estar dentro de un proveedor.
      // Usaremos un mixin global para acceder a las traducciones.
  
      app.mixin({
        computed: {
          translations() {
            const { translations } = useLanguageProvider(); // Se invoca en el contexto de los componentes.
            return translations;
          },
        },
        methods: {
          changeLanguage(lang) {
            const { changeLanguage } = useLanguageProvider(); // Se invoca en el contexto de los componentes.
            changeLanguage(lang);
          },
        },
      });
    },
  };