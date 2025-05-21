import '@/styles/components/_hero.scss';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video-test.mp4" type="video/mp4" />
      </video>

      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h1>
        <Image
          src="/images/peaktime-logo-yellow-3.svg"
          alt="Logo Peaktime"
          width={1670}
          height={650}
          priority
        />
        </h1>
      </div>
    </section>
  );
}