'use client';

import { useState, useRef } from 'react';

export default function ServiceVideoModal({ videoSrc, poster, title }) {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);

  function openModal() {
    setLoaded(true);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <>
      <button className="play-button" type="button" onClick={openModal} aria-label={`Play ${title} video`}>
        <i className="fa-solid fa-play" aria-hidden="true"></i>
      </button>

      {/* Modal Backdrop */}
      {open && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} video`}
          style={{ backgroundColor: 'rgba(0,0,0,.7)' }}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark">
              <div className="modal-header border-0">
                <h2 className="modal-title fs-6 text-white">{title} video</h2>
                <button className="btn-close btn-close-white" type="button" onClick={closeModal} aria-label="Close video"></button>
              </div>
              <div className="ratio ratio-16x9">
                {loaded && (
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    poster={poster}
                    controls
                    playsInline
                    preload="metadata"
                    autoPlay
                    style={{ background: '#061b39', height: '100%', objectFit: 'contain', width: '100%' }}
                  >
                    Your browser does not support embedded video.
                  </video>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
