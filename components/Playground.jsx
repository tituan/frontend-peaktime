'use client';

import '@/styles/components/_playground.scss';

export default function Playground() {
  return (
    <section className="playground">
      {/* <div className="red-block">
        Je suis un bloc rouge
      </div> */}
      <div className='textAbout'>
        <span className='text-block'>
          <h2>About</h2><br />
          <p>Peaktime Records is an independent French label focused on electronic music.
            We support artists dedicated to tech house, minimal, and techno, delivering tracks made to energize the clubs.</p>
        </span>
        <span>
          <img src="/images/peaktime-logo-yellow.svg" alt="coquin" width={300} className='image-block' />
        </span>
      </div>
      {/* <div className='textAbout2'>Lorem ipa metus. Duis sed elit tempor, tincidunt lorem sollicitudin, sagittis tellus. Duis sollicitudin interdum ornare. Integer eget est posuere purus posuere placerat. Proin dictum et erat lacinia iaculis. Fusce va
      </div> */}
    </section>
  );
}
