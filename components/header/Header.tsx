import { authOptions } from "@/auth";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./HeaderLogo";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";
import CreateChatButton from "./CreateChatButton";

async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto ">
        {/* Logo */}
        <Logo />
        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* Session &&(... ) */}
          {session && (
            <>
              <Link href={"/chat"} prefetch={false}>
                <MessagesSquareIcon className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          )}

          {/* DarkMode Toggle */}
          <DarkModeToggle />

          {/* User Button */}
          <UserButton session={session} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
