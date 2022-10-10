import PropertyType from "./enums/PropertyType.enum";
import ResidentialImage from "./public/background1.png";
import { Property } from "./types";

export const contacts_data = [
  {
    avatar:
      'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    email: 'rob_wolf@gmail.com',
    name: 'Robert Wolfkisser',
    phone: '(+63) 934 5678 123',
    type: 'Land',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    email: 'jj@breaker.com',
    name: 'Jill Jailbreaker',
    phone: '(+032) 488-9119',
    type: 'Commercial',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    email: 'henry@silkeater.io',
    name: 'Henry Silkeater',
    phone: '(+63) 987 653 3210',
    type: 'Commercial',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    email: 'bhorsefighter@gmail.com',
    name: 'Bill Horsefighter',
    phone: '(+63) 9123 6783 456',
    type: 'Residential',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    email: 'jeremy@foot.dev',
    name: 'Jeremy Footviewer',
    phone: '(+63) 9019 2837 46',
    type: 'Land',
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

export const tempValues = {
  amount: '70',
  area: '100',
  car: '55',
  people: '42',
};

export const residential_properties_data: Property[] = [
  {
    description: "Home of orange people.",
    imageSrc: ResidentialImage,
    title: "Orange Home",
    type: PropertyType.RESIDENTIAL,
    values: tempValues,
  },
  {
    description: "Home of Norway people.",
    imageSrc: ResidentialImage,
    title: "Norway Home",
    type: PropertyType.RESIDENTIAL,
    values: tempValues,
  },
  {
    description: "Sisig is best served in Tatay's House",
    imageSrc: ResidentialImage,
    title: "Tatay's House",
    type: PropertyType.RESIDENTIAL,
    values: tempValues,
  },
  {
    description: "Home of Violet people.",
    imageSrc: ResidentialImage,
    title: "Violet Home",
    type: PropertyType.RESIDENTIAL,
    values: tempValues,
  },
  {
    description: "Home of Blue people.",
    imageSrc: ResidentialImage,
    title: "Blue Home",
    type: PropertyType.RESIDENTIAL,
    values: tempValues,
  },
];

export const land_properties_data: Property[] = [
  {
    description: "Land of orange people.",
    imageSrc: ResidentialImage,
    title: "Orange Land",
    type: PropertyType.LAND,
    values: tempValues,
  },
  {
    description: "Land of Norway people.",
    imageSrc: ResidentialImage,
    title: "Norway Land",
    type: PropertyType.LAND,
    values: tempValues,
  },
  {
    description: "Sisig is best served in Tatay's Land",
    imageSrc: ResidentialImage,
    title: "Tatay's Land",
    type: PropertyType.LAND,
    values: tempValues,
  },
  {
    description: "Land of Violet people.",
    imageSrc: ResidentialImage,
    title: "Violet Land",
    type: PropertyType.LAND,
    values: tempValues,
  },
  {
    description: "Land of Blue people.",
    imageSrc: ResidentialImage,
    title: "Blue Land",
    type: PropertyType.LAND,
    values: tempValues,
  },
];

export const non_residential_properties_data: Property[] = [
  {
    description: "Park of orange people.",
    imageSrc: ResidentialImage,
    title: "Orange Park",
    type: PropertyType.NON_RESIDENTIAL,
    values: tempValues,
  },
  {
    description: "Park of Norway people.",
    imageSrc: ResidentialImage,
    title: "Norway Park",
    type: PropertyType.NON_RESIDENTIAL,
    values: tempValues,
  },
  {
    description: "Sisig is best served in Tatay's Park",
    imageSrc: ResidentialImage,
    title: "Tatay's Park",
    type: PropertyType.NON_RESIDENTIAL,
    values: tempValues,
  },
  {
    description: "Park of Violet people.",
    imageSrc: ResidentialImage,
    title: "Violet Park",
    type: PropertyType.NON_RESIDENTIAL,
    values: tempValues,
  },
  {
    description: "Park of Blue people.",
    imageSrc: ResidentialImage,
    title: "Blue Park",
    type: PropertyType.NON_RESIDENTIAL,
    values: tempValues,
  },
];
