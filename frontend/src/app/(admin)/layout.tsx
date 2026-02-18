import "../globals.css"
import { AdminSidebar } from "@/app/(admin)/admin-sidebar"
import { ReactNode } from "react";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {SiteHeader} from "@/app/(admin)/site-header";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className="flex">
                    <SidebarProvider>
                        <AdminSidebar/>
                        <SidebarInset>
                            <SiteHeader />
                            <div>
                                { children }
                            </div>
                        </SidebarInset>
                    </SidebarProvider>
                </div>
            </body>
        </html>
    )
}
