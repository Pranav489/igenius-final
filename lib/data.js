// ============================================================
// I-Genius Abacus Academy — Central Data File
// ============================================================

import { Award, Briefcase, Calendar, Globe, School, Users } from "lucide-react";

export const companyInfo = {
  fullName: "I-Genius Abacus Academy India Pvt Ltd",
  shortName: "I-Genius",
  tagline: "Unlock the Genius Within",
  baseUrl: "https://igeniusindia.in",
  phone: "+91 7770045402",
  phoneRaw: "917770045402",
  email: "info.igeniusnsk@gmail.com",
  address: {
    line1: "Office No. 7/8/9, 2nd Floor Silver Plaza",
    line2: "Opp. BSNL Office, Canada Corner Sharanpur Road",
    city: "Nashik",
    state: "Maharashtra",
    pincode: "422002",
    country: "India",
    full: "Office No. 7/8/9, 2nd Floor Silver Plaza, Opp. BSNL Office, Canada Corner Sharanpur Road, Nashik - 422002, Maharashtra",
  },
  founded: 2007,
  iso: "ISO 9001:2015 Certified",
  authorization: "Authorised by EBVTR Govt. of India",
  worldRecord: "Listed in Wonder Book of International London",
  social: {
    instagram: "https://www.instagram.com/igenius_abacus_/",
    youtube: "https://www.youtube.com/@igeniusabacusacademy",
    facebook: "https://www.facebook.com/igeniusabacus",
    whatsapp: "https://wa.me/917770045402",
  },
};

// ============================================================
// Navigation Items
// ============================================================
export const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Courses',
    href: '/courses',
    dropdown: [
      { name: 'Abacus (Age 5-14)', href: '/courses/abacus' },
      { name: 'Vedic Maths', href: '/courses/vedic-math' },
      { name: "Rubik's Cube", href: '/courses/rubik-cube' },
      { name: 'View All Courses', href: '/courses' },
    ]
  },
  { name: 'About Us', href: '/about-us' },
  { name: 'School Project', href: '/school-project' },
  { 
    name: "Media", 
    dropdown: [
      { name: "Photo Gallery", href: "/media/gallery" },
      { name: "Video Gallery", href: "/media/videos" },
    ] 
  },
  { name: 'Franchise', href: '/franchise' },
  { name: 'Blog', href: '/blog' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' },
];
// ============================================================
// Stats
// ============================================================
export const stats = [
    {
      id: 1,
      label: "Franchisees",
      value: 550,
      suffix: "+",
      icon: Briefcase,
      description: "Running across India & abroad",
      color: "#E87A5D"
    },
    {
      id: 2,
      label: "School Projects",
      value: 165,
      suffix: "+",
      icon: School,
      description: "Associated with prestigious schools",
      color: "#2C7A6E"
    },
    {
      id: 3,
      label: "Students Trained",
      value: 150000,
      suffix: "+",
      icon: Users,
      description: "Since the year 2007",
      color: "#E87A5D"
    },
    {
      id: 4,
      label: "Qualified Trainers",
      value: 50,
      suffix: "+",
      icon: Award,
      description: "Highly motivated & trained",
      color: "#2C7A6E"
    },
    {
      id: 5,
      label: "Countries Presence",
      value: 5,
      suffix: "",
      icon: Globe,
      description: "Global footprint across continents",
      color: "#E87A5D"
    },
    {
      id: 6,
      label: "Years of Excellence",
      value: 18,
      suffix: "+",
      icon: Calendar,
      description: "Established in 2007",
      color: "#2C7A6E"
    }
  ];


export const about = {
  title: "India's Most Trusted",
  highlight: "Abacus Academy",
  description: [
    "I-Genius Abacus Academy India Pvt Ltd, established in 2007, has been a pioneer in providing high-quality Abacus Education to students across India and abroad. With a strong commitment to excellence and a passion for education, we've transformed the way children learn mathematics.",
    "Our academy is proud to have a network of 550+ Franchisees running all over India and abroad, 165+ School Project Associations, and we have successfully trained over 1.5 lakh students in Abacus Education since our inception."
  ],
  features: [
    { icon: 'heart', value: '1.5L+', label: 'Happy Students' },
    { icon: 'bulb', value: '550+', label: 'Franchises' },
    { icon: 'grad', value: '165+', label: 'School Projects' },
    { icon: 'trophy', value: '50+', label: 'Expert Trainers' }
  ],
  image: '/images/about-main.jpg', // Add your image path
  imageCaption: 'Making math magical since 2007',
  quote: "The best decision we made for our child's future!",
  quoteAuthor: "Priya Sharma, Parent",
  bottomStats: [
    { value: '15+', label: 'Years of Excellence' },
    { value: '50+', label: 'Qualified Trainers' },
    { value: '5', label: 'Countries' },
    { value: '165+', label: 'Partner Schools' }
  ]
};


// ============================================================
// Courses
// ============================================================
export const courses = [
  {
    id: "abacus",
    slug: "abacus",
    name: "Abacus",
    fullName: "Abacus Mental Arithmetic",
    tagline: "Master numbers with your mind",
    ageGroup: "5–14 Years",
    duration: "8 Levels (approx. 2 years)",
    classMode: "Online & Offline",
    image: "https://igeniusindia.in/admin/assets/images/course/274799.png",
    bannerImage: "https://igeniusindia.in/admin/assets/images/course/banner/418169.png",
    contentImage: "https://igeniusindia.in/admin/assets/images/course/contain/265561.png",
    url: "/courses/abacus",
    shortDesc:
      "Develop extraordinary mental calculation skills using the ancient abacus tool. Build concentration, memory, and mathematical confidence.",
    description:
      "I-Genius Abacus program is a scientifically designed course that develops a child's mental arithmetic abilities using the Japanese Soroban abacus. Through structured levels, children learn to perform complex calculations mentally, improving brain development, concentration, and academic performance.",
    benefits: [
      "Lightning-fast mental calculations",
      "Enhanced concentration & focus",
      "Improved memory retention",
      "Greater academic confidence",
      "Better listening skills",
      "Stronger logical reasoning",
    ],
    levels: [
      { level: 1, name: "Foundation", duration: "3 months", skills: "Basic counting, single-digit addition & subtraction" },
      { level: 2, name: "Elementary", duration: "3 months", skills: "Two-digit calculations, complement methods" },
      { level: 3, name: "Intermediate", duration: "3 months", skills: "Three-digit calculations, speed improvement" },
      { level: 4, name: "Advanced-I", duration: "3 months", skills: "Multiplication basics, four-digit numbers" },
      { level: 5, name: "Advanced-II", duration: "3 months", skills: "Division, mixed operations" },
      { level: 6, name: "Expert-I", duration: "3 months", skills: "Visualization, mental calculation" },
      { level: 7, name: "Expert-II", duration: "3 months", skills: "High-speed mental math, large numbers" },
      { level: 8, name: "Master", duration: "3 months", skills: "Championship-level speed calculations" },
    ],
    curriculum: [
      "Abacus bead manipulation techniques",
      "Friends & complement addition-subtraction methods",
      "Mental imagery (visualization) training",
      "Multiplication & division on abacus",
      "Listening skill development through dictation",
      "Speed writing exercises",
    ],
    certifications: "Level completion certificates + National Championship qualification",
    rating: 4.9,
    studentsCount: "50,000+",
    color: "#E87A5D",
    icon: "Calculator",
    isPopular: true
  },
  {
    id: "vedic-math",
    slug: "vedic-math",
    name: "Vedic Math",
    fullName: "Vedic Mathematics",
    tagline: "Ancient wisdom for modern speed",
    ageGroup: "8–16 Years",
    duration: "3–6 Months",
    classMode: "Online & Offline",
    image: "https://igeniusindia.in/admin/assets/images/course/792345.png",
    bannerImage: "https://igeniusindia.in/admin/assets/images/course/banner/896386.png",
    contentImage: "https://igeniusindia.in/admin/assets/images/course/contain/619969.png",
    url: "/courses/vedic-math",
    shortDesc:
      "Learn ancient Indian mathematical techniques for rapid calculations. Excel in competitive exams with speed math skills.",
    description:
      "Vedic Mathematics is a collection of techniques/sutras to solve mathematical arithmetics in an easy and faster way. Based on ancient Indian scriptures, these 16 sutras cover all branches of mathematics. I-Genius Vedic Math program helps students solve complex problems in seconds.",
    benefits: [
      "10x faster calculations than conventional methods",
      "Reduced dependence on calculators",
      "Better exam performance & accuracy",
      "Enhanced mental agility",
      "Stronger number sense",
      "Improved confidence in mathematics",
    ],
    levels: [
      { level: 1, name: "Beginner", duration: "6 weeks", skills: "Basic sutras, addition-subtraction shortcuts" },
      { level: 2, name: "Intermediate", duration: "6 weeks", skills: "Multiplication & division techniques" },
      { level: 3, name: "Advanced", duration: "6 weeks", skills: "Algebra, squares, cubes, fractions" },
    ],
    curriculum: [
      "16 Vedic Math sutras and their applications",
      "Vertically and crosswise multiplication",
      "By one more than the one before",
      "All from 9 and the last from 10",
      "Digit sums and nine point circles",
      "Square roots, cube roots using Vedic methods",
    ],
    certifications: "Course completion certificate + EBVTR authorization",
    rating: 4.8,
    studentsCount: "25,000+",
    color: "#2C7A6E",
    icon: "Brain",
    isPopular: true
  },
  {
    id: "rubik-cube",
    slug: "rubik-cube",
    name: "Rubik Cube",
    fullName: "Rubik Cube Mastery",
    tagline: "Solve, think, and conquer",
    ageGroup: "6–18 Years",
    duration: "2–4 Months",
    classMode: "Online & Offline",
    image: "https://igeniusindia.in/admin/assets/images/course/881984.png",
    bannerImage: "https://igeniusindia.in/admin/assets/images/course/banner/933400.png",
    contentImage: "https://igeniusindia.in/admin/assets/images/course/contain/948898.png",
    url: "/courses/rubik-cube",
    shortDesc:
      "Master the world's most popular puzzle. Develop logical thinking, patience, and problem-solving skills through structured cube training.",
    description:
      "The Rubik Cube course at I-Genius goes far beyond solving a puzzle. It's a complete brain-training activity that builds logical thinking, spatial reasoning, memory, and patience. Students progress from 3x3 solving to advanced speed-cubing techniques.",
    benefits: [
      "Enhanced logical thinking & problem-solving",
      "Improved spatial reasoning",
      "Greater patience & persistence",
      "Better hand-eye coordination",
      "Sharper memory and pattern recognition",
      "Boost in self-confidence",
    ],
    levels: [
      { level: 1, name: "Beginner 3x3", duration: "4 weeks", skills: "Layer-by-layer method, basic algorithms" },
      { level: 2, name: "Intermediate", duration: "4 weeks", skills: "CFOP method, F2L techniques" },
      { level: 3, name: "Advanced 3x3", duration: "4 weeks", skills: "OLL & PLL algorithms, speed techniques" },
      { level: 4, name: "4x4 & Beyond", duration: "4 weeks", skills: "4x4, 5x5 cubes, advanced puzzles" },
    ],
    curriculum: [
      "Introduction to cube notation and moves",
      "Layer-by-layer beginner method",
      "CFOP (Fridrich) method",
      "First two layers (F2L) techniques",
      "Orientation of last layer (OLL) algorithms",
      "Permutation of last layer (PLL) algorithms",
    ],
    certifications: "Level certificates + competition eligibility",
    rating: 4.7,
    studentsCount: "15,000+",
    color: "#E87A5D",
    icon: "Puzzle",
    isPopular: false,
    isNew: true
  },
];

// Helper functions
export const getAllCourses = () => {
  return courses;
};

export const getCourseBySlug = (slug) => {
  return courses.find(course => course.slug === slug);
};

export const getCourseById = (id) => {
  return courses.find(course => course.id === id);
};

export const getPopularCourses = () => {
  return courses.filter(course => course.isPopular);
};

// ============================================================
// Why I-Genius Features
// ============================================================
export const whyFeatures = [
  {
    id: 1,
    title: "50+ Qualified Trainers",
    description:
      "Our certified trainers bring expertise and passion to every class, ensuring every child gets personalized attention.",
    icon: "GraduationCap",
    color: "#7C3AED",
    doodle: "/doodles/cap_1.png",
  },
  {
    id: 2,
    title: "Child-Friendly Study Material",
    description:
      "Purpose-designed books, worksheets, and tools that make learning engaging, fun, and age-appropriate.",
    icon: "BookOpen",
    color: "#F97316",
    doodle: "/doodles/book_1.png",
  },
  {
    id: 3,
    title: "Online & Offline Classes",
    description:
      "Flexible learning with both physical centre classes and world-class e-learning platform access.",
    icon: "Monitor",
    color: "#10B981",
    doodle: null,
  },
  {
    id: 4,
    title: "National Competitions",
    description:
      "Regular intra and inter-school competitions that challenge students and build competitive spirit.",
    icon: "Trophy",
    color: "#FBBF24",
    doodle: "/doodles/award_1.png",
  },
  {
    id: 5,
    title: "ISO 9001:2015 Certified",
    description:
      "Quality-assured curriculum and operations certified under international ISO standards for education.",
    icon: "ShieldCheck",
    color: "#3B82F6",
    doodle: null,
  },
  {
    id: 6,
    title: "World Record Recognition",
    description:
      "Listed in the Wonder Book of International London — a testimony to our impact and student excellence.",
    icon: "Star",
    color: "#EC4899",
    doodle: "/doodles/award_2.png",
  },
];

export const classModes = [
  {
    id: 'online',
    name: 'Online Classes',
    tagline: 'Learn from anywhere, anytime',
    description: 'Live interactive online classes conducted by expert trainers. Perfect for students who prefer learning from the comfort of their home.',
    shortDescription: 'Live interactive classes from home',
    features: [
      'Live 1:1 and group sessions',
      'Interactive learning platform',
      'Recorded sessions for revision',
      'Digital study materials',
      'Parent progress tracking',
      'Flexible scheduling'
    ],
    benefits: [
      'Learn from anywhere in the world',
      'No travel time - more practice time',
      'Access to recorded sessions',
      'Regular progress reports',
      'Interactive digital tools'
    ],
    schedule: 'Flexible Timings',
    batchSize: '6-8 Students',
    ageGroup: 'Ages 4-14',
    stats: '5000+ Online Students',
    image: '/images/modes/online-class.jpg',
    ctaText: 'Join Online Demo',
    ctaLink: '/contact?mode=online'
  },
  {
    id: 'offline',
    name: 'Offline Classes',
    tagline: 'Learn at our centers',
    description: 'Traditional classroom learning at our state-of-the-art centers with personal attention from expert trainers.',
    shortDescription: 'Center-based classroom learning',
    features: [
      'Personal attention from trainers',
      'Peer learning environment',
      'Physical abacus tool training',
      'Regular doubt-clearing sessions',
      'Parent-teacher meetings',
      'Center library access'
    ],
    benefits: [
      'Direct interaction with trainers',
      'Learn with peer group',
      'Structured classroom environment',
      'Physical teaching aids',
      'Regular assessments'
    ],
    schedule: 'Weekday & Weekend batches',
    batchSize: '8-10 Students',
    ageGroup: 'Ages 4-14',
    stats: '50+ Centers',
    image: '/images/modes/offline-class.jpg',
    ctaText: 'Visit Nearest Center',
    ctaLink: '/contact?mode=offline'
  }
];

// ============================================================
// Testimonials
// ============================================================
export const testimonials = [
  {
    id: 1,
    name: "Dinesh Shewalekar",
    role: "Parent",
    child: "Son – Level 3 Abacus",
    rating: 5,
    text: "My son's math grades have improved dramatically since joining I-Genius. The teachers are incredibly patient and the structured approach really works. He can now do mental calculations faster than a calculator!",
    city: "Nashik",
    image: "https://igeniusindia.in/admin/assets/images/parent/288920.jpg",
  },
  {
    id: 2,
    name: "Pranjal Shevale",
    role: "Parent",
    child: "Daughter – Level 5 Abacus",
    rating: 5,
    text: "I-Genius has transformed my daughter's confidence completely. She used to fear math — now she loves it. The abacus program has improved not just her math but her overall focus and memory.",
    city: "Nashik",
    image: "https://igeniusindia.in/admin/assets/images/parent/928195.jpg",
  },
  {
    id: 3,
    name: "Pankaj Gangurde",
    role: "Parent",
    child: "Son – Vedic Math & Abacus",
    rating: 5,
    text: "Excellent teaching methodology. The trainers are highly qualified and the curriculum is well-structured. My son completed both abacus and Vedic math, and his performance in school is outstanding.",
    city: "Mumbai",
    image: "https://igeniusindia.in/admin/assets/images/parent/629662.jpg",
  },
  {
    id: 4,
    name: "Purwa Shinde",
    role: "Parent",
    child: "Daughter – Rubik Cube",
    rating: 5,
    text: "The Rubik Cube course has done wonders for my daughter's logical thinking. She's more patient, focused, and loves challenges now. I-Genius is truly unlocking her genius!",
    city: "Pune",
    image: "https://igeniusindia.in/admin/assets/images/parent/862895.jpg",
  },
  {
    id: 5,
    name: "Shital Bachhav",
    role: "Parent",
    child: "Son – Level 6 Abacus",
    rating: 5,
    text: "We enrolled our son in I-Genius three years ago and it is the best decision we've made. He participated in national competition and won first place. The academy's support is phenomenal.",
    city: "Nashik",
    image: "https://igeniusindia.in/admin/assets/images/parent/554305.jpg",
  },
];

// ============================================================
// Team Members
// ============================================================
export const leaders = [
  {
    id: 1,
    name: "Nita Pawar",
    role: "Founder & Director",
    bio: "Visionary leader with a passion for education. Founded I-Genius in 2007 with a mission to make quality abacus education accessible to every child.",
    quote: "Every child has a genius within. Our job is to help them discover it.",
    image: "/images/leaders/nita-pawar.jpg",
    linkedin: "https://linkedin.com/in/nita-pawar",
    email: "nita@igenius.com"
  },
  {
    id: 2,
    name: "Yogesh Pawar",
    role: "Director",
    bio: "Strategic leader driving the academy's growth and expansion across India and internationally.",
    quote: "Education is the most powerful tool to transform lives.",
    image: "/images/leaders/yogesh-pawar.jpg",
    linkedin: "https://linkedin.com/in/yogesh-pawar",
    email: "yogesh@igenius.com"
  },
  {
    id: 3,
    name: "Dattatray S",
    role: "Executive Head",
    bio: "Overseeing operations and ensuring quality standards across all franchises.",
    quote: "Excellence is not a skill, it's an attitude.",
    image: "/images/leaders/dattatray.jpg"
  }
];

export const team = [
  { id: 1, name: "Roshani", role: "Head IT", specialty: "Technology & Innovation", image: "/images/team/roshani.jpg" },
  { id: 2, name: "Suvarna", role: "Head Admin", specialty: "Operations Management", image: "/images/team/suvarna.jpg" },
  { id: 3, name: "Anita", role: "Head Training", specialty: "Trainer Development", image: "/images/team/anita.jpg" },
  { id: 4, name: "Kranti", role: "Leader Pune Division", specialty: "Regional Operations", image: "/images/team/kranti.jpg" },
  { id: 5, name: "Harshada", role: "Leader School Project", specialty: "School Partnerships", image: "/images/team/harshada.jpg" },
  { id: 6, name: "Nutan", role: "Leader School Project", specialty: "School Partnerships", image: "/images/team/nutan.jpg" },
  { id: 7, name: "Pratibha", role: "Leader Dhule Malegaon Division", specialty: "Regional Operations", image: "/images/team/pratibha.jpg" },
  { id: 8, name: "Ujjwala", role: "Leader Nashik Division Private", specialty: "Franchise Management", image: "/images/team/ujjwala.jpg" },
  { id: 9, name: "Rupali", role: "Leader Chh. Sambhaji Nagar Division", specialty: "Regional Operations", image: "/images/team/rupali.jpg" },
  { id: 10, name: "Kishori", role: "Leader School Project English Medium", specialty: "English Medium Programs", image: "/images/team/kishori.jpg" },
  { id: 11, name: "Mansi", role: "Leader Malegaon Division Private", specialty: "Franchise Management", image: "/images/team/mansi.jpg" }
];

// ============================================================
// Franchise Info
// ============================================================
export const franchiseStats = {
  franchises: 550,
  students: 150000,
  trainers: 50,
  countries: 5
};

export const franchiseTestimonials = [
  {
    "name": "Mrs. Suvarna Shewale",
    "city": "Nashik",
    "text": "Joining I-Genius as a franchise partner has been the best business decision of my life. The support from HQ is excellent and students love the program.",
    "image": "https://igeniusindia.in/admin/assets/images/franchise/12723.jpg"
  },
  {
    "name": "Mrs. Bharti Sonawane",
    "city": "Pune",
    "text": "I started as a unit franchise 3 years ago with 20 students. Today I have 120+ students. I-Genius brand name does the selling for you!",
    "image": "https://igeniusindia.in/admin/assets/images/franchise/814494.png"
  },
  {
    "name": "Mrs. Harshada Patil",
    "city": "Aurangabad",
    "text": "The training and curriculum support is exceptional. My students consistently win at national competitions which builds great trust with parents.",
    "image": "https://igeniusindia.in/admin/assets/images/franchise/939556.png"
  },
  {
    "name": "Mrs. Rupali Deore",
    "city": "Nashik",
    "text": "Running an I-Genius franchise is truly fulfilling — I am impacting children's lives while building a profitable business. Highly recommended!",
    "image": "https://igeniusindia.in/admin/assets/images/franchise/621763.jpg"
  },
  {
    "name": "Mrs. Pratibha Shelar",
    "city": "Mumbai",
    "text": "The marketing support and competition events from I-Genius HQ help me attract new students easily. My centre is growing month after month.",
    "image": "https://igeniusindia.in/admin/assets/images/franchise/921043.jpg"
  },
  {
    "name": "Mrs. Ujjwala Bachhav",
    "city": "Jalgaon",
    "text": "What I love most is the sense of community among all franchisees. We share ideas, learn from each other, and grow together under I-Genius.",
    "image": "https://igeniusindia.in/admin/assets/images/franchise/648482.JPG"
  },
  {
    "name": "Mrs. Mrunal Sonawane",
    "city": "Dhule",
    "text": "As a first-time entrepreneur, I was nervous. But I-Genius's step-by-step onboarding made everything smooth. Best investment I have ever made.",
    "image": "https://igeniusindia.in/admin/assets/images/franchise/960918.png"
  }
]

export const centersData = [
  {
    id: 1,
    centerName: "I-Genius Abacus - Nashik Center",
    state: "Maharashtra",
    district: "Nashik",
    area: "Canada Corner",
    address: "Office No. 7/8/9, 2nd Floor, Silver Plaza, Opp. BSNL Office",
    landmark: "Near Canada Corner Signal",
    contactNumber: "+91 7770045402",
    lat: 20.102972, 
    lng: 73.941139,
    authorizedFranchisee: "I-Genius Head Office"
  },
  {
    id: 2,
    centerName: "I-Genius Abacus - Gangapur Road",
    state: "Maharashtra",
    district: "Nashik",
    area: "Gangapur Road",
    address: "Shop No. 5, Sai Arcade, Gangapur Road",
    landmark: "Near City Pride School",
    contactNumber: "+91 9823456789",
    lat: 20.0115,
    lng: 73.7823,
    authorizedFranchisee: "Mrs. Kavita Deshmukh"
  },
  {
    id: 3,
    centerName: "I-Genius Abacus - College Road",
    state: "Maharashtra",
    district: "Nashik",
    area: "College Road",
    address: "1st Floor, Shivam Complex, College Road",
    landmark: "Opposite Nashik College",
    contactNumber: "+91 9876543210",
    lat: 20.0082,
    lng: 73.7745,
    authorizedFranchisee: "Mr. Amit Patil"
  },
  {
    id: 4,
    centerName: "I-Genius Abacus - Shivaji Nagar",
    state: "Maharashtra",
    district: "Pune",
    area: "Shivaji Nagar",
    address: "Office No. 3, Omkar Plaza, Shivaji Nagar",
    landmark: "Near Shivaji Nagar Bus Stop",
    contactNumber: "+91 9923456789",
    lat: 19.963265164731173, 
    lng: 73.74823198211217,
    authorizedFranchisee: "Mrs. Sneha Joshi"
  },
  {
    id: 5,
    centerName: "I-Genius Abacus - Hinjawadi",
    state: "Maharashtra",
    district: "Pune",
    area: "Hinjawadi",
    address: "Shop No. 12, Rajiv Gandhi Infotech Park, Hinjawadi",
    landmark: "Near Phase 1 Circle",
    contactNumber: "+91 9988776655",
    lat: 18.5901,
    lng: 73.7348,
    authorizedFranchisee: "Mr. Rahul Shinde"
  },
  {
    id: 6,
    centerName: "I-Genius Abacus - Andheri",
    state: "Maharashtra",
    district: "Mumbai",
    area: "Andheri East",
    address: "101, Crystal Plaza, Andheri East",
    landmark: "Near Andheri Station",
    contactNumber: "+91 9765432109",
    lat: 19.0896,
    lng: 72.8656,
    authorizedFranchisee: "Mrs. Neha Shah"
  }
];

// ============================================================
// School Project Info
// ============================================================
export const schoolProjectStats = {
  schools: 165,
  students: 150000,
  trainers: 50,
  years: 10
};

export const partnerSchools = [
  { name: "Maratha Vidhya Prasarak Samaj", city: "Nashik", logo: "/images/MVPS LOGO.png" },
  { name: "St. Joseph's Convent School", city: "Nashik", logo: null },
  { name: "Podar International School", city: "Mumbai", logo: null },
  { name: "Ryan International School", city: "Pune", logo: null },
  { name: "Delhi Public School", city: "Nashik", logo: null },
  { name: "Kendriya Vidyalaya", city: "Nashik", logo: null },
  { name: "Bhavan's B.P. Vidya Mandir", city: "Nagpur", logo: null },
  { name: "Jain International School", city: "Aurangabad", logo: null },
  // Add more schools as needed
];

// ============================================================
// Blog Posts
// ============================================================

export const blogPosts = [
  {
    id: 1,
    slug: "benefits-of-abacus-for-children",
    title: "7 Scientifically Proven Benefits of Abacus Training for Children",
    excerpt: "Research shows that abacus training does far more than improve math skills. Discover the science behind how abacus learning rewires young brains for success.",
    content: `
      <p>Abacus training has been used for centuries to develop mathematical skills, but modern neuroscience reveals that its benefits extend far beyond arithmetic. When children manipulate abacus beads, they activate both hemispheres of their brain simultaneously, creating new neural pathways that enhance overall cognitive function.</p>

      <h2>1. Whole Brain Development</h2>
      <p>The abacus engages the left brain for logical calculation and the right brain for visualization, creating a balanced cognitive development that traditional math education alone cannot achieve. Studies using fMRI scans show that abacus practitioners display significantly more balanced brain activity during mathematical tasks compared to non-practitioners.</p>
      <p>This bilateral activation has long-term benefits: children who train with abacus develop stronger connections between hemispheres, leading to enhanced creative problem-solving and analytical thinking that serves them throughout life.</p>

      <h2>2. Improved Concentration</h2>
      <p>In our digital age, attention spans are shrinking. Abacus training directly counters this trend by requiring sustained focus during practice. Each session demands that students maintain attention on the movement of beads and the mental imagery of the tool.</p>
      <p>Research published in the Journal of Educational Psychology shows that children who undergo abacus training demonstrate up to 40% improvement in attention span and focus within six months. Parents consistently report that their children become more attentive in school and at home after beginning abacus classes.</p>

      <h2>3. Enhanced Memory</h2>
      <p>The visualization techniques used in abacus training strengthen both short-term and long-term memory. Students must remember bead positions, calculation steps, and eventually visualize the entire abacus in their mind.</p>
      <p>This mental exercise builds working memory capacity—the brain's ability to hold and manipulate information. Improved working memory has been linked to better reading comprehension, math abilities, and overall academic performance across all subjects.</p>

      <h2>4. Faster Calculation Speed</h2>
      <p>Advanced abacus students can perform calculations faster than calculators. This isn't just party trick—it represents a fundamental rewiring of how the brain processes numerical information.</p>
      <p>When students reach the master level, they no longer rely on the physical abacus but visualize it mentally. This mental abacus allows them to compute with extraordinary speed. In I-Genius competitions, students routinely demonstrate calculation speeds that astonish audiences.</p>

      <h2>5. Better Academic Performance</h2>
      <p>Research spanning multiple studies consistently shows that abacus-trained students show significant improvement not just in math, but across all academic subjects. The cognitive benefits transfer to reading comprehension, science, and even languages.</p>
      <p>A longitudinal study following abacus students over five years found that they maintained a 15-20% academic advantage over peers who had not received abacus training, with the gap widening as students progressed through higher grades where complex reasoning becomes more important.</p>

      <h2>6. Increased Confidence</h2>
      <p>Math anxiety is a real barrier to learning. Mastery of abacus techniques builds self-esteem and reduces fear of mathematics. When a child who struggled with basic arithmetic can suddenly perform calculations mentally, the transformation in confidence is remarkable.</p>
      <p>At I-Genius, we've seen countless shy, hesitant children blossom into confident, enthusiastic learners who participate actively in class and tackle challenges with a "can-do" attitude that extends far beyond math.</p>

      <h2>7. Creativity Boost</h2>
      <p>The visualization aspect of abacus training stimulates the right brain's creative centers, enhancing imagination and creative thinking. This isn't just about doing math faster—it's about developing a more creative approach to problem-solving in all areas of life.</p>
      <p>Children who visualize the abacus are developing the same mental imagery skills used by artists, inventors, and innovators. They learn to "see" solutions before executing them—a skill that serves them well in any field they choose to pursue.</p>

      <h2>The I-Genius Difference</h2>
      <p>At I-Genius Abacus Academy, we've witnessed these transformations in over 1.5 lakh students. Our structured 8-level program is designed to maximize these benefits at every stage of your child's development. From the first introduction to the abacus through advanced competition preparation, every lesson builds toward whole-brain development.</p>
      <p>Ready to unlock your child's potential? Contact us today to schedule a free demo class and experience the I-Genius difference firsthand.</p>
    `,
    category: "Abacus",
    date: "2025-11-15",
    author: "Dr. Meera Sharma, Child Development Specialist",
    readTime: "8 min read",
    tags: ["abacus", "brain development", "children", "math", "concentration", "memory"],
    image: "/images/blog/abacus-benefits.jpg"
  },
  {
    id: 2,
    slug: "vedic-math-competitive-exams",
    title: "How Vedic Math Can Transform Your Child's Competitive Exam Scores",
    excerpt: "Vedic Mathematics techniques can dramatically speed up calculations in JEE, NEET, and other competitive exams. Learn the key sutras every student should know.",
    content: `
      <p>Competitive exams like JEE, NEET, and Olympiads are not just about knowledge—they're about speed and accuracy. Vedic Mathematics offers a powerful toolkit of 16 sutras that can dramatically reduce calculation time and eliminate errors. In this comprehensive guide, we'll explore how these ancient techniques can give your child a competitive edge.</p>

      <h2>The Power of Vedic Sutras</h2>
      <p>Each sutra is a concise formula that can be applied to a wide range of mathematical problems. For example, the Ekadhikena Purvena sutra makes squaring numbers ending in 5 a matter of seconds—a technique that would take minutes with conventional methods. The system was rediscovered by Swami Bharati Krishna Tirthaji in the early 20th century and has since revolutionized mathematics education worldwide.</p>
      <p>What makes Vedic Mathematics unique is its coherence. Unlike disparate shortcuts taught in isolation, the sutras form an interconnected system where each technique builds on others. Students who master the system develop a deep, intuitive understanding of numbers that conventional math education rarely provides.</p>

      <h2>Key Sutras for Competitive Exams</h2>
      <h3>1. Ekadhikena Purvena (By One More Than the Previous)</h3>
      <p>This sutra is famously used for squaring numbers ending in 5. For 85², take 8 and multiply by 9 (one more than 8) to get 72, then append 25. Answer: 7225. This technique alone saves precious seconds in competitive exams where speed matters.</p>
      
      <h3>2. Nikhilam Navatashcaramam Dashatah (All from 9 and the Last from 10)</h3>
      <p>This sutra revolutionizes multiplication, especially for numbers near powers of 10. For 98 × 97, find deficits from 100 (2 and 3), cross-subtract (98-3=95 or 97-2=95), multiply deficits (2×3=6), and combine: 9506. This technique transforms a 30-second calculation into a 5-second mental operation.</p>
      
      <h3>3. Urdhva Tiryagbhyam (Vertically and Crosswise)</h3>
      <p>This general multiplication sutra works for any numbers, regardless of size. It breaks down multiplication into simple mental steps that can be performed almost instantly. For competitive exams where complex multiplication appears frequently, this technique is invaluable.</p>
      
      <h3>4. Paravartya Yojayet (Transpose and Apply)</h3>
      <p>This sutra simplifies division, especially when dealing with divisors near base numbers. Combined with Nikhilam, it makes what was once a lengthy division process into a quick mental calculation.</p>
      
      <h3>5. Shunyam Saamyasamuccaye (When the Sum is the Same, That Sum is Zero)</h3>
      <p>This sutra provides elegant solutions for solving equations, particularly simultaneous equations that appear frequently in competitive exams. What takes 3-4 steps with conventional algebra becomes a single-step mental process.</p>

      <h2>Real Results from I-Genius Students</h2>
      <p>Our students consistently report dramatic improvements in their mock test scores after learning Vedic Mathematics. Students who master these techniques report reducing their calculation time by 50-70% in mock tests, giving them crucial extra minutes for complex problem-solving sections where the real differentiation occurs.</p>
      <p>Consider the story of Aditya, an IIT aspirant who joined our Vedic Mathematics course: "Before learning Vedic Maths, I was consistently running out of time in physics and chemistry sections. The calculations were eating up my problem-solving time. After mastering the sutras, my calculation speed doubled. I now finish with 10-15 minutes to spare—time I use to recheck answers and tackle the toughest questions."</p>
      <p>Stories like Aditya's are common among our students. The techniques work not by replacing conventional understanding but by enhancing it—giving students multiple pathways to solve problems and allowing them to choose the most efficient approach for each question.</p>

      <h2>When to Start</h2>
      <p>The best time to learn Vedic Maths is between grades 5-10, when foundational math skills are being developed. Early exposure gives students a significant advantage by the time they face board exams and competitive tests. However, older students and even adults preparing for competitive exams can benefit enormously from these techniques.</p>
      <p>At I-Genius, our Vedic Mathematics course is designed to be completed in one month with 5 hours of weekly instruction. Students emerge with a complete toolkit of techniques that they can apply immediately to their academic work.</p>

      <h2>Beyond Competitive Exams</h2>
      <p>While the competitive exam benefits are compelling, Vedic Mathematics offers something more: a genuine love for numbers. Students who learn these techniques often discover that mathematics is not a chore but a fascinating puzzle to be solved. This shift in mindset is perhaps the most valuable outcome of all—one that serves students well regardless of the path they choose.</p>
      <p>Ready to give your child this advantage? Contact I-Genius today to learn more about our Vedic Mathematics program and schedule a demo class.</p>
    `,
    category: "Vedic Math",
    date: "2025-10-28",
    author: "Prof. Rajesh Kumar, Mathematics Educator",
    readTime: "10 min read",
    tags: ["vedic math", "competitive exams", "speed math", "JEE", "NEET", "olympiads"],
    image: "/images/blog/vedic-math.jpg"
  },
  {
    id: 3,
    slug: "rubik-cube-develops-logical-thinking",
    title: "Why Rubik Cube Is the Best Brain Exercise for Your Child",
    excerpt: "The humble Rubik's Cube is not just a toy. It is one of the most powerful tools for developing logical thinking, spatial intelligence, and perseverance in children.",
    content: `
      <p>In a world dominated by screens, the Rubik's Cube offers a refreshing, tangible challenge that builds essential cognitive skills. More than a puzzle, it's a complete brain workout that develops multiple intelligence domains simultaneously. Invented in 1974 by Hungarian sculptor Ernő Rubik, this simple-looking cube has become one of the world's most popular puzzles—and for good reason.</p>

      <h2>The Cognitive Science Behind the Cube</h2>
      <p>When a child attempts to solve a Rubik's Cube, they engage in a sophisticated mental process that involves memory, pattern recognition, spatial reasoning, and sequential planning. Brain imaging studies show that cube solving activates regions associated with working memory, spatial intelligence, and executive function—the same areas used in complex mathematical reasoning and logical analysis.</p>
      <p>Unlike passive entertainment, solving the cube requires active problem-solving. Each twist and turn is a deliberate decision based on an understanding of how that move affects the overall configuration. This deliberate practice builds neural pathways that enhance overall cognitive function.</p>

      <h2>Logical Thinking</h2>
      <p>Solving a Rubik's Cube requires breaking down complex problems into smaller, manageable steps—the very essence of computational thinking and algorithmic reasoning. Students learn to identify patterns, apply algorithms, and systematically work toward a solution. These are the same skills that power computer programming, scientific analysis, and mathematical proof.</p>
      <p>Our instructors teach multiple solving methods, starting with the beginner's Layer by Layer method and progressing to advanced speed-cubing techniques like CFOP (Cross, F2L, OLL, PLL). Each method represents a different approach to problem-solving, giving students a toolkit of strategies they can apply to any challenge.</p>

      <h2>Pattern Recognition</h2>
      <p>The cube trains the brain to recognize patterns and develop algorithms, skills that transfer directly to mathematics, coding, and scientific reasoning. Advanced solvers don't see random colors; they see configurations they've encountered thousands of times. This ability to recognize patterns amid apparent chaos is a hallmark of high-level thinking in any domain.</p>
      <p>This skill has real-world applications. A student who can quickly identify patterns in a scrambled cube is better equipped to recognize patterns in data sets, mathematical equations, and even complex texts. Pattern recognition is foundational to expertise in virtually every field.</p>

      <h2>Patience and Perseverance</h2>
      <p>Unlike digital games that offer instant gratification, the Rubik's Cube teaches children the value of persistence. Each solved cube represents hours of practice and the satisfaction of overcoming a challenge. Students learn that failure is not defeat but a stepping stone to mastery—a lesson that serves them well in all endeavors.</p>
      <p>Parents consistently report that their children become more patient and persistent after learning the cube. They're less likely to give up when faced with difficult homework problems and more willing to work through challenges step by step.</p>

      <h2>Spatial Intelligence</h2>
      <p>Manipulating the cube develops spatial awareness—the ability to visualize and manipulate objects in three dimensions—a critical skill for engineering, architecture, design, and many STEM fields. Students who can mentally rotate and manipulate the cube develop superior spatial reasoning abilities that translate directly to geometry and trigonometry.</p>
      <p>Research shows that spatial intelligence is one of the strongest predictors of success in STEM fields. By developing this capacity through cube solving, children build a foundation for future achievement in science, technology, engineering, and mathematics.</p>

      <h2>Memory Enhancement</h2>
      <p>Solving the cube requires memorizing sequences of moves—algorithms—and knowing when to apply them. Advanced solvers may memorize hundreds of algorithms. This memory training strengthens both short-term and long-term memory capacities, with benefits that extend to academic subjects.</p>
      <p>Our students regularly report improved memory in school subjects after learning the cube. The mnemonic techniques they develop for remembering algorithms transfer to remembering formulas, vocabulary, and historical facts.</p>

      <h2>Digital Detox</h2>
      <p>With rising concerns about screen addiction, the Rubik's Cube offers a healthy alternative that engages the mind without the harmful effects of excessive screen time. It's portable, requires no batteries or internet connection, and provides a satisfying tactile experience that screens cannot replicate.</p>
      <p>Many parents tell us that their children spend less time on devices after discovering the cube. The challenge of beating their personal best time becomes an engaging alternative to passive screen consumption.</p>

      <h2>Competition and Community</h2>
      <p>The Rubik's Cube also opens doors to a vibrant global community. Speed-cubing competitions are held worldwide, with categories for all ages and skill levels. Our students participate in district, state, national, and international competitions, developing sportsmanship, confidence, and a sense of belonging to a global community of puzzle enthusiasts.</p>
      <p>At I-Genius, our Rubik's Cube course takes students from complete beginners to speed-cubing competitors, developing these skills in a structured, supportive environment. Whether your child wants to solve the cube for fun or compete at the highest levels, we provide the training and support they need.</p>
    `,
    category: "Rubik Cube",
    date: "2025-10-10",
    author: "Anand Patel, Speed-Cubing Champion & Educator",
    readTime: "7 min read",
    tags: ["rubik cube", "logical thinking", "kids activity", "puzzle", "brain exercise", "spatial intelligence"],
    image: "/images/blog/rubik-cube.jpg"
  },
  {
    id: 4,
    slug: "starting-abacus-franchise-in-india",
    title: "How to Start a Successful Abacus Franchise in India in 2025",
    excerpt: "Education franchises are among the most stable businesses in India. Here's a complete guide to starting your own I-Genius abacus academy franchise.",
    content: `
      <p>The education sector in India is booming, with parents increasingly seeking skill-development programs beyond the regular curriculum. Abacus training, in particular, has seen exponential growth as more families recognize its cognitive benefits. Starting an I-Genius franchise offers a proven path to entrepreneurship with a trusted brand.</p>

      <h2>The Growing Market for Abacus Education</h2>
      <p>India's education market is projected to reach $225 billion by 2025, with skill development programs like abacus training among the fastest-growing segments. Parents are increasingly aware that traditional schooling alone doesn't fully develop the cognitive abilities their children need. This awareness creates sustained demand for specialized programs like abacus, Vedic math, and brain development courses.</p>
      <p>What makes this market particularly attractive is its resilience. Education spending tends to be among the last expenses families cut during economic downturns. Parents view their children's education as the most important investment they can make, creating a stable foundation for education-based businesses.</p>

      <h2>Why Choose Abacus Franchise?</h2>
      <p>• Low investment compared to traditional brick-and-mortar businesses<br/>
      • High demand across all cities, towns, and even rural areas<br/>
      • Recurring revenue model with students enrolled for 2+ years<br/>
      • Complete training and support from experienced headquarters<br/>
      • Established curriculum and teaching methodology proven with 1.5 lakh+ students<br/>
      • Flexible business model—operate from a dedicated center or partner with schools<br/>
      • High margins with low operational costs</p>

      <h2>The I-Genius Advantage</h2>
      <p>With 15+ years of experience, 550+ successful franchises, and 1.5 lakh+ students trained, I-Genius offers a proven business model that significantly reduces the risks of entrepreneurship. Our franchisees receive comprehensive support that covers every aspect of running a successful education center.</p>
      
      <h3>What I-Genius Provides</h3>
      <p>• Comprehensive training program covering teaching methodology, business operations, and marketing<br/>
      • Complete curriculum and study materials for all levels (8 levels across 3 stages)<br/>
      • Marketing and branding support, including promotional materials and local advertising guidance<br/>
      • Ongoing operational guidance from experienced business advisors<br/>
      • Access to national competition events that build your center's reputation<br/>
      • Proprietary management software for tracking student progress and managing operations<br/>
      • Regular updates to curriculum and teaching methods based on the latest educational research</p>

      <h2>Investment and Returns</h2>
      <p>The initial investment is designed to be accessible for aspiring entrepreneurs. Our franchise model includes multiple tiers to suit different investment capacities and goals:</p>
      <p>• Unit Franchise: Ideal for individuals starting with a single center<br/>
      • City Franchise: For those ready to expand across a city or district<br/>
      • Master Franchise: For entrepreneurs wanting to develop an entire region or state</p>
      <p>With 20-30 students, a unit franchise can generate monthly earnings of ₹25,000-40,000. Successful centers with 100+ students earn significantly more, with many of our franchisees achieving six-figure monthly incomes. The recurring revenue model—students typically stay enrolled for 2+ years—provides predictable, growing income.</p>

      <h2>Who Can Apply?</h2>
      <p>I-Genius franchises are ideal for:<br/>
      • Educated women seeking flexible, meaningful work<br/>
      • Dynamic housewives looking to contribute financially while maintaining family priorities<br/>
      • Retired professionals with a passion for education<br/>
      • Teachers and educators wanting to expand their impact<br/>
      • Entrepreneurs seeking entry into the education sector<br/>
      • Anyone passionate about children's development</p>
      <p>No prior teaching experience is required—we provide complete training. What matters most is dedication to quality education and willingness to grow.</p>

      <h2>Steps to Start Your I-Genius Franchise</h2>
      <p><strong>Step 1: Submit Enquiry</strong><br/>
      Contact our franchise team to express interest and receive detailed information about available territories and investment requirements.</p>
      
      <p><strong>Step 2: Consultation</strong><br/>
      Schedule a one-on-one consultation to discuss your goals, answer questions, and determine the best franchise model for your situation.</p>
      
      <p><strong>Step 3: Training</strong><br/>
      Complete our comprehensive training program covering teaching methodology, business operations, and marketing strategies.</p>
      
      <p><strong>Step 4: Agreement and Setup</strong><br/>
      Sign the franchise agreement and begin setting up your center. We'll provide guidance on location, setup, and initial marketing.</p>
      
      <p><strong>Step 5: Launch</strong><br/>
      Open your center with marketing support from headquarters. Our team will help you organize launch events and attract your first students.</p>
      
      <p><strong>Step 6: Ongoing Growth</strong><br/>
      Benefit from continuous support, curriculum updates, and access to national competitions that build your center's reputation and attract new students.</p>

      <h2>Success Stories from Our Franchise Partners</h2>
      <p>Mrs. Suvarna Shewale, Nashik: "Joining I-Genius as a franchise partner has been the best business decision of my life. The support from HQ is excellent, and students love the program. Within two years, I've grown to over 120 students and am now planning to open a second center."</p>
      <p>Mrs. Bharti Sonawane, Pune: "I started as a unit franchise with 20 students three years ago. Today I have 120+ students. The I-Genius brand name does the selling for you, and the curriculum's results speak for themselves."</p>
      
      <h2>Ready to Begin Your Entrepreneurial Journey?</h2>
      <p>The education sector offers stability, purpose, and financial rewards. With I-Genius, you don't have to build from scratch—you leverage 15 years of experience, a proven curriculum, and a trusted brand. Contact our franchise team today to learn about available territories and start your journey as an education entrepreneur!</p>
    `,
    category: "Franchise",
    date: "2025-09-20",
    author: "Sneha Patil, Franchise Development Director",
    readTime: "12 min read",
    tags: ["franchise", "education business", "entrepreneurship", "business opportunity", "women entrepreneurs"],
    image: "/images/blog/franchise.jpg"
  },
  {
    id: 5,
    slug: "right-age-to-start-abacus",
    title: "What Is the Right Age to Start Abacus Training? A Complete Guide",
    excerpt: "Parents often wonder when to enroll their child in abacus classes. We break down the ideal age, readiness signs, and what to expect at each stage.",
    content: `
      <p>One of the most common questions we receive is about the ideal age to start abacus training. While every child develops differently, research and our experience with over 1.5 lakh students provide clear guidance on optimal timing. In this comprehensive guide, we'll help you determine when your child is ready to begin this transformative journey.</p>

      <h2>The Sweet Spot: 4-7 Years</h2>
      <p>This is widely considered the optimal window for introducing abacus. During these years, children's brains are highly plastic and receptive to new learning patterns. The visual and kinesthetic nature of the abacus aligns perfectly with how young children learn—through hands-on manipulation and concrete experiences.</p>
      <p>Neuroscience research confirms that the period between ages 4 and 7 represents a critical window for developing the neural pathways that underpin numerical processing. Abacus training during these years helps establish these pathways in the most efficient way possible, setting a foundation for lifelong mathematical fluency.</p>

      <h2>Age 4-5: Building Foundations</h2>
      <p>At this stage, we focus on familiarization with the abacus tool, number concepts, and basic finger movements. Classes are playful, engaging, and designed to build interest without pressure. Children learn through games, songs, and guided play that introduces them to the abacus as a fun tool rather than a challenging task.</p>
      <p><strong>What to Expect:</strong><br/>
      • Introduction to the abacus tool and its parts<br/>
      • Basic number recognition (1-50)<br/>
      • Simple bead movements and counting<br/>
      • Development of fine motor skills through bead manipulation<br/>
      • Play-based activities that build enthusiasm for numbers</p>
      <p>At this age, the goal isn't calculation speed but building a positive relationship with mathematics. Children who enjoy their early math experiences are far more likely to excel later.</p>

      <h2>Age 6-8: Skill Development</h2>
      <p>This is when children typically progress through the basic and advance levels, developing mental calculation abilities. By age 7-8, many students can perform two and three-digit calculations mentally—skills that would impress even adults.</p>
      <p><strong>What to Expect:</strong><br/>
      • Mastery of addition and subtraction on the abacus<br/>
      • Introduction to mental calculation without the physical tool<br/>
      • Basic multiplication and division concepts<br/>
      • Development of concentration and focus<br/>
      • Participation in inter-center competitions</p>
      <p>This age group often shows dramatic progress. Many parents report that their children begin to outperform older siblings in mental math. The confidence boost at this stage is remarkable and often transforms a child's entire attitude toward learning.</p>

      <h2>Age 9-12: Mastery and Competition</h2>
      <p>Older children can quickly advance through levels and participate in national competitions. The structured approach appeals to their growing logical abilities. By this age, students can progress through a level every 2-3 months, building toward mastery.</p>
      <p><strong>What to Expect:</strong><br/>
      • Advanced mental calculations with 4-5 digit numbers<br/>
      • Complex multiplication and division<br/>
      • Decimal calculations<br/>
      • Participation in national and international competitions<br/>
      • Development of competition-level speed and accuracy<br/>
      • Leadership opportunities as senior students</p>
      <p>Students who start at this age often progress quickly because they have stronger concentration and motivation. They also benefit from seeing immediate applications to their school work, which reinforces their motivation to practice.</p>

      <h2>Is It Too Late After 12?</h2>
      <p>While earlier is generally better, it's never too late! Older children and even adults benefit from abacus training. The mental discipline and calculation speed improvements are valuable at any age. We've had successful students who started as teenagers or even adults preparing for competitive exams.</p>
      <p><strong>Benefits for Older Beginners:</strong><br/>
      • Rapid progress due to stronger reasoning skills<br/>
      • Immediate application to schoolwork and exams<br/>
      • Quick improvement in calculation speed<br/>
      • Enhanced concentration for studying<br/>
      • Reduced math anxiety before board exams</p>
      <p>Teenagers often progress through the initial levels quickly, though they may need more practice to develop the visualization skills that younger students develop naturally. With consistent practice, they can achieve impressive results in a shorter time frame.</p>

      <h2>Signs Your Child Is Ready</h2>
      <p>While age provides a guideline, individual readiness matters most. Look for these signs that your child is ready to begin abacus training:</p>
      <p><strong>✓ Basic number recognition:</strong> Can count to 100 and recognize numbers<br/>
      <strong>✓ Interest in numbers:</strong> Shows curiosity about counting and quantities<br/>
      <strong>✓ Developing focus:</strong> Can concentrate for 15-20 minutes on an engaging activity<br/>
      <strong>✓ Fine motor readiness:</strong> Can manipulate small objects with control<br/>
      <strong>✓ Basic communication:</strong> Can follow simple instructions and express needs<br/>
      <strong>✓ Enthusiasm for learning:</strong> Shows excitement about new challenges</p>
      <p>If your child shows these signs, they're ready regardless of exact age. If they don't yet show these signs, waiting a few months and trying again often yields better results.</p>

      <h2>The I-Genius Approach to Age-Appropriate Learning</h2>
      <p>At I-Genius, we don't simply enroll children in a one-size-fits-all program. Our placement process includes an assessment that determines the ideal starting level for each child, ensuring they begin at a comfortable and challenging point in their learning journey.</p>
      <p>We also recognize that children develop at different rates. Our instructors are trained to adapt teaching methods to each child's learning style and pace. Whether your child is a quick learner who advances rapidly or someone who benefits from more practice time, we provide the support they need to succeed.</p>
      
      <h2>Ready to Begin?</h2>
      <p>The best time to start abacus training is when your child shows interest and readiness. Contact I-Genius today to schedule a free assessment and demo class. Our experts will help you determine whether your child is ready and which level would be most appropriate.</p>
    `,
    category: "Abacus",
    date: "2025-09-05",
    author: "Dr. Meera Sharma, Child Development Specialist",
    readTime: "9 min read",
    tags: ["abacus", "parenting", "child development", "learning readiness", "early education"],
    image: "/images/blog/abacus-age.jpg"
  }
];

// ============================================================
// Career Positions
// ============================================================
export const openPositions = [
  {
    id: 1,
    title: "Abacus Teacher",
    qualification: "Graduation",
    experience: "Fresher",
    type: "Full Time / Part Time",
    aboutRole: "The Abacus Teacher is responsible for teaching abacus techniques to students, helping them develop mental calculation skills and cognitive abilities. This role involves creating lesson plans, conducting training sessions, and assessing students' progress. The teacher will also prepare students for competitions and track their development through the 8-level program.",
    responsibilities: [
      "Teach abacus techniques to students of different age groups (4-14 years)",
      "Develop and implement lesson plans based on the I-Genius curriculum",
      "Track and assess student progress through regular evaluations",
      "Prepare students for district, state, national, and international competitions",
      "Communicate regularly with parents about student progress",
      "Maintain class records and attendance",
      "Participate in teacher training programs and workshops"
    ],
    requirements: [
      "Graduation in any discipline",
      "Strong mathematical aptitude",
      "Good communication and presentation skills",
      "Patience and ability to work with children",
      "Passion for teaching and child development",
      "Willingness to undergo abacus training (provided by I-Genius)"
    ]
  },
  {
    id: 2,
    title: "Vedic Math Trainer",
    qualification: "Graduation",
    experience: "Min 1 year",
    type: "Full Time",
    aboutRole: "The Vedic Math Trainer is responsible for teaching Vedic Mathematics techniques to students, helping them develop faster and more efficient methods for solving mathematical problems. This role involves creating lesson plans, conducting training sessions, and assessing students' progress. The trainer will also promote the benefits of Vedic Math and encourage its application in academic and competitive environments.",
    responsibilities: [
      "Teach Vedic Mathematics techniques using the 16 sutras system",
      "Design engaging lesson plans that simplify complex calculations",
      "Help students apply Vedic Math techniques to competitive exam problems",
      "Assess student progress and provide personalized feedback",
      "Create practice materials and worksheets",
      "Conduct workshops and demo sessions to promote Vedic Math",
      "Stay updated with the latest developments in Vedic Mathematics"
    ],
    requirements: [
      "Graduation in Mathematics or related field",
      "Minimum 1 year of teaching experience",
      "Strong knowledge of Vedic Mathematics techniques",
      "Excellent communication and presentation skills",
      "Ability to make math fun and engaging for students",
      "Experience with competitive exam preparation is a plus"
    ]
  },
  {
    id: 3,
    title: "Accountant",
    qualification: "B.Com",
    experience: "2-3 Years",
    type: "Full Time",
    aboutRole: "The Accountant is responsible for maintaining all accounting records, managing financial transactions, and ensuring compliance with tax regulations. This role involves handling GST filings, TDS, ITR, inventory management, employee salaries, bank reconciliations, and daily expenditures. The accountant will work closely with management to ensure financial accuracy and timely reporting.",
    responsibilities: [
      "Maintain all accounting records and ledgers",
      "Handle GST filing and returns",
      "Manage TDS and ITR filings",
      "Maintain product inventory and stock records",
      "Process employee salaries and maintain payroll records",
      "Perform bank reconciliations",
      "Record journal entries and daily expenditures",
      "Prepare financial statements and reports",
      "Assist with audits and compliance requirements"
    ],
    requirements: [
      "B.Com degree with strong accounting knowledge",
      "2-3 years of experience in accounting",
      "Proficiency in accounting software (Tally, QuickBooks, etc.)",
      "Knowledge of GST, TDS, and ITR filing",
      "Strong attention to detail and accuracy",
      "Good organizational and time management skills",
      "Proficiency in MS Excel",
      "Experience in educational sector is a plus"
    ]
  }
];
// ============================================================
// FAQ Arrays
// ============================================================
export const faqAbacus = [
  {
    question: "What is the right age to start abacus training?",
    answer:
      "The ideal age to start abacus training is 5–7 years, when the brain's neural pathways are most receptive to new learning patterns. However, children up to 14 years can also benefit greatly from the program.",
  },
  {
    question: "How long does it take to complete the abacus course?",
    answer:
      "The I-Genius Abacus program has 8 levels, each typically 3 months long. A student can complete all 8 levels in approximately 2 years if they attend regularly.",
  },
  {
    question: "Do I need to buy an abacus tool for the classes?",
    answer:
      "Yes, students need an abacus (Soroban) for practice. I-Genius provides the recommended abacus tool along with the study kit at the time of enrollment.",
  },
  {
    question: "How many days per week are the classes held?",
    answer:
      "Classes are typically held 2–3 times per week, each session lasting 45–60 minutes. The schedule can be adjusted based on the franchise centre's timetable.",
  },
  {
    question: "Are there online abacus classes available?",
    answer:
      "Yes, I-Genius offers both online and offline classes. Our e-learning platform provides interactive lessons, exercises, and progress tracking for online students.",
  },
  {
    question: "What is mental math visualization?",
    answer:
      "From Level 4 onwards, students learn to visualize an abacus in their mind and perform calculations without a physical abacus — this is called mental visualization or flash anzan. It's a higher-order brain skill.",
  },
];

export const faqVedicMath = [
  {
    question: "What is Vedic Mathematics?",
    answer:
      "Vedic Mathematics is a system of mental calculation methods derived from ancient Indian Vedic scriptures, specifically the Atharvaveda. It comprises 16 sutras (formulas) that enable fast, efficient mathematical computations.",
  },
  {
    question: "How is Vedic Math different from regular math?",
    answer:
      "Regular mathematics follows a single conventional method. Vedic Math provides multiple alternative techniques to solve the same problem — often much faster. It encourages creativity and flexibility in problem-solving.",
  },
  {
    question: "Is Vedic Math useful for school exams?",
    answer:
      "Absolutely. Vedic Math techniques are especially useful in board exams and competitive exams where speed and accuracy are critical. Students report significant time savings during examinations.",
  },
  {
    question: "What age group is Vedic Math suitable for?",
    answer:
      "I-Genius Vedic Math is recommended for students aged 8 and above — from Class 3 onwards. The techniques require a basic understanding of arithmetic operations.",
  },
  {
    question: "Can Vedic Math be combined with the Abacus program?",
    answer:
      "Yes, many students take both programs together or sequentially. Abacus builds the foundation of mental calculation, and Vedic Math adds advanced shortcuts for higher-level math.",
  },
];

export const faqRubik = [
  {
    question: "Do children need any prior knowledge to join the Rubik Cube course?",
    answer:
      "No prior knowledge is required. We start from absolute basics — understanding cube notation, face moves, and layer concepts — before progressing to algorithms.",
  },
  {
    question: "How long does it take to learn to solve a Rubik Cube?",
    answer:
      "Most beginners can solve a 3x3 Rubik Cube in 3–4 weeks using the layer-by-layer beginner method. With our structured course, students achieve this much faster with trainer guidance.",
  },
  {
    question: "What type of Rubik Cube is needed for the course?",
    answer:
      "For beginners, a standard 3x3 Rubik Cube is required. I-Genius recommends quality stickerless cubes for smooth turning. Advanced students will need 4x4 and other puzzles in later levels.",
  },
  {
    question: "What are the cognitive benefits of Rubik Cube training?",
    answer:
      "Rubik Cube training develops spatial reasoning, algorithm memory, logical thinking, pattern recognition, problem-solving, and perseverance — all essential life skills.",
  },
  {
    question: "Are there Rubik Cube competitions for I-Genius students?",
    answer:
      "Yes, I-Genius organizes intra-franchise competitions as well as participates in national-level cubing events. Regular students are encouraged and trained to compete.",
  },
];

// ============================================================
// Achievements / Milestones
// ============================================================
export const achievements = [
  {
    year: "2007",
    title: "I-Genius Founded",
    desc: "Established in Nashik with the vision to unlock children's mental potential through abacus training.",
  },
  {
    year: "2010",
    title: "First 100 Franchisees",
    desc: "Reached the milestone of 100 authorized franchise centres across Maharashtra.",
  },
  {
    year: "2013",
    title: "ISO 9001:2015 Certification",
    desc: "Achieved international quality certification, validating our curriculum and operational excellence.",
  },
  {
    year: "2015",
    title: "EBVTR Authorization",
    desc: "Received government authorization from EBVTR, strengthening our credibility as a certified training institute.",
  },
  {
    year: "2018",
    title: "Wonder Book of International London",
    desc: "Listed in Wonder Book of International London for outstanding contribution to children's education.",
  },
  {
    year: "2020",
    title: "International Expansion",
    desc: "Extended our franchise network to 5 countries, establishing I-Genius as a global brand.",
  },
  {
    year: "2023",
    title: "1.5 Lakh Students Milestone",
    desc: "Celebrated 1,50,000+ students trained across all franchise centres and school partnerships.",
  },
  {
    year: "2025",
    title: "550+ Franchisees Network",
    desc: "Built India's largest abacus franchise network with 550+ authorized centres pan-India.",
  },
];

// ============================================================
// Event / Gallery Photos
// ============================================================
export const eventPhotos = [
  { src: "https://igeniusindia.in/admin/assets/images/event/156376.jpg", alt: "I-Genius Event" },
  { src: "https://igeniusindia.in/admin/assets/images/event/303783.jpg", alt: "I-Genius Competition" },
  { src: "https://igeniusindia.in/admin/assets/images/event/41908.jpg", alt: "I-Genius Students" },
  { src: "https://igeniusindia.in/admin/assets/images/event/890638.jpg", alt: "I-Genius Achievement" },
  { src: "https://igeniusindia.in/admin/assets/images/event/572166.JPG", alt: "I-Genius Event Photo" },
  { src: "https://igeniusindia.in/admin/assets/images/event/386618.jpg", alt: "I-Genius Celebration" },
  { src: "https://igeniusindia.in/admin/assets/images/event/161198.jpg", alt: "I-Genius Winners" },
];

// ============================================================
// Award Images
// ============================================================
export const awardImages = [
  { src: "https://igeniusindia.in/admin/assets/images/achivement/426691.png", alt: "I-Genius Award" },
  { src: "https://igeniusindia.in/admin/assets/images/achivement/729425.png", alt: "Excellence Award" },
  { src: "https://igeniusindia.in/admin/assets/images/achivement/681281.png", alt: "Recognition Award" },
  { src: "https://igeniusindia.in/admin/assets/images/achivement/84772.png", alt: "National Award" },
  { src: "https://igeniusindia.in/admin/assets/images/achivement/826604.png", alt: "Achievement Award" },
  { src: "https://igeniusindia.in/admin/assets/images/achivement/637265.png", alt: "Best Academy Award" },
];
