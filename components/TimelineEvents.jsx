// components/EventsSection.jsx
import React from 'react';
import '../styles/components/_timelineEvents.scss';

const events = [
  {
    id: 1,
    title: 'Release Party',
    date: '24 Mai 2025',
    location: 'Paris',
    description: 'Une soirée exclusive pour fêter la sortie.',
    media: '/images/6.png',
    link: '/event/release-party'
  },
  {
    id: 2,
    title: 'Concert Live',
    date: '30 Juin 2025',
    location: 'Marseille',
    description: 'Performance en direct avec nos artistes.',
    media: '/images/3.png',
    link: '/event/concert-live'
  },
  {
    id: 3,
    title: 'DJ Night',
    date: '15 Juillet 2025',
    location: 'Lyon',
    description: 'Soirée DJ sets dans un lieu insolite.',
    media: '/images/0.png',
    link: '/event/dj-night'
  },
  {
    id: 4,
    title: 'After Show',
    date: '01 Août 2025',
    location: 'Bordeaux',
    description: 'Un after show exclusif avec les artistes.',
    media: '/images/1.png',
    link: '/event/after-show'
  },
  {
    id: 5,
    title: 'After Show',
    date: '01 Août 2025',
    location: 'Bordeaux',
    description: 'Un after show exclusif avec les artistes.',
    media: '/images/0.png',
    link: '/event/after-show'
  },
  {
    id: 6,
    title: 'After Show',
    date: '01 Août 2025',
    location: 'Bordeaux',
    description: 'Un after show exclusif avec les artistes.',
    media: '/images/7.png',
    link: '/event/after-show'
  }
];

const EventsSection = () => {
  return (
    <section className="eventsSection">
        <div className="eventsSection__content">
            <h2 className="eventsSection__content__title">Events</h2>
            <p className="eventsSection__content__text"> Discover upcoming events and relive the highlights that shape the Peaktime experience</p>
        </div>
        
        <div className="eventsSection__wrapper">   
            {events.map((event, index) => (
                <div key={event.id} className={`eventCard offset-${index % 3}`}>
                {event.media.endsWith('.mp4') ? (
                    <video
                    className="media"
                    src={event.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                    />
                ) : (
                    <div
                    className="media"
                    style={{ backgroundImage: `url(${event.media})` }}
                    ></div>
                )}
                <div className="content">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <div className="meta">
                    <span>{event.date}</span>
                    <span>{event.location}</span>
                    </div>
                    <a href={event.link} className="button">Voir</a>
                </div>
                </div>
            ))}
        </div>
      
    </section>
  );
};

export default EventsSection;

