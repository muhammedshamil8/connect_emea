import { Event } from '@/types/eventsTypes';
import { LearningStation , Reconnect,InternHiring ,LinkednandResume,ResumeBuilding,Shehike,UntoldStories,DigitalMarketing} from '@/assets/images/Events';

const Events: Event[] = [
  {
    id: 1,
    title: 'Connect EMEA Workshop',
    date: '25/09/2024',
    time: '2:30 PM',
    location: 'Seminar Hall',
    description: 'A Event that Introduce students to various career paths and industries they may not have previously considered.',
    image: LearningStation,
    link: 'https://www.eventbrite.com/e/connect-emea-workshop-tickets-1234567890',
  },
  {
    id: 2,
    title: 'Connect EMEA Re meet',
    date: '23/07/2024',
    time: '9:30 PM',
    location: 'Innovation and Incubation Center',
    description: 'An event to connect with industry leaders and like-minded professionals.',
    image:Reconnect,
    link: 'https://www.eventbrite.com/e/connect-emea-networking-event-tickets-1234567890',
  },
  {
    id: 3,
    title: 'Connect EMEA Internship',
    date: '09/11/2022',
    time: '1:00 PM',
    location: 'Innovation and Incubation Center',
    description: 'Panel discussion with tech pioneers about the future of AI.',
    image: InternHiring,
    link: 'https://www.eventbrite.com/e/connect-emea-panel-discussion-tickets-1234567890',
  },
  {
    id: 4,
    title: 'Connect EMEA Job Fair',
    date: '22/11/2023',
    time: '01:30 PM',
    location: 'Seminar Hall',
    description: 'Meet top recruiters at the Connect EMEA Job Fair.',
    image: ResumeBuilding,
    link: 'https://www.eventbrite.com/e/connect-emea-job-fair-tickets-1234567890',
  },
  {
    id: 5,
    title: 'Connect EMEA Job Fair',
    date: '05/12/2023',
    time: '01:30 PM',
    location: 'Seminar Hall',
    description: 'Elevate Your proffesional pressence with us.',
    image: LinkednandResume,
    link: 'https://www.eventbrite.com/e/connect-emea-coding-challenge-tickets-1234567890',
  },

  {
    id: 6,
    title: 'Connect EMEA Shehike',
    date: '01/12/2023',
    time: '10:00 AM',
    location: 'Audio Visual Theatre',
    description: 'Join us for an inspiring talk session that celebrates the achievements and experiences of our students who successfully juggle both their studies and their professional careers.',
    image: Shehike,
    link: 'https://www.eventbrite.com/e/connect-emea-hackathon-tickets-1234567890',
  },
  {
    id: 7,
    title: 'Connect EMEA Intracting Event',
    date: '26/02/2024',
    time: '10:00 AM',
    location: 'Audio Visual Theatre',
    description: 'Network with industry professionals and learn about internship opportunities.',
    image: UntoldStories,
    link: 'https://www.eventbrite.com/e/connect-emea-networking-event-tickets-1234567890',
  },
  {
    id: 8,
    title: 'Connect EMEA Levelup',
    date: '22/12/2023',
    time: '7:30 PM',
    location: 'Google Meet',
    description: 'An engaging workshop on digital marketing trends for 2023.',
    image: DigitalMarketing,
    link: 'https://www.eventbrite.com/e/connect-emea-hackathon-tickets-1234567890',
  },
  {
    id: 9,
    title: 'Connect EMEA Networking Event',
    date: '20/02/2022',
    time: '6:00 PM',
    location: 'University of Central Florida',
    description: 'Network with industry professionals, learn about internship opportunities.',
    image: 'https://via.placeholder.com/150',
    link: 'https://www.eventbrite.com/e/connect-emea-networking-event-tickets-1234567890',
  },
  {
    id: 10,
    title: 'Connect EMEA Hackathon',
    date: '15/02/2022',
    time: '9:00 AM',
    location: 'University of Central Florida',
    description: 'Work in teams to solve real-world problems and compete for prizes.',
    image: 'https://via.placeholder.com/150',
    link: 'https://www.eventbrite.com/e/connect-emea-hackathon-tickets-1234567890',
  },


  {
    id: 12,
    title: 'Connect EMEA Networking Event',
    date: '11/05/2022',
    time: '3:00 PM',
    location: 'University of Central Florida',
    description: 'An event to connect with industry leaders and like-minded professionals.',
    image: 'https://via.placeholder.com/150',
    link: 'https://www.eventbrite.com/e/connect-emea-networking-event-tickets-1234567890',
  },
  {
    id: 13,
    title: 'Connect EMEA Panel Discussion',
    date: '12/01/2022',
    time: '1:00 PM',
    location: 'University of Central Florida',
    description: 'Panel discussion with tech pioneers about the future of AI.',
    image: 'https://via.placeholder.com/150',
    link: 'https://www.eventbrite.com/e/connect-emea-panel-discussion-tickets-1234567890',
  },
  {
    id: 14,
    title: 'Connect EMEA Job Fair',
    date: '12/10/2022',
    time: '10:00 AM',
    location: 'University of Central Florida',
    description: 'Meet top recruiters at the Connect EMEA Job Fair.',
    image: 'https://via.placeholder.com/150',
    link: 'https://www.eventbrite.com/e/connect-emea-job-fair-tickets-1234567890',
  },
  {
    id: 15,
    title: 'Connect EMEA Coding Challenge',
    date: '01/20/2022',
    time: '11:00 AM',
    location: 'University of Central Florida',
    description: 'Join a competitive coding challenge for a chance to win exciting prizes.',
    image: 'https://via.placeholder.com/150',
    link: 'https://www.eventbrite.com/e/connect-emea-coding-challenge-tickets-1234567890',
  },
];

export default Events;
