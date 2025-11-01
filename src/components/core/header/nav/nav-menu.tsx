'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useLocale } from '@/hooks/use-locale';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
// const t = (s: string) => s;
// const getLocalizedLink = (s: string) => s;
// const isTheCurrentPath = (s: string) => !!s;

export function NavMenu({ isRight }: { isRight: boolean }) {
  const { getLocalizedLink, isTheCurrentPath } = useLocale();
  const { t } = useTranslation();
  return (
    <NavigationMenu isRight={isRight}>
      <NavigationMenuList className="rtl:flex-row-reverse">
        <NavigationMenuItem>
          <NavigationMenuTrigger
            active={
              isTheCurrentPath('/articles/asphalts') ||
              isTheCurrentPath('/articles/concretes')
            }
          >
            {t(`header.nav.menu.product.title`)}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
              {[
                {
                  name: 'posts',
                  icon: '🏗️',
                  href: '/articles/asphalts',
                },
                {
                  name: 'centrals',
                  icon: '🏢',
                  href: '/articles/concretes',
                },
              ].map((item, index) => (
                <li key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={getLocalizedLink(item.href)}
                      className="flex h-full w-full select-none flex-col justify-end rounded-md from-black to-yellow-500/10 p-6 text-white no-underline outline-none hover:bg-gradient-to-t hover:text-yellow-500 focus:shadow-md"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 mt-4 text-center text-3xl font-medium">
                        {item.icon}
                      </div>
                      <p className="text-center text-sm leading-tight">
                        {t(`header.nav.menu.product.${item.name}`)}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle({
              active: isTheCurrentPath('/about'),
            })}
          >
            <Link href={getLocalizedLink('/about')}>
              {t('header.nav.menu.about')}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle({
              active: isTheCurrentPath('/career'),
            })}
          >
            <Link href={getLocalizedLink('/career')}>
              {t('header.nav.menu.career')}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle({
              active: isTheCurrentPath('/development'),
            })}
          >
            <Link href={getLocalizedLink('/development')}>
              {t('header.nav.menu.development')}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
