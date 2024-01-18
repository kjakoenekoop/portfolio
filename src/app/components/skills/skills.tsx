import { Card } from "@/components/card";

export const Skills = async () => {
    const { data } = await import("@/../data/skills.json")
    return (
        <Card title="Competencies" rows="row-span-2" columns="col-span-2" order="order-2">
            <div className="space-y-6">
                {data.map(({ id, title, items }) => (
                    <div key={id}>
                        <span className="text-zinc-200 block font-medium mb-2">{title}</span>
                        <ul className="pl-4">
                            {items.map(item => <li key={item} className="text-zinc-400 leading-8">{item}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </Card>
    )
} 
