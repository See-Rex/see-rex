import { ActionIcon, TextInput, useMantineColorScheme } from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons';
import { ChangeEvent, useState } from 'react';
import { usePropertyContext } from '../../hooks/PropertyContext';
import style from './_index.module.scss';

function Search() {
  const { filterProperties, properties, refreshProperties } = usePropertyContext();
  const { colorScheme } = useMantineColorScheme();
  const [userInput, setUserInput] = useState<string>();

  function handleSearch() {
    if (userInput && properties) {
      filterProperties(properties, userInput);
    } else {
      console.log('Please input a value');
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
          radius="xl"
          color={colorScheme === 'light' ? 'blue' : 'cyan'}
          variant="filled"
          onClick={handleSearch}
        >
          <IconArrowRight size={18} stroke={1.5} />
        </ActionIcon>
      }
      placeholder="Search a property"
      rightSectionWidth={42}
    />
  );
}

export default Search;
