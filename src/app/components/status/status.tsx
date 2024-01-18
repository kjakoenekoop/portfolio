import { Card } from "@/components"
import Content from "./content.mdx"

export const Status = () => {
    return (
        <Card title="Status" columns="col-span-1" rows="row-span-1" order="order-8 lg:order-9">
            <div className="text-zinc-400 text-sm max-h-full">
                <Content />
            </div>
        </Card>
    )
}
