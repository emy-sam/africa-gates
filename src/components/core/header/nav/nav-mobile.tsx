'use client';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useLocale } from '@/hooks/use-locale';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// const isPathName = (current: string, path: string) => {
//   const pathWithoutLocale = current.replace(/^\/[^/]+(?:\/|$)/, '/');

//   return pathWithoutLocale === path;
// };

const NavMobile = ({ isRight }: { isRight: boolean }) => {
  const { getLocalizedLink, isTheCurrentPath } = useLocale();
  const { t } = useTranslation();
  return (
    <NavigationMenuItem className="lg:hidden">
      <Drawer direction={isRight ? 'left' : 'right'}>
        <DrawerTrigger asChild>
          <div className={navigationMenuTriggerStyle({ icon: true })}>
            <Menu className="h-5 w-5 cursor-pointer" />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <DrawerClose
                className={navigationMenuTriggerStyle({ icon: true })}
              >
                <X className="h-5 w-5 cursor-pointer" />
              </DrawerClose>
            </DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col">
            <div className="px-4">
              <div className="text-yellow-400">
                {' '}
                {t(`header.nav.menu.product.title`)}
              </div>
              <div className="flex flex-col">
                <Link href={getLocalizedLink('/articles/asphalts')}>
                  <DrawerClose
                    className={navigationMenuTriggerStyle({
                      active: isTheCurrentPath('/articles/asphalts'),
                    })}
                  >
                    {t(`header.nav.menu.product.posts`)}
                  </DrawerClose>
                </Link>
                <Link href={getLocalizedLink('/articles/concretes')}>
                  <DrawerClose
                    className={navigationMenuTriggerStyle({
                      active: isTheCurrentPath('/articles/concretes'),
                    })}
                  >
                    {t(`header.nav.menu.product.centrals`)}
                  </DrawerClose>
                </Link>
              </div>
            </div>
            <Link href={getLocalizedLink('/about')}>
              <DrawerClose
                className={navigationMenuTriggerStyle({
                  active: isTheCurrentPath('/about'),
                })}
              >
                {t('header.nav.menu.about')}
              </DrawerClose>
            </Link>
            <Link href={getLocalizedLink('/career')}>
              <DrawerClose
                className={navigationMenuTriggerStyle({
                  active: isTheCurrentPath('/career'),
                })}
              >
                {t('header.nav.menu.career')}
              </DrawerClose>
            </Link>
            <Link href={getLocalizedLink('/development')}>
              <DrawerClose
                className={navigationMenuTriggerStyle({
                  active: isTheCurrentPath('/development'),
                })}
              >
                {t('header.nav.menu.development')}
              </DrawerClose>
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </NavigationMenuItem>
  );
};

export default NavMobile;
