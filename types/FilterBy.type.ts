import PropertyInfo from "../enums/PropertyInfo.enum"

type FilterBy = {
  type: PropertyInfo;
  amount?: number;
}

export default FilterBy;