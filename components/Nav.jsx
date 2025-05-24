import '../styles/components/_nav.scss';

export default function Nav() {
  return (
    <nav className="nav">
        <a href="/" className="nav__link nav__link__1">peaktime</a>
        <a href="/" className="nav__link nav__link__2">musics</a>
        <a href="/" className="nav__link nav__link__3">events</a>
        <a href="/" className="nav__link nav__link__4">about</a>
    </nav>
  );
}