import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col items-center p-6 bg-gray-50">
        {/* Message toast */}
        <Link href="/">
          <div
              className="absolute top-20 right-6 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:scale-105 transition-transform">

            <img className="size-12 shrink-0" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lc3NhZ2UtY2lyY2xlLXdhcm5pbmctaWNvbiBsdWNpZGUtbWVzc2FnZS1jaXJjbGUtd2FybmluZyI+PHBhdGggZD0iTTIuOTkyIDE2LjM0MmEyIDIgMCAwIDEgLjA5NCAxLjE2N2wtMS4wNjUgMy4yOWExIDEgMCAwIDAgMS4yMzYgMS4xNjhsMy40MTMtLjk5OGEyIDIgMCAwIDEgMS4wOTkuMDkyIDEwIDEwIDAgMSAwLTQuNzc3LTQuNzE5Ii8+PHBhdGggZD0iTTEyIDh2NCIvPjxwYXRoIGQ9Ik0xMiAxNmguMDEiLz48L3N2Zz4=" alt="ChitChat Logo"/>
            <div>
              <div className="text-xl font-medium text-black dark:text-white">Message</div>
              <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
            </div>
          </div>
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">My Personal Portal</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {/* Jellyfin */}
          <Card className="min-w-80 shadow-xl hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">🎬 Jellyfin</h2>
              <p className="text-gray-600 mb-4">
                Your personal media library
              </p>
              <Button asChild>
                <a href="https://media.r2pjv98og.nyat.app:55369/" target="_blank">Open Jellyfin</a>
              </Button>
            </CardContent>
          </Card>

          {/* alist */}
          <Card className="min-w-80 shadow-xl hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">📂 AList</h2>
              <p className="text-gray-600 mb-4">
                File management system
              </p>
              <Button asChild>
                <a href="https://file.r2pjv98og.nyat.app:17742/" target="_blank">Open AList</a>
              </Button>
            </CardContent>
          </Card>

          {/* HomeAssistant */}
          <Card className="min-w-80 shadow-xl hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">🏠 HomeAssistant</h2>
              <p className="text-gray-600 mb-4">
                Smart home system
              </p>
              <Button asChild>
                <a href="" target="_blank">Open HomeAssistant</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
  )
}
