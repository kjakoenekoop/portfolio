import { Card } from "@/components"
import Content from "./content.mdx"

export const CurrentlyWatching = () => {
    return (
        <Card title="Currently Watching" columns="col-span-2 sm:col-span-4 lg:col-span-3" rows="row-span-2"
            order="order-9 lg:order-7"
        >
            <div className="flex h-full justify-center items-center [&_p]:flex [&>_p]:justify-center [&_img]:rounded [&_*]:h-full  [&_img]:object-contain">
                <Content />
            </div>
        </Card>
    )
}
