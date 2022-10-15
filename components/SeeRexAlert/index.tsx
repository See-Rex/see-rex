import { showNotification } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons';

import React from 'react'

type Props = {
  loading?: boolean,
  message: string,
  title: string,
  type: 'success' | 'error' | 'default'
}

export default function SeeRexAlert(props: Props) {
  const { loading, message, title, type } = props;
  const icon = getIcon(type);

  function getIcon(alertType: 'success' | 'error' | 'default' ) {
    switch(alertType) {
      case 'success': return <IconCheck/>;
      case 'error': return <IconX />;
      default: return;
    }
  }
  
  if (icon) {
    showNotification({
      icon: icon,
      loading: loading,
      message: message,
      title: title,
    });
  } else {
    showNotification({
      loading: loading,
      message: message,
      title: title,
    });
  }
  
}

