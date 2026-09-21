import clinicConfig from '@/clinic.config.json';

/* Master exports sourced from src/clinic.config.json */

export const SPECIALTIES_TICKER = clinicConfig.navigation?.ticker || [];

export const NAV_LINKS = clinicConfig.navigation?.links || [];

export const SERVICES = clinicConfig.services || [];

export const SERVICES_HEADER = clinicConfig.servicesHeader || {
  eyebrow: 'Diagnostic & Pathology Services',
  title: 'Certified clinical testing & home sample collection.',
  sideText: 'Accurate clinical diagnostics and doorstep phlebotomy.',
  workflowLinkText: 'How sample collection works',
};

export const PROCESS = clinicConfig.workflow?.steps || [];

export const PROCESS_HEADER = clinicConfig.workflow || {
  eyebrow: 'Diagnostic Workflow',
  title: 'From sample collection to report, in three simple steps.',
  ctaPrompt: 'Need a specific test or home sample collection?',
  ctaButtonText: 'Schedule your test or home visit now',
};

export const STATS = clinicConfig.trustStats?.stats || [];

export const STATS_CAPTION = clinicConfig.trustStats?.caption || '';

export const WHY_US = clinicConfig.about?.whyUs || [];

export const FAQS = clinicConfig.faqs || [];

export const GALLERY_IMAGES = clinicConfig.gallery?.images || [];

export const GALLERY_CATEGORIES = clinicConfig.gallery?.categories || ['All'];

export const GALLERY_PAGE_CONTENT = clinicConfig.gallery || {};

export const TIME_SLOTS = clinicConfig.booking?.timeSlots || [
  '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM',
  '10:00 AM', '11:30 AM', '4:30 PM', '6:00 PM', '7:30 PM', '8:30 PM',
];

export const HERO_CONTENT = clinicConfig.hero || {};

export const ABOUT_CONTENT = clinicConfig.about || {};

export const ABOUT_PAGE_CONTENT = clinicConfig.about?.pageStory || {};

export const PATIENT_GUIDE = clinicConfig.patientGuide || {
  eyebrow: 'Test Preparation',
  title: 'Important Guidelines Before Your Test',
  cards: [],
};

export const QUALITY_STANDARDS = clinicConfig.qualityStandards || {
  eyebrow: 'Laboratory Standards',
  title: 'Our Commitments to Every Patient',
  cards: [],
};

export const BOOKING_CONFIG = clinicConfig.booking || {};

export const CTA_BANNER_CONTENT = clinicConfig.ctaBanner || {};

export const SEO_CONFIG = clinicConfig.seo || {};
