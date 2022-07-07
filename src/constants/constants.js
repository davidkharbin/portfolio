import { FaUserGraduate } from "react-icons/fa";
import { GiAirplane, GiDiploma, GiComputing } from "react-icons/gi";
import { GrCertificate, GrUserExpert } from "react-icons/gr";
import { AiOutlineCloudServer } from "react-icons/ai";

export const projects = [
  {
    title: 'Altitude Apparel',
    description: "Full-Stack E-Commerce application of over one million products, developed in three weeks with a team of four other engineers",
    image: '/images/altitude_scaled.png',
    tags: ['PERN', 'AWS', 'React-Bootstrap', 'Scrum'],
    source: null,
    frontend: 'https://github.com/TeamHowler/altitude-apparel/tree/development',
    backend: 'https://github.com/Velveteen-Hippo',
    visit: null,
    id: 0,
  },
  {
    title: 'What\'s for Dinner?',
    description: "Full-Stack recipe and grocery inventory app. MVP built in four days with three other engineers in an agile environment.",
    image: '/images/whats4dinnerapp_scaled.png',
    tags: ['PERN', 'AWS', 'OAuth2.0', 'Agile/Scrum'],
    source: 'https://github.com/Spryte-Studio/Whats_For_Dinner',
    visit: 'http://whats4dinnerapp.com/',
    id: 1,
  },
  {
    title: 'Wounded Warrior Tracker',
    description: 'Self-serving app that tracked my Wounded Warrior Challenge progress by scraping my data from Garmin\'s web app. (They would not give me an API key, and I refused to let this stop me)',
    image: '/images/wwtracker_scaled.png',
    tags: ['MERN', 'garmin-connect (NPM)', 'AWS', 'Nginx'],
    source: 'https://github.com/davidkharbin/wounded-warrior-tracker',
    visit: 'https://cryptographic.ninja/',
    id: 2,
  },
  {
    title: 'The Human Gait Institute',
    description: "My first project of any kind - I built this site for a non-profit who needed help rebuilding their old website. I got them off WordPress and built this static HTML/CSS/Sass brochure-style website",
    image: '/images/hgi_scaled.png',
    tags: ['HTML', 'CSS/Sass', 'Freelance'],
    source: 'https://github.com/davidkharbin/hgi',
    visit: 'https://humangaitinstitute.org',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2014, text: 'Started my journey as a PC technician, acquired A+ certification' },
  { year: 2015, text: 'Began helpdesk role at IBM' },
  { year: 2016, text: 'Began data center technician role at Sungard' },
  { year: 2017, text: 'Acquired Server+ and DCCA certifications' },
  { year: 2018, text: 'Began studying computer science' },
  { year: 2019, text: 'Began building Freelance Websites' },
  { year: 2020, text: 'Left Sungard to attend Software Engineer Bootcamp' },
  { year: 2021, text: 'Completed Software Engineering Immersive at Hack Reactor' },
];

export const AcomplishmentsData = [
  { icon: <AiOutlineCloudServer size='5rem' />,   text: '8+ Years professional experience' },
  { icon: <FaUserGraduate size='5rem' />, text: 'Galvanize Bootcamp Graduate', },
  { icon: <GiDiploma size='5rem' />,      text: '4 Professional IT Certifications', },
  { icon: <GiAirplane size='5rem' />,     text: 'FAA Certified Sport Pilot' }
];