import { StaticImageData } from "next/image";

type Property = {
  description: string;
  imageSrc: StaticImageData;
  title: string;
  type: string;
  values: {
      amount: string;
      area: string;
      car: string;
      people: string;
  };
}

export default Property;
