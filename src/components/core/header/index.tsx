import Nav from '@/components/core/header/nav/index';
import FloatNav from '@/components/core/header/FloatNav';

const Header = ({ locale }: { locale: string }) => {
  return (
    <header className="sticky top-0 z-50 -my-px h-px bg-red-500/0 p-px">
      <Nav isRight={locale === 'ar'} />
      <div className="hidden sm:block">
        <FloatNav />
      </div>
    </header>
  );
};

export default Header;
