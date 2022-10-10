import { Group, Menu, UnstyledButton, useMantineColorScheme } from '@mantine/core';
import { IconCar, IconChevronDown, IconHomeDollar, IconRulerMeasure, IconTextSize, IconUsers } from '@tabler/icons';
import { useState } from 'react';
import PropertyInfo from '../../enums/PropertyInfo.enum';
import { usePropertyContext } from '../../hooks/PropertyContext';
import style from "./_index.module.scss";

function FilterPicker() {
  const [opened, setOpened] = useState(false);
  const { colorScheme } = useMantineColorScheme();
  const { setPropertyInfoFilterType } = usePropertyContext();

  const filterTypeData = [
    { 
      image: <IconTextSize stroke={2} className={`${style.icon} ${style[colorScheme]}`}/>, 
      label: PropertyInfo.NAME
    },
    { 
      image: <IconUsers stroke={2} className={`${style.icon} ${style[colorScheme]}`} />, 
      label: PropertyInfo.PEOPLE 
    },
    { 
      image: <IconCar  stroke={2} className={`${style.icon} ${style[colorScheme]}`}/>, 
      label: PropertyInfo.VEHICLE 
    },
    { 
      image: <IconRulerMeasure  stroke={2} className={`${style.icon} ${style[colorScheme]}`}/>, 
      label: PropertyInfo.AREA
    },
    { 
      image: <IconHomeDollar stroke={2} className={`${style.icon} ${style[colorScheme]}`}/>, 
      label: PropertyInfo.AMOUNT 
    },
  ];
  
  const [selected, setSelected] = useState(filterTypeData[0]);
  setPropertyInfoFilterType(selected.label);

  const items = filterTypeData.map((item) => (
    <Menu.Item
      className={`${style.dropDown} ${style[colorScheme]}`}
      icon={item.image}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
    >
      <Menu.Target>
        <UnstyledButton className={`${style.control} ${style[colorScheme]}`}>
          <Group spacing="xs">
            {selected.image}
            <span className={style.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size={18} className={opened ? style.iconUp : style.iconDown} stroke={2} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown className={`${style.dropDown} ${style[colorScheme]}`}>{items}</Menu.Dropdown>
    </Menu>
  );
}

export default FilterPicker;
