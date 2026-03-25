

// TRaaducciones 
const translations = {
    es: {
        about_title_menu:"Sobre mí",
        skills_title_menu:"Habilidades",
        projects_title_menu:"Proyectos",
        exp_title_menu:"Experiencia",
        contact_title_menu:"Contacto",
        info_1: "Hola, yo soy",
        info_2: "Desarrollador Web y Android",
        info_3:"Desarrollo aplicaciones móviles web y android enfocadas en educación, administración y soluciones prácticas para usuarios reales.",
        button_dowland:"Descargar CV",
        info_4:"Soy desarrollador junior con enfoque en aplicaciones Android y desarrollo web frontend.Tengo experiencia creando sistemas conectados a bases de datos, aplicaciones móviles con funcionalidades reales y proyectos orientados a resolver problemas concretos.",
        info_5:"Además, cuento con experiencia enseñando tecnología, lo que refuerza mi capacidad para comunicar ideas técnicas de forma clara y estructurada.",
        about_title_section:"Sobre mí",
        skills_title_section:"Habilidades",
        skills_info_1:"Desarrollo móvil",
        skills_info_2:"Java (Android Studio)",
        skills_info_3:"Login y validaciones",
        skills_info_4:"Reconocimiento de voz",
        skills_info_5:"Uso de sensores",
        skills_info_6:"Integración IoT",
        skills_info_7:"Desarrollo web",
        skills_info_8:"HTML, CSS, JavaScript",
        skills_info_9:"Boostrap",
        skills_info_10:"CRUD con MySQL",
        skills_info_11:"Formularios y validaciones",
        skills_info_12:"Bases de datos",
        skills_info_13:"MySQL",
        skills_info_14:"Modelo entidad-relación",
        skills_info_15:"Consultas y mantenimiento",
        projects_title_section:"Proyectos",
        projects_info_1:"App Android - Comercio directo",
        projects_info_2:"Aplicación Android enfocada en eliminar intermediarios mediante conexión directa entre productores y compradores.",
        projects_info_3:"Tienda Online – Papelería",
        projects_info_4:"Desarrollo completo de una tienda online conectada a base de datos MySQL, incluyendo diseño y operaciones CRUD.",
        projects_info_5:"Sistema de registro de estudiantes",
        projects_info_6:"Sistemas web con diseño entidad-relación, consultas SQL y mantenimiento de datos",
        projects_info_7:"MySQL · Backend · Diseño BD",
        projects_info_8:"Inventario – Boutique",
        projects_info_9:" Sistema de control de productos con interfaz amigable y base de datos relacional.",
        projects_info_10:"Arduino IoT – Automatización",
        projects_info_11:"Lectura de voltaje y control de LEDs mediante app móvil y Arduino IoT Cloud.",
        projects_info_12:"Arduino · IoT · Sensores",
        exp_title_section:"Experiencia",
        exp_info_1:"Residente – LANIA (6 meses)",
        exp_info_2:"Participé en la reestructuración y mantenimiento de una plataforma web institucional, realizando ajustes de contenido, estructura y funcionamiento general del sistema.",
        exp_info_3:"Contacto",
        exp_info_4:"Estoy interesado en oportunidades junior remotas, presenciales o híbridas.",
    },


    en:{
        about_title_menu:"About",
        skills_title_menu:"Skills",
        projects_title_menu:"Projects",
        exp_title_menu:"Experience",
        contact_title_menu:"Contact",
        info_1: "Hi, I am",
        info_2: "Android & Web Developer",
        info_3:"I develop mobile and web applications focused on education, management, and practical solutions for real users.",
        button_dowland:"Download CV",
        info_4:"I am a junior developer specializing in Android applications and frontend web development. I have experience creating database-connected systems, mobile applications with real-world functionality, and projects designed to solve specific problems.",
        info_5:"In addition, I have experience teaching technology, which strengthens my ability to communicate technical ideas in a clear and structured manner.",
        about_title_section:"About",
        skills_title_section:"Skills",
        skills_info_1:"Movil Development",
        skills_info_2:"Java (Android Studio)",
        skills_info_3:"Login y validations",
        skills_info_4:"Voice recognition",
        skills_info_5:"Use of sensors",
        skills_info_6:"IoT Integration",
        skills_info_7:"Web Developtment",
        skills_info_8:"HTML, CSS, JavaScript",
        skills_info_9:"Boostrap",
        skills_info_10:"CRUD with MySQL",
        skills_info_11:"Forms and Validations",
        skills_info_12:"Data Bases",
        skills_info_13:"MySQL",
        skills_info_14:"Entity-relationship model",
        skills_info_15:"Consultations and maintenance",
        projects_title_section:"Projects",
        projects_info_1:"Android App - Direct Commerce",
        projects_info_2:"Android application focused on eliminating intermediaries through direct connection between producers and buyers.",
        projects_info_3:"Online Store – Stationery",
        projects_info_4:"Complete development of an online store connected to a MySQL database, including design and CRUD operations.",
        projects_info_5:"Student registration system",
        projects_info_6:"Web systems with entity-relationship design, SQL queries, and data maintenance",
        projects_info_7:"MySQL · Backend · Diseño BD",
        projects_info_8:"Inventory – Boutique",
        projects_info_9:"Product control system with user-friendly interface and relational database",
        projects_info_10:"Arduino IoT – Automation",
        projects_info_11:"Voltage reading and LED control via mobile app and Arduino IoT Cloud.",
        projects_info_12:"Arduino · IoT · Sensors",
        exp_title_section:"Experience",
        exp_info_1:"Resident – ​​LANIA (6 months)",
        exp_info_2:"I participated in the restructuring and maintenance of an institutional web platform, making adjustments to the content, structure and general operation of the system.",
        exp_info_3:"Contacto",
        exp_info_4:"I am interested in remote, on-site, or hybrid junior opportunities. ",
    }







}

//Funcion para cambiar el idioma
function changeLanguage(lang) {

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {

        const key = element.getAttribute("data-i18n");

        element.textContent = translations[lang][key];

    });

    localStorage.setItem("language", lang);
}


// Para cargar en el DOM
document.addEventListener("DOMContentLoaded", () => {

    const savedLang = localStorage.getItem("language") || "es";

    changeLanguage(savedLang);

});

