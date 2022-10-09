import { ActionIcon, TextInput, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconArrowLeft, IconArrowRight, IconSearch } from '@tabler/icons';
import { ChangeEvent, useState } from 'react';
import PropertyInfo from '../../enums/PropertyInfo.enum';
import { usePropertyContext } from '../../hooks/PropertyContext';
import style from "./_index.module.scss";

type Props = {
  filterPropertyByType: PropertyInfo;
}

function Search(props: Props) {
  const { filterPropertyByType } = props;
  const { filterProperties, properties, refreshProperties } = usePropertyContext();
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [ userInput, setUserInput ] = useState<string>();

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
      className={`${style.searchContainer} ${style[colorScheme]}`}
      icon={<IconSearch size={18} stroke={2} />}
      radius="md"
      size="md"
      onChange={handleUserInput}
      rightSection={
        <ActionIcon 
          size={32} 
          radius="md" 
          color={theme.primaryColor} 
          variant="filled" 
          onClick={handleSearch}
        >
          {theme.dir === 'ltr' ? (
            <IconArrowRight size={18} stroke={2} />
          ) : (
            <IconArrowLeft size={18} stroke={2} />
          )}
        </ActionIcon>
      }
      placeholder="Search a property"
      rightSectionWidth={42}
    />
  );
}

export default Search;
