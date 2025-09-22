interface NavLink {
  name: string;
  href: string;
}

const links: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Who are we?",
    href: "/about",
  },
  {
    name: "Animals",
    href: "/animals",
  },
  {
    name: "Blog",
    href: "/blog/page/1",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export { links };
export type { NavLink };
