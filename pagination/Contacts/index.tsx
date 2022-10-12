import { Paper, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { ContactsTable } from '../../components';
import { contacts_data } from './../../pseudodata';

function Contacts() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <div>
      <Paper px={20} py={15} style={{ background: colorScheme == 'light' ? '#FFFFFF' : '#151d1f' }}>
        <ContactsTable data={contacts_data} />
      </Paper>
    </div>
  );
}

export default Contacts;
