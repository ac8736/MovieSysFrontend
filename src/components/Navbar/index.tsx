import Logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0">
      <div className="flex justify-between items-center border-b border-black w-3/5 m-auto">
        <img src={Logo} width="15%" alt="logo" />
        <ul className="flex align-center items-center grow max-w-md justify-around">
          <li className="text-xl">Home</li>
          <li className="text-xl">Watchlist</li>
          <li className="text-xl">Ratings</li>
          <li className="text-xl">Sign In</li>
        </ul>
      </div>
    </nav>
  );
}
