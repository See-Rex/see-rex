export interface Homeowner {
  _id: string,
  name: string,
  slug: string,
  image: {
    asset: {
      url: string;
    }
  },
  contactDetails: string,
  dateRegistered: string,
  bio: [object]
}

export interface Property {
  _id: string,
  title: string,
  slug: string,
  homeowner: {
    name: string;
    image: string;
  },
  mainImage: {
    asset: {
      url: string;
    }
  },
  dateRegistered: string,
  categories: {
    title: string;
    description: string;
  },
  homeownerHistory: {
    name: string;
    image: string;
  },
  vehicles: {
    name: string;
    image: string;
    dateRegistered: string;
    proofOfOwnership: [object];
  },
  description: [object]
}

export interface Vehicle {
  _id: string,
  name: string,
  slug: string,
  image: {
    asset: {
      url: string;
    }
  },
  contactDetails: string,
  dateRegistered: string,
  bio: [object]
}