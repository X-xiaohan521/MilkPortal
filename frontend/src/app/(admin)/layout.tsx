import "../globals.css"
import { AdminSidebar } from "@/app/(admin)/admin-sidebar"
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className="flex">
                    <AdminSidebar/>
                    <div className="flex-1">

                    </div>
                </div>
            </body>
        </html>
    )
}
