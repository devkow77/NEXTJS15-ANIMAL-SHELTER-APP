const pathColors: Record<string, string> = {
  "/": "dark:hover:text-green-400 hover:text-green-600",
  "/about": "dark:hover:text-pink-400 hover:text-pink-600",
  "/contact": "dark:hover:text-purple-400 hover:text-purple-600",
};

const colorLinks = (pathname: string) => {
  if (pathColors[pathname]) return pathColors[pathname];

  if (
    pathname.startsWith("/blog/post/") ||
    pathname.startsWith("/blog/page/")
  ) {
    return "dark:hover:text-blue-400 hover:text-blue-600";
  }

  return "";
};

export { colorLinks };
