import Image from 'next/image';
import { Poppins } from 'next/font/google';
import twitchLogo from '@/public/twitch-svgrepo-com.svg';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const Logo = () => {
  return (
    <Link href={'/'} className="flex m-4 cursor-pointer  items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image
          src={twitchLogo}
          alt="Gamehub"
          sizes="100vw"
          className="sm:h-13 sm:w-13  w-10 max-w-none"
          // height="40"
          // width="40"
        />
      </div>
      <div
        className={cn(
          ' hidden sm:flex sm:flex-col items-center sm:ml-4',
          font.className
        )}>
        <p className="text-xl font-semibold">Gamehub</p>
        <p className="text-sm text-muted-foreground dark:text-white">
          Let&apos;s play
        </p>
      </div>
    </Link>
  );
};

export default Logo;
