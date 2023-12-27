"use client"

import { Button } from "@/components/ui/button";
import { MobileSidebar } from "../mobile-sidebar";
import { useRouter, usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
    const router = useRouter();
    const currentPage = usePathname();

    return (
        <div className="flex items-center p-4">
            <Button variant="ghost" size="icon" className="md:hidden">
                <MobileSidebar />
            </Button>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>            
        </div>
    )
}

export default Navbar;