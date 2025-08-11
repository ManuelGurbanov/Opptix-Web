import React, { useState } from "react";

const WordPress = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo cambio el precio de un producto simple?",
      videoId: "t5YzDwJ80NU",
    },
    {
      question: "¿Cómo cambio el precio de un producto variante?",
      videoId: "w3ALodgVez4",
    },
  ];

  const toggleVideo = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-fade w-screen min-h-screen flex items-center flex-col">
      {/* Logo */}
      <header className="w-full flex flex-row items-center justify-center mt-10 mb-5">
        <img src="darkOpptix.webp" alt="Opptix Logo" className="h-12"/>
        <span className="font-black text-3xl ml-4">+ WordPress</span>
      </header>

      {/* Preguntas */}
      <div className="w-3/5 flex flex-col gap-4 p-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
            onClick={() => toggleVideo(index)}
          >
            <strong>{faq.question}</strong>

            {/* Video */}
            {openIndex === index && (
              <div style={{ marginTop: "10px" }}>
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${faq.videoId}`}
                  title={faq.question}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordPress;
