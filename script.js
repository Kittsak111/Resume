// Typing Effect
const typingTexts = ['AI / ML Engineer', 'Deep Learning Developer', 'Full-Stack Developer', 'Flutter Developer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');

function typeEffect() {
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    
    // Image Toggle Functionality
    const toggleBtn = document.getElementById('toggleImageBtn');
    const profileImg = document.getElementById('mainProfileImg');
    const images = ['IMG/Student_New.png', 'IMG/JOB_IMAG_1MB.jpg'];
    let currentImageIndex = 0;

    if (toggleBtn && profileImg) {
        toggleBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            profileImg.style.opacity = '0';
            profileImg.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                profileImg.src = images[currentImageIndex];
                profileImg.style.opacity = '1';
                profileImg.style.transform = 'scale(1)';
            }, 200);
        });
    }
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.querySelector('i').classList.toggle('fa-bars');
    navToggle.querySelector('i').classList.toggle('fa-times');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.querySelector('i').classList.add('fa-bars');
        navToggle.querySelector('i').classList.remove('fa-times');
    });
});

// Navbar scroll effect - subtle shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.transform = 'translateX(-50%) translateY(-5px)';
    } else {
        navbar.style.transform = 'translateX(-50%)';
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Language Toggle =====
const translations = {
    th: {
        // Hero Section
        greeting: "Hi, my name is",
        heroDescription: "นักศึกษาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยวลัยลักษณ์ มีความสนใจใน",
        contactBtn: "ติดต่อผม",
        projectsBtn: "ดูผลงาน",
        changePhoto: "เปลี่ยนรูป",
        
        // About Section
        aboutTag: "เกี่ยวกับผม",
        aboutIntro: "นักศึกษาชั้นปีที่ 3 คณะวิศวกรรมคอมพิวเตอร์ ที่มีความสนใจอย่างลึกซึ้งในด้านปัญญาประดิษฐ์ (AI) และนวัตกรรมเพื่อสุขภาพ (HealthTech) โดยเฉพาะการประยุกต์ใช้การประมวลผลสัญญาณทางชีวภาพ (EEG) และ Generative AI (LLMs) เพื่อยกระดับคุณภาพชีวิตของผู้สูงอายุ ผมกำลังมองหาโอกาสในการฝึกงานสหกิจศึกษาในตำแหน่ง AI Engineer หรือ Full Stack Developer เพื่อนำทักษะด้านการพัฒนาโมเดล Deep Learning และการสร้างแอปพลิเคชันบนหลากหลายแพลตฟอร์ม (ทั้ง Web และ Mobile) มาใช้ในการสร้างสรรค์นวัตกรรมที่ใช้งานได้จริงและสร้างประโยชน์ต่อสังคม",
        highSchool: "High School (มัธยมศึกษาตอนปลาย)",
        juniorHigh: "Junior High School (มัธยมศึกษาตอนต้น)",
        primarySchool: "Primary School (ประถมศึกษา)",
        
        // Skills Section
        skillsTag: "ทักษะ",
        
        // Experience Section
        expTag: "ประสบการณ์",
        
        // Projects Section
        projectsTag: "ผลงาน",
        miniProjectTitle: "มินิโปรเจคที่น่าสนใจ",
        
        // 2-Bit ALU Project
        aluDesc: "การออกแบบหน่วยประมวลผลทางตรรกะและคณิตศาสตร์ขนาด 2 บิต",
        aluFeature1: "รองรับการบวก, ลบ, AND, OR, XOR และการเปรียบเทียบค่า",
        aluFeature2: "ใช้ IC 74LS08, 74LS32, 74LS86 ร่วมกับ 74151 Multiplexer",
        aluFeature3: "ตรวจสอบด้วย Truth Tables และทดสอบบน Breadboard",
        aluFeature4: "วิเคราะห์และแก้ไขปัญหาการเดินสายวงจรที่ซับซ้อน",
        
        // ML Weather Project
        weatherDesc: "การจำลองการพยากรณ์อากาศเชิงพื้นที่ (นครศรีธรรมราช) ด้วย Machine Learning",
        goalLabel: "เป้าหมาย",
        weatherGoal: "พัฒนาแบบจำลองเพื่อเพิ่มประสิทธิภาพความเร็วในการประมวลผลสภาพอากาศ",
        resultLabel: "ผลลัพธ์",
        
        // Cancer Cell Project
        cancerTitle: "Cancer Cell Colony Detection | Deep Learning (กำลังพัฒนา)",
        cancerDesc: "ระบบวิเคราะห์และวัดขนาดกลุ่มเซลล์มะเร็งด้วย Deep Learning เพื่อช่วยลดภาระงานและเพิ่มความแม่นยำในการวิเคราะห์ผลทางห้องปฏิบัติการ",
        cancerGoal: "ตรวจจับ นับจำนวนและวัดขนาดกลุ่มเซลล์มะเร็ง (Cancer Cell Colonies) จากภาพกล้องจุลทรรศน์",
        cancerPipeline: "ใช้ CVAT สำหรับ Image Annotation กำหนดขอบเขตเซลล์อย่างแม่นยำ",
        cancerModel: "ฝึกสอนโมเดล YOLO เพื่อตรวจจับและวัดขนาดกลุ่มเซลล์มะเร็ง",
        cancerAugment: "แก้ปัญหา Image Variability ให้โมเดลทำงานได้ดีในสภาวะแสงต่างกัน",
        
        // Activities Section
        activitiesTag: "กิจกรรม",
        
        // Contact Section
        contactDesc: "สามารถติดต่อผมได้จากช่องทางดังต่อไปนี้"
    },
    en: {
        // Hero Section
        greeting: "Hi, my name is",
        heroDescription: "Computer Engineering student at Walailak University, interested in",
        contactBtn: "Contact Me",
        projectsBtn: "View Projects",
        changePhoto: "Change Photo",
        
        // About Section
        aboutTag: "About Me",
        aboutIntro: "A 3rd-year Computer Engineering student with a deep interest in Artificial Intelligence (AI) and HealthTech innovation, particularly in applying biosignal processing (EEG) and Generative AI (LLMs) to enhance the quality of life for the elderly. I am seeking a cooperative education internship as an AI Engineer or Full Stack Developer to apply my skills in Deep Learning model development and cross-platform application development (Web and Mobile) to create real-world innovations that benefit society.",
        highSchool: "High School",
        juniorHigh: "Junior High School",
        primarySchool: "Primary School",
        
        // Skills Section
        skillsTag: "Skills",
        
        // Experience Section
        expTag: "Experience",
        
        // Projects Section
        projectsTag: "Projects",
        miniProjectTitle: "Interesting Mini Projects",
        
        // 2-Bit ALU Project
        aluDesc: "2-bit Arithmetic Logic Unit design project",
        aluFeature1: "Supports ADD, SUB, AND, OR, XOR and comparison operations",
        aluFeature2: "Built with IC 74LS08, 74LS32, 74LS86 and 74151 Multiplexer",
        aluFeature3: "Verified with Truth Tables and tested on Breadboard",
        aluFeature4: "Analyzed and solved complex wiring issues",
        
        // ML Weather Project
        weatherDesc: "Regional weather prediction simulation (Nakhon Si Thammarat) using Machine Learning",
        goalLabel: "Goal",
        weatherGoal: "Develop a model to improve weather processing speed and efficiency",
        resultLabel: "Result",
        
        // Cancer Cell Project
        cancerTitle: "Cancer Cell Colony Detection | Deep Learning (In Development)",
        cancerDesc: "Cancer cell colony analysis and measurement system using Deep Learning to reduce workload and improve accuracy in laboratory analysis",
        cancerGoal: "Detect, count, and measure cancer cell colonies from microscope images",
        cancerPipeline: "Use CVAT for precise cell boundary Image Annotation",
        cancerModel: "Train YOLO model for cancer cell colony detection and measurement",
        cancerAugment: "Solve Image Variability issues for better performance in different lighting conditions",
        
        // Activities Section
        activitiesTag: "Activities",
        
        // Contact Section
        contactDesc: "You can contact me through the following channels"
    }
};

let currentLang = 'th';

function toggleLanguage() {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    const t = translations[currentLang];
    
    // Update language button - show the OTHER language (what it will switch to)
    const nextLang = currentLang === 'th' ? 'EN' : 'TH';
    document.querySelector('.lang-current').textContent = nextLang;
    document.getElementById('lang-toggle').title = currentLang === 'th' ? 'Switch to English' : 'Switch to Thai';
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
    
    // Hero Section
    const greeting = document.querySelector('.greeting');
    if (greeting) greeting.textContent = t.greeting;
    
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) heroDesc.innerHTML = `${t.heroDescription} <strong>AI/ML, Deep Learning, Web & Mobile Development</strong>`;
    
    const contactBtn = document.querySelector('.btn-primary');
    if (contactBtn) contactBtn.innerHTML = `<i class="fas fa-envelope"></i> ${t.contactBtn}`;
    
    const projectsViewBtn = document.querySelector('.btn-secondary');
    if (projectsViewBtn) projectsViewBtn.innerHTML = `<i class="fas fa-folder-open"></i> ${t.projectsBtn}`;
    
    const toggleImgBtn = document.getElementById('toggleImageBtn');
    if (toggleImgBtn) toggleImgBtn.title = t.changePhoto;
    
    // Section Tags
    const sectionTags = document.querySelectorAll('.section-tag');
    sectionTags.forEach((tag, index) => {
        if (index === 0) tag.textContent = t.aboutTag;
        if (index === 1) tag.textContent = t.skillsTag;
        if (index === 2) tag.textContent = t.expTag;
        if (index === 3) tag.textContent = t.projectsTag;
        if (index === 4) tag.textContent = t.activitiesTag;
    });
    
    // About Intro
    const aboutIntro = document.querySelector('.about-intro');
    if (aboutIntro) aboutIntro.textContent = t.aboutIntro;
    
    // Education items
    const educationItems = document.querySelectorAll('.education-item p');
    educationItems.forEach((item, index) => {
        if (index === 1) item.textContent = t.highSchool;
        if (index === 2) item.textContent = t.juniorHigh;
        if (index === 3) item.textContent = t.primarySchool;
    });
    
    // Mini Projects Title
    const miniTitle = document.querySelector('.mini-project-title');
    if (miniTitle) miniTitle.innerHTML = `<i class="fas fa-lightbulb"></i> ${t.miniProjectTitle}`;
    
    // 2-Bit ALU Project
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards[1]) {
        const aluDescEl = projectCards[1].querySelector('p');
        if (aluDescEl) aluDescEl.textContent = t.aluDesc;
        
        const aluFeatures = projectCards[1].querySelectorAll('.feature');
        if (aluFeatures[0]) aluFeatures[0].innerHTML = `<i class="fas fa-check-circle"></i><strong>Arithmetic & Logic Operations</strong> - ${t.aluFeature1}`;
        if (aluFeatures[1]) aluFeatures[1].innerHTML = `<i class="fas fa-check-circle"></i><strong>Hardware Implementation</strong> - ${t.aluFeature2}`;
        if (aluFeatures[2]) aluFeatures[2].innerHTML = `<i class="fas fa-check-circle"></i><strong>Verification & Testing</strong> - ${t.aluFeature3}`;
        if (aluFeatures[3]) aluFeatures[3].innerHTML = `<i class="fas fa-check-circle"></i><strong>Problem Solving</strong> - ${t.aluFeature4}`;
    }
    
    // ML Weather Project
    if (projectCards[2]) {
        const weatherDescEl = projectCards[2].querySelector('p');
        if (weatherDescEl) weatherDescEl.textContent = t.weatherDesc;
        
        const featureItems = projectCards[2].querySelectorAll('.feature-item');
        if (featureItems[0]) {
            featureItems[0].querySelector('strong').textContent = t.goalLabel;
            featureItems[0].querySelector('.feature-content span').textContent = t.weatherGoal;
        }
        if (featureItems[2]) {
            featureItems[2].querySelector('strong').textContent = t.resultLabel;
        }
    }
    
    // Cancer Cell Project
    if (projectCards[3]) {
        const cancerTitleEl = projectCards[3].querySelector('h3');
        if (cancerTitleEl) cancerTitleEl.textContent = t.cancerTitle;
        
        const cancerDescEl = projectCards[3].querySelector('p');
        if (cancerDescEl) cancerDescEl.textContent = t.cancerDesc;
        
        const cancerFeatures = projectCards[3].querySelectorAll('.feature-item');
        if (cancerFeatures[0]) {
            cancerFeatures[0].querySelector('strong').textContent = t.goalLabel;
            cancerFeatures[0].querySelector('.feature-content span').textContent = t.cancerGoal;
        }
        if (cancerFeatures[1]) {
            cancerFeatures[1].querySelector('.feature-content span').textContent = t.cancerPipeline;
        }
        if (cancerFeatures[2]) {
            cancerFeatures[2].querySelector('.feature-content span').textContent = t.cancerModel;
        }
        if (cancerFeatures[3]) {
            cancerFeatures[3].querySelector('.feature-content span').textContent = t.cancerAugment;
        }
    }
    
    // Contact Description
    const contactDesc = document.querySelector('.contact-info > p');
    if (contactDesc) contactDesc.textContent = t.contactDesc;
}

// Language Toggle Event Listener
document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
