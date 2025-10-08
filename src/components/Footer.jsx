import { Link } from "react-router";

export default function Footer() {

    const date = new Date().getFullYear();

  return (
    <footer className="flex flex-col bg-[#242425] mt-10 items-center">
        <span className="not-italic text-lg mt-10">@{date} All right reserved. Blog by William Salembien.</span>
        <Link to="/admin" className="my-3 text-[#414143]">Admin Panel</Link>
    </footer>
  )
}