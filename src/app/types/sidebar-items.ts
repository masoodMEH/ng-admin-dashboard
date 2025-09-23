export interface SidebarItem {
  label: string;
  icon?: string;
  routerLink?: string;
  children?: SidebarItem[];
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: 'داشبورد',
    icon: 'matHomeOutline',
    routerLink: '/',
  },
  {
    label: 'محصولات',
    icon: 'matAddOutline',
    children: [
      { label: 'لیست محصولات', routerLink: '/products' },
      { label: 'اضافه کردن محصول', routerLink: '/add-product' },
    ],
  },
  {
    label: 'مدیریت',
    icon: 'matAdminPanelSettingsOutline',
    children: [
      { label: 'دسته بندی ها', routerLink: '/admin/categories' },
      // { label: 'کاربران', routerLink: '/settings/users' },
    ],
  },
];
