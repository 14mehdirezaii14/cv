import Link from "next/link";

function Header() {
  return (
    <div className="container mt-3">
      <Link href="/ContactMe">
        <a className="btn btn-outline-light">تماس با من</a>
      </Link>
     
      <Link href="/resume">
        <a className="pe-5 text-light">رزومه</a>
      </Link>
    </div>
  );
}

export default Header;
