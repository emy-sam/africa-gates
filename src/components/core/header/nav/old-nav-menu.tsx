import { useState } from 'react';

const OldNavMenu = () => {
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverSubmenu, setHoverSubmenu] = useState(false);
  const showSubmenu = hoverHome || hoverSubmenu;
  const closeSubmenu = () => {
    setTimeout(() => {
      setHoverSubmenu(false);
    }, 500);
  };
  const closeHoverHome = () => {
    setTimeout(() => {
      setHoverHome(false);
    }, 500);
  };
  return (
    <>
      <div className="mx-6 mt-2 h-full w-full">
        <ul className="flex h-full w-full gap-10">
          <li className="color-red cursor-pointer hover:scale-105 hover:text-yellow-500">
            <div
              onMouseEnter={() => setHoverHome(true)}
              onMouseLeave={closeHoverHome}
            >
              <span>Produit</span>
            </div>
          </li>
          <li className="color-redhover:text-#FFC300-500 cursor-pointer hover:scale-105">
            A propos de nous
          </li>
          <li className="color-redhover:text-#FFC300-500 cursor-pointer hover:scale-105">
            Developpement durable
          </li>
        </ul>
        <div className="relative h-px p-1">
          {showSubmenu && (
            <div
              className="absolute left-0 z-50 mt-2 flex w-[600px] justify-around rounded-lg bg-black bg-opacity-80 p-4 text-white shadow-lg"
              onMouseEnter={() => setHoverSubmenu(true)}
              onMouseLeave={closeSubmenu}
            >
              {[
                { name: 'Postes d’enrobage', icon: '🏗️' },
                { name: 'Centrales à Béton', icon: '🏢' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-sm hover:text-red-500"
                >
                  <span className="text-3xl">{item.icon}</span>

                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OldNavMenu;
