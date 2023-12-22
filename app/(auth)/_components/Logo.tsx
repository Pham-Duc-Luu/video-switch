import Image from 'next/image';
import { Poppins } from 'next/font/google';
import twitchLogo from '@/public/twitch-svgrepo-com.svg';
import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image src={twitchLogo} alt="Gamehub" height="80" width="80" />
      </div>
      <div className={cn('flex flex-col items-center', font.className)}>
        <p className="text-xl font-semibold">Gamehub</p>
        <p className="text-sm text-muted-foreground dark:bg-white">
          Let&apos;s play
        </p>
      </div>
    </div>
  );
};
