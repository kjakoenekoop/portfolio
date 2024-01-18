import { Articles, Contact, Credentials, Location, Portfolio, Skills, Works, About, CurrentlyWatching, Status } from "./components"


export default async function Home() {

    return (
        <main className="min-h-screen max-w-7xl mx-auto px-4 gap-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 grid-rows-[auto] pb-10 auto-rows-[10rem]">
            <section className="col-span-2 sm:col-span-4 lg:col-span-6 flex flex-col gap-6 sm:flex-row justify-between sm:items-center pt-6 pb-4">
                <h1 className="text-4xl md:text-6xl font-bold text-brand-gold shrink-0">KJA Koenekoop</h1>
                <span className="text-zinc-400">A lot of things aren&apos;t working yet, it&apos;s a work in progress, I&apos;ve only worked a few hours on it.</span>
            </section>
            <About />
            <Portfolio />
            <Skills />
            <Works />
            <Articles />
            <Credentials />
            <Contact />
            <Location />
            <Status />
            <CurrentlyWatching />
        </main >
    )
}
