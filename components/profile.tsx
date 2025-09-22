"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOutAccount, signInByGithub, signInByGoogle } from "@/lib/auth";
import Link from "next/link";

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface ProfileProps {
  session: any;
}

const Profile = ({ session }: ProfileProps) => {
  const user: User = {
    name: session?.user?.name || "Guest",
    email: session?.user?.email || "login or create account",
    avatar: session?.user?.image || "/not-logged.png",
  };

  const trigger = (
    <DropdownMenuTrigger asChild>
      <div className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 transition hover:bg-white/10">
        <div className="hidden flex-col text-right text-sm text-black md:flex dark:text-white">
          <span className="leading-none font-medium">{user.name}</span>
          <span className="text-xs text-black/70 dark:text-white/70">
            {user.email}
          </span>
        </div>
        <Avatar className="h-10 w-10">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      </div>
    </DropdownMenuTrigger>
  );

  return (
    <DropdownMenu>
      {trigger}
      {session ? (
        <DropdownMenuContent
          align="end"
          className="bg-popover w-48 cursor-pointer rounded-xl border border-white/10 p-2 shadow-lg backdrop-blur-md"
        >
          <DropdownMenuLabel>My account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer font-semibold text-red-600"
            onClick={() => signOutAccount()}
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent
          align="end"
          className="bg-popover w-48 rounded-xl border border-white/10 p-2 shadow-lg backdrop-blur-md"
        >
          <DropdownMenuItem
            className="cursor-pointer font-semibold"
            onClick={() => signInByGithub()}
          >
            Sign In by GitHub
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer font-semibold"
            onClick={() => signInByGoogle()}
          >
            Sign In by Google
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default Profile;
