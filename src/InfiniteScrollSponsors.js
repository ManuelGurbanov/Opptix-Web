import React from "react";

const InfiniteScrollSponsors = ({ sponsors, speed = 40 }) => {
  const sponsorsDoubled = [...sponsors, ...sponsors];

  return (
    <>
      <style>{`
        .scroll-container {
          overflow: hidden;
          width: 100%;
        }
        .scroll-content {
          display: flex;
          width: max-content;
          animation: scroll-left linear infinite;
          animation-duration: ${speed}s;
        }
        .scroll-content img {
          height: 50px;
          margin-right: 30px;
          user-select: none;
          pointer-events: none;
          flex-shrink: 0;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }
        .scroll-content img:hover {
          filter: grayscale(0%);
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="scroll-container mb-8" aria-label="Sponsors scrolling logos">
        <h1 className="text-center sm:text-2xl text-xl font-semibold mb-6">Marcas que confiaron en 
        <img src="darkOpptix.webp" alt="Opptix logo" className="inline-block ml-2 h-6" />
        </h1>
        <div className="scroll-content">
          {sponsorsDoubled.map((url, idx) => (
            <img key={idx} src={url} alt={`Sponsor logo ${idx + 1}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteScrollSponsors;
