import { Paper, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { ContactsTable } from './../../components/ContactsTable/index';
import { contacts_data } from './../../pseudodata';

function Contacts() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <div>
      <Paper p={20} style={{ background: colorScheme == 'light' ? '#FFFFFF' : '#151d1f' }}>
        <ContactsTable data={contacts_data} />
      </Paper>
    </div>
  );
}

export default Contacts;
