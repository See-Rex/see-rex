import { ActionIcon, TextInput, useMantineTheme } from '@mantine/core';
import { IconArrowLeft, IconArrowRight, IconSearch } from '@tabler/icons';
import { ChangeEvent, useState } from 'react';
import PropertyInfo from '../../enums/PropertyInfo.enum';
import { usePropertyContext } from '../../hooks/PropertyContext';

type Props = {
  filterPropertyByType: PropertyInfo;
}

function Search(props: Props) {
  const { filterPropertyByType } = props;
  const { filterProperties, properties, refreshProperties } = usePropertyContext();
  const [ userInput, setUserInput ] = useState<string>();
  const theme = useMantineTheme();

  function handleSearch() {
    if (userInput && properties) {
      filterProperties(properties, filterPropertyByType, userInput);
    } else {
      console.log("Please input a value");
    }
  }

  function handleUserInput(e: ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.value === '') {
      refreshProperties();
    } else {
      setUserInput(e.currentTarget.value);
    }
  }
   
  return (
    <TextInput
      icon={<IconSearch size={18} stroke={1.5} />}
      type=""
      radius="xl"
      size="md"
      onChange={handleUserInput}
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled" onClick={handleSearch}>
          {theme.dir === 'ltr' ? (
            <IconArrowRight size={18} stroke={1.5} />
          ) : (
            <IconArrowLeft size={18} stroke={1.5} />
          )}
        </ActionIcon>
      }
      placeholder="Search a property"
      rightSectionWidth={42}
    />
  );
}

export default Search;
