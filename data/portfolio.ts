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
        title: "صفحة هبوط HeadLine",
        description:
          "تصميم وتطوير صفحة هبوط ثابتة بواجهة أنيقة وبسيطة، مع التركيز على تصميم متجاوب يتوافق مع مختلف الأجهزة.",
        technologies: ["HTML", "CSS", "تصميم متجاوب"],
        link: "https://headline-sa.com/",
        image: "/images/projects/headline.png",
        category: "تطوير",
      },
      {
        title: "مركز السنة",
        description:
          "المساهمة في تحسين الموقع من خلال مراجعة برمجية شاملة واختبار جميع الميزات، مع إعداد دليل مبسط للوحة التحكم لإدارة المحتوى.",
        technologies: ["Full Stack", "اختبار الجودة", "توثيق"],
        link: "https://alsunna.net/",
        image: "/images/projects/alssuna.png",
        category: "صيانة وضمان الجودة",
      },
      {
        title: "فتاوى بيديا",
        description:
          "إجراء مراجعة شاملة لاكتشاف الأخطاء البرمجية واختبار تجربة المستخدم وتقديم ملاحظات تطويرية، مع إعداد شرح تفصيلي للوحة التحكم.",
        technologies: ["اختبار", "ضمان الجودة", "تجربة المستخدم"],
        link: "https://fatawapedia.com/",
        image: "/images/projects/fatawa.png",
        category: "صيانة وضمان الجودة",
      },
      {
        title: "مطعم الأرجوان",
        description:
          "تطوير حلول موقع إلكتروني للمطعم شملت عرض قائمة الطعام وميزات الطلب.",
        technologies: ["تطوير ويب", "إدارة المطاعم"],
        link: "https://abdulaziz871.github.io/arj/",
        image: "/images/projects/arjwan.png",
        category: "تطوير",
      },
      {
        title: "ServizULogistics",
        description:
          "تطوير حلول إدارة لوجستية وتطبيقات ويب مع أنظمة تتبع فعالة.",
        technologies: ["لوجستيات", "أنظمة تتبع", "تطبيقات ويب"],
        link: "https://abdulaziz871.github.io/ServizULogistics/",
        image: "/images/projects/ser.png",
        category: "تطوير",
      },
      {
        title: "أذكار",
        description:
          "تطوير تطبيق إسلامي للأذكار والأدعية اليومية بواجهة سهلة الاستخدام.",
        technologies: ["تطوير تطبيقات", "محتوى إسلامي"],
        link: "http://athkar.atwebpages.com/",
        image: "/images/projects/athkar.png",
        category: "تطوير",
      },
      {
        title: "بوابة التطوع",
        description:
          "تطوير بوابة مخصصة لجمع المتطوعين عبر موقع دار الإسلام، مع تصميم وتنفيذ واجهة سهلة للتسجيل والمشاركة.",
        technologies: ["تطوير ويب", "قواعد البيانات", "نماذج"],
        link: "#",
        image: "/images/projects/volunteer.png",
        category: "تطوير",
      },
      {
        title: "لوحة تحكم فتاوى بيديا",
        description:
          "توفر رؤى حول المستخدمين وحركة الزوار لمنصة رقمية، وتعرض المستخدمين الجدد ومصادر الزيارات ونشاط المستخدمين والمستخدمين النشطين (يوميًا وأسبوعيًا وشهريًا)، مع توزيع جغرافي عبر خريطة العالم ومخطط دائري للدول وفلتر للتاريخ.",
        technologies: ["Power BI", "تحليل البيانات", "تصور البيانات"],
        link: "#",
        image: "/images/projects/FatawaDash.png",
        category: "Power BI وتحليل البيانات",
      },
      {
        title: "لوحة تحكم الوظائف 02",
        description:
          "تعرض نظرة عامة على سوق وظائف البيانات العالمي، وتُبرز إجمالي عدد الوظائف ومتوسط المهارات المطلوبة لكل وظيفة والرواتب المتوسطة (السنوية والساعية)، مع تصور لأكثر المهارات طلبًا ومقارنة الرواتب حسب المسمى الوظيفي والدولة.",
        technologies: ["Power BI", "تحليل البيانات", "تصور البيانات"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiN2VkOWM5YWItODNkOC00MzkyLWE3MWUtNzY4YTY2NDUzNDdkIiwidCI6IjdmMDQ4ZmMxLTJlYTMtNDhlNC1hYzkyLTkxZDFlYjA5ODA3YyIsImMiOjEwfQ%3D%3D",
        image: "/images/projects/Jobs02.png",
        category: "Power BI وتحليل البيانات",
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
      {
        title: "لوحة تحكم الوظائف 01",
        description:
          "يقدم تحليلاً تفصيليًا للأدوار المرتبطة بالبيانات، ويشمل عدد الوظائف ومتوسط تقييمها والرواتب المتوسطة، إضافة إلى اتجاهات نشر الوظائف عبر الزمن ومقارنات الأجور حسب الدور.",
        technologies: ["Power BI", "تحليل البيانات", "تصور البيانات"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiYTczODMxZjItNzM2Zi00OTdmLThhNjQtNDhlYjBlYmRhNTI3IiwidCI6IjdmMDQ4ZmMxLTJlYTMtNDhlNC1hYzkyLTkxZDFlYjA5ODA3YyIsImMiOjEwfQ%3D%3D",
        image: "/images/projects/Jobs01.png",
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
        title: "HeadLine Landing Page",
        description:
          "Designed and developed a static landing page with an elegant and simple interface, focusing on responsive design compatible with various devices.",
        technologies: ["HTML", "CSS", "Responsive Design"],
        link: "https://headline-sa.com/",
        image: "/images/projects/headline.png",
        category: "Development",
      },
      {
        title: "Al-Sunna Center",
        description:
          "Contributed to improving the website through comprehensive programming review and testing. Prepared a simplified control panel guide for content management.",
        technologies: ["Full Stack", "QA Testing", "Documentation"],
        link: "https://alsunna.net/",
        image: "/images/projects/alssuna.png",
        category: "Maintenance and QA",
      },
      {
        title: "FatawaPedia",
        description:
          "Conducted comprehensive review to identify programming errors, tested user experience and provided feedback for improvement. Prepared detailed control panel explanation.",
        technologies: ["Testing", "QA", "User Experience"],
        link: "https://fatawapedia.com/",
        image: "/images/projects/fatawa.png",
        category: "Maintenance and QA",
      },
      {
        title: "Alarjwan Restaurant",
        description:
          "Developed website solutions for restaurant including menu display and ordering features.",
        technologies: ["Web Development", "Restaurant Management"],
        link: "https://abdulaziz871.github.io/arj/",
        image: "/images/projects/arjwan.png",
        category: "Development",
      },
      {
        title: "ServizULogistics",
        description:
          "Developed logistics management solutions and web applications with efficient tracking systems.",
        technologies: ["Logistics", "Tracking Systems", "Web Apps"],
        link: "https://abdulaziz871.github.io/ServizULogistics/",
        image: "/images/projects/ser.png",
        category: "Development",
      },
      {
        title: "Athkar",
        description:
          "Developed Islamic application for daily prayers and remembrance with user-friendly interface.",
        technologies: ["Mobile Development", "Islamic Content"],
        link: "http://athkar.atwebpages.com/",
        image: "/images/projects/athkar.png",
        category: "Development",
      },
      {
        title: "Volunteer Portal",
        description:
          "Developed a dedicated portal to collect volunteers through the Dar Al-Islam website. Designed and implemented an easy-to-use interface for registration and participation.",
        technologies: ["Web Development", "Database", "Forms"],
        link: "#",
        image: "/images/projects/volunteer.png",
        category: "Development",
      },
      {
        title: "FatawaPedia Dashboard",
        description:
          "Provides user and traffic insights for a digital platform. It displays new users, traffic sources (direct, search, social, referral), user activity events, and active users (daily, weekly, monthly). Geographic distribution of users is shown via a world map and country pie chart, with a date filter for recent days.",
        technologies: ["Power BI", "Data Analysis", "Data Visualization"],
        link: "#",
        image: "/images/projects/FatawaDash.png",
        category: "Power BI & Data Analytics",
      },
      {
        title: "Jobs Dashboard 02",
        description:
          "Shows a high-level overview of the global data job market. It highlights total job count, average skills required per job, and median salaries (yearly and hourly). The dashboard also visualizes the most in-demand skills and compares median salaries across data-related job titles, with filters for job title and country.",
        technologies: ["Power BI", "Data Analysis", "Data Visualization"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiN2VkOWM5YWItODNkOC00MzkyLWE3MWUtNzY4YTY2NDUzNDdkIiwidCI6IjdmMDQ4ZmMxLTJlYTMtNDhlNC1hYzkyLTkxZDFlYjA5ODA3YyIsImMiOjEwfQ%3D%3D",
        image: "/images/projects/Jobs02.png",
        category: "Power BI & Data Analytics",
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
      {
        title: "Jobs Dashboard 01",
        description:
          "Offers a detailed analytical view of data-related roles. It includes job count, average job rating, and median salaries, plus trends of job postings over time. Scatter plots compare hourly vs yearly pay by role, bar charts show job counts per title, and a detailed table summarizes job statistics with trends for each role.",
        technologies: ["Power BI", "Data Analysis", "Data Visualization"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiYTczODMxZjItNzM2Zi00OTdmLThhNjQtNDhlYjBlYmRhNTI3IiwidCI6IjdmMDQ4ZmMxLTJlYTMtNDhlNC1hYzkyLTkxZDFlYjA5ODA3YyIsImMiOjEwfQ%3D%3D",
        image: "/images/projects/Jobs01.png",
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
