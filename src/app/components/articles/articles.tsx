import { data } from "./data.json"
import NextLink from "next/link"
import NextImage from "next/image"
import { Card } from "@/components"
export const Articles = () => {

    return (
        <Card title="insights" href="/insights" columns="col-span-2" rows="row-span-3" order="order-4 lg:order-5">
            <ul className="pr-6">
                {data.map(({ id, slug, title, description, image }) => (
                    <li key={id}>
                        <article>
                            <div className="w-40 aspect-[8/5] relative mb-2">
                                <NextImage src={image} fill={true} className="object-cover bg-zinc-800 rounded" alt={slug} />
                            </div>
                            <header className="mb-1 text-zinc-200 font-medium">
                                <h1>{title}</h1>
                            </header>
                            <p className="mb-4 text-zinc-400">{description}</p>
                            <NextLink
                                href={`/insights/${slug}`}
                                className="text-brand-gold text-sm font-medium flex gap-x-0.5 items-center"
                            >
                                Read More
                                <svg
                                    className="h-5 w-5 fill-none"
                                    viewBox="0 0 20 21"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.5 7L14.5 10.5M14.5 10.5L11.5 14M14.5 10.5H5.5"
                                        className="stroke-current"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </NextLink>
                        </article>
                    </li>
                ))}
            </ul>
        </Card>
    )
}
