'use client';

import ApplicationHeader from '../components/ApplicationHeader/ApplicationHeader';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <ApplicationHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
