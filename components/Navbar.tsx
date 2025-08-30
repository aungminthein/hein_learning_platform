import Link from "next/link";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex cursor-pointer items-center">
          <img src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <NavItems />
        <p>Sign In</p>
      </div>
    </nav>
  );
};

export default Navbar;
