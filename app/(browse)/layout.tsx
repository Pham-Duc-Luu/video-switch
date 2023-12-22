import { Suspense } from 'react';
import Navbar from './_components/navbar';
import { useTheme } from 'next-themes';

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default BrowseLayout;
