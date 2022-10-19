import { useEffect, useState } from 'react';
import { SeeRexLoader } from '../components';
import PropertyInfo from '../enums/PropertyInfo.enum';
import PropertyType from '../enums/PropertyType.enum';
import { land_properties_data, non_residential_properties_data, residential_properties_data } from '../pseudodata';
import { Property } from '../types';
import { createGenericContext } from '../utils/Context';

type PropertyContextType = {
properties?: Property[];
filterProperties: (currentProperties: Property[], userInput: string) => void;
refreshProperties: () => void;
setPropertyInfoFilterType: (type: PropertyInfo) => void;
setPropertyType: (type: PropertyType) => void;
};

interface Props {
children: React.ReactNode;
}

const [usePropertyContext, PropertyContextProvider] = createGenericContext<PropertyContextType>();

const PropertyProvider = (props: Props) => {
const { children } = props;
const [properties, setProperties] = useState<Property[]>();
const [loading, setLoading] = useState(false);
const [propertyType, setPropertyType] = useState<PropertyType>();
const [propertyInfoFilterType, setPropertyInfoFilterType] = useState<PropertyInfo>();

useEffect(() => {
  getResidentialProperties();
}, [propertyType, propertyInfoFilterType]);

async function getResidentialProperties() {
  setLoading(true);

  const data = await fetchPropertyByPropertyType(propertyType);

  if (data) {
    setProperties(data);
  }

  setLoading(false);
}

function fetchPropertyByPropertyType(type: PropertyType | undefined) {
  switch (type) {
    case PropertyType.LAND:
      return land_properties_data;
    case PropertyType.RESIDENTIAL:
      return residential_properties_data;
    case PropertyType.NON_RESIDENTIAL:
      return non_residential_properties_data;
    default:
      return null;
  }
}

function filterProperties(currentProperties: Property[], userInput: string) {
  const filteredProperties = currentProperties.filter((property) => {
    switch (propertyInfoFilterType) {
      case PropertyInfo.NAME:
        return property.title.toLowerCase().includes(userInput.toLowerCase());
      case PropertyInfo.AREA:
        return property.values.area.includes(userInput);
      case PropertyInfo.VEHICLE:
        return property.values.car.includes(userInput);
      case PropertyInfo.PEOPLE:
        return property.values.people.includes(userInput);
      case PropertyInfo.AMOUNT:
        return property.values.amount.includes(userInput);
    }
  });

  if (filteredProperties) {
    setProperties(filteredProperties);
  } else {
    console.log('Failed to filter');
  }
}

function refreshProperties() {
  getResidentialProperties();
}

return (
  <PropertyContextProvider
    value={{
      filterProperties,
      properties,
      refreshProperties,
      setPropertyInfoFilterType,
      setPropertyType,
    }}
  >
    {loading ? <SeeRexLoader opacity={0.5} /> : children}
  </PropertyContextProvider>
);
};

export { PropertyProvider, usePropertyContext };
