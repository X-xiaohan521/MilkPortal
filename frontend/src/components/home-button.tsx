import { Button } from "@/components/ui/button"
import { House } from "lucide-react"
import Link from "next/link";

export function HomeButton() {
    return (
        <Link href="/">
            <Button size="icon" className="rounded-lg">
                <House/>
            </Button>
        </Link>
    )
}
