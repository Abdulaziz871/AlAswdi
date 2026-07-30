export type Language = "ar" | "en";

type PersonalInfo = {
  name: string;
  title: string;
  summary: string;
  age: number;
  education: string;
  yearsOfExperience: number;
};

type Contact = {
  email: string;
  phone: string;
  portfolio: string;
  portfolioUrl: string;
};

type Skill = { name: string; icon: string };

type WorkExperience = {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  link: string;
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  category: string;
};

type Education = {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  location: string;
};

type Certification = {
  name: string;
  issuer: string;
  year: string;
  icon: string;
};

type PortfolioContent = {
  personalInfo: PersonalInfo;
  contact: Contact;
  technicalSkills: Skill[];
  personalSkills: Skill[];
  workExperience: WorkExperience[];
  projects: Project[];
  education: Education;
  certifications: Certification[];
};

const technicalSkills: Skill[] = [
  { name: "HTML5", icon: "FaHtml5" },
  { name: "CSS3", icon: "FaCss3Alt" },
  { name: "PHP", icon: "FaPhp" },
  { name: "Laravel", icon: "FaLaravel" },
  { name: "Node.js", icon: "FaNodeJs" },
  { name: "Python", icon: "FaPython" },
  { name: "Next.js", icon: "SiNextdotjs" },
  { name: "MySQL", icon: "SiMysql" },
  { name: "Bootstrap", icon: "FaBootstrap" },
  { name: "Power BI", icon: "SiPowerbi" },
  { name: "Power Automate", icon: "SiPowerautomate" },
  { name: "jQuery", icon: "SiJquery" },
  { name: "Excel", icon: "SiMicrosoftexcel" },
  { name: "C", icon: "SiC" },
  { name: "AI", icon: "FaRobot" },
];

export const portfolioData: Record<Language, PortfolioContent> = {
  ar: {
    personalInfo: {
      name: "عبدالعزيـــز الأســــودي",
      title: "مطور ويب متكامل ومصمم",
      summary:
        "مهندس برمجيات بخبرة تتجاوز 4 سنوات في بناء حلول رقمية متكاملة تجمع بين التصميم الإبداعي والخبرة التقنية. لدي خبرة في تطوير الواجهات الأمامية والخلفية وتصميم قواعد البيانات، مع شغف بتحليل البيانات وPower BI وعلوم البيانات لتوليد رؤى تدعم اتخاذ القرار.",
      age: 23,
      education: "هندسة البرمجيات - جامعة باهانغ في ماليزيا",
      yearsOfExperience: 4,
    },
    contact: {
      email: "aswadies.87@gmail.com",
      phone: "+60103800852",
      portfolio: "معرض أعمالي",
      portfolioUrl: "https://abdulaziz871.github.io/cvaswdi/",
    },
    technicalSkills,
    personalSkills: [
      { name: "القيادة", icon: "FaUsers" },
      { name: "التواصل", icon: "FaComments" },
      { name: "تحليل البيانات", icon: "FaChartLine" },
      { name: "إدارة المشاريع", icon: "FaTasks" },
      { name: "إدارة الوقت", icon: "FaClock" },
      { name: "حل المشكلات", icon: "FaLightbulb" },
    ],
    workExperience: [
      {
        company: "Swing - وكالة إبداعية",
        role: "مطور ويب متكامل ومصمم",
        period: "حاليًا",
        description:
          "بنيت الموقع كاملًا باستخدام Webflow من التصميم البصري إلى التجربة التفاعلية، مع تنظيم المحتوى والصفحات لضمان تجربة استخدام واضحة وسهلة.",
        achievements: [
          "تصميم وتطوير موقع كامل باستخدام Webflow",
          "تحسين واجهات المستخدم والتفاصيل البصرية",
          "عكس هوية الشركة بشكل احترافي",
        ],
        link: "https://swing.sa/",
      },
      {
        company: "Qomra - متجر إلكتروني",
        role: "مراجع موقع وأخصائي إدخال بيانات",
        period: "2023-2024",
        description:
          "عملت كمراجع ومختبر للموقع مع مسؤولية فحص الصفحات والتأكد من خلوها من الأخطاء الفنية وجاهزية الموقع أثناء التحديثات والصيانة.",
        achievements: [
          "إدخال بيانات وإضافة أكثر من 1000 منتج",
          "تنظيم وتصميم واجهة المتجر لتحسين تجربة التسوق",
          "مراجعة بيانات المنتجات والصور قبل النشر",
        ],
        link: "https://qomra.pro/",
      },
      {
        company: "AlAswdadi Art",
        role: "مطور ومصمم Webflow",
        period: "2023",
        description:
          "طورت منصة Alaswadi Art باستخدام Webflow مع تصميم كامل للموقع من الصفر بما يعكس هوية العلامة التجارية بشكل احترافي وجذاب.",
        achievements: [
          "تصميم موقع كامل من الصفر",
          "إدخال البيانات وتنظيم المحتوى",
          "ضمان سهولة التصفح وتجربة استخدام سلسة",
        ],
        link: "https://www.alaswadiart.com/",
      },
      {
        company: "FatawaPedia",
        role: "مطور ويب متكامل",
        period: "2022-2023",
        description:
          "أجريت مراجعة شاملة لموقع FatawaPedia لاكتشاف الأخطاء البرمجية، واختبار تجربة المستخدم، وتقديم ملاحظات تطويرية.",
        achievements: [
          "مراجعة شاملة للموقع",
          "اختبار تجربة المستخدم وتقديم الملاحظات",
          "إعداد شرح تفصيلي للوحة التحكم",
        ],
        link: "#",
      },
    ],
    projects: [
      {
        title: "Swing",
        description:
          "بناء الموقع كاملًا باستخدام Webflow من التصميم البصري حتى التجربة التفاعلية، مع تنظيم المحتوى والصفحات لضمان تدفق منطقي للمستخدم.",
        technologies: ["Webflow", "تصميم UI/UX"],
        link: "https://swing.sa/",
        image: "/images/projects/swing.png",
        category: "تطوير",
      },
      {
        title: "متجر قمرة",
        description:
          "منصة تجارة إلكترونية تضم أكثر من 1000 منتج. عملت كمراجع ومختبر مع مسؤولية إدخال البيانات، ومراجعة المنتجات، وتصميم الواجهة لتحسين تجربة التسوق.",
        technologies: ["تجارة إلكترونية", "إدارة البيانات", "UI/UX"],
        link: "https://qomra.pro/",
        image: "/images/projects/qomrah.png",
        category: "صيانة وضمان الجودة",
      },
      {
        title: "AlAswdadi Art",
        description:
          "تطوير المنصة باستخدام Webflow مع تصميم كامل للموقع من الصفر ليعكس هوية العلامة التجارية بشكل احترافي وجذاب.",
        technologies: ["Webflow", "Branding", "تصميم UI/UX"],
        link: "https://www.alaswadiart.com/",
        image: "/images/projects/alaswdi.png",
        category: "تطوير",
      },
      {
        title: "خدمات دار الإسلام",
        description:
          "إنشاء صفحة مخصصة لخدمات دار الإسلام وجمع جميع الخدمات بشكل منظم وسهل الوصول. تم إدخال أكثر من 500 خدمة بعدة لغات وتطوير لوحة تحكم مخصصة.",
        technologies: ["متعدد اللغات", "CMS", "تطوير Back-End"],
        link: "#",
        image: "/images/projects/islamhouse.png",
        category: "تطوير",
      },
      {
        title: "لوحة المبيعات",
        description:
          "تركز على أداء الأعمال عبر الزمن من خلال تتبع المبيعات الشهرية واتجاهات هامش الربح، مع تفاصيل حسب الدولة وفئة المنتج والكميات المباعة ومرشحات للسنة والمنطقة.",
        technologies: ["Power BI", "تحليل البيانات", "تصور البيانات"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiODRlMTRjZjAtMWEwYi00MGIwLTg5ZWYtNzM1YmVhZDFiMWJmIiwidCI6IjdmMDQ4ZmMxLTJlYTMtNDhlNC1hYzkyLTkxZDFlYjA5ODA3YyIsImMiOjEwfQ%3D%3D",
        image: "/images/projects/sales.png",
        category: "Power BI وتحليل البيانات",
      },
    ],
    education: {
      institution: "جامعة باهانغ السلطان عبدالله",
      degree: "بكالوريوس علوم الحاسوب (هندسة البرمجيات) مع مرتبة الشرف",
      period: "2022-2026",
      gpa: "3.5/4.00",
      location: "ماليزيا",
    },
    certifications: [
      {
        name: "محلل بيانات Microsoft Power BI",
        issuer: "Microsoft",
        year: "2025",
        icon: "SiPowerbi",
      },
      {
        name: "Power Automate: بناء وإدارة سير العمل الآلي",
        issuer: "Microsoft",
        year: "2025",
        icon: "SiPowerautomate",
      },
    ],
  },
  en: {
    personalInfo: {
      name: "ABDULAZIZ ALASWDI",
      title: "Full Stack Developer and Designer",
      summary:
        "A Software Engineer with over 4 years of experience in building comprehensive digital solutions that combine creative design and technical expertise. Experienced in both frontend and backend development and database design. Passionate about Power BI, Data Analytics, and data science to derive insights and drive data-informed decisions.",
      age: 23,
      education: "Software Engineering at the University of Pahang in Malaysia",
      yearsOfExperience: 4,
    },
    contact: {
      email: "aswadies.87@gmail.com",
      phone: "+60103800852",
      portfolio: "My Portfolio",
      portfolioUrl: "https://abdulaziz871.github.io/cvaswdi/",
    },
    technicalSkills,
    personalSkills: [
      { name: "Leadership", icon: "FaUsers" },
      { name: "Communication", icon: "FaComments" },
      { name: "Data Analysis", icon: "FaChartLine" },
      { name: "Project Management", icon: "FaTasks" },
      { name: "Time Management", icon: "FaClock" },
      { name: "Problem Solving", icon: "FaLightbulb" },
    ],
    workExperience: [
      {
        company: "Swing - Creative Agency",
        role: "Full Stack Developer & Designer",
        period: "Current",
        description:
          "Built the complete website using Webflow, from visual design to interactive experience, ensuring an attractive and user-friendly site.",
        achievements: [
          "Designed and developed complete website using Webflow",
          "Enhanced user interfaces and visual details",
          "Reflected company identity professionally",
        ],
        link: "https://swing.sa/",
      },
      {
        company: "Qomra - Online Store",
        role: "Website Reviewer & Data Entry Specialist",
        period: "2023-2024",
        description:
          "Worked as a reviewer and tester for the website, responsible for testing pages and ensuring site readiness during maintenance and updates.",
        achievements: [
          "Entered data and added over 1,000 products",
          "Organized and designed the store interface",
          "Reviewed product information and images before publishing",
        ],
        link: "https://qomra.pro/",
      },
      {
        company: "AlAswdadi Art",
        role: "Webflow Developer & Designer",
        period: "2023",
        description:
          "Developed the platform using Webflow and designed the site from scratch to reflect the brand identity professionally.",
        achievements: [
          "Complete website design from scratch",
          "Content organization and data entry",
          "Smooth browsing and user experience",
        ],
        link: "https://www.alaswadiart.com/",
      },
      {
        company: "FatawaPedia",
        role: "Full Stack Developer",
        period: "2022-2023",
        description:
          "Conducted a comprehensive review to identify programming errors, tested user experience, and provided improvement feedback.",
        achievements: [
          "Comprehensive website review",
          "UX testing and feedback",
          "Prepared detailed control panel explanation",
        ],
        link: "#",
      },
    ],
    projects: [
      {
        title: "Swing",
        description:
          "Built the complete website using Webflow, from visual design to interactive experience, with organized pages and content.",
        technologies: ["Webflow", "UI/UX Design"],
        link: "https://swing.sa/",
        image: "/images/projects/swing.png",
        category: "Development",
      },
      {
        title: "Qomra Store",
        description:
          "E-commerce platform with over 1,000 products. Worked on testing, data entry, product verification, and UI improvements.",
        technologies: ["E-commerce", "Data Management", "UI/UX"],
        link: "https://qomra.pro/",
        image: "/images/projects/qomrah.png",
        category: "Maintenance and QA",
      },
      {
        title: "AlAswdadi Art",
        description:
          "Developed the platform using Webflow and designed the full site from scratch for strong brand presence.",
        technologies: ["Webflow", "Branding", "UI/UX Design"],
        link: "https://www.alaswadiart.com/",
        image: "/images/projects/alaswdi.png",
        category: "Development",
      },
      {
        title: "IslamHouse Services",
        description:
          "Created a dedicated services page, added over 500 multilingual entries, and built a custom control panel.",
        technologies: ["Multilingual", "CMS", "Backend Development"],
        link: "#",
        image: "/images/projects/islamhouse.png",
        category: "Development",
      },
      {
        title: "Sales Dashboard",
        description:
          "Focuses on business performance over time, tracking monthly sales, profit margin, and regional/product breakdowns.",
        technologies: ["Power BI", "Data Analysis", "Data Visualization"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiODRlMTRjZjAtMWEwYi00MGIwLTg5ZWYtNzM1YmVhZDFiMWJmIiwidCI6IjdmMDQ4ZmMxLTJlYTMtNDhlNC1hYzkyLTkxZDFlYjA5ODA3YyIsImMiOjEwfQ%3D%3D",
        image: "/images/projects/sales.png",
        category: "Power BI & Data Analytics",
      },
    ],
    education: {
      institution: "University of Pahang Al-Sultan Abdullah",
      degree: "Bachelor of Computer Science (Software Engineering) with Honours",
      period: "2022-2026",
      gpa: "3.5/4.00",
      location: "Malaysia",
    },
    certifications: [
      {
        name: "Microsoft Power BI Data Analyst",
        issuer: "Microsoft",
        year: "2025",
        icon: "SiPowerbi",
      },
      {
        name: "Power Automate: Building and Managing Automated Workflows",
        issuer: "Microsoft",
        year: "2025",
        icon: "SiPowerautomate",
      },
    ],
  },
};

export function getPortfolioContent(language: Language) {
  return portfolioData[language];
}
