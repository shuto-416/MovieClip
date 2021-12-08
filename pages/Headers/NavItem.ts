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
            href: '../Technologies/Technologies',
          }
        ]
      },
      {
        label: 'Movie Clips',
        href: '../MovieClip/MovieClip',
        children: [
          {
            label: 'Action Movies',
            // subLabel: 'Action movies',
            href: '/clips?type=action',
          },
          {
            label: 'Comedy Movies',
            // subLabel: 'Comedy movies',
            href: '/clips?type=comedy',
          },
          {
            label: 'Anime Movies',
            // subLabel: 'Anime movies',
            href: '/clips?type=anime',
          },
        ],
      },
];

export default NAV_ITEMS;