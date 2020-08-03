import OGuiaNativo from '../images/OGuiaNativo.gif';
import MPLogo from '../images/mplogo.svg';
import coolhowLogo from '../images/coolhowLogo.svg';
import AfsLogo from '../images/afslogo.svg';

const jobs = [
  {
    id: 4,
    name: 'O Guia Nativo',
    year: '2019 - Present',
    description: `O Guia Nativo is a personal project I've been
    developing since 2019. It's a travel website that goes off
    the beaten track and shares hidden tips that bring tourists closer to the
    local culture. I was responsible for the whole project: from
    designing the logo and editing videos to producing articles and
    social media posts.`,
    bgColor: 'rgb(0, 113, 188)',
    titleColor: 'rgb(250, 108, 101)',
    website: 'https://oguianativo.com.br',
    logo: OGuiaNativo,
  },
  {
    id: 3,
    name: 'Media Partisans',
    year: '2016 - 2019',
    description: `Part of the Funke Media Gruppe, the biggest media concern in Germany, Media Partisans is a fast-growing startup with 43 brands and almost 75 million fans worldwide. As a Content Manager I was mainly responsible for the content producing and social media management.`,
    bgColor: 'rgba(17, 12, 43, 1)',
    titleColor: 'rgb(234, 69, 37)',
    website: 'https://mediapartisans.com',
    logo: MPLogo,
  },
  {
    id: 2,
    name: 'CoolHow Creative Lab',
    year: '2014 - 2016',
    description: `CoolHow is a Brazilian creative agency focused on content producing and corporate education. I started as a Social Media Intern in 2014 and got hired in 2015 as a full-time Online Copywriter. Later I was promoted to Editor and assumed more responsibilities, like team management and direct communication with clients.`,
    titleColor: 'rgb(231, 191, 24)',
    bgColor: '#59154f',
    website: 'https://coolhow.com.br',
    logo: coolhowLogo,
  },
  {
    id: 1,
    name: 'AFS Intercultural Programs',
    year: '2010',
    description: `AFS is an international, voluntary, non-governmental, non-profit organization that provides intercultural learning opportunities. As a volunteer in Belo Horizonte (Brazil) I helped the local committee with the supervision of exchange students and also edited a promotional video.`,
    titleColor: 'rgb(23, 122, 194)',
    bgColor: '#272442',
    website: 'https://afs.org',
    logo: AfsLogo,
  },
];

export default jobs;
