import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <div className=" flex w-full max-w-sm items-center space-x-2">
      <Input type="email" className="hidden sm:block" placeholder="Email" />
      <Button type="button" className="">
        <SearchIcon className="w-5 h-5"></SearchIcon>
      </Button>
    </div>
  );
};

export default Search;
