export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Editor Picks",
        href: "#",
        imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Best Sellers",
        href: "#",
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
    ],
  },

  {
    label: "Icons",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Editor Picks",
        href: "#",
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Bestselling Icons",
        href: "#",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Typhoon Icons",
    category: "icons",
    price: 30,
    description: "The best product ever",

    urls: [
      { id: 1, url: "/nav/ui-kits/blue.jpg" },
      { id: 1, url: "/nav/icons/bestsellers.jpg" },
      { id: 1, url: "/nav/icons/new.jpg" },
    ],
  },
  {
    id: 2,
    name: "Moonlight UI",
    category: "icons",
    price: 30,
    description: "The best product ever",
    urls: [
      { id: 1, url: "/nav/icons/picks.jpg" },
      { id: 1, url: "/nav/icons/picks.jpg" },
      { id: 1, url: "/nav/icons/picks.jpg" },
    ],
  },
  {
    id: 3,
    name: "Dawn Components",
    category: "icons",
    price: 30,
    description: "The best product ever",

    urls: [
      { id: 1, url: "/nav/icons/bestsellers.jpg" },
      { id: 1, url: "/nav/icons/picks.jpg" },
      { id: 1, url: "/nav/icons/picks.jpg" },
    ],
  },
];
