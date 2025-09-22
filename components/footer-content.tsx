"use client";

import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";
import { colorLinks } from "@/lib/color";
import { usePathname } from "next/navigation";
import { NavLink, links } from "@/data/navlinks";

const FooterContent = () => {
  const pathname = usePathname();

  return (
    <section className="border-t border-neutral-300 py-12 dark:border-neutral-700">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <section className="space-y-6">
          <h2 className="font-semibold">Ani🐈al 🐍helter</h2>
          <p className="text-sm leading-6 md:text-base md:leading-8 dark:opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            dolores, alias nisi laudantium ipsa consequuntur cum vel dolor
            consequatur ratione!
          </p>
        </section>
        <section className="space-y-6 lg:mx-auto">
          <h2 className="font-semibold">Links</h2>
          <ul className="space-y-4">
            {links.map(({ name, href }: NavLink, index: number) => (
              <li
                key={index}
                className={`text-sm duration-200 ${colorLinks(pathname)} md:text-base`}
              >
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="items-end space-y-6 lg:flex lg:flex-col">
          <h2 className="font-semibold">Social Media</h2>
          <ul className="space-y-4">
            <li>
              <Link
                href="https://facebook.com"
                className="flex items-center gap-2"
                target="_blank"
              >
                <FaFacebookSquare className="text-2xl" />
                <p className="text-sm md:text-base">Facebook</p>
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                className="flex items-center gap-2"
                target="_blank"
              >
                <FaInstagram className="text-2xl" />
                <p className="text-sm md:text-base">Instagram</p>
              </Link>
            </li>
            <li>
              <Link
                href="https://tiktok.com"
                className="flex items-center gap-2"
                target="_blank"
              >
                <FaTiktok className="text-2xl" />
                <p className="text-sm md:text-base">Tiktok</p>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default FooterContent;
