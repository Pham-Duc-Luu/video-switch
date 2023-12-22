import { ModeToggle } from '@/components/Mode_toggle';
import { UserButton } from '@clerk/nextjs';
import React from 'react';

const UseSetting = () => {
  return (
    <div className="hidden sm:flex justify-center items-center  gap-4 m-4">
      <ModeToggle></ModeToggle>
      <UserButton></UserButton>
    </div>
  );
};

export default UseSetting;
