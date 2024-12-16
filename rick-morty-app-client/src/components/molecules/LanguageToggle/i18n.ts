import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      header: {
        welcomeMessage: "Change language to:",
        title: "Rick and Morty App",
        themeToggle: "Change page theme to:",
        lightMode: "Light",
        darkMode: "Dark",
      },
      homePage: {
        title: "Rick and Morty App",
        content:
          "Explore characters, locations, and episodes from the Rick and Morty universe.",
        goToAboutButton: "Go to About This Page",
        currentValue: "Current Value: ",
        incrementButton: "Increment",
        decrementButton: "Decrement",
        incrementBy5Button: "Increment by 5",
      },
      aboutPage: {
        header: "About This App",
        cardText: "This app leverages the Rick and Morty API to provide:",
        listGroupItem1: "Character information",
        listGroupItem2: "Episode details",
        listGroupItem3: "Locations across the universe",
      },
      notFoundPage: {
        text: "Oops! The page you're looking for doesn't exist.",
        goHomeButton: "Go Back Home",
      },
    },
  },
  es: {
    translation: {
      header: {
        welcomeMessage: "Cambiar idioma a:",
        title: "Aplicación de Rick y Morty",
        themeToggle: "Cambie el tema de su sitio web a:",
        lightMode: "Claro",
        darkMode: "Oscuro",
      },
      homePage: {
        title: "Aplicación de Rick y Morty",
        content:
          "Explora personajes, lugares y episodios del universo de Rick y Morty.",
        goToAboutButton: "Ir a Acerca de esta página",
        currentValue: "Valor Actual: ",
        incrementButton: "Incremento",
        decrementButton: "Decremento",
        incrementBy5Button: "Incrementar por 5",
      },
      aboutPage: {
        header: "Acerca de esta aplicación",
        cardText:
          "Esta aplicación aprovecha la API de Rick y Morty para proporcionar:",
        listGroupItem1: "Información del personaje",
        listGroupItem2: "Detalles del episodio",
        listGroupItem3: "Ubicaciones a lo largo del universo",
      },
      notFoundPage: {
        text: "¡Ups! La página que estás buscando no existe.",
        goHomeButton: "Vuelve a casa",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
