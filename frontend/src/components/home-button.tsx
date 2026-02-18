import { Button } from "@/components/ui/button"
import { House } from "lucide-react"
import Link from "next/link";

export function HomeButton() {
    return (
        <Link href="/">
            <Button size="icon" className="w-8 h-8 rounded-lg">
                <House/>
            </Button>
        </Link>
    )
}
