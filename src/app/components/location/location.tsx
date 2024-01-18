import { Card } from "@/components"
import Content from "./content.mdx"

export const Location = () => {
    return (
        <Card title="Location" columns="col-span-1" rows="row-span-1"
            order="order-7 lg:order-8"
        >
            <div className="text-zinc-400 text-sm max-h-full">
                <Content />
            </div>
        </Card>
    )
}

