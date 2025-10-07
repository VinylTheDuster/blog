import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="h-screen flex">
        <div className="flex flex-col items-center m-auto">
            <h1 className="text-9xl">404</h1>
            <h2>Not Found !</h2>
            <p className="my-5">La page que vous cherchez n'existe pas / plus !</p>
            <Link to="/"><button className="bg-(--container-color) p-2 px-5 rounded-2xl hover:bg-zinc-900 cursor-pointer select-none">Retourner à l'Accueil</button></ Link>
        </div>
    </main>
  )
}
