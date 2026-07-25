export type Service = {
  number: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: '01',
    title: 'Web Design & Development',
    description:
      'Fast, responsive websites designed around your brand and built to turn visitors into customers.',
  },
  {
    number: '02',
    title: 'E-commerce Development',
    description:
      'Conversion-focused storefronts that make discovering, buying, and managing products effortless.',
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description:
      'Clear interfaces and thoughtful user journeys grounded in usability, hierarchy, and business goals.',
  },
  {
    number: '04',
    title: 'Performance Optimization',
    description:
      'Technical improvements that reduce load times, improve Core Web Vitals, and create faster experiences.',
  },
  {
    number: '05',
    title: 'SEO Foundations',
    description:
      'Search-friendly structure, metadata, semantics, and technical foundations built into your website.',
  },
  {
    number: '06',
    title: 'Website Maintenance',
    description:
      'Reliable ongoing support, updates, monitoring, and improvements after your website goes live.',
  },
];

export type Result = {
  metric: string;
  label: string;
  project: string;
  description: string;
};

export const results: Result[] = [
  {
    metric: '+42%',
    label: 'Conversion rate',
    project: 'E-commerce redesign',
    description:
      'A streamlined shopping experience focused on product discovery, mobile usability, and checkout clarity.',
  },
  {
    metric: '1.1s',
    label: 'Load time',
    project: 'Performance overhaul',
    description:
      'A front-end rebuild that reduced unnecessary JavaScript, optimized assets, and improved Core Web Vitals.',
  },
  {
    metric: '+68%',
    label: 'Qualified leads',
    project: 'B2B website rebuild',
    description:
      'Clearer positioning, stronger calls to action, and a simplified conversion path for high-intent visitors.',
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Launch',
    price: '$1,500',
    description:
      'For small businesses that need a focused, professional web presence.',
    features: [
      'Up to 5 custom pages',
      'Responsive development',
      'Contact form integration',
      'SEO foundations',
      'Performance optimization',
    ],
  },
  {
    name: 'Growth',
    price: '$3,500',
    description:
      'For growing companies that need a website built around conversion.',
    features: [
      'Up to 10 custom pages',
      'UX and conversion strategy',
      'Custom interactions',
      'Analytics integration',
      'Advanced performance work',
      '30 days post-launch support',
    ],
    featured: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    description:
      'For ambitious projects with complex requirements and ongoing needs.',
    features: [
      'Custom project scope',
      'Advanced integrations',
      'E-commerce capabilities',
      'Design system',
      'Priority support',
      'Ongoing optimization',
    ],
  },
];