import { StaticImageData } from "next/image";
import PropertyType from "../enums/PropertyType.enum";

type Property = {
  description: string;
  imageSrc: StaticImageData;
  title: string;
  type?: PropertyType;
  values: {
      amount: string;
      area: string;
      car: string;
      people: string;
  };
}

export default Property;
