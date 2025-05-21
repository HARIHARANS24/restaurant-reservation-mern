import React from 'react';
import { data } from '../restApi.json';

const Qualities = () => {
  return (
    <>
      <section className="qualities" id="qualities" style={{ backgroundColor: '#fff8f3', padding: '3rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', gap: '2rem', flexWrap: 'wrap' }}>
          {data[0].ourQualities.map((element) => (
            <div
              className="card"
              key={element.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 15px rgba(226, 88, 34, 0.15)',
                flex: '1 1 280px',
                textAlign: 'center',
                color: '#333',
                transition: 'transform 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-8px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img src={element.image} alt={element.title} style={{ width: '80px', marginBottom: '1rem' }} />
              <p className="title" style={{ color: '#e25822', fontWeight: '700', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                {element.title}
              </p>
              <p className="description" style={{ fontSize: '1rem', lineHeight: '1.4', color: '#666' }}>
                {element.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Qualities;
