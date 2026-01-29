import React, { useState } from 'react';

export default function GallerySlideshow({ images }){
  const [index, setIndex] = useState(0);
  if(!images || images.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const goTo = (i) => setIndex(i % images.length);

  const containerStyle = {
    position: 'relative',
    width: '450px',
    maxWidth: '100%',
    margin: '0 auto',
    background: '#071621',
    border: '1px solid #1f405a',
    borderRadius: 6,
    padding: 8,
    overflow: 'visible'
  };
  const imageWrapperStyle = {
    position: 'relative',
    width: '100%',
    height: 250,
    display: 'block'
  };
  const imgStyle = { width: 450, height: 250, objectFit: 'cover', display: 'block', borderRadius: 4 };
  const navBtn = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.65)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.08)',
    width: 44,
    height: 44,
    padding: 0,
    cursor: 'pointer',
    borderRadius: 6,
    fontSize: 16,
    zIndex: 20,
    boxShadow: '0 4px 12px rgba(0,0,0,0.45)'
  };
  const leftBtn = { ...navBtn, left: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' };
  const rightBtn = { ...navBtn, right: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' };
  const thumbs = { display: 'flex', gap: 8, marginTop: 8, overflowX: 'auto', padding: '6px 2px', justifyContent: 'center' };
  const thumbImg = (active) => ({ width: 90, height: 50, objectFit: 'cover', borderRadius: 4, cursor: 'pointer', boxShadow: active ? '0 0 0 3px rgba(111,178,230,0.25)' : 'none' });

  return (
    <div style={containerStyle}>
      <div style={imageWrapperStyle}>
        <img src={images[index].src} alt={images[index].alt || `Slide ${index+1}`} style={imgStyle} />

        <button aria-label="Previous" style={leftBtn} onClick={prev}>◀</button>
        <button aria-label="Next" style={rightBtn} onClick={next}>▶</button>
      </div>

      <div style={thumbs}>
        {images.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt || `Thumb ${i+1}`} style={thumbImg(i === index)} onClick={() => goTo(i)} />
        ))}
      </div>
    </div>
  );
}

// PropTypes removed to avoid a runtime dependency; keep a simple runtime check instead
