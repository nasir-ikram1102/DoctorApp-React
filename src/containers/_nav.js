const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: ''
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Cases',
    route: '/cases',
    icon: '',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '- Add Case',
        to: '/cases',
        icon: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '- This Week',
        to: '/cases/this-week-cases',
        icon: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '- Older Cases',
        to: '/cases/older-cases',
        icon: '',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Practices',
    route: '/practices',
    icon: '',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '- Add Practice',
        to: '/practice',
        icon: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '- Practice List',
        to: '/practice/list-practice',
        icon: '',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Practices Staff',
    route: '/practices-staff',
    icon: '',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: '- Add Practice Staff',
        to: '/practice-staff',
        icon: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: '- Practice Staff List',
        to: '/practice-staff/list-practice',
        icon: '',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Notifications',
    to: '/notifications',
    icon: '',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Logout',
    to: '/Logout',
    icon: '',
  }
]

export default _nav
