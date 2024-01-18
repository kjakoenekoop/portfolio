import { Card } from "@/components"
import Content from "./content.mdx"
export const Works = () => {
    return (
        <Card title="Professional Endeavors" columns="col-span-2" rows="row-span-3" order="order-3">
            <div className="space-y-12 sm:pr-6 [&_h1]:text-zinc-200 [&_h1]:font-medium [&_h1]:mb-2 [&_p]:mb-4 text-zinc-400">
                <Content />
            </div>
        </Card>
    )
}
