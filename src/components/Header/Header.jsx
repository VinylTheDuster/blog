import Nav from "./Nav"

export default function Header() {
  return (
    <header>
        <div className="flex justify-between bg-(--container-color) p-3 pl-8">
          <div>
            <h1 className="leading-10">My Devlog</h1>
            <span className="pl-1">Le journal de bord d'un développeur web.</span>
          </div>
          <Nav />
        </div>
    </header>
  )
}