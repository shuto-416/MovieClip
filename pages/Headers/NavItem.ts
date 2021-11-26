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
      },
      {
        label: 'All Clips',
        href: '#',
        // children: [
        //   {
        //     label: 'Job Board',
        //     subLabel: 'Find your dream design job',
        //     href: '#',
        //   },
        //   {
        //     label: 'Freelance Projects',
        //     subLabel: 'An exclusive list for contract work',
        //     href: '#',
        //   },
        // ],
      },
];

export default NAV_ITEMS;