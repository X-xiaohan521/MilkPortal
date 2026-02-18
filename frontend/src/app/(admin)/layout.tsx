import "../globals.css"
import { AdminSidebar } from "@/app/(admin)/admin-sidebar"
import { ReactNode } from "react";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {SiteHeader} from "@/app/(admin)/site-header";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: {
        default: "Admin Panel | Milk Portal",
        template: "%s | Milk Portal",
    },
    description: 'Admin panel for personal services.',
}

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className="flex">
                    <SidebarProvider>
                        <AdminSidebar/>
                        <SidebarInset>
                            <SiteHeader />
                            <div className="flex flex-col">
                                { children }
                            </div>
                        </SidebarInset>
                    </SidebarProvider>
                </div>
            </body>
        </html>
    )
}
