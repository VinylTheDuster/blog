export default function Home() {
  return (
    <main className="mx-10 sm:mx-15 md:mx-25 lg:mx-50 xl:mx-100">
        <section>
            <div className="flex flex-col gap-5 my-10">
                <h1>Bievenue sur mon blog !</h1>
                <span className="text-xl">Je suis <strong>William Salembien</strong>, développeur web <strong>autodidact</strong> en voie de formation. Vous trouverez sur mon blog tout les articles concernant mes créations liées aux développement web. Il s'agit plus précisément d'un <strong>journal de bord</strong> où j'y inclus principalement mes accomplissements et mes projets en cours.</span>
            </div>
        </section>
        <section>
            <div className="bg-(--container-color) rounded-md">
                <h2 className="p-5">Derniers Posts</h2>
                
            </div>
        </section>
    </main>
  )
}
