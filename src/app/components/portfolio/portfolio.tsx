import NextImage from "next/image"
import { Card } from "@/components"

export const Portfolio = async () => {
    const { data: projects } = await import("@/../data/projects.json")
    return (
        <Card title="Development Portfolio" columns="col-span-2" rows="row-span-3" order="order-1">
            {
                projects && projects.map(({ id, image, title, description, tech }) => (
                    <article key={id} className="sm:pr-6">
                        <div className="relative border border-brand-gold/20 rounded max-h-28 mb-2 aspect-[8/5] overflow-hidden">
                            <NextImage src={image || "/404.webp"} alt={title} fill={true} className="object-cover bg-zinc-800" />
                        </div>
                        <header>
                            <h1 className="text-zinc-200 font-medium mb-1">
                                {title}
                            </h1>
                        </header>
                        <p className="text-zinc-400 mb-4">{description}</p>
                        <ul className="flex gap-1 w-full flex-wrap">
                            {tech.map(t => (
                                <li key={t} className="bg-brand-red/10 border border-brand-red/20 rounded px-2 py-0.5 text-zinc-500 text-xs font-medium">{t}</li>
                            ))}
                        </ul>
                    </article>
                ))
            }
        </Card>
    )
}
