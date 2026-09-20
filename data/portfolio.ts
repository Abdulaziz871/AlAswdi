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

export type TimelineStage = {
  title: string;
  date: string;
  content: string;
  status: "completed" | "in-progress" | "pending";
  energy: number;
  icon: string;
};

export type TechDetails = {
  languages: string[];
  frameworks: string[];
  database: string[];
  styling: string[];
  tools: string[];
  techniques: string[];
  typography: string;
  loadTime: string;
  mobileReady: boolean;
  colors: string[];
  toolsAndSkills: string[];
};

export type ProjectGalleryImage = {
  image: string;
  caption: string;
};

type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github?: string;
  image: string;
  category: string;
  /** "professional" = real client/organization work, "personal" = personal/experimental projects */
  workType: "professional" | "personal";
  /** Present only for workType "professional" */
  client?: string;
  duration?: string;
  role?: string;
  timeline: TimelineStage[];
  techDetails: TechDetails;
  gallery: ProjectGalleryImage[];
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

const buildTimelineAr: TimelineStage[] = [
  { title: "التخطيط", date: "المرحلة 1", content: "تحديد نطاق المشروع وأهدافه ومتطلباته.", status: "completed", energy: 100, icon: "ClipboardList" },
  { title: "التصميم", date: "المرحلة 2", content: "تصميم الشكل البصري وتجربة المستخدم.", status: "completed", energy: 100, icon: "Palette" },
  { title: "التطوير", date: "المرحلة 3", content: "بناء وتنفيذ الميزات الأساسية.", status: "completed", energy: 100, icon: "Code2" },
  { title: "الإطلاق", date: "المرحلة 4", content: "نشر الموقع وتسليمه بشكل مباشر.", status: "completed", energy: 100, icon: "Rocket" },
];

const qaTimelineAr: TimelineStage[] = [
  { title: "الاستلام", date: "المرحلة 1", content: "مراجعة بنية الموقع الحالية ومحتواه.", status: "completed", energy: 100, icon: "ClipboardList" },
  { title: "الاختبار وضمان الجودة", date: "المرحلة 2", content: "اختبار الميزات والصفحات لاكتشاف الأخطاء.", status: "completed", energy: 100, icon: "Bug" },
  { title: "البيانات والمحتوى", date: "المرحلة 3", content: "مراجعة وإدخال بيانات المنتجات أو المحتوى.", status: "completed", energy: 100, icon: "Database" },
  { title: "التسليم", date: "المرحلة 4", content: "توثيق النتائج وتسليم الملاحظات.", status: "completed", energy: 100, icon: "CheckCircle2" },
];

const dashboardTimelineAr: TimelineStage[] = [
  { title: "تجميع البيانات", date: "المرحلة 1", content: "جمع وتجهيز مصادر البيانات الخام.", status: "completed", energy: 100, icon: "Database" },
  { title: "نمذجة البيانات", date: "المرحلة 2", content: "هيكلة ونمذجة البيانات في Power BI.", status: "completed", energy: 100, icon: "Layers" },
  { title: "تصميم اللوحة", date: "المرحلة 3", content: "تصميم العناصر المرئية والمرشحات التفاعلية.", status: "completed", energy: 100, icon: "BarChart3" },
  { title: "النشر", date: "المرحلة 4", content: "نشر ومشاركة اللوحة النهائية.", status: "completed", energy: 100, icon: "Share2" },
];

const buildTimelineEn: TimelineStage[] = [
  { title: "Planning", date: "Stage 1", content: "Defined the project scope, goals, and requirements.", status: "completed", energy: 100, icon: "ClipboardList" },
  { title: "Design", date: "Stage 2", content: "Designed the visual layout and user experience.", status: "completed", energy: 100, icon: "Palette" },
  { title: "Development", date: "Stage 3", content: "Built and implemented the core features.", status: "completed", energy: 100, icon: "Code2" },
  { title: "Launch", date: "Stage 4", content: "Deployed the site and handed it over live.", status: "completed", energy: 100, icon: "Rocket" },
];

const qaTimelineEn: TimelineStage[] = [
  { title: "Onboarding", date: "Stage 1", content: "Reviewed the existing site structure and content.", status: "completed", energy: 100, icon: "ClipboardList" },
  { title: "Testing & QA", date: "Stage 2", content: "Tested features and pages to catch bugs and issues.", status: "completed", energy: 100, icon: "Bug" },
  { title: "Data & Content", date: "Stage 3", content: "Reviewed and entered product or content data.", status: "completed", energy: 100, icon: "Database" },
  { title: "Handover", date: "Stage 4", content: "Documented findings and handed over feedback.", status: "completed", energy: 100, icon: "CheckCircle2" },
];

const dashboardTimelineEn: TimelineStage[] = [
  { title: "Data Sourcing", date: "Stage 1", content: "Collected and prepared the raw data sources.", status: "completed", energy: 100, icon: "Database" },
  { title: "Data Modeling", date: "Stage 2", content: "Structured and modeled the data in Power BI.", status: "completed", energy: 100, icon: "Layers" },
  { title: "Dashboard Design", date: "Stage 3", content: "Designed visuals and interactive filters.", status: "completed", energy: 100, icon: "BarChart3" },
  { title: "Publish", date: "Stage 4", content: "Published and shared the final dashboard.", status: "completed", energy: 100, icon: "Share2" },
];

export const portfolioData: Record<Language, PortfolioContent> = {
  ar: {
    personalInfo: {
      name: "عبدالعزيـــز الأســــودي",
      title: "مطور ويب ومصمم",
      summary:
        "مهندس برمجيات بخبرة تتجاوز 4 سنوات في بناء حلول رقمية متكاملة تجمع بين التصميم الإبداعي والخبرة التقنية. لدي خبرة في تطوير الواجهات الأمامية والخلفية وتصميم قواعد البيانات، مع شغف بتحليل البيانات وPower BI وعلوم البيانات لتوليد رؤى تدعم اتخاذ القرار.",
      age: 24,
      education: "هندسة البرمجيات - جامعة باهانغ في ماليزيا",
      yearsOfExperience: 4,
    },
    contact: {
      email: "aswadies.87@gmail.com",
      phone: "+60103800852",
      portfolio: "معرض أعمالي",
      portfolioUrl: "https://alaswdi.vercel.app/",
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
        slug: "swing",
        title: "Swing",
        description:
          "عملت كمطور لدى Swing (وكالة إبداعية) — أعمل حاليًا على بناء الموقع بالكامل باستخدام Webflow من التصميم البصري حتى التجربة التفاعلية، مع تنظيم المحتوى والصفحات لضمان تدفق منطقي للمستخدم.",
        technologies: ["Webflow", "تصميم UI/UX"],
        link: "https://swing.sa/",
        github: "",
        image: "/images/projects/swing.png",
        category: "تطوير",
        workType: "professional",
        client: "Swing - وكالة إبداعية",
        duration: "حاليًا",
        role: "مطور",
        timeline: buildTimelineAr,
        techDetails: { languages: [], frameworks: ["Webflow"], database: [], styling: ["Webflow CMS"], tools: ["تصميم UI/UX"], techniques: ["تصميم متجاوب","نمذجة محتوى CMS"], typography: "Jali Arabic, Tahoma, sans-serif", loadTime: "120ms", mobileReady: true, colors: ["#FFC440","#222222","#161616"], toolsAndSkills: ["Webflow","Figma"] },
        gallery: [{ image: "/images/projects/swing.png", caption: "معاينة الصفحة الرئيسية" }],
      },
      {
        slug: "idea-vault",
        title: "Idea Vault",
        description:
          "منصة شخصية لحفظ الأفكار والملاحظات والروابط والملفات في مكان واحد، مع تحليل وتلخيص تلقائي بالذكاء الاصطناعي لتسهيل البحث والرجوع للمحتوى المحفوظ لاحقًا.",
        technologies: ["دمج الذكاء الاصطناعي", "Full Stack", "تصميم UI/UX"],
        link: "https://ai-powered-memos.vercel.app/",
        github: "",
        image: "/images/projects/idea.png",
        category: "تطوير",
        workType: "personal",
        timeline: buildTimelineAr,
        techDetails: { languages: ["TypeScript","JavaScript"], frameworks: ["React","Vite","Tailwind CSS"], database: [], styling: ["Tailwind CSS","shadcn/ui"], tools: ["دمج الذكاء الاصطناعي", "Full Stack", "تصميم UI/UX"], techniques: ["RAG","تلخيص تلقائي بالذكاء الاصطناعي"], typography: "ui-sans-serif, system-ui, sans-serif", loadTime: "95ms", mobileReady: true, colors: ["#4F46E5","#F8FAFC","#111827"], toolsAndSkills: ["GitHub","Vercel","VS Code"] },
        gallery: [{ image: "/images/projects/idea.png", caption: "معاينة الصفحة الرئيسية" }],
      },
      {
        slug: "sunnah-hadith-search",
        title: "منصة بحث السنة",
        description:
          "منصة بحثية تتيح للباحثين لصق نص الحديث للحصول فورًا على أقرب الشروح المطابقة من الكتب المرفوعة، مع تلخيص لأقوال الشراح من عدة مؤلفين.",
        technologies: ["NextJs", "RAG", "محرك بحث"],
        link: "https://deep-search-hadith.vercel.app/",
        github: "",
        image: "/images/projects/hadith.png",
        category: "تطوير",
        workType: "personal",
        timeline: buildTimelineAr,
        techDetails: { languages: ["TypeScript"], frameworks: ["Next.js"], database: [], styling: [], tools: ["RAG", "محرك بحث"], techniques: ["RAG","بحث دلالي"], typography: "Noto Sans Arabic", loadTime: "140ms", mobileReady: true, colors: ["#2F8FBF","#F6F4F0","#1A1A1A"], toolsAndSkills: ["GitHub","Vercel","VS Code"] },
        gallery: [{ image: "/images/projects/hadith.png", caption: "معاينة الصفحة الرئيسية" }],
      },
      {
        slug: "qomra-store",
        title: "متجر قمرة",
        description:
          "عملت كمختبر جودة لدى قمرة (متجر إلكتروني) خلال 2023-2024 — راجعت واختبرت أكثر من 1000 منتج على المتجر، وتأكدت من خلو الصفحات من الأخطاء الفنية وجاهزية الموقع أثناء التحديثات والصيانة.",
        technologies: ["تجارة إلكترونية", "إدارة البيانات", "UI/UX"],
        link: "https://qomra.pro/",
        github: "",
        image: "/images/projects/qomrah.png",
        category: "صيانة وضمان الجودة",
        workType: "professional",
        client: "قمرة - متجر إلكتروني",
        duration: "2023-2024",
        role: "مختبر جودة",
        timeline: qaTimelineAr,
        techDetails: { languages: [], frameworks: ["Salla"], database: [], styling: [], tools: ["تجارة إلكترونية", "إدارة البيانات", "UI/UX"], techniques: ["اختبار الجودة اليدوي","إدخال بيانات المنتجات"], typography: "Tajawal", loadTime: "80ms", mobileReady: true, colors: ["#B02333","#181A1B","#F2F2F2"], toolsAndSkills: ["Salla Dashboard","Excel"] },
        gallery: [{ image: "/images/projects/qomrah.png", caption: "معاينة الصفحة الرئيسية" }],
      },
      {
        slug: "alaswadi-art",
        title: "AlAswdadi Art",
        description:
          "عملت كمطور لدى AlAswdadi Art خلال 2023 — طورت المنصة بالكامل باستخدام Webflow مع تصميم الموقع من الصفر ليعكس هوية العلامة التجارية بشكل احترافي وجذاب.",
        technologies: ["Webflow", "Branding", "تصميم UI/UX"],
        link: "https://www.alaswadiart.com/",
        github: "",
        image: "/images/projects/alaswdi.png",
        category: "تطوير",
        workType: "professional",
        client: "AlAswdadi Art",
        duration: "2023",
        role: "مطور",
        timeline: buildTimelineAr,
        techDetails: { languages: [], frameworks: ["Webflow"], database: [], styling: ["Webflow CMS"], tools: ["Branding", "تصميم UI/UX"], techniques: ["تصميم الهوية البصرية","تصميم متجاوب"], typography: "Noto Sans", loadTime: "110ms", mobileReady: true, colors: ["#0A0A0A","#A79FE0","#FFFFFF"], toolsAndSkills: ["Webflow","Figma"] },
        gallery: [{ image: "/images/projects/alaswdi.png", caption: "معاينة الصفحة الرئيسية" }],
      },
      {
        slug: "islamhouse-services",
        title: "خدمات دار الإسلام",
        description:
          "إنشاء صفحة مخصصة لخدمات دار الإسلام وجمع جميع الخدمات بشكل منظم وسهل الوصول. تم إدخال أكثر من 500 خدمة بعدة لغات وتطوير لوحة تحكم مخصصة.",
        technologies: ["متعدد اللغات", "CMS", "تطوير Back-End"],
        link: "#",
        github: "",
        image: "/images/projects/islamhouse.png",
        category: "تطوير",
        workType: "personal",
        timeline: buildTimelineAr,
        techDetails: { languages: ["PHP"], frameworks: [], database: ["MySQL"], styling: [], tools: ["متعدد اللغات", "CMS", "تطوير Back-End"], techniques: ["إدارة محتوى متعدد اللغات","RESTful API"], typography: "Tajawal", loadTime: "120ms", mobileReady: true, colors: ["#1B3B6F","#F7F8FA","#C9A15A"], toolsAndSkills: ["phpMyAdmin","Excel"] },
        gallery: [{ image: "/images/projects/islamhouse.png", caption: "معاينة الصفحة الرئيسية" }],
      },
      {
        slug: "headline-landing",
        title: "صفحة هبوط HeadLine",
        description:
          "عملت كمصمم واجهات لدى HeadLine خلال 2022 — صممت وطورت صفحة هبوط ثابتة بواجهة أنيقة وبسيطة، مع التركيز على تصميم متجاوب يتوافق مع مختلف الأجهزة.",
        technologies: ["HTML", "CSS", "تصميم متجاوب"],
        link: "https://headline-sa.com/",
        github: "",
        image: "/images/projects/headline.png",
        category: "تطوير",
        workType: "professional",
        client: "HeadLine",
        duration: "2022",
        role: "مصمم واجهات",
        timeline: buildTimelineAr,
        techDetails: { languages: ["HTML", "CSS"], frameworks: [], database: [], styling: ["Custom CSS","تصميم متجاوب"], tools: ["تصميم متجاوب"], techniques: ["تصميم متجاوب","اختبار متعدد المتصفحات"], typography: "Noto Sans Arabic", loadTime: "95ms", mobileReady: true, colors: ["#0D1117","#F0654A","#7EC8E3"], toolsAndSkills: ["VS Code","Figma"] },
        gallery: [{ image: "/images/projects/headline.png", caption: "معاينة الصفحة الرئيسية" }],
      },
      {
        slug: "alsunna-center",
        title: "مركز السنة",
        description:
          "عملت كمختبر جودة لدى مركز السنة خلال 2023-2024 — راجعت بنية الموقع بشكل شامل واختبرت جميع الميزات، وأعددت دليلًا مبسطًا للوحة التحكم لإدارة المحتوى.",
        technologies: ["Full Stack", "اختبار الجودة", "توثيق"],
        link: "https://alsunna.net/",
        github: "",
        image: "/images/projects/alssuna.png",
        category: "صيانة وضمان الجودة",
        workType: "professional",
        client: "مركز السنة",
        duration: "2023-2024",
        role: "مختبر جودة",
        timeline: qaTimelineAr,
        techDetails: { languages: [], frameworks: [], database: [], styling: [], tools: ["Full Stack", "اختبار الجودة", "توثيق"], techniques: ["اختبار الجودة اليدوي","توثيق المحتوى"], typography: "DIN Next", loadTime: "140ms", mobileReady: true, colors: ["#1F3B44","#EDEDED","#C9A15A"], toolsAndSkills: ["Browser DevTools","Notion"] },
        gallery: [{ image: "/images/projects/alssuna.png", caption: "معاينة الصفحة الرئيسية" }],
      },
      {
        slug: "fatawapedia",
        title: "فتاوى بيديا",
        description:
          "عملت كمختبر جودة لدى FatawaPedia خلال 2022-2023 — أجريت مراجعة شاملة لاكتشاف الأخطاء البرمجية، واختبرت تجربة المستخدم، وقدمت ملاحظات تطويرية مع شرح تفصيلي للوحة التحكم.",
        technologies: ["اختبار", "ضمان الجودة", "تجربة المستخدم"],
        link: "https://fatawapedia.com/",
        github: "",
        image: "/images/projects/fatawa.png",
        category: "صيانة وضمان الجودة",
        workType: "professional",
        client: "FatawaPedia",
        duration: "2022-2023",
        role: "مختبر جودة",
        timeline: qaTimelineAr,
        techDetails: { languages: [], frameworks: [], database: [], styling: [], tools: ["اختبار", "ضمان الجودة", "تجربة المستخدم"], techniques: ["اختبار الجودة اليدوي","اختبار تجربة المستخدم"], typography: "Noto Sans Arabic", loadTime: "80ms", mobileReady: true, colors: ["#1E3A45","#B9C08C","#FBF8E8"], toolsAndSkills: ["Browser DevTools","Notion"] },
        gallery: [{ image: "/images/projects/fatawa.png", caption: "معاينة الصفحة الرئيسية" }],
      },
      {
        slug: "alarjwan-restaurant",
        title: "مطعم الأرجوان",
        description:
          "تطوير حلول موقع إلكتروني للمطعم شملت عرض قائمة الطعام وميزات الطلب.",
        technologies: ["تطوير ويب", "إدارة المطاعم"],
        link: "https://abdulaziz871.github.io/arj/",
        github: "https://github.com/abdulaziz871/arj",
        image: "/images/projects/arjwan.png",
        category: "تطوير",
        workType: "personal",
        timeline: buildTimelineAr,
        techDetails: { languages: ["HTML","CSS","JavaScript"], frameworks: ["Bootstrap"], database: [], styling: ["Bootstrap"], tools: ["تطوير ويب", "إدارة المطاعم"], techniques: ["تصميم متجاوب","نشر موقع ثابت"], typography: "Baloo Bhaijaan 2", loadTime: "110ms", mobileReady: true, colors: ["#3D4F32","#4C5F3E","#F1EEE7"], toolsAndSkills: ["VS Code","GitHub"] },
        gallery: [{ image: "/images/projects/arjwan.png", caption: "معاينة الصفحة الرئيسية" }],
      },
      {
        slug: "servizu-logistics",
        title: "ServizULogistics",
        description:
          "تطوير حلول إدارة لوجستية وتطبيقات ويب مع أنظمة تتبع فعالة.",
        technologies: ["لوجستيات", "أنظمة تتبع", "تطبيقات ويب"],
        link: "https://abdulaziz871.github.io/ServizULogistics/",
        github: "https://github.com/abdulaziz871/ServizULogistics",
        image: "/images/projects/ser.png",
        category: "تطوير",
        workType: "personal",
        timeline: buildTimelineAr,
        techDetails: { languages: ["HTML","CSS","JavaScript"], frameworks: ["Bootstrap"], database: [], styling: ["Bootstrap"], tools: ["لوجستيات", "أنظمة تتبع", "تطبيقات ويب"], techniques: ["تصميم متجاوب","نشر موقع ثابت"], typography: "Baloo Bhaijaan 2", loadTime: "120ms", mobileReady: true, colors: ["#8B2E3C","#D4A94A","#FFFFFF"], toolsAndSkills: ["VS Code","GitHub"] },
        gallery: [{ image: "/images/projects/ser.png", caption: "معاينة الصفحة الرئيسية" }],
      },
      {
        slug: "athkar",
        title: "أذكار",
        description:
          "تطوير تطبيق إسلامي للأذكار والأدعية اليومية بواجهة سهلة الاستخدام.",
        technologies: ["تطوير تطبيقات", "محتوى إسلامي"],
        link: "http://athkar.atwebpages.com/",
        github: "",
        image: "/images/projects/athkar.png",
        category: "تطوير",
        workType: "personal",
        timeline: buildTimelineAr,
        techDetails: { languages: ["HTML","CSS","JavaScript"], frameworks: ["Bootstrap"], database: [], styling: ["Bootstrap"], tools: ["تطوير تطبيقات", "محتوى إسلامي"], techniques: ["تصميم متجاوب","نشر موقع ثابت"], typography: "Baloo Bhaijaan 2", loadTime: "95ms", mobileReady: true, colors: ["#3A4A6B","#E8EDF5","#FFFFFF"], toolsAndSkills: ["VS Code","GitHub"] },
        gallery: [{ image: "/images/projects/athkar.png", caption: "معاينة الصفحة الرئيسية" }],
      },
      {
        slug: "volunteer-portal",
        title: "بوابة التطوع",
        description:
          "تطوير بوابة مخصصة لجمع المتطوعين عبر موقع دار الإسلام، مع تصميم وتنفيذ واجهة سهلة للتسجيل والمشاركة.",
        technologies: ["تطوير ويب", "قواعد البيانات", "نماذج"],
        link: "#",
        github: "",
        image: "/images/projects/volunteer.png",
        category: "تطوير",
        workType: "personal",
        timeline: buildTimelineAr,
        techDetails: { languages: ["PHP"], frameworks: [], database: ["MySQL"], styling: [], tools: ["تطوير ويب", "نماذج"], techniques: ["التحقق من صحة النماذج","RESTful API"], typography: "Tajawal", loadTime: "140ms", mobileReady: true, colors: ["#3FAEDD","#D9BE8F","#5A3A1E"], toolsAndSkills: ["phpMyAdmin","Figma"] },
        gallery: [{ image: "/images/projects/volunteer.png", caption: "معاينة الصفحة الرئيسية" }],
      },
      {
        slug: "fatawapedia-dashboard",
        title: "لوحة تحكم فتاوى بيديا",
        description:
          "توفر رؤى حول المستخدمين وحركة الزوار لمنصة رقمية، وتعرض المستخدمين الجدد ومصادر الزيارات ونشاط المستخدمين والمستخدمين النشطين (يوميًا وأسبوعيًا وشهريًا)، مع توزيع جغرافي عبر خريطة العالم ومخطط دائري للدول وفلتر للتاريخ.",
        technologies: ["Power BI", "تحليل البيانات", "تصور البيانات"],
        link: "#",
        github: "",
        image: "/images/projects/FatawaDash.png",
        category: "Power BI وتحليل البيانات",
        workType: "personal",
        timeline: dashboardTimelineAr,
        techDetails: { languages: ["DAX","Power Query M"], frameworks: ["Power BI"], database: [], styling: [], tools: ["Power BI", "تحليل البيانات", "تصور البيانات"], techniques: ["نمذجة البيانات","فلاتر تفاعلية"], typography: "Segoe UI", loadTime: "80ms", mobileReady: true, colors: ["#1F3864","#FFC000","#2CA02C"], toolsAndSkills: ["Power BI Desktop","Excel"] },
        gallery: [{ image: "/images/projects/FatawaDash.png", caption: "معاينة اللوحة" }],
      },
      {
        slug: "jobs-dashboard-02",
        title: "لوحة تحكم الوظائف 02",
        description:
          "تعرض نظرة عامة على سوق وظائف البيانات العالمي، وتُبرز إجمالي عدد الوظائف ومتوسط المهارات المطلوبة لكل وظيفة والرواتب المتوسطة (السنوية والساعية)، مع تصور لأكثر المهارات طلبًا ومقارنة الرواتب حسب المسمى الوظيفي والدولة.",
        technologies: ["Power BI", "تحليل البيانات", "تصور البيانات"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiN2VkOWM5YWItODNkOC00MzkyLWE3MWUtNzY4YTY2NDUzNDdkIiwidCI6IjdmMDQ4ZmMxLTJlYTMtNDhlNC1hYzkyLTkxZDFlYjA5ODA3YyIsImMiOjEwfQ%3D%3D",
        github: "",
        image: "/images/projects/Jobs02.png",
        category: "Power BI وتحليل البيانات",
        workType: "personal",
        timeline: dashboardTimelineAr,
        techDetails: { languages: ["DAX","Power Query M"], frameworks: ["Power BI"], database: [], styling: [], tools: ["Power BI", "تحليل البيانات", "تصور البيانات"], techniques: ["نمذجة البيانات","فلاتر تفاعلية"], typography: "Segoe UI", loadTime: "110ms", mobileReady: true, colors: ["#2B2B2B","#6CB4E4","#FFFFFF"], toolsAndSkills: ["Power BI Desktop","Excel"] },
        gallery: [{ image: "/images/projects/Jobs02.png", caption: "معاينة اللوحة" }],
      },
      {
        slug: "sales-dashboard",
        title: "لوحة المبيعات",
        description:
          "تركز على أداء الأعمال عبر الزمن من خلال تتبع المبيعات الشهرية واتجاهات هامش الربح، مع تفاصيل حسب الدولة وفئة المنتج والكميات المباعة ومرشحات للسنة والمنطقة.",
        technologies: ["Power BI", "تحليل البيانات", "تصور البيانات"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiODRlMTRjZjAtMWEwYi00MGIwLTg5ZWYtNzM1YmVhZDFiMWJmIiwidCI6IjdmMDQ4ZmMxLTJlYTMtNDhlNC1hYzkyLTkxZDFlYjA5ODA3YyIsImMiOjEwfQ%3D%3D",
        github: "",
        image: "/images/projects/sales.png",
        category: "Power BI وتحليل البيانات",
        workType: "personal",
        timeline: dashboardTimelineAr,
        techDetails: { languages: ["DAX","Power Query M"], frameworks: ["Power BI"], database: [], styling: [], tools: ["Power BI", "تحليل البيانات", "تصور البيانات"], techniques: ["تحليل السلاسل الزمنية","فلاتر تفاعلية"], typography: "Segoe UI", loadTime: "120ms", mobileReady: true, colors: ["#1E93EB","#1B2A6B","#7A5FC4"], toolsAndSkills: ["Power BI Desktop","Excel"] },
        gallery: [{ image: "/images/projects/sales.png", caption: "معاينة اللوحة" }],
      },
      {
        slug: "jobs-dashboard-01",
        title: "لوحة تحكم الوظائف 01",
        description:
          "يقدم تحليلاً تفصيليًا للأدوار المرتبطة بالبيانات، ويشمل عدد الوظائف ومتوسط تقييمها والرواتب المتوسطة، إضافة إلى اتجاهات نشر الوظائف عبر الزمن ومقارنات الأجور حسب الدور.",
        technologies: ["Power BI", "تحليل البيانات", "تصور البيانات"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiYTczODMxZjItNzM2Zi00OTdmLThhNjQtNDhlYjBlYmRhNTI3IiwidCI6IjdmMDQ4ZmMxLTJlYTMtNDhlNC1hYzkyLTkxZDFlYjA5ODA3YyIsImMiOjEwfQ%3D%3D",
        github: "",
        image: "/images/projects/Jobs01.png",
        category: "Power BI وتحليل البيانات",
        workType: "personal",
        timeline: dashboardTimelineAr,
        techDetails: { languages: ["DAX","Power Query M"], frameworks: ["Power BI"], database: [], styling: [], tools: ["Power BI", "تحليل البيانات", "تصور البيانات"], techniques: ["نمذجة البيانات","تحليل مقارن"], typography: "Segoe UI", loadTime: "95ms", mobileReady: true, colors: ["#2E86DE","#D6EAF8","#333333"], toolsAndSkills: ["Power BI Desktop","Excel"] },
        gallery: [{ image: "/images/projects/Jobs01.png", caption: "معاينة اللوحة" }],
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
      age: 24,
      education: "Software Engineering at the University of Pahang in Malaysia",
      yearsOfExperience: 4,
    },
    contact: {
      email: "aswadies.87@gmail.com",
      phone: "+60103800852",
      portfolio: "My Portfolio",
      portfolioUrl: "https://alaswdi.vercel.app/",
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
        slug: "swing",
        title: "Swing",
        description:
          "Working as a Developer at Swing (Creative Agency) — currently building the complete website using Webflow, from visual design to interactive experience, with organized pages and content.",
        technologies: ["Webflow", "UI/UX Design"],
        link: "https://swing.sa/",
        github: "",
        image: "/images/projects/swing.png",
        category: "Development",
        workType: "professional",
        client: "Swing – Creative Agency",
        duration: "Current",
        role: "Developer",
        timeline: buildTimelineEn,
        techDetails: { languages: [], frameworks: ["Webflow"], database: [], styling: ["Webflow CMS"], tools: ["UI/UX Design"], techniques: ["Responsive Design","CMS Content Modeling"], typography: "Jali Arabic, Tahoma, sans-serif", loadTime: "120ms", mobileReady: true, colors: ["#FFC440","#222222","#161616"], toolsAndSkills: ["Webflow","Figma"] },
        gallery: [{ image: "/images/projects/swing.png", caption: "Homepage preview" }],
      },
      {
        slug: "idea-vault",
        title: "Idea Vault",
        description:
          "A personal knowledge hub for capturing ideas, notes, links, and files in one place, with AI-generated summaries and analysis to make saved content easy to search and revisit.",
        technologies: ["AI Integration", "Full Stack", "UI/UX Design"],
        link: "https://ai-powered-memos.vercel.app/",
        github: "",
        image: "/images/projects/idea.png",
        category: "Development",
        workType: "personal",
        timeline: buildTimelineEn,
        techDetails: { languages: ["TypeScript","JavaScript"], frameworks: ["React","Vite","Tailwind CSS"], database: [], styling: ["Tailwind CSS","shadcn/ui"], tools: ["AI Integration", "Full Stack", "UI/UX Design"], techniques: ["RAG","AI-generated Summaries"], typography: "ui-sans-serif, system-ui, sans-serif", loadTime: "95ms", mobileReady: true, colors: ["#4F46E5","#F8FAFC","#111827"], toolsAndSkills: ["GitHub","Vercel","VS Code"] },
        gallery: [{ image: "/images/projects/idea.png", caption: "Homepage preview" }],
      },
      {
        slug: "sunnah-hadith-search",
        title: "Sunnah Hadith Search",
        description:
          "A research platform where scholars can paste a hadith text and instantly find the closest matching explanations from uploaded reference books, with summarized commentary pulled from multiple authors.",
        technologies: ["NextJs", "RAG", "Search Engine"],
        link: "https://deep-search-hadith.vercel.app/",
        github: "",
        image: "/images/projects/hadith.png",
        category: "Development",
        workType: "personal",
        timeline: buildTimelineEn,
        techDetails: { languages: ["TypeScript"], frameworks: ["Next.js"], database: [], styling: [], tools: ["RAG", "Search Engine"], techniques: ["RAG","Semantic Search"], typography: "Noto Sans Arabic", loadTime: "140ms", mobileReady: true, colors: ["#2F8FBF","#F6F4F0","#1A1A1A"], toolsAndSkills: ["GitHub","Vercel","VS Code"] },
        gallery: [{ image: "/images/projects/hadith.png", caption: "Homepage preview" }],
      },
      {
        slug: "qomra-store",
        title: "Qomra Store",
        description:
          "Worked as a QA Tester at Qomra (Online Store) from 2023-2024 — reviewed and tested over 1,000 products on the store, verifying pages were error-free and the site was ready during updates and maintenance.",
        technologies: ["E-commerce", "Data Management", "UI/UX"],
        link: "https://qomra.pro/",
        github: "",
        image: "/images/projects/qomrah.png",
        category: "Maintenance and QA",
        workType: "professional",
        client: "Qomra – Online Store",
        duration: "2023-2024",
        role: "QA Tester",
        timeline: qaTimelineEn,
        techDetails: { languages: [], frameworks: ["Salla"], database: [], styling: [], tools: ["E-commerce", "Data Management", "UI/UX"], techniques: ["Manual QA Testing","Product Data Entry"], typography: "Tajawal", loadTime: "80ms", mobileReady: true, colors: ["#B02333","#181A1B","#F2F2F2"], toolsAndSkills: ["Salla Dashboard","Excel"] },
        gallery: [{ image: "/images/projects/qomrah.png", caption: "Homepage preview" }],
      },
      {
        slug: "alaswadi-art",
        title: "AlAswdadi Art",
        description:
          "Worked as a Developer at AlAswdadi Art in 2023 — developed the platform using Webflow and designed the full site from scratch for a strong, professional brand presence.",
        technologies: ["Webflow", "Branding", "UI/UX Design"],
        link: "https://www.alaswadiart.com/",
        github: "",
        image: "/images/projects/alaswdi.png",
        category: "Development",
        workType: "professional",
        client: "AlAswdadi Art",
        duration: "2023",
        role: "Developer",
        timeline: buildTimelineEn,
        techDetails: { languages: [], frameworks: ["Webflow"], database: [], styling: ["Webflow CMS"], tools: ["Branding", "UI/UX Design"], techniques: ["Brand Identity Design","Responsive Design"], typography: "Noto Sans", loadTime: "110ms", mobileReady: true, colors: ["#0A0A0A","#A79FE0","#FFFFFF"], toolsAndSkills: ["Webflow","Figma"] },
        gallery: [{ image: "/images/projects/alaswdi.png", caption: "Homepage preview" }],
      },
      {
        slug: "islamhouse-services",
        title: "IslamHouse Services",
        description:
          "Created a dedicated services page, added over 500 multilingual entries, and built a custom control panel.",
        technologies: ["Multilingual", "CMS", "Backend Development"],
        link: "#",
        github: "",
        image: "/images/projects/islamhouse.png",
        category: "Development",
        workType: "personal",
        timeline: buildTimelineEn,
        techDetails: { languages: ["PHP"], frameworks: [], database: ["MySQL"], styling: [], tools: ["Multilingual", "CMS", "Backend Development"], techniques: ["Multilingual Content Management","RESTful API"], typography: "Tajawal", loadTime: "120ms", mobileReady: true, colors: ["#1B3B6F","#F7F8FA","#C9A15A"], toolsAndSkills: ["phpMyAdmin","Excel"] },
        gallery: [{ image: "/images/projects/islamhouse.png", caption: "Homepage preview" }],
      },
      {
        slug: "headline-landing",
        title: "HeadLine Landing Page",
        description:
          "Worked as a UI Designer at HeadLine in 2022 — designed and developed a static landing page with an elegant, simple interface, focused on responsive design across various devices.",
        technologies: ["HTML", "CSS", "Responsive Design"],
        link: "https://headline-sa.com/",
        github: "",
        image: "/images/projects/headline.png",
        category: "Development",
        workType: "professional",
        client: "HeadLine",
        duration: "2022",
        role: "UI Designer",
        timeline: buildTimelineEn,
        techDetails: { languages: ["HTML", "CSS"], frameworks: [], database: [], styling: ["Custom CSS","Responsive Design"], tools: ["Responsive Design"], techniques: ["Responsive Design","Cross-browser Testing"], typography: "Noto Sans Arabic", loadTime: "95ms", mobileReady: true, colors: ["#0D1117","#F0654A","#7EC8E3"], toolsAndSkills: ["VS Code","Figma"] },
        gallery: [{ image: "/images/projects/headline.png", caption: "Homepage preview" }],
      },
      {
        slug: "alsunna-center",
        title: "Al-Sunna Center",
        description:
          "Worked as a QA Tester at Al-Sunna Center from 2023-2024 — conducted a comprehensive review of the site structure, tested all features, and prepared a simplified control panel guide for content management.",
        technologies: ["Full Stack", "QA Testing", "Documentation"],
        link: "https://alsunna.net/",
        github: "",
        image: "/images/projects/alssuna.png",
        category: "Maintenance and QA",
        workType: "professional",
        client: "Al-Sunna Center",
        duration: "2023-2024",
        role: "QA Tester",
        timeline: qaTimelineEn,
        techDetails: { languages: [], frameworks: [], database: [], styling: [], tools: ["Full Stack", "QA Testing", "Documentation"], techniques: ["Manual QA Testing","Content Documentation"], typography: "DIN Next", loadTime: "140ms", mobileReady: true, colors: ["#1F3B44","#EDEDED","#C9A15A"], toolsAndSkills: ["Browser DevTools","Notion"] },
        gallery: [{ image: "/images/projects/alssuna.png", caption: "Homepage preview" }],
      },
      {
        slug: "fatawapedia",
        title: "FatawaPedia",
        description:
          "Worked as a QA Tester at FatawaPedia from 2022-2023 — conducted a comprehensive review to identify programming errors, tested user experience, and provided a detailed control panel walkthrough.",
        technologies: ["Testing", "QA", "User Experience"],
        link: "https://fatawapedia.com/",
        github: "",
        image: "/images/projects/fatawa.png",
        category: "Maintenance and QA",
        workType: "professional",
        client: "FatawaPedia",
        duration: "2022-2023",
        role: "QA Tester",
        timeline: qaTimelineEn,
        techDetails: { languages: [], frameworks: [], database: [], styling: [], tools: ["Testing", "QA", "User Experience"], techniques: ["Manual QA Testing","UX Testing"], typography: "Noto Sans Arabic", loadTime: "80ms", mobileReady: true, colors: ["#1E3A45","#B9C08C","#FBF8E8"], toolsAndSkills: ["Browser DevTools","Notion"] },
        gallery: [{ image: "/images/projects/fatawa.png", caption: "Homepage preview" }],
      },
      {
        slug: "alarjwan-restaurant",
        title: "Alarjwan Restaurant",
        description:
          "Developed website solutions for restaurant including menu display and ordering features.",
        technologies: ["Web Development", "Restaurant Management"],
        link: "https://abdulaziz871.github.io/arj/",
        github: "https://github.com/abdulaziz871/arj",
        image: "/images/projects/arjwan.png",
        category: "Development",
        workType: "personal",
        timeline: buildTimelineEn,
        techDetails: { languages: ["HTML","CSS","JavaScript"], frameworks: ["Bootstrap"], database: [], styling: ["Bootstrap"], tools: ["Web Development", "Restaurant Management"], techniques: ["Responsive Design","Static Site Deployment"], typography: "Baloo Bhaijaan 2", loadTime: "110ms", mobileReady: true, colors: ["#3D4F32","#4C5F3E","#F1EEE7"], toolsAndSkills: ["VS Code","GitHub"] },
        gallery: [{ image: "/images/projects/arjwan.png", caption: "Homepage preview" }],
      },
      {
        slug: "servizu-logistics",
        title: "ServizULogistics",
        description:
          "Developed logistics management solutions and web applications with efficient tracking systems.",
        technologies: ["Logistics", "Tracking Systems", "Web Apps"],
        link: "https://abdulaziz871.github.io/ServizULogistics/",
        github: "https://github.com/abdulaziz871/ServizULogistics",
        image: "/images/projects/ser.png",
        category: "Development",
        workType: "personal",
        timeline: buildTimelineEn,
        techDetails: { languages: ["HTML","CSS","JavaScript"], frameworks: ["Bootstrap"], database: [], styling: ["Bootstrap"], tools: ["Logistics", "Tracking Systems", "Web Apps"], techniques: ["Responsive Design","Static Site Deployment"], typography: "Baloo Bhaijaan 2", loadTime: "120ms", mobileReady: true, colors: ["#8B2E3C","#D4A94A","#FFFFFF"], toolsAndSkills: ["VS Code","GitHub"] },
        gallery: [{ image: "/images/projects/ser.png", caption: "Homepage preview" }],
      },
      {
        slug: "athkar",
        title: "Athkar",
        description:
          "Developed Islamic application for daily prayers and remembrance with user-friendly interface.",
        technologies: ["Mobile Development", "Islamic Content"],
        link: "http://athkar.atwebpages.com/",
        github: "",
        image: "/images/projects/athkar.png",
        category: "Development",
        workType: "personal",
        timeline: buildTimelineEn,
        techDetails: { languages: ["HTML","CSS","JavaScript"], frameworks: ["Bootstrap"], database: [], styling: ["Bootstrap"], tools: ["Mobile Development", "Islamic Content"], techniques: ["Responsive Design","Static Site Deployment"], typography: "Baloo Bhaijaan 2", loadTime: "95ms", mobileReady: true, colors: ["#3A4A6B","#E8EDF5","#FFFFFF"], toolsAndSkills: ["VS Code","GitHub"] },
        gallery: [{ image: "/images/projects/athkar.png", caption: "Homepage preview" }],
      },
      {
        slug: "volunteer-portal",
        title: "Volunteer Portal",
        description:
          "Developed a dedicated portal to collect volunteers through the Dar Al-Islam website. Designed and implemented an easy-to-use interface for registration and participation.",
        technologies: ["Web Development", "Database", "Forms"],
        link: "#",
        github: "",
        image: "/images/projects/volunteer.png",
        category: "Development",
        workType: "personal",
        timeline: buildTimelineEn,
        techDetails: { languages: ["PHP"], frameworks: [], database: ["MySQL"], styling: [], tools: ["Web Development", "Forms"], techniques: ["Form Validation","RESTful API"], typography: "Tajawal", loadTime: "140ms", mobileReady: true, colors: ["#3FAEDD","#D9BE8F","#5A3A1E"], toolsAndSkills: ["phpMyAdmin","Figma"] },
        gallery: [{ image: "/images/projects/volunteer.png", caption: "Homepage preview" }],
      },
      {
        slug: "fatawapedia-dashboard",
        title: "FatawaPedia Dashboard",
        description:
          "Provides user and traffic insights for a digital platform. It displays new users, traffic sources (direct, search, social, referral), user activity events, and active users (daily, weekly, monthly). Geographic distribution of users is shown via a world map and country pie chart, with a date filter for recent days.",
        technologies: ["Power BI", "Data Analysis", "Data Visualization"],
        link: "#",
        github: "",
        image: "/images/projects/FatawaDash.png",
        category: "Power BI & Data Analytics",
        workType: "personal",
        timeline: dashboardTimelineEn,
        techDetails: { languages: ["DAX","Power Query M"], frameworks: ["Power BI"], database: [], styling: [], tools: ["Power BI", "Data Analysis", "Data Visualization"], techniques: ["Data Modeling","Interactive Filtering"], typography: "Segoe UI", loadTime: "80ms", mobileReady: true, colors: ["#1F3864","#FFC000","#2CA02C"], toolsAndSkills: ["Power BI Desktop","Excel"] },
        gallery: [{ image: "/images/projects/FatawaDash.png", caption: "Dashboard preview" }],
      },
      {
        slug: "jobs-dashboard-02",
        title: "Jobs Dashboard 02",
        description:
          "Shows a high-level overview of the global data job market. It highlights total job count, average skills required per job, and median salaries (yearly and hourly). The dashboard also visualizes the most in-demand skills and compares median salaries across data-related job titles, with filters for job title and country.",
        technologies: ["Power BI", "Data Analysis", "Data Visualization"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiN2VkOWM5YWItODNkOC00MzkyLWE3MWUtNzY4YTY2NDUzNDdkIiwidCI6IjdmMDQ4ZmMxLTJlYTMtNDhlNC1hYzkyLTkxZDFlYjA5ODA3YyIsImMiOjEwfQ%3D%3D",
        github: "",
        image: "/images/projects/Jobs02.png",
        category: "Power BI & Data Analytics",
        workType: "personal",
        timeline: dashboardTimelineEn,
        techDetails: { languages: ["DAX","Power Query M"], frameworks: ["Power BI"], database: [], styling: [], tools: ["Power BI", "Data Analysis", "Data Visualization"], techniques: ["Data Modeling","Interactive Filtering"], typography: "Segoe UI", loadTime: "110ms", mobileReady: true, colors: ["#2B2B2B","#6CB4E4","#FFFFFF"], toolsAndSkills: ["Power BI Desktop","Excel"] },
        gallery: [{ image: "/images/projects/Jobs02.png", caption: "Dashboard preview" }],
      },
      {
        slug: "sales-dashboard",
        title: "Sales Dashboard",
        description:
          "Focuses on business performance over time, tracking monthly sales, profit margin, and regional/product breakdowns.",
        technologies: ["Power BI", "Data Analysis", "Data Visualization"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiODRlMTRjZjAtMWEwYi00MGIwLTg5ZWYtNzM1YmVhZDFiMWJmIiwidCI6IjdmMDQ4ZmMxLTJlYTMtNDhlNC1hYzkyLTkxZDFlYjA5ODA3YyIsImMiOjEwfQ%3D%3D",
        github: "",
        image: "/images/projects/sales.png",
        category: "Power BI & Data Analytics",
        workType: "personal",
        timeline: dashboardTimelineEn,
        techDetails: { languages: ["DAX","Power Query M"], frameworks: ["Power BI"], database: [], styling: [], tools: ["Power BI", "Data Analysis", "Data Visualization"], techniques: ["Time-series Analysis","Interactive Filtering"], typography: "Segoe UI", loadTime: "120ms", mobileReady: true, colors: ["#1E93EB","#1B2A6B","#7A5FC4"], toolsAndSkills: ["Power BI Desktop","Excel"] },
        gallery: [{ image: "/images/projects/sales.png", caption: "Dashboard preview" }],
      },
      {
        slug: "jobs-dashboard-01",
        title: "Jobs Dashboard 01",
        description:
          "Offers a detailed analytical view of data-related roles. It includes job count, average job rating, and median salaries, plus trends of job postings over time. Scatter plots compare hourly vs yearly pay by role, bar charts show job counts per title, and a detailed table summarizes job statistics with trends for each role.",
        technologies: ["Power BI", "Data Analysis", "Data Visualization"],
        link: "https://app.powerbi.com/view?r=eyJrIjoiYTczODMxZjItNzM2Zi00OTdmLThhNjQtNDhlYjBlYmRhNTI3IiwidCI6IjdmMDQ4ZmMxLTJlYTMtNDhlNC1hYzkyLTkxZDFlYjA5ODA3YyIsImMiOjEwfQ%3D%3D",
        github: "",
        image: "/images/projects/Jobs01.png",
        category: "Power BI & Data Analytics",
        workType: "personal",
        timeline: dashboardTimelineEn,
        techDetails: { languages: ["DAX","Power Query M"], frameworks: ["Power BI"], database: [], styling: [], tools: ["Power BI", "Data Analysis", "Data Visualization"], techniques: ["Data Modeling","Comparative Analysis"], typography: "Segoe UI", loadTime: "95ms", mobileReady: true, colors: ["#2E86DE","#D6EAF8","#333333"], toolsAndSkills: ["Power BI Desktop","Excel"] },
        gallery: [{ image: "/images/projects/Jobs01.png", caption: "Dashboard preview" }],
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