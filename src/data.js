/* Site content — diagnostic services, laboratory workflow, facilities, FAQs, and navigation for Dharshini Laboratory, Guduvancheri / Kayarambedu. */

export const SPECIALTIES_TICKER = [
  'Clinical Pathology & Laboratory Diagnostics',
  'Established in 2010 · 15+ Years Service',
  'Complete Blood Count (CBC) & Routine Profiles',
  'Fasting Blood Sugar & HbA1c Diabetes Screening',
  'Thyroid Profile (TSH, T3, T4)',
  'Lipid, Liver & Kidney Function Tests',
  'Doorstep Home Blood Sample Collection',
  'Open Daily 6:30 AM – 9:00 PM',
  'SP MAHAL · Nellikuppam Rd · Guduvancheri',
];

/* `label` is used in the footer and the mobile menu; `short` in the desktop navbar. */
export const NAV_LINKS = [
  { label: 'Home', short: 'Home', path: '/' },
  { label: 'About Laboratory', short: 'About', path: '/about-us' },
  { label: 'Diagnostic Services', short: 'Services', path: '/treatments' },
  { label: 'Laboratory Gallery', short: 'Gallery', path: '/gallery' },
  { label: 'Contact & Location', short: 'Contact', path: '/contact' },
];

export const SERVICES = [
  {
    id: 'clinical-pathology',
    featured: true,
    icon: 'pulse',
    image: '/clinic-assets/dharshini-lab-reception.jpg',
    imageAlt: 'Dharshini Laboratory reception and diagnostic testing center in Kayarambedu, Guduvancheri',
    title: 'Clinical Pathology & Blood Testing',
    tamilTitle: 'பொது இரத்தப் பரிசோதனைகள் (CBC, ESR, இரத்த வகை)',
    desc: 'Comprehensive blood analyses including Complete Blood Count (CBC), Hemoglobin, Platelet count, ESR, and Blood Grouping for accurate clinical diagnosis of infections, anemia, and general health.',
    chips: ['Complete Blood Count (CBC)', 'Hemoglobin & Platelets', 'ESR & Blood Grouping', 'Infection Markers'],
    meta: 'Accurate Blood Diagnostics',
    longDesc: 'Routine hematology and clinical pathology provide critical insight into everyday health issues like fatigue, fever, and inflammation. At Dharshini Laboratory, all blood draws are performed using sterile single-use vacuum tubes (vacutainers) to preserve sample integrity and ensure rapid, dependable results.',
  },
  {
    id: 'diabetes-lipid',
    featured: true,
    icon: 'heart',
    image: '/clinic-assets/dharshini-lab-exterior.jpg',
    imageAlt: 'Dharshini Laboratory facility on Nellikuppam Road opposite Guduvancheri',
    title: 'Diabetes & Lipid Profile Screening',
    tamilTitle: 'சர்க்கரை & கொழுப்பு பரிசோதனைகள் (FBS, PPBS, HbA1c)',
    desc: 'Precision metabolic testing including Fasting Blood Sugar (FBS), Postprandial Blood Sugar (PPBS), 3-month Glycated Hemoglobin (HbA1c), and Complete Lipid Profile for cardiovascular health.',
    chips: ['Fasting Blood Sugar (FBS)', 'Postprandial (PPBS)', 'HbA1c 3-Month Average', 'Complete Lipid Panel'],
    meta: 'Cardiometabolic Health',
    longDesc: 'Continuous tracking of glucose and cholesterol is vital for preventing and managing diabetes and heart disease. Our early morning 6:30 AM opening ensures you can complete fasting blood sugar and lipid panels comfortably before your workday starts.',
  },
  {
    id: 'thyroid-hormonal',
    featured: false,
    icon: 'sparkle',
    image: '/clinic-assets/dharshini-lab-reception.jpg',
    imageAlt: 'Dharshini Laboratory consultation counter and testing services',
    title: 'Thyroid Profile & Hormonal Testing',
    tamilTitle: 'தைராய்டு பரிசோதனைகள் (TSH, T3, T4)',
    desc: 'Diagnostic evaluation of Thyroid Stimulating Hormone (TSH), Total T3, and Total T4 to assess thyroid function, metabolic balance, and unexplained weight or energy changes.',
    chips: ['TSH Marker', 'Total T3 & T4', 'Metabolic Hormone Panel', 'Accurate Reporting'],
    meta: 'Endocrine Diagnostics',
    longDesc: 'Thyroid hormone imbalances can trigger lethargy, weight changes, mood shifts, and hair thinning. Our sensitive hormonal screening aids physicians in prompt diagnosis and precise dosage adjustment.',
  },
  {
    id: 'urine-stool',
    featured: false,
    icon: 'activity',
    image: '/clinic-assets/dharshini-lab-reception.jpg',
    imageAlt: 'Hygienic laboratory specimen handling at Dharshini Laboratory',
    title: 'Urine & Stool Routine Examination',
    tamilTitle: 'சிறுநீர் மற்றும் மலம் வழக்கமான பரிசோதனைகள்',
    desc: 'Microscopic and biochemical evaluation of urine and stool samples to detect urinary tract infections (UTI), kidney indicators, metabolic excretion, and gastrointestinal health.',
    chips: ['Complete Urine Analysis', 'Microscopic Sediment Exam', 'Pus Cells & Albumin Check', 'Stool Routine Exam'],
    meta: 'Microscopic & Chemical Analysis',
    longDesc: 'Urine analysis offers quick, non-invasive indicators of kidney performance, hydration, and urinary tract infections. Specimens are processed under rigorous hygienic standards in sterile containers.',
  },
  {
    id: 'home-collection',
    featured: true,
    icon: 'shield',
    image: '/clinic-assets/dharshini-lab-reception.jpg',
    imageAlt: 'Dharshini Laboratory home sample collection service across Guduvancheri',
    title: 'Doorstep Home Blood Sample Collection',
    tamilTitle: 'வீட்டுக்கே வந்து இரத்த மாதிரி சேகரிக்கும் சேவை',
    desc: 'Safe, punctual doorstep blood collection visits across Kayarambedu, Guduvancheri, Urapakkam, and Moolakazhani. Dedicated service for senior citizens, children, and busy individuals.',
    chips: ['Doorstep Convenience', 'Trained Phlebotomists', 'Sterile Vacuum Vacutainers', 'Quick WhatsApp Booking'],
    meta: 'Patient Convenience Service',
    longDesc: 'Skip travel and morning waiting queues. Our trained phlebotomists visit your home equipped with sterile single-use collection tubes, antiseptics, and temperature-controlled sample carriers to safely draw blood at your preferred morning slot.',
  },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Book Online or Walk In Early',
    desc: 'Visit our center directly from 6:30 AM onwards for fasting tests, or book a doorstep home collection visit with a quick phone call or WhatsApp message.',
  },
  {
    step: '02',
    title: 'Sterile & Gentle Sample Collection',
    desc: 'Samples are drawn by trained phlebotomists using 100% sterile, single-use vacuum tubes (vacutainers) to ensure gentle, hygienic, and contamination-free collection.',
  },
  {
    step: '03',
    title: 'Prompt & Accurate Report Delivery',
    desc: 'Specimens are processed on calibrated diagnostic equipment. Collect your printed report from the laboratory or receive crisp digital reports directly on WhatsApp.',
  },
];

export const STATS = [
  { value: 2010, suffix: '', label: 'Established Year (15+ Years Service)' },
  { value: 7, suffix: ' Days', label: 'Open Daily (6:30 AM – 9:00 PM)' },
  { value: 100, suffix: '%', label: 'Sterile Single-Use Vacutainer Protocol' },
  { value: 1, suffix: ' Stop', label: 'Pathology, Blood, Urine & Health Screening' },
];

export const WHY_US = [
  'Established in 2010 with over 15 years of dedicated pathology service in Guduvancheri',
  'Early morning opening at 6:30 AM every day — ideal for timely fasting blood tests',
  'Doorstep home sample collection across Kayarambedu, Guduvancheri, and nearby areas',
  '100% adherence to single-use sterile needles and vacutainer collection tubes',
  'Fast report turnaround with convenient digital report delivery via WhatsApp',
  'Centrally located at SP MAHAL, Nellikuppam Road, opposite Guduvancheri',
];

export const FAQS = [
  {
    q: 'Do I need to fast before my blood test at Dharshini Laboratory?',
    a: 'Fasting (typically 8 to 12 hours) is required for tests such as Fasting Blood Sugar (FBS) and Lipid Profile. You may drink plain water. Other routine tests like Complete Blood Count (CBC) or HbA1c do not require fasting. Feel free to call us at +91 99628 99950 if you need specific guidance for your prescribed test.',
  },
  {
    q: 'What are Dharshini Laboratory’s operating hours?',
    a: 'We are open 7 days a week, Monday through Sunday, from 6:30 AM to 9:00 PM. Our early morning opening ensures you can complete fasting tests early before your daily work schedule.',
  },
  {
    q: 'How do I schedule a doorstep home blood collection?',
    a: 'You can book home collection by calling or messaging our official contact number at +91 99628 99950, or by submitting the booking form on this website. Our technician will visit your address with sterile collection equipment at your preferred morning time.',
  },
  {
    q: 'Where is Dharshini Laboratory located?',
    a: 'We are located at SP MAHAL, Anna street, Nellikuppam Rd, opposite Guduvancheri, Kameshwary Nagar, Moolakazhani, Kayarambedu, Tamil Nadu 603202. Click our Google Maps directions button for direct GPS navigation.',
  },
  {
    q: 'When and how will I receive my diagnostic test reports?',
    a: 'Most routine blood and urine test reports are completed on the same day. You can collect physical printed copies from our center or receive digital PDF copies directly on WhatsApp.',
  },
  {
    q: 'Do you provide testing services on Sundays?',
    a: 'Yes, Dharshini Laboratory is open on Sundays from 6:30 AM to 9:00 PM, providing uninterrupted diagnostic testing and sample collection every day of the week.',
  },
];

export const GALLERY_IMAGES = [
  {
    id: 'gal-1',
    src: '/clinic-assets/dharshini-lab-reception.jpg',
    title: 'Dharshini Laboratory Reception & Waiting Lounge',
    category: 'Reception',
    desc: 'Clean, welcoming reception desk and patient waiting area at Dharshini Laboratory in Kayarambedu, Guduvancheri.',
  },
  {
    id: 'gal-2',
    src: '/clinic-assets/dharshini-lab-exterior.jpg',
    title: 'Laboratory Location on Nellikuppam Road',
    category: 'Location',
    desc: 'Accessible facility located near SP MAHAL on Nellikuppam Road, opposite Guduvancheri, serving Moolakazhani and Kayarambedu.',
  },
  {
    id: 'gal-3',
    src: '/clinic-assets/dharshini-lab-reception.jpg',
    title: 'Diagnostic Registration & Report Counter',
    category: 'Facilities',
    desc: 'Dedicated workstation for specimen logging, patient registration, and computerized report generation.',
  },
  {
    id: 'gal-4',
    src: '/clinic-assets/dharshini-lab-reception.jpg',
    title: 'Patient Waiting & Consultation Area',
    category: 'Facilities',
    desc: 'Air-conditioned and comfortable seating environment for patients visiting for morning diagnostic screenings.',
  },
];

export const TIME_SLOTS = [
  '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM',
  '10:00 AM', '11:30 AM', '4:30 PM', '6:00 PM', '7:30 PM', '8:30 PM',
];
