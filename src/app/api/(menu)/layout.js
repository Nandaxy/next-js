import Sidebar from '@/components/api/sidebar';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div>
        <Sidebar/>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
