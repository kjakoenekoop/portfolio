import { Card } from "@/components";
import Content from "./content.mdx"

export const About = () => {

    return (
        <Card title="Profile" columns="col-span-2 lg:col-span-4" rows="row-span-3" order="order-0">
            <div className="max-w-prose w-full text-zinc-400 space-y-5 [&_img]:max-w-80 [&_img]:aspect-[8/5] [&_img]:object-cover [&_img]:border [&_img]:w-full [&_img]:border-brand-gold/20 [&_img]:rounded">
                <Content />
            </div>
        </Card>
    )
}
