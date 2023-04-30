// import {
//   // AcademicCapIcon,
//   // CalendarIcon,
//   DownloadIcon,
//   // FlagIcon,
//   // MapIcon,
//   // OfficeBuildingIcon,
//   // SparklesIcon,
// } from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
//import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Roman | Front End Developer',
  description: "Roman's personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Roman.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Front End Engineer</strong>, currently working
        for the <strong className="text-stone-100">State Governement</strong> helping build modern, mobile-first, websites for the agency that help people get services.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I like to play <strong className="text-stone-100">Disc Golf</strong>,
        ride my <strong className="text-stone-100">bike</strong>, or play{' '}
        <strong className="text-stone-100">Board Games</strong>.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: DownloadIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  //profileImageSrc: profilepic,
  description: `I've been working with the state government for 6 years. During my time with the agency, I migrated 3 drupal sites. One being a flagship site with 6 million users a month. In my spare time I contribute to an open source non profit organization and freelance. Im keeping the specifics of my work private for now. If you would like to know more, please contact me.`,
  aboutItems: [
    // {label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    // {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [

  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 3,
      },
      {
        name: 'Twig',
        level: 8,
      },
    ],
  },
  {
    name: 'Dev Ops/CMS',
    skills: [
      {
        name: 'Drupal',
        level: 10,
      },
      {
        name: 'Docker',
        level: 10,
      },
      {
        name: 'WordPress',
        level: 7,
      },
      {
        name: 'Acquia Cloud',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
// export const education: TimelineItem[] = [
//   {
//     date: 'April 2007',
//     location: 'Clown college',
//     title: 'Masters in Beer tasting',
//     content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
//   },
//   {
//     date: 'March 2003',
//     location: 'School of Business',
//     title: 'What did you study 101',
//     content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
//   },
// ];

export const experience: TimelineItem[] = [
  {
    date: 'March 2016 - Present',
    location: 'State Government',
    title: 'Web Developer',
    content: (

        <ul>
        <li>Conceptualized and created intuitive, engaging, and brand-consistent web experiences for 13 Drupal websites,
collaborating with visual designers, technical leads, and project managers</li>
<li>Identified user and system requirements for new websites and applications, creating wireframes to decide on
layout</li>
<li>Wrote and reviewed code for various applications, running functionality testing and debugging code
Optimized web pages for speed and efficiency, adhering to SEO principles and ensuring cross-browser
compatibility</li>
<li>Developed reusable React components optimized for performance and various devices, consuming data from
the Drupal backend via a RESTful API</li>
<li>Maintained 2 decoupled sites as part of a headless Drupal architecture with a React.js front end
Mentored other developers and content authors to help them understand new technologies and tools used
</li>
</ul>

    ),
  },
  
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'if you have any questions or just want to say hi, feel free to contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'mfvil@protonmail.com',
      href: 'mailto:mfvil@protonmail.com',
    },
    {
      type: ContactType.Github,
      text: 'mfvil',
      href: 'https://github.com/mfvil',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mfvil'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/roman-arefyev-2aa191227/'},
];
