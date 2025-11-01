'use client';

import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Globe, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavMobile from './nav-mobile';
import { useLocale } from '@/hooks/use-locale';

const LocalSwitcher = () => {
  const { locale, setPathnameLocale } = useLocale();

  const switchLocale = (locale: string) => {
    setPathnameLocale(locale);
  };
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="cursor-pointer px-1">
        <Globe className="h-5 w-5 cursor-pointer" />
        <span className="ps-2 uppercase">{locale}</span>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-40 rounded-lg bg-black p-4 text-sm uppercase text-white shadow-lg">
          {['ar', 'en', 'fr'].map((lang) => (
            <NavigationMenuLink asChild key={lang}>
              <li onClick={() => switchLocale(lang)}>
                <div
                  className={cn(
                    'mb-0.5 flex cursor-pointer items-center justify-between gap-2 rounded-md border-l border-transparent from-black to-yellow-500/20 p-2 text-sm hover:border-yellow-500 hover:bg-gradient-to-r hover:text-yellow-500',
                    {
                      'border-yellow-500 bg-gradient-to-r text-yellow-500':
                        locale === lang,
                    }
                  )}
                >
                  <span className="ps-1 text-xs uppercase">{lang}</span>
                  <Globe
                    className={cn('h-3 w-3 opacity-20', {
                      'opacity-100': locale === lang,
                    })}
                  />
                </div>
              </li>
            </NavigationMenuLink>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const UserMenu = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="cursor-pointer px-1">
        <User className="h-5 w-5 cursor-pointer" />
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="mt-5 w-80 rounded-lg bg-black p-4 text-white shadow-lg">
          <h3 className="mb-3 text-lg font-bold">AFGC</h3>
          <div className="grid grid-cols-2 gap-4 border-t border-gray-700 pt-3">
            {/* Section S'identifier */}
            <div>
              <h4 className="text-sm font-semibold">S&apos;identifier</h4>
              <p className="text-xs text-gray-400">
                Accédez à votre compte si vous êtes déjà un utilisateur de AFGC.
              </p>
              <Link
                href="/signin"
                className="mt-2 block rounded-lg border border-white py-2 text-center transition hover:bg-white hover:text-black"
              >
                S&apos;identifier
              </Link>
            </div>

            {/* Section S'inscrire */}
            <div>
              <h4 className="text-sm font-semibold">S&apos;inscrire</h4>
              <p className="text-xs text-gray-400">
                Rejoignez-nous en tant que nouvel utilisateur AFGC.
              </p>
              <Link
                href="/signup"
                className="mt-2 block rounded-lg border border-white py-2 text-center transition hover:bg-white hover:text-black"
              >
                S&apos;inscrire
              </Link>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export function NavActions({ isRight }: { isRight: boolean }) {
  return (
    <div className="flex w-full max-w-[490px] items-center justify-end gap-5 ps-0 *:w-full sm:justify-between sm:ps-10">
      <div className="relative flex h-auto !w-5 max-w-[240px] items-center justify-start rounded-3xl sm:h-8 sm:!w-full">
        <input
          type="text"
          className="absolute inset-0 hidden rounded-3xl border border-yellow-500 bg-white/10 ps-8 sm:block"
        />
        <div
          className={cn(
            navigationMenuTriggerStyle({ icon: true }),
            'relative left-1'
          )}
        >
          <Search className="h-5 w-5" />
        </div>
      </div>

      <NavigationMenu isRight={!isRight}>
        <NavigationMenuList className="rtl:flex-row-reverse">
          <LocalSwitcher />
          <UserMenu />
          <NavMobile isRight={isRight} />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
