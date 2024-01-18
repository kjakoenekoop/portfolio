import NextLink from "next/link"
import { ReactNode } from "react"

export type CardProps = {
    title: string,
    children: ReactNode | string,
    href?: string,
    columns: string,
    rows: string,
    order: string
}

export const Card = ({ title, children, href, columns, rows, order }: CardProps) => (
    <section className={`bg-zinc-900 shadow-xl hover:shadow-2xl transition-all hover:bg-[#1A1A1D] group rounded-2xl border border-brand-gold/20 max-h-full overflow-hidden flex flex-col ${columns} ${rows} ${order}`} >
        <header className="px-4 py-3 after:content-[''] relative after:h-px after:absolute after:bottom-0 after:inset-x-4 after:bg-brand-gold/20">
            {href ?
                <NextLink href={href} className="flex justify-between items-center">
                    <h1 className="text-zinc-100 font-bold text-lg uppercase">{title}</h1>
                    <span>
                        <svg viewBox="0 0 16 16" className="h-4 w-4 fill-none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.9999 2.5C13.9999 2.36739 13.9472 2.24021 13.8535 2.14645C13.7597 2.05268 13.6325 2 13.4999 2H7.4999C7.36729 2 7.24011 2.05268 7.14635 2.14645C7.05258 2.24021 6.9999 2.36739 6.9999 2.5C6.9999 2.63261 7.05258 2.75979 7.14635 2.85355C7.24011 2.94732 7.36729 3 7.4999 3H12.2929L2.1459 13.146C2.09941 13.1925 2.06254 13.2477 2.03738 13.3084C2.01222 13.3692 1.99927 13.4343 1.99927 13.5C1.99927 13.5657 2.01222 13.6308 2.03738 13.6916C2.06254 13.7523 2.09941 13.8075 2.1459 13.854C2.19239 13.9005 2.24758 13.9374 2.30832 13.9625C2.36906 13.9877 2.43416 14.0006 2.4999 14.0006C2.56564 14.0006 2.63074 13.9877 2.69148 13.9625C2.75222 13.9374 2.80741 13.9005 2.8539 13.854L12.9999 3.707V8.5C12.9999 8.63261 13.0526 8.75979 13.1463 8.85355C13.2401 8.94732 13.3673 9 13.4999 9C13.6325 9 13.7597 8.94732 13.8535 8.85355C13.9472 8.75979 13.9999 8.63261 13.9999 8.5V2.5Z"
                                className="fill-brand-gold"
                            />
                        </svg>
                    </span>
                </NextLink>
                :
                <h1 className="text-zinc-100 font-bold text-lg uppercase">{title}</h1>
            }
        </header>
        <div className="relative px-4 overflow-hidden">
            <div className="h-full overflow-y-auto py-6 [mask-image:linear-gradient(to_bottom,transparent,black_1.5rem,black_calc(100%-1.5rem),transparent)]">
                {children}
            </div>
        </div>

    </section >
)
