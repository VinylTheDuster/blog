export default function Blog() {
  return (
    <main className="mx-10 sm:mx-15 md:mx-25 lg:mx-50 xl:mx-100">
        <div className="mx-auto flex flex-col my-6 text-lg bg-(--container-color) px-10 py-5 rounded-md">
            <div>
                <h1>Blog : Listes des articles</h1>
                <p>Trouver tout les articles rédiger sur le site.</p>
            </div>
            <div className="flex flex-row gap-5">
                <div className="relative">
                    <img className="absolute top-2.5 left-2" src="/images/logos/searchLogo.svg" alt="" />
                    <input className="pl-9 bg-zinc-400 focus:bg-zinc-300 p-2 border border-zinc-300 px-3 py-2 text-zinc-800 text-shadow-2xs transition-all focus-visible:outline-none focus-visible:border-[var(--color-text-header)] focus-visible:ring-2 focus-visible:ring-[var(--color-text-header)] focus-visible:ring-opacity-30 rounded-2xl" type="text" size="40" />
                </div>
                <select className="bg-zinc-400 px-3 rounded-2xl focus:bg-zinc-300 text-zinc-800 transition-all border border-zinc-300 focus:border-[var(--color-text-header)] focus:ring-2 focus:ring-[var(--color-text-header)]" name="" id="">
                    <option value="asc">Ascendant | Récent</option>
                    <option value="des">Déscendant | Ancien</option>
                </select>
                <select className="bg-zinc-400 px-3 rounded-2xl focus:bg-zinc-300 text-zinc-800 transition-all border border-zinc-300 focus:border-[var(--color-text-header)] focus:ring-2 focus:ring-[var(--color-text-header)]" name="" id="">
                    <option value="name">Triage par date</option>
                    <option value="date">Triage par nom</option>
                </select>
            </div>
            <div>

            </div>
        </div>
    </main>
  )
}