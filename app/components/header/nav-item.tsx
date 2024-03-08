import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

type NavItemProps = {
  href: string;
  label: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = pathname === href;

  function handleHome() {
    if (pathname === "/") {
      router.push("/");
    }
    if (pathname === "/projects") {
      router.push("/projects");
    }
  }

  return (
    <Link
      href={href}
      onClick={handleHome}
      className={cn(
        "text-gray-400 flex items-center gap-2 font-medium font-mono",
        isActive && "text-gray-50"
      )}
    >
      <span className="text-emerald-400">#</span>
      {label}
    </Link>
  );
};
