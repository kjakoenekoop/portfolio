import Content from "./content.mdx"
import { Card } from "@/components"

export const Credentials = () => (
    <Card title="Credentials & Education" columns="col-span-2" rows="row-span-2" order="order-5 lg:order-4">
        <div className="[&_li>p]:text-zinc-200 [&_li>p]:font-medium [&_ul]:space-y-6 text-zinc-500">
            <Content />
        </div>
    </Card>
)
