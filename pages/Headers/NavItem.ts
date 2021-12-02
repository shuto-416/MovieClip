interface NavItem{
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'About this page',
        href: '#',
        children: [
          {
            label: 'Technolories',
            subLabel: 'Language or something.',
            href: '#',
          }
        ]
      },
      {
        label: 'Movie Clips',
        href: '#',
        children: [
          {
            label: 'Action Movies',
            // subLabel: 'Action movies',
            href: '#',
          },
          {
            label: 'Comedy Movies',
            // subLabel: 'Comedy movies',
            href: '#',
          },
          {
            label: 'Anime Movies',
            // subLabel: 'Anime movies',
            href: '#',
          },
        ],
      },
];

export default NAV_ITEMS;