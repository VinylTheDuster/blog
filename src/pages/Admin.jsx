import { useState } from "react"

export default function Admin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fruit, setFruit] = useState("");

    function usernameEvent(e) {
        setUsername(e.target.value);
    }

    function passwordEvent(e) {
        setPassword(e.target.value);
    }

    function fruitEvent(e) {
        setFruit(e.target.value);
    }

    function handleSubmit() {
        if(() => /^[A-Za-z]+$/.test(username)) {

        } else {
            alert("Caractères incorrectes détectées.");
        }
    }

  return (
    <main className="mx-10 sm:mx-15 md:mx-35 xl:mx-100 2xl:mx-140">
        <div className="mx-auto flex flex-col my-6 text-lg bg-(--container-color) px-10 py-5 rounded-md">
            <form className="flex flex-col justify-center gap-2" onSubmit={handleSubmit}>
                <h2>Connexion à l'Interface d'Administration</h2>

                <div className="flex flex-col gap-2">
                    <label htmlFor="user">Nom d'utilisateur :</label>
                    <input type="text" id="user" className="self-start w-auto bg-zinc-400 focus:bg-zinc-300 p-2 border border-zinc-300 px-3 py-2 text-zinc-800 text-shadow-2xs transition-all focus-visible:outline-none focus-visible:border-[var(--color-text-header)] focus-visible:ring-2 focus-visible:ring-[var(--color-text-header)] focus-visible:ring-opacity-30 rounded-2xl" size="30" value={username} onChange={(e) => usernameEvent(e)} />
                </div>

                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="psw">Mot de passe :</label>
                    <input type="password" id="psw" className="self-start w-auto bg-zinc-400 focus:bg-zinc-300 p-2 border border-zinc-300 px-3 py-2 text-zinc-800 text-shadow-2xs transition-all focus-visible:outline-none focus-visible:border-[var(--color-text-header)] focus-visible:ring-2 focus-visible:ring-[var(--color-text-header)] focus-visible:ring-opacity-30 rounded-2xl" size="30" value={password} onChange={(e) => passwordEvent(e)} />
                </div>

                <fieldset className="grid grid-cols-2 border-4 rounded-2xl px-6 pb-4 border-zinc-900">
                    <legend className="mb-4 px-1">Mon fruit préféré est :</legend>

                    <div className="flex gap-3">
                        <input type="radio" id="orange" name="fruit" value="orange" checked={fruit === "orange"} onChange={(e) => fruitEvent(e)} />
                        <label htmlFor="orange">L'orange</label>
                    </div>

                    <div className="flex gap-3">
                        <input type="radio" id="banane" name="fruit" value="banane" checked={fruit === "banane"} onChange={(e) => fruitEvent(e)} />
                        <label htmlFor="banane">La banane</label>
                    </div>

                    <div className="flex gap-3">
                        <input type="radio" id="mangue" name="fruit" value="mangue" checked={fruit === "mangue"} onChange={(e) => fruitEvent(e)} />
                        <label htmlFor="mangue">La mangue</label>
                    </div>

                    <div className="flex gap-3">
                        <input type="radio" id="abricot" name="fruit" value="abricot" checked={fruit === "abricot"} onChange={(e) => fruitEvent(e)} />
                        <label htmlFor="abricot">L'abricot</label>
                    </div>

                    <div className="flex gap-3">
                        <input type="radio" id="tomate" name="fruit" value="tomate" checked={fruit === "tomate"} onChange={(e) => fruitEvent(e)} />
                        <label htmlFor="tomate">La tomate</label>
                    </div>

                    <div className="flex gap-3">
                        <input type="radio" id="pomme" name="fruit" value="pomme" checked={fruit === "pomme"} onChange={(e) => fruitEvent(e)} />
                        <label htmlFor="pomme">La pomme</label>
                    </div>

                    {!fruit && <p className="text-red-700">Vous devez sélectionner un fruit.</p>}
                </fieldset>

                <button type="submit" className="self-end mt-10 mb-5 bg-[#1d1d1d] py-2 px-6 rounded-md hover:bg-zinc-900 cursor-pointer select-none">Connexion</button>
            </form>
        </div>
    </main>
  )
}