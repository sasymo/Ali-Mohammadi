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
      project1Title: "SmartVoice IVI System",
      project1Text: "Led the development of a modular voice assistant for in-car infotainment systems at SemVox GmbH. Designed custom interaction flows and integrated context-aware dialogue handling using in-house Java frameworks.",
      project2Title: "Personal Finance Assistant (Python, Flask)",
      project2Text: "Built a lightweight back-end service to track expenses and provide spending insights via voice commands. Focused on clean API design, session handling, and deployment using Docker.",
      project3Title: "TaskFlow – Voice-Controlled To-Do App",
      project3Text: "Created a prototype app integrating a voice assistant with task management logic. Users could add, update, and query tasks hands-free. Used Spring Boot and a custom command parser.",
      project4Title: "CI/CD Automation for Voice Assistant Testing",
      project4Text: "Automated the testing workflow for voice assistant components using GitHub Actions and Python test scripts. Improved development speed and consistency across multiple project branches.",
      // Skills section
      skills: "🛠️ Skills Overview",
      languages: "Languages",
      frameworks: "Frameworks",
      tools: "Tools",
      work: "💼 Work Experience",
      workText: "Currently working at SemVox GmbH in Saarbrücken<br> designing voice assistant systems using the company’s proprietary framework and creating user-friendly experiences.",
      education: "🎓 Education",
      educationText: "Bachelor of Science in Communication and Computer Science<br>HTW Saar, Saarbrücken",
      contact: "🔗 Contact & Social",
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
      project1Title: "SmartVoice IVI System",
      project1Text: "Leitete die Entwicklung eines modularen Sprachassistenten für Infotainmentsysteme im Auto bei SemVox GmbH. Entwarf benutzerdefinierte Interaktionsabläufe und integrierte kontextbewusste Dialogbehandlung unter Verwendung firmeneigener Java-Frameworks.",
      project2Title: "Personal Finance Assistant (Python, Flask)",
      project2Text: "Erstellte einen leichten Backend-Service zur Verfolgung von Ausgaben und zur Bereitstellung von Ausgabenanalysen per Sprachbefehlen. Fokus auf saubere API-Entwicklung, Sitzungsmanagement und Bereitstellung mit Docker.",
      project3Title: "TaskFlow – Sprachgesteuerte To-Do-App",
      project3Text: "Erstellte eine Prototyp-App, die einen Sprachassistenten mit Aufgabenmanagement-Logik integriert. Benutzer konnten Aufgaben freihändig hinzufügen, aktualisieren und abfragen. Verwendet wurden Spring Boot und ein benutzerdefinierter Befehlsparser.",
      project4Title: "CI/CD-Automatisierung für Sprachassistenten-Tests",
      project4Text: "Automatisierte den Testworkflow für Sprachassistenten-Komponenten mit GitHub Actions und Python-Testskripten. Verbesserte die Entwicklungsgeschwindigkeit und Konsistenz über mehrere Projektzweige hinweg.",
      // Skills section
      skills: "🛠️ Fachliche Kenntnisse",
      languages: "Sprachen",
      frameworks: "Frameworks",
      tools: "Werkzeuge",
      work: "💼 Berufserfahrung",
      workText: "Derzeit arbeite ich bei SemVox GmbH in Saarbrücken<br> entwickle Sprachassistenzsysteme mit dem firmeneigenen Framework und erstelle benutzerfreundliche Erlebnisse.",
      education: "🎓 Studium",
      educationText: "Bachelor of Science in Kommunikationsinformatik<br>HTW Saar, Saarbrücken",
      contact: "🔗 Kontakt & Social",
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
    // Update Skills Section
    document.getElementById('skills-title').textContent = translations[lang].skills;
    document.getElementById('languages-title').textContent = translations[lang].languages;
    document.getElementById('frameworks-title').textContent = translations[lang].frameworks;
    document.getElementById('tools-title').textContent = translations[lang].tools;
    document.getElementById('work-title').textContent = translations[lang].work;
    document.getElementById('work-text').innerHTML = translations[lang].workText;
    document.getElementById('education-title').textContent = translations[lang].education;
    document.getElementById('education-text').innerHTML = translations[lang].educationText;
    document.getElementById('contact-title').textContent = translations[lang].contact;
    document.getElementById('github-link').innerHTML = '<i class="fab fa-github"></i> ' + translations[lang].github;
    document.getElementById('linkedin-link').innerHTML = '<i class="fab fa-linkedin"></i> ' + translations[lang].linkedin;
    document.getElementById('email-link').innerHTML = '<i class="fas fa-envelope"></i> ' + translations[lang].email;
    document.getElementById('footer').innerHTML = translations[lang].footer;

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
