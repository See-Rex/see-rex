export interface Homeowner {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
  contactDetails: string;
  dateRegistered: string;
  bio: [object];
}

export interface Property {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  homeowner: {
    name: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
  image: {
    asset: {
      url: string;
    };
  };
  dateRegistered: string;
  categories: {
    title: string;
    description: string;
  };
  homeownerHistory: {
    name: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
  vehicles: {
    name: string;
    image: {
      asset: {
        url: string;
      };
    };
    dateRegistered: string;
    proofOfOwnership: [object];
  };
  description: [object];
}

export interface Vehicle {
  _id: string,
  name: string,
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    }
  },
  dateRegistered: string,
  proofOfOwnership: [object],
}