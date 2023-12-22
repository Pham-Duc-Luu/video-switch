import { ModeToggle } from '@/components/Mode_toggle';
import Image from 'next/image';
import React from 'react';
import twitch from '@/public/twitch-svgrepo-com.svg';
import { Logo } from './_components/Logo';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Logo></Logo>
      {children}
    </div>
  );
};

export default layout;
