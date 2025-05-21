import '../styles/pages/_home.scss';
import Image from "next/image";
import Header from '../components/Header';
import MusicSection from '../components/MusicSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MusicSection />
      </main>
    </>
  );
}
