/* Site content — services, doctors, procedures, testimonials, gallery, medical articles, FAQs, and navigation for Dr. Dhananjayas Hospitals & Clinic. */

export const SPECIALTIES_TICKER = [
  'Ayurvedic Piles Care (Hemorrhoids)',
  'Ayurvedic Kshara Sutra Care for Fistula',
  'Ayurvedic Anal Fissure Relief',
  'No Major Operation',
  'Gentle Day-Care Treatment',
  'Sphincter-Preserving Care',
  'New Perungalathur · Tambaram · Porur · Koyambedu',
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About & Doctors', path: '/about-us' },
  { label: 'Treatments', path: '/treatments' },
  { label: 'Photo Gallery', path: '/gallery' },
  { label: 'Patient Reviews', path: '/testimonials' },
  { label: 'Branches & Visit', path: '/contact' },
];

export const SERVICES = [
  {
    id: 'piles-care',
    featured: false,
    icon: 'pulse',
    image: '/images/treatments/piles.jpg',
    imageAlt: 'Medical cutaway showing swollen internal and external hemorrhoidal veins',
    title: 'Ayurvedic Piles Care (Hemorrhoids)',
    tamilTitle: 'மூல நோய் ஆயுர்வேத சிகிச்சை (பெரிய அறுவை சிகிச்சையின்றி)',
    desc: 'Focused Ayurvedic care for internal and external piles, bleeding, discomfort, and prolapse. Treatment may include herbal medicines, diet and bowel-habit correction, and gentle Kshara Karma when clinically appropriate—without a major operation.',
    chips: ['Ayurvedic Care', 'Bleeding Piles Relief', 'No Major Operation', 'Diet Guidance'],
    meta: '25+ Years in Ayurvedic Proctology',
    longDesc: 'Piles are swollen veins in the lower rectum and anal canal, often linked to constipation, straining, prolonged sitting, or lifestyle factors. After a private clinical assessment, we recommend an individualized Ayurvedic plan focused on symptom relief, healthy bowel habits, and gentle treatment with minimal disruption to daily life.',
  },
  {
    id: 'kshara-sutra',
    featured: false,
    icon: 'sparkle',
    image: '/images/treatments/fistula.jpg',
    imageAlt: 'Medical cutaway showing an infected anal fistula tract and external opening',
    title: 'Ayurvedic Kshara Sutra Care (Anal Fistula)',
    tamilTitle: 'க்ஷாரசூத்ரா ஆயுர்வேத சிகிச்சை (பௌத்திரம்)',
    desc: 'Authentic Ayurvedic Kshara Sutra care for anal fistula using a medicated herbal thread to support gradual tract healing while protecting the sphincter muscles. It is a focused day-care approach without major open surgery.',
    chips: ['Authentic Kshara Sutra', 'No Major Operation', 'Sphincter Preserving', 'Day-Care Approach'],
    meta: 'Specialized Ayurvedic Fistula Care',
    longDesc: 'Unlike major open surgery, Kshara Sutra uses a medicated herbal thread to work gradually along the fistula tract. The treatment plan is selected only after clinical assessment, with emphasis on continence preservation, regular follow-up, and minimal interruption to normal routines.',
  },
  {
    id: 'anal-fissure',
    featured: false,
    icon: 'heart',
    image: '/images/treatments/fissure.jpg',
    imageAlt: 'Medical cutaway showing a painful tear in the anal canal lining',
    title: 'Ayurvedic Fissure Care (Parikartika)',
    tamilTitle: 'ஆசனவாய் வெடிப்பு & கடுமையான வலி நிவாரணம்',
    desc: 'Gentle Ayurvedic care for burning pain, spasm, and bleeding caused by an anal fissure. The plan focuses on herbal support, local care, diet, hydration, and bowel-habit correction without major surgery.',
    chips: ['Ayurvedic Care', 'Spasm Relief', 'No Major Operation', 'Bowel-Habit Support'],
    meta: 'Gentle Ayurvedic Fissure Care',
    longDesc: 'An anal fissure is a tear in the sensitive lining of the anal canal, commonly aggravated by hard stools and muscle spasm. Our individualized Ayurvedic approach aims to ease discomfort, support natural healing, and address constipation and straining.',
  },
];

export const MEDICAL_ARTICLES = [
  {
    id: 'fistula-kshar-sutra-advantages',
    title: 'Kshara Sutra Advantages Over Conventional Surgery',
    subtitle: 'Why medicos and clinical trials endorse Kshara Sutra as the safest cure for anal fistula',
    summary: 'Conventional surgery for fistula involves cutting anal tissues, which poses a severe 20%–40% risk of anal sphincter damage, leading to lifelong gas or stool leakage (fecal incontinence). In contrast, authentic Kshara Sutra uses a medicated seton thread coated with alkaline medicinal herbs (Snuhi, Apamarga Kshara, and Haridra) that cuts the tunnel micro-millimeter by micro-millimeter while simultaneously promoting healthy granulation tissue behind it. This guarantees 100% sphincter muscle preservation, negligible recurrence (<1.5%), zero hospital stay, and immediate walk-home recovery.',
    points: [
      'No cut to sphincter muscles — complete preservation of bowel continence',
      'Minimal pain performed under gentle local anesthesia',
      'Zero general anesthesia risks and no 3–5 day hospital confinement',
      'Clinical trial proven recurrence rate of less than 1.5% vs 20%–40% in surgery',
      'Resume desk work and normal routines within 24 to 48 hours',
    ],
  },
  {
    id: 'fistula-vs-piles-vs-fissure',
    title: 'Fistula vs Piles vs Fissure: How to Identify Your Symptoms',
    subtitle: 'A clinical diagnostic guide to understand your symptoms before consultation',
    summary: 'Many patients confuse these three conditions, delaying the right care. Piles (Hemorrhoids) are swollen vascular cushions that typically cause painless, bright red bleeding or lump protrusion. An Anal Fissure is a fresh tear in the mucosa characterized by sharp, razor-blade burning pain during and after defecation. Anal Fistula is an infected tunnel between the rectum and skin causing persistent pus discharge, stained undergarments, and recurring painful boils. Knowing the difference ensures timely, targeted intervention.',
    comparison: [
      { condition: 'Piles (Hemorrhoids)', symptoms: 'Painless bright red bleeding, painless swelling/lump prolapse, fullness in rectum' },
      { condition: 'Anal Fissure', symptoms: 'Severe sharp burning pain during stool, streaks of blood on paper, tight anal spasm' },
      { condition: 'Anal Fistula', symptoms: 'Foul-smelling pus/blood discharge, small opening near anus, recurrent painful boil' },
    ],
  },
];

export const GALLERY_IMAGES = [
  {
    id: 'gal-1',
    src: '/clinic-assets/gallery-20.jpg',
    title: 'Ayurvedic Day-Care Treatment Room',
    category: 'Treatment Room',
    desc: 'Clean, private treatment room prepared for gentle Ayurvedic piles, fistula, and fissure care.',
  },
  {
    id: 'gal-2',
    src: '/clinic-assets/gallery-22.jpg',
    title: 'Sterilization & Ayurvedic Treatment Unit',
    category: 'Treatment Room',
    desc: 'Hospital-grade autoclaving and aseptic preparation area ensuring zero infection risk.',
  },
  {
    id: 'gal-3',
    src: '/clinic-assets/gallery-24.jpg',
    title: 'Specialist Consultation Chamber',
    category: 'Chambers',
    desc: 'Private, dignified consultation chamber providing compassionate, confidential patient evaluation.',
  },
  {
    id: 'gal-4',
    src: '/clinic-assets/gallery-26.jpg',
    title: 'Diagnostic Examination Chamber',
    category: 'Diagnostics',
    desc: 'Comprehensive anorectal grading and digital assessment suite ensuring precision diagnosis.',
  },
  {
    id: 'gal-5',
    src: '/clinic-assets/gallery-28.jpg',
    title: 'Day-Care Patient Recovery Lounge',
    category: 'Facilities',
    desc: 'Comfortable post-procedure recovery room where patients rest comfortably before walking home the same day.',
  },
  {
    id: 'gal-6',
    src: '/clinic-assets/gallery-6.jpg',
    title: 'Clinic Reception & Welcome Desk',
    category: 'Facilities',
    desc: 'Welcoming reception desk facilitating swift check-in, priority scheduling, and minimal waiting times.',
  },
  {
    id: 'gal-7',
    src: '/clinic-assets/gallery-8.jpg',
    title: 'Confidential Patient Counseling Room',
    category: 'Chambers',
    desc: 'Dedicated space for empathetic doctor-patient counseling, dietary planning, and procedure walkthroughs.',
  },
  {
    id: 'gal-8',
    src: '/clinic-assets/gallery-10.jpg',
    title: 'Clinical Observation Suite',
    category: 'Facilities',
    desc: 'Hygienic observation suite for immediate post-procedure monitoring under dedicated nursing care.',
  },
  {
    id: 'gal-9',
    src: '/clinic-assets/gallery-12.jpg',
    title: 'Porur Hospital Consultation Area',
    category: 'Facilities',
    desc: 'Consultation facility at 6, Pillayar Koil St, Astalakshmi Nagar, Porur, Chennai.',
  },
  {
    id: 'gal-10',
    src: '/clinic-assets/gallery-14.jpg',
    title: 'G.R. Complex Main Center Exterior',
    category: 'Facilities',
    desc: 'First Floor, No. 3, G.R. Complex, NGO Nagar Main Road, SSM Nagar, New Perungalathur.',
  },
  {
    id: 'gal-11',
    src: '/clinic-assets/doctor-photo-40.jpg',
    title: 'Dr. Venkhatesan In Clinical Chamber',
    category: 'Chambers',
    desc: 'Consultant proctologist with 25 years of specialized experience in fistula and piles management.',
  },
  {
    id: 'gal-12',
    src: '/dr-dhananjaya-portrait.jpg',
    title: 'Dr. Dhananjaya Consultation Desk',
    category: 'Chambers',
    desc: 'Founder and chief Ayurvedic proctologist with 25+ years of focused Kshara Sutra practice in Chennai.',
  },
];

export const BROCHURE_IMAGES = [
  {
    id: 'piles-grading-care',
    title: 'Piles Care & Anorectal Grading Diagnostic Suite',
    desc: 'Comprehensive clinical evaluation determining the exact grade of internal or external hemorrhoids to recommend targeted, non-surgical or minimally invasive treatment.',
    src: '/piles-treatment-banner.png',
    tag: 'Clinical Diagnosis',
  },
  {
    id: 'consultation-chamber',
    title: 'Dr. Dhananjaya Consultation Chambers',
    desc: 'Private, confidential consultation room ensuring utmost patient dignity, empathetic counseling, and clear explanation of treatment options.',
    src: '/dr-dhananjaya-portrait.jpg',
    tag: 'Doctor Chamber',
  },
  {
    id: 'procedure-recovery',
    title: 'Ayurvedic Day-Care & Patient Rest Lounge',
    desc: 'Clean, hygienic space for gentle Kshara Sutra and Ayurvedic care with comfortable same-day return home.',
    src: '/clinic-assets/gallery-20.jpg',
    tag: 'Day-Care Procedure Unit',
  },
];

export const ADDITIONAL_PROGRAMS = [
  {
    title: 'Comprehensive Anorectal Digital Evaluation',
    tamilTitle: 'முழுமையான ஆசனவாய் மருத்துவ பரிசோதனை',
    desc: 'Precise grading of hemorrhoids and high-resolution fistula tract assessment in a completely private, dignified clinical setting.',
  },
  {
    title: 'Permanent Recurrence-Free Follow-Up Protocol',
    tamilTitle: 'மீண்டும் வராமல் தடுக்கும் தொடர் கண்காணிப்பு',
    desc: 'Structured post-procedure wound inspection, healing confirmation, and lifestyle adjustments to guarantee permanent comfort.',
  },
];

export const DOCTORS = [
  {
    name: 'Dr. Dhananjaya',
    dept: 'Chief Ayurvedic Proctologist & Kshara Sutra Specialist',
    creds: 'BAMS / MS (Ayu-Surgery) · Senior Anorectal Specialist',
    exp: '25+ Years Experience · 10,000+ Treated',
    slot: 'Mon – Sat, 9:00 AM – 8:30 PM',
    initials: 'DD',
    hue: 195,
    image: '/dr-dhananjaya-portrait.jpg',
    bio: 'Senior Ayurvedic proctology specialist with over 25 years of focused experience in gentle care for piles, fistula, and fissure, including authentic Kshara Sutra therapy without major open surgery.',
  },
  {
    name: 'Dr. Venkhatesan',
    dept: 'Consultant Ayurvedic Proctology Specialist',
    creds: 'DNYAS · 25 Years Specialized Experience',
    exp: 'Senior Specialist · Fistula & Piles Doctor',
    slot: 'Daily, 10:00 AM – 7:30 PM',
    initials: 'DV',
    hue: 160,
    image: '/clinic-assets/doctor-photo-40.jpg',
    bio: 'Senior specialist focused on Ayurvedic piles care, Kshara Sutra therapy for fistula, and gentle fissure management across New Perungalathur and Porur.',
  },
];

export const STATS = [
  { value: 25, suffix: '+', label: 'Years of Ayurvedic proctology care' },
  { value: 10000, suffix: '+', label: 'Happy patients cured permanently' },
  { value: 100, suffix: '%', label: 'Sphincter muscle & continence preserved' },
  { value: 4.9, suffix: '★', label: 'Patient satisfaction rating (34+ reviews)', decimals: 1 },
];

export const WHY_US = [
  'Focused Ayurvedic treatment for Piles, Fistula, and Fissure only',
  'Gentle treatment plans without major open operations',
  'Authentic Kshara Sutra care selected after careful clinical assessment',
  'Herbal support, local care, diet, and bowel-habit guidance',
  'Empathetic, confidential, and dignified care for sensitive anorectal conditions',
  'Multiple accessible centers: New Perungalathur (Tambaram) and Porur (Astalakshmi Nagar)',
];

export const PROCESS = [
  {
    step: '01',
    title: 'Confidential Consultation & Accurate Grading',
    desc: 'Private, empathetic clinical examination to accurately determine the condition grade (Piles Grade 1–4, Fistula tract type, or Fissure depth).',
  },
  {
    step: '02',
    title: 'Personalized Ayurvedic Treatment',
    desc: 'A gentle plan using Ayurvedic medicines, local care, diet guidance, or Kshara Sutra when clinically appropriate—without a major operation.',
  },
  {
    step: '03',
    title: 'Same-Day Discharge & Permanent Relief',
    desc: 'Walk home comfortably the same day, resume routine desk activities in 24–48 hours, and enjoy permanent, recurrence-free healing.',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'I got piles for the past 20 years. Already we done surgery elsewhere but it did not cure. Finally I know about Dr. Dhananjayas clinic through my friend and came here. Within a week of treatment I got cured! Now I feel best. Doctor is very kind and compassionate.',
    name: 'Pushpa Nagaraj',
    context: 'Chennai · 20-Year Chronic Piles Relieved',
  },
  {
    quote: 'My name is Basha. I was suffering from piles complaint for a long time. I came to Dr. Dhananjaya’s hospital Porur clinic. Now I am much better, doctor is very kind and I have complete satisfaction. Thank you doctor!',
    name: 'Magbool Basha',
    context: 'Porur Branch, Chennai · Piles Treatment',
  },
  {
    quote: 'Finding a clinic that treats sensitive issues with such high levels of dignity and clinical expertise is rare. The diagnosis was precise, the explanation was clear, and the follow-up care was exceptional. Truly a life-changing experience.',
    name: 'Priya Ramachandran',
    context: 'Maduravoyal, Chennai · Fissure Care',
  },
  {
    quote: 'I was suffering for months and dreading cutting surgery, but Dr. Dhananjaya and Dr. Venkhatesan made the entire process comfortable and completely stress-free. The Kshara Sutra procedure worked wonders, and I am finally pain-free with no loss of control.',
    name: 'Venkatesh S.',
    context: 'Central Chennai · Complex Fistula Recovery',
  },
  {
    quote: 'Professional, clean, and extremely empathetic. The staff put my anxiety at ease. The day-care procedure took 30 minutes, I walked home immediately, and recovery was completely smooth. Highly recommended.',
    name: 'Suresh Kumar',
    context: 'Ramapuram, Chennai · Grade 3 Piles Relief',
  },
  {
    quote: 'Kshara Sutra treatment here cured my recurrent fistula that two previous surgeries failed to resolve. No incontinence, no hospital stay, and zero recurrence after 2 years.',
    name: 'Jayaprakash Kasinathan',
    context: 'Tambaram, Chennai · Recurrent Fistula Cure',
  },
];

export const FAQS = [
  {
    q: 'Are the procedures at Dr. Dhananjayas Clinic painful?',
    a: 'Most of our modern, minimally invasive procedures involve minimal discomfort and are performed under gentle local anesthesia. Our clinical focus is on ensuring your experience is virtually painless with a smooth, rapid recovery.',
  },
  {
    q: 'Will my piles or fistula return after treatment?',
    a: 'Our advanced treatments and authentic Kshara Sutra therapy offer permanent solutions by addressing the root cause of the condition. Unlike conventional surgery which has high recurrence (20%–40%) in fistula, Kshara Sutra has a clinically documented recurrence rate of less than 1.5%. Maintaining a high-fiber diet and hydration ensures lifelong comfort.',
  },
  {
    q: 'Is a major operation required for your Ayurvedic treatment?',
    a: 'Our clinic focuses on gentle Ayurvedic care without major open operations. The doctor recommends medicines, local care, diet guidance, or Kshara Sutra based on an individual clinical assessment.',
  },
  {
    q: 'Why is Kshara Sutra superior to conventional cutting surgery for fistula?',
    a: 'Conventional cutting surgery (fistulotomy) risks damaging the anal sphincter muscles, which can cause partial or total bowel incontinence (loss of control over gas and stools). Kshara Sutra uses a medicated linen thread coated with alkaline herbs that gradually cuts and heals the tract simultaneously over several weeks, preserving 100% of sphincter muscles and bowel control.',
  },
  {
    q: 'How soon can I return to normal work after the procedure?',
    a: 'Because our procedures are minimally invasive with no large surgical incisions, most patients resume routine office, desk work, and daily activities within 24 to 48 hours.',
  },
  {
    q: 'Where are your clinics located in Chennai?',
    a: 'We operate multiple accessible centers: (1) Main Center: First Floor, No. 3, G.R. Complex, NGO Nagar Main Road, SSM Nagar, New Perungalathur (near Tambaram); (2) Porur Hospital: 6, Pillayar Koil St, Astalakshmi Nagar, Porur; and (3) Koyambedu OPD Consultation Desk.',
  },
  {
    q: 'How do I schedule an appointment?',
    a: 'You can book your appointment instantly by calling +91 73583 61723 or +91 97907 47350, chatting with us on WhatsApp, or submitting the online booking form on this website.',
  },
];

export const TIME_SLOTS = [
  '9:30 AM', '11:00 AM', '12:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM', '8:00 PM',
];

