import '../styles/pages/_home.scss';
import '../styles/components/_nav.scss';
import Image from "next/image";
import Nav from '../components/Nav';
import Header from '../components/Header';
import MusicSection from '../components/MusicSection';
import TimelineEvents from '../components/TimelineEvents';

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <MusicSection />
        <TimelineEvents />
      </main>
    </>
  );
}
