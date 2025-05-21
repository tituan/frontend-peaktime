// 'use client';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import '@/styles/components/_musicSection.scss';

// const covers = [
//   '/images/1.png',
//   '/images/2.png',
//   '/images/3.png',
//   '/images/5.png',
//   '/images/6.png',
//   '/images/7.png'
// ];

// export default function MusicSection() {
//   const settings = {
//     className: 'music-section__carousel center',
//     centerMode: true,
//     infinite: true,
//     centerPadding: '0px',
//     slidesToShow: 5,
//     speed: 500,
//     focusOnSelect: true,
//     arrows: false
//   };

//   return (
//     <section className="music-section">
//       <h2>Last release</h2>
//       <p>Discover the latest tracks released by the Peaktime label.</p>
//       <div className="music-section__carousel">
//       <Slider {...settings}>
//         {covers.map((src, index) => (
//           <div key={index} className="music-section__slide">
//             <img src={src} alt={`Cover ${index + 1}`} />
//           </div>
//         ))}
//       </Slider>
//       </div>
//     </section>
//   );
// }

// 'use client';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import '@/styles/components/_musicSection.scss';
// import Link from 'next/link';

// const covers = [
//   { src: '/images/1.png', title: 'Track One', artist: 'Artist A', link: '#' },
//   { src: '/images/2.png', title: 'Track Two', artist: 'Artist B', link: '#' },
//   { src: '/images/3.png', title: 'Track Three', artist: 'Artist C', link: '#' },
//   { src: '/images/5.png', title: 'Track Four', artist: 'Artist D', link: '#' },
//   { src: '/images/6.png', title: 'Track Five', artist: 'Artist E', link: '#' },
//   { src: '/images/7.png', title: 'Track Six', artist: 'Artist F', link: '#' },
// ];

// export default function MusicSection() {
//   const settings = {
//     className: 'music-section__carousel center',
//     centerMode: true,
//     infinite: true,
//     centerPadding: '0px',
//     slidesToShow: 5,
//     speed: 500,
//     focusOnSelect: true,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="music-section">
//       <h2>Last release</h2>
//       <p>Discover the latest tracks released by the Peaktime label.</p>
//       <div className="music-section__carousel">
//         <Slider {...settings}>
//           {covers.map((cover, index) => (
//             <div key={index} className="music-section__slide">
//               <Link href={cover.link}>
//                 <div className="music-section__content">
//                   <img src={cover.src} alt={`${cover.title} by ${cover.artist}`} />
//                   <div className="music-section__meta">
//                     <h3>{cover.title}</h3>
//                     <p>{cover.artist}</p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }

'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '@/styles/components/_musicSection.scss';
import Link from 'next/link';

const covers = [
  { src: '/images/0.png', title: 'Track XXX', artist: 'Artist X', link: '#' },
  { src: '/images/1.png', title: 'Track One', artist: 'Artist A', link: '#' },
  { src: '/images/2.png', title: 'Track Two', artist: 'Artist B', link: '#' },
  { src: '/images/3.png', title: 'Track Three', artist: 'Artist C', link: '#' },
  { src: '/images/5.png', title: 'Track Four', artist: 'Artist D', link: '#' },
  { src: '/images/6.png', title: 'Track Five', artist: 'Artist E', link: '#' },
  { src: '/images/7.png', title: 'Track Six', artist: 'Artist F', link: '#' },
];

export default function MusicSection() {
  const settings = {
    className: 'music-section__carousel center',
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    centerPadding: '0px',
    slidesToShow: 5,
    speed: 500,
    focusOnSelect: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="music-section">
        <div className="music-section__wrapper">
            <div className="music-section__text">
                <h2>Last release</h2>
                <p>Discover the latest tracks released by the Peaktime label.</p>
            </div>
            <div className="music-section__carousel">
                <Slider {...settings}>
                {covers.map((cover, index) => (
                    <div key={index} className="music-section__slide">
                    <div className="music-section__content">
                        <img src={cover.src} alt={`${cover.title} by ${cover.artist}`} />
                        <div className="music-section__meta">
                        <Link href={cover.link}>
                            <h3>{cover.title}</h3>
                            <p>{cover.artist}</p>
                        </Link>
                        </div>
                    </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    </section>
  );
}
