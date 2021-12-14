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
            label: 'Technologies',
            subLabel: 'Language or something.',
            href: '/technologies',
          }
        ]
      },
      {
        label: 'Movie Clips',
        href: '/movie-clip?type=all_clips',
        children: [
          {
            label: 'Action Movies',
            // subLabel: 'Action movies',
            href: '/movie-clip?type=action',
          },
          {
            label: 'Comedy Movies',
            // subLabel: 'Comedy movies',
            href: '/movie-clip?type=comedy',
          },
          {
            label: 'Anime Movies',
            // subLabel: 'Anime movies',
            href: '/movie-clip?type=anime',
          },
        ],
      },
];

export default NAV_ITEMS;