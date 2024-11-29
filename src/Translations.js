const translations = {
    en: {
      services: "Services",
      caseStudies: "Case Studies",
      packs: "Packs",
      getStarted: "Get Started",
      bannerMain: "Transform products\ninto experiences.",
      bannerSecond: "Connect visually, \nand sell strategically.",
      popUpTittle: "We give you:",
      popUpText: "Our product configurator, Our augmented reality and the 3D model of YOUR product, FREE",
      secondaryBanner: "Titulo en Ingles"
    },
    es: {
      services: "Servicios",
      caseStudies: "Casos de Estudio",
      packs: "Packs",
      getStarted: "Quiero Comenzar",
      bannerMain: "Transforma productos\nen experiencias.",
      bannerSecond: "Conecta visualmente, \n y vende estrategicamente.",
      popUpTittle: "TE REGALAMOS:",
      popUpText: "Nuestro configurador de producto, Nuestra realidad aumentada y el modelo 3D de TU producto, GRATIS",
      secondaryBanner: "Estadísticas de Beneficios de trabajar con nosotros con números llamativos"
    },
  };
  
  export const translate = (key, language) => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    console.warn(`Translation missing for key "${key}" in language "${language}"`);
    return key;
  };
  
  export default translations;
  