import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col items-center p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">My Personal Portal</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {/* Jellyfin */}
          <Card className="min-w-80 shadow-xl hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <h2 className="text-foreground text-xl font-semibold mb-2">🎬 Jellyfin</h2>
              <p className="text-secondary-foreground mb-4">
                Your personal media library
              </p>
              <Button variant="outline" asChild>
                <a href="https://media.r2pjv98og.nyat.app:55369/" target="_blank">Open Jellyfin</a>
              </Button>
            </CardContent>
          </Card>

          {/* alist */}
          <Card className="min-w-80 shadow-xl hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <h2 className="text-foreground text-xl font-semibold mb-2">📂 AList</h2>
              <p className="text-secondary-foreground mb-4">
                File management system
              </p>
              <Button variant="outline" asChild>
                <a href="https://file.r2pjv98og.nyat.app:17742/" target="_blank">Open AList</a>
              </Button>
            </CardContent>
          </Card>

          {/* HomeAssistant */}
          <Card className="min-w-80 shadow-xl hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <h2 className="text-foreground text-xl font-semibold mb-2">🏠 HomeAssistant</h2>
              <p className="text-secondary-foreground mb-4">
                Smart home system
              </p>
              <Button variant="outline" asChild>
                <a href="" target="_blank">Open HomeAssistant</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
  )
}
