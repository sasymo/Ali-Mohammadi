document.addEventListener("DOMContentLoaded", function () {
  // ===== Fade-in effect =====
  const faders = document.querySelectorAll('.fade-in-section');
  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // ===== Theme Toggle =====
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = toggleBtn.querySelector('i');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      icon.classList.replace('fa-moon', 'fa-sun');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
    }
  });

  // ===== Language Toggle =====
  let currentLang = 'en';
  const langBtn = document.getElementById('lang-toggle');
  const translations = {
    en: {
      title: "Hi, I'm a Software Engineer",
      intro: "Currently building voice assistant systems at Semvox GmbH, Saarbrücken",
      resume: "Download My Resume (PDF)",
      button: "DE",
      professionalSummary: "👔 Profile",
      professionalSummaryText: "I'm a software engineer with 2+ years of experience specializing in Java and voice assistance technologies. I currently work at SemVox GmbH, designing intelligent, user-friendly voice assistant systems using in-house frameworks. I also have experience in Python and enjoy creating back-end services that are simple, scalable, and easy to maintain.",
      // Projects section
      projectsTitle: "🏗️ Projects",
      project1Title: "In-Car Medical Voice Assistant",
      project1Text: "Assisted to a driver monitoring system by implementing logic to evaluate vital sign data (e.g., heart rate, facial temperature) against medical history and predefined thresholds. Developed intelligent behavior within a Java-agent-based framework to trigger context-aware driving recommendations and promote road safety.",
      project2Title: "Empathic In-Car Voice Assistant",
      project2Text: "Worked on the development of an empathic in-car voice assistant that provided quick, voice-based answers from the entire car manual. The assistant used a camera to detect the driver’s facial expressions and automatically rephrased or enhanced responses (e.g., with images) if negative emotions were detected. Responsible for implementing key features, including the re-answering mechanism triggered by user dissatisfaction.",
      project3Title: "Intent-to-Car Command Conversion",
      project3Text: "Contributed to a project using Rasa and GPT models to identify user intents from voice commands. Developed the logic to convert recognized intents into executable car commands, and implemented the communication with the in-car server to transmit and trigger those commands within the vehicle system.",
      project4Title: "Desktop Interface for GPT Integration",
      project4Text: "Assisted in a project focused on integrating GPT-based language models into our software solution to enhance user interaction through natural language understanding. My primary responsibility was designing and implementing a desktop GUI using JavaFX, ensuring a responsive and user-friendly interface for interacting with the GPT integration.",
      project5Title: "Integration of Rule-Based ML for Driver Emotion Detection",
      project5Text: "Contributed to a machine learning project that generated rules to detect driver emotions based on data like car speed, road conditions, traffic, and weather. I integrated these rules into a Java-based AI framework, which used real-time sensor data to recognize when certain conditions were met and provided helpful suggestions to the driver based on their likely emotional state.",
      // Skills section
      skills: "🛠️ Skills",
      programmingLanguages: "Languages",
      frameworks: "Frameworks",
      tools: "Tools",
      work: "💼 Work Experience",
      workText: "Designing voice assistant systems using the company’s proprietary framework.<br><strong>Semvox GmbH, Saarbrücken</strong><br><br>Working student developing microservices in Java.<br><strong>DHC Business Solutions, Saarbrücken</strong><br><br>Working student writing Java code for individual customer requirements.<br><strong>eurodata AG, Saarbrücken</strong>",
      education: "🎓 Education",
      educationText: "Bachelor of Science in Communication and Computer Science<br><strong>HTW Saar, Saarbrücken</strong><br><br>Master of Science in Artificial Intelligence<br><strong>University of Example, Berlin</strong>",
      languages: {
        title: "🌍 Languages",
        persian: {
          title: "🇮🇷 Persian",
          skill: "Native speaker"
        },
        german: {
          title: "🇩🇪 German",
          skill: "Proficient (B2)"
        },
        english: {
          title: "🇬🇧 English",
          skill: "Intermediate (B1)"
        }
      },
      contact: "🔗 Contact",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      footer: "© YEAR – Looking for my next adventure. Feel free to get in touch</a>."
    },
    de: {
      title: "Hallo, ich bin Softwareentwickler",
      intro: "Derzeit entwickle ich Sprachassistenzsysteme bei der Semvox GmbH in Saarbrücken",
      resume: "Lebenslauf herunterladen (PDF)",
      button: "EN",
      professionalSummary: "👔 Profil",
      professionalSummaryText: "Ich bin ein Softwareentwickler mit mehr als 2 Jahren Erfahrung in Java und Sprachassistenztechnologien. Zurzeit arbeite ich bei SemVox GmbH, entwickle intelligente, benutzerfreundliche Sprachassistenzsysteme mit firmeneigenen Frameworks. Ich habe auch Erfahrung in Python und freue mich, skalierbare und einfach zu wartende Backend-Dienste zu erstellen.",
      // Projects section
      projectsTitle: "🏗️ Projekte",
      project1Title: "In-Car Medizinischer Sprachassistent",
      project1Text: "Arbeitete an einem Fahrassistenzsystem, das Vitalwerte wie Herzfrequenz und Gesichtstemperatur überwacht. Entwickelte und implementierte Logik zur Analyse von Sensordaten in Kombination mit der medizinischen Historie des Fahrers. Nutze ein Java-Agenten-Framework, um sprachbasierte Sicherheitshinweise basierend auf Gesundheitszustand und Fahrbedingungen zu geben.",
      project2Title: "Empathischer In-Car Sprachassistent",
      project2Text: "Arbeitete an der Entwicklung eines empathischen In-Car Sprachassistenten, der schnelle, sprachbasierte Antworten aus dem gesamten Handbuch des Fahrzeugs lieferte. Der Assistent nutzte eine Kamera zur Erkennung der Gesichtsausdrücke des Fahrers und formulierte Antworten automatisch um oder ergänzte diese (z.B. mit Bildern), wenn negative Emotionen erkannt wurden. Verantwortlich für die Implementierung wichtiger Funktionen, einschließlich des Mechanismus für die erneute Beantwortung, der bei Unzufriedenheit des Nutzers ausgelöst wurde.",
      project3Title: "Intent-zu-Fahrzeugbefehl Umsetzung",
      project3Text: "Mitwirkung an einem Projekt, das Rasa- und GPT-Modelle zur Erkennung von Benutzerintentionen aus Sprachbefehlen nutzte. Entwickelte die Logik zur Umwandlung erkannter Intentionen in ausführbare Fahrzeugbefehle und implementierte die Kommunikation mit dem Fahrzeugsystem, um diese Befehle zu übertragen und auszuführen.",
      project4Title: "Desktop-Oberfläche für GPT-Integration",
      project4Text: "Mitgewirkt an einem Projekt zur Integration von GPT-basierten Sprachmodellen in unsere Softwarelösung, um die Benutzerinteraktion durch natürliche Sprachverarbeitung zu verbessern. Meine Hauptaufgabe bestand in der Gestaltung und Implementierung einer Desktop-GUI mit JavaFX, die eine reaktionsschnelle und benutzerfreundliche Schnittstelle zur GPT-Integration bietet.",
      project5Title: "Integration regelbasierter ML zur Erkennung von Fahreremotionen",
      project5Text: "Mitwirkung an einem Machine-Learning-Projekt, das Regeln zur Erkennung von Fahreremotionen auf Basis von Daten wie Fahrzeuggeschwindigkeit, Straßenverhältnissen, Verkehr und Wetter generierte. Ich integrierte diese Regeln in ein Java-basiertes KI-Framework, das Echtzeit-Sensordaten analysierte, um bestimmte Bedingungen zu erkennen und dem Fahrer darauf basierende hilfreiche Empfehlungen zu geben.",
      // Skills section
      skills: "🛠️ Fachliche Kenntnisse",
      programmingLanguages: "Sprachen",
      frameworks: "Frameworks",
      tools: "Werkzeuge",
      work: "💼 Berufserfahrung",
      workText: "Entwicklung von Sprachassistenzsystemen mit dem firmeneigenen Framework.<br><strong>Semvox GmbH, Saarbrücken</strong><br><br>Werkstudent in der Entwicklung von Microservices mit Java.<br><strong>DHC Business Solutions, Saarbrücken</strong><br><br>Werkstudent zur Umsetzung individueller Kundenanforderungen in Java.<br><strong>eurodata AG, Saarbrücken</strong>",
      education: "🎓 Studium",
      educationText: "Bachelor of Science in Kommunikationsinformatik<br><strong>HTW Saar, Saarbrücken</strong><br><br>Master of Science in Künstlicher Intelligenz<br><strong>Universität Beispiel, Berlin</strong>",
      languages: {
        title: "🌍 Sprachen",
        persian: {
          title: "🇮🇷 Persisch",
          skill: "Muttersprachler"
        },
        german: {
          title: "🇩🇪 Deutsch",
          skill: "Fortgeschritten (B2)"
        },
        english: {
          title: "🇬🇧 Englisch",
          skill: "Mittelstufe (B1)"
        }
      },
      contact: "🔗 Kontakt",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-Mail",
      footer: "© YEAR – Auf der Suche nach meinem nächsten Herausforderung. Melde dich gerne bei mir</a>."
    }
  };  

  function changeLanguage(lang) {
    document.getElementById('title-text').textContent = translations[lang].title;
    document.getElementById('intro-text').textContent = translations[lang].intro;
    document.getElementById('resume-text').textContent = translations[lang].resume;
    langBtn.textContent = translations[lang].button;
  
    // Extended fields
    document.getElementById('professional-summary-title').textContent = translations[lang].professionalSummary;
    document.getElementById('professional-summary-text').innerHTML = translations[lang].professionalSummaryText;
    // Update Projects Section
    document.getElementById('projects-summary-title').textContent = translations[lang].projectsTitle;
    document.getElementById('project1-title').textContent = translations[lang].project1Title;
    document.getElementById('project1-text').innerHTML = translations[lang].project1Text;
    document.getElementById('project2-title').textContent = translations[lang].project2Title;
    document.getElementById('project2-text').innerHTML = translations[lang].project2Text;
    document.getElementById('project3-title').textContent = translations[lang].project3Title;
    document.getElementById('project3-text').innerHTML = translations[lang].project3Text;
    document.getElementById('project4-title').textContent = translations[lang].project4Title;
    document.getElementById('project4-text').innerHTML = translations[lang].project4Text;
    document.getElementById('project5-title').textContent = translations[lang].project5Title;
    document.getElementById('project5-text').innerHTML = translations[lang].project5Text;
    // Update Skills Section
    document.getElementById('skills-title').textContent = translations[lang].skills;
    document.getElementById('programming-languages-title').textContent = translations[lang].programmingLanguages;
    document.getElementById('frameworks-title').textContent = translations[lang].frameworks;
    document.getElementById('tools-title').textContent = translations[lang].tools;
    document.getElementById('work-title').textContent = translations[lang].work;
    document.getElementById('work-text').innerHTML = translations[lang].workText;
    document.getElementById('education-title').textContent = translations[lang].education;
    document.getElementById('education-text').innerHTML = translations[lang].educationText;

    // Languages
    const languageData = translations[lang].languages;
    document.getElementById('languages-title').textContent = languageData.title;

    const languageIds = ['persian', 'german', 'english'];
    
    languageIds.forEach(language => {
      document.getElementById(`${language}-title`).textContent = languageData[language].title;
      document.getElementById(`${language}-skills`).innerHTML = `<li>${languageData[language].skill}</li>`;
    });

    document.getElementById('contact-title').textContent = translations[lang].contact;
    document.getElementById('github-link').innerHTML = '<i class="fab fa-github"></i> ' + translations[lang].github;
    document.getElementById('linkedin-link').innerHTML = '<i class="fab fa-linkedin"></i> ' + translations[lang].linkedin;
    document.getElementById('email-link').innerHTML = '<i class="fas fa-envelope"></i> ' + translations[lang].email;
    document.getElementById('footer').innerHTML = translations[lang].footer;


  console.log("Changing language to:", lang);
  console.log("Found element:", document.getElementById('programming-languages-title'));

    // Change the resume download link based on language
    const resumeLink = document.getElementById('resume-link');
    if (lang === 'en') {
        resumeLink.href = 'resume-en.pdf';  // English resume
    } else if (lang === 'de') {
        resumeLink.href = 'resume-de.pdf';  // German resume
    }

    // ===== Dynamic Year Injection in Footer =====
    const year = new Date().getFullYear();
    const footerHTML = translations[lang].footer.replace("YEAR", year);
    document.getElementById('footer').innerHTML = footerHTML;
  }  

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'de' : 'en';
    changeLanguage(currentLang);
  });

  // Initial button label
  changeLanguage(currentLang);
});
