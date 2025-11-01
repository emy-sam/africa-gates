const asphalts = {
  title: 'asphalts',
  items: [
    {
      title: 'batch_stationary',
      image: '/articles/batch-stationary.webp',
      href: '/products/batch-stationary',
    },
    {
      title: 'batch_mobile',
      image: '/articles/batch-mobile.webp',
      href: '/products/batch-mobile',
    },
    {
      title: 'continuous_stationary',
      image: '/articles/continuous-stationary.webp',
      href: '/products/continuous-stationary',
    },
    {
      title: 'continuous_mobile',
      image: '/articles/continuous-mobile.webp',
      href: '/products/continuous-mobile',
    },
    {
      title: 'core_components',
      image: '/articles/core-components.webp',
      href: '/products/core-components',
    },
    {
      title: 'complementary_products',
      image: '/articles/complementary-products.webp',
      href: '/products/complementary-products',
    },
  ],
};

const concretes = {
  title: 'concretes',
  items: [
    {
      title: 'concrete_mixing_plants',
      image: '/articles/concrete_mixing-plants.webp',
      href: '/products/concrete_mixing-plants',
    },
    {
      title: 'concrete_mixers',
      image: '/articles/concrete-mixers.webp',
      href: '/products/concrete-mixers',
    },
    {
      title: 'linear_storage_bins',
      image: '/articles/linear-storage-bins.webp',
      href: '/products/linear-storage-bins',
    },
    {
      title: 'radial_scrapers',
      image: '/articles/radial-scrapers.webp',
      href: '/products/radial-scrapers',
    },
  ],
};

export const articles = [
  {
    category: 'plants',
    title: 'Plants',
    description: 'description',
    image: '/articles/hero.webp',
    sections: [asphalts, concretes],
  },
  {
    category: 'asphalts',
    title: 'Asphalt Plants',
    description: 'description',
    image: '/articles/hero.webp',
    sections: [asphalts],
  },
  {
    category: 'concretes',
    title: 'Concrete Plants',
    description: 'description',
    image: '/articles/hero.webp',
    sections: [concretes],
  },
];
