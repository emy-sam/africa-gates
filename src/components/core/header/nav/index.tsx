'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NavMenu } from './nav-menu';
import { NavActions } from './nav-actions';

export default function Nav({ isRight }: { isRight: boolean }) {
  return (
    <header className="px-10">
      <div className="container mx-auto">
        <div className="relative z-50 mt-6 flex w-full max-w-screen-2xl justify-between rounded-full border-0 border-white/80 bg-black bg-opacity-80 px-8 py-3 pe-3 ps-6 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200">
          {/* 🖼️ Logo */}
          <Link
            href="/"
            className="flex shrink-0 justify-center md:justify-start"
          >
            <Image src="/logo.png" alt="Logo" width={50} height={30} />
          </Link>
          <div className="hidden w-full justify-start lg:flex">
            <NavMenu isRight={isRight} />
          </div>
          <div className="flex w-full justify-end">
            <NavActions isRight={isRight} />
          </div>
        </div>
      </div>
    </header>
  );
}
