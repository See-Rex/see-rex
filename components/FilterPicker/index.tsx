import { createStyles, Group, Menu, UnstyledButton, useMantineColorScheme } from '@mantine/core';
import { IconCar, IconChevronDown, IconHomeDollar, IconRulerMeasure, IconTextSize, IconUsers } from '@tabler/icons';
import { useState } from 'react';
import PropertyInfo from '../../enums/PropertyInfo.enum';
import { usePropertyContext } from '../../hooks/PropertyContext';
import style from "./_index.module.scss";


const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
    alignItems: 'center',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    borderRadius: theme.radius.md,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    transition: 'background-color 150ms ease',

    width: 200,
  },

  icon: {
    transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 150ms ease',
  },

  label: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },
}));

function FilterPicker() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
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
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            {selected.image}
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size={18} className={classes.icon} stroke={2} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}

export default FilterPicker;
