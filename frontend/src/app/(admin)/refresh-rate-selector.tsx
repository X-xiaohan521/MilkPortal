import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function RefreshRateSelector() {
    return (
        <Select>
            <SelectTrigger className="w-full h-8 max-w-48">
                <SelectValue placeholder="Auto Refresh" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="font-normal text-gray-400">Refresh Rate</SelectLabel>
                    <SelectItem value="apple">1 second</SelectItem>
                    <SelectItem value="banana">10 seconds</SelectItem>
                    <SelectItem value="blueberry">30 seconds</SelectItem>
                    <SelectItem value="grapes">5 minutes</SelectItem>
                    <SelectItem value="pineapple">10 minutes</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
