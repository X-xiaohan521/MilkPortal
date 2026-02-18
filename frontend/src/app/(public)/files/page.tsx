import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Files"
}

export default function Files() {
    return(
        <main className="flex-1 p-4">
            <iframe
                src="https://file.r2pjv98og.nyat.app:17742/?theme=light"
                className="w-full h-[80vh] rounded-lg border"
                title="Alist"
            />
        </main>
    )
}