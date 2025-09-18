export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <h1 className="logo">Jarurat Care</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#patients">Patients</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}
