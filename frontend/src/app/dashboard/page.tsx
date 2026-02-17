import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function DashboardPage() {
    return (
        <main className="h-screen flex">
            <SidebarProvider>
                <AppSidebar />
                    <SidebarTrigger />
            </SidebarProvider>
        </main>
    )
}
