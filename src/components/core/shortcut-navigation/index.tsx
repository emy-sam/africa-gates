'use client';
import Equipement from '@/components/core/shortcut-navigation/Equipement';
import Map from '@/components/core/shortcut-navigation/Map';
import Contact from '@/components/core/shortcut-navigation/Contact';
import { MapPin, MonitorSmartphone, PhoneCall, Store } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const NavItem = ({
  children,
  title,
  onClick,
}: {
  children: React.ReactNode;
  title: string;
  onClick: () => void;
}) => (
  <button
    className="group relative rounded-full bg-transparent p-2 transition-colors hover:bg-gray-600"
    onClick={onClick}
  >
    {children}
    <div className="pointer-events-none absolute top-1/2 w-max -translate-x-5 -translate-y-1/2 rounded-full bg-gray-600 px-4 py-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 ltr:right-full rtl:left-full rtl:translate-x-5">
      {title}
    </div>
  </button>
);

const ShortcutNavigation = ({ locale }: { locale: string }) => {
  const { t } = useTranslation();
  const mapRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const goToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="fixed end-10 top-1/2 z-50 flex -translate-y-1/2 flex-col justify-center gap-4 rounded-3xl bg-black bg-opacity-90 px-1 py-4 text-white shadow-md">
        <NavItem title={t('shortcut.find')} onClick={() => goToSection(mapRef)}>
          <MapPin />
        </NavItem>
        <NavItem title={t('shortcut.spares')} onClick={() => {}}>
          <Link href={`/${locale}/spares`}>
            <Store />
          </Link>
        </NavItem>
        <NavItem title={t('shortcut.whats')} onClick={() => {}}>
          <a href="https://wa.me/1234567890" target="_blank">
            <PhoneCall />
          </a>
        </NavItem>
        <NavItem
          title={t('shortcut.contact')}
          onClick={() => goToSection(contactRef)}
        >
          <MonitorSmartphone />
        </NavItem>
      </div>
      <div ref={mapRef}>
        <Map />
      </div>
      <Equipement locale={locale} />
      <div ref={contactRef} className="scroll-mt-20">
        <Contact locale={locale} />
      </div>
    </div>
  );
};

export default ShortcutNavigation;
