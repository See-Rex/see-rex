import PropertyType from './enums/PropertyType.enum';
import ResidentialImage from './public/background1.png';
import { Property } from './types';

type ContactType = 'Land' | 'Commercial' | 'Residential';

export const contacts_data = [
  {
    address: '844 Morris Park avenue',
    avatar:
      'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    email: 'tapayancitu@gmail.com',
    name: 'Nash Uriel Tapayan',
    phone: '(+63) 934 5678 123',
    type: 'Land' as ContactType,
  },
  {
    address: '254 Rizal Park avenue',
    avatar:
      'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    email: 'jj@breaker.com',
    name: 'Jill Jailbreaker',
    phone: '(+032) 488-9119',
    type: 'Commercial' as ContactType,
  },
  {
    address: '254 Rizal Park avenue',
    avatar:
      'https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    email: 'henry@silkeater.io',
    name: 'Henry Silkeater',
    phone: '(+63) 987 653 3210',
    type: 'Commercial' as ContactType,
  },
  {
    address: '844 Morris Park avenue',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    email: 'bhorsefighter@gmail.com',
    name: 'Bill Horsefighter',
    phone: '(+63) 9123 6783 456',
    type: 'Residential' as ContactType,
  },
  {
    address: '844 Morris Park avenue',
    avatar:
      'https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    email: 'jeremy@foot.dev',
    name: 'Jeremy Footviewer',
    phone: '(+63) 9019 2837 46',
    type: 'Land' as ContactType,
  },
];

export const stat_data = [
  {
    description: '24% more than in the same month last year, 33% more that two years ago',
    stats: '456,133',
    title: 'Page views',
  },
  {
    description: '13% less compared to last month, new user engagement up by 6%',
    stats: '2,175',
    title: 'New users',
  },
  {
    description: '1994 orders were completed this month, 97% satisfaction rate',
    stats: '1,994',
    title: 'Completed orders',
  },
];

export const tempValues = [
  {
    amount: '70',
    area: '100',
    car: '1',
    people: '5',
  },
  {
    amount: '33',
    area: '2000',
    car: '3',
    people: '4',
  },
  {
    amount: '12',
    area: '1000',
    car: '2',
    people: '2',
  },
  {
    amount: '46',
    area: '500',
    car: '0',
    people: '1',
  },
  {
    amount: '12',
    area: '1000',
    car: '5',
    people: '2',
  },
];

export const residential_properties_data: Property[] = [
  {
    description: 'Home of orange people.',
    imageSrc: ResidentialImage,
    title: 'Orange Home',
    type: PropertyType.RESIDENTIAL,
    values: tempValues[0],
  },
  {
    description: 'Home of Norway people.',
    imageSrc: ResidentialImage,
    title: 'Norway Home',
    type: PropertyType.RESIDENTIAL,
    values: tempValues[1],
  },
  {
    description: "Sisig is best served in Tatay's House",
    imageSrc: ResidentialImage,
    title: "Tatay's House",
    type: PropertyType.RESIDENTIAL,
    values: tempValues[2],
  },
  {
    description: 'Home of Violet people.',
    imageSrc: ResidentialImage,
    title: 'Violet Home',
    type: PropertyType.RESIDENTIAL,
    values: tempValues[3],
  },
  {
    description: 'Home of Blue people.',
    imageSrc: ResidentialImage,
    title: 'Blue Home',
    type: PropertyType.RESIDENTIAL,
    values: tempValues[4],
  },
];

export const land_properties_data: Property[] = [
  {
    description: 'Land of orange people.',
    imageSrc: ResidentialImage,
    title: 'Orange Land',
    type: PropertyType.LAND,
    values: tempValues[0],
  },
  {
    description: 'Land of Norway people.',
    imageSrc: ResidentialImage,
    title: 'Norway Land',
    type: PropertyType.LAND,
    values: tempValues[1],
  },
  {
    description: "Sisig is best served in Tatay's Land",
    imageSrc: ResidentialImage,
    title: "Tatay's Land",
    type: PropertyType.LAND,
    values: tempValues[2],
  },
  {
    description: 'Land of Violet people.',
    imageSrc: ResidentialImage,
    title: 'Violet Land',
    type: PropertyType.LAND,
    values: tempValues[3],
  },
  {
    description: 'Land of Blue people.',
    imageSrc: ResidentialImage,
    title: 'Blue Land',
    type: PropertyType.LAND,
    values: tempValues[4],
  },
];

export const non_residential_properties_data: Property[] = [
  {
    description: 'Park of orange people.',
    imageSrc: ResidentialImage,
    title: 'Orange Park',
    type: PropertyType.NON_RESIDENTIAL,
    values: tempValues[0],
  },
  {
    description: 'Park of Norway people.',
    imageSrc: ResidentialImage,
    title: 'Norway Park',
    type: PropertyType.NON_RESIDENTIAL,
    values: tempValues[1],
  },
  {
    description: "Sisig is best served in Tatay's Park",
    imageSrc: ResidentialImage,
    title: "Tatay's Park",
    type: PropertyType.NON_RESIDENTIAL,
    values: tempValues[2],
  },
  {
    description: 'Park of Violet people.',
    imageSrc: ResidentialImage,
    title: 'Violet Park',
    type: PropertyType.NON_RESIDENTIAL,
    values: tempValues[3],
  },
  {
    description: 'Park of Blue people.',
    imageSrc: ResidentialImage,
    title: 'Blue Park',
    type: PropertyType.NON_RESIDENTIAL,
    values: tempValues[4],
  },
];
