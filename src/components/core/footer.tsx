import Image from 'next/image';
import { Facebook, Youtube, Linkedin, Instagram } from 'lucide-react';
import { getFixedT } from 'i18next';

export default function Footer({ locale }: { locale: string }) {
  const t = getFixedT(locale, 'common');
  return (
    <footer className="bg-black p-10 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-3">
        {/* 🖼️ Logo */}
        <div className="flex justify-center md:justify-start">
          <Image src="/logo.png" alt="Logo" width={500} height={80} />
        </div>

        {/* 📞 Contactez-nous */}
        <div className="text-center md:text-start">
          <h3 className="mb-2 text-lg font-semibold">
            {t('footer.contactUs')}
          </h3>
          <p>{t('footer.email')} : contact@ammann.com</p>
          <p>{t('footer.phone')} : +216 99 999 999</p>
          <p>{t('footer.address')} : 123 Rue de l&apos;Industrie, Tunis</p>
        </div>

        {/* 📝 Description + Réseaux sociaux */}
        <div className="text-center md:text-end">
          <p className="mb-4">{t('footer.description')}</p>
          <div className="flex justify-center space-x-4 md:justify-end">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-6 w-6 hover:text-yellow-500" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6 hover:text-yellow-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 hover:text-yellow-600" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-6 w-6 hover:text-yellow-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
