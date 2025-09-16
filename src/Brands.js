import React from "react";

const BrandsTrustUs = () => {
  const brands = [
    { name: "Rumi Muebles", description: "Configuradores 3D y Realidad Aumentada", link: "https://rumimuebles.com.ar/", bg: "url('/rumi_bg.webp')" },
    { name: "Casa Zorba", description: "Realidad Aumentada", link: "https://www.casazorba.com.ar/", bg: "url('/zorba_bg.webp')" },
    { name: "Muebles Activos", description: "Configuradores 3D", link: "https://mueblesactivos.com/", bg: "url('/activos_bg.webp')" },
    { name: "Build Your Lamp", description: "Desarrollo web, Configuradores 3D y Realidad Aumentada", link: "#", bg: "url('/lamp_bg.webp')" },
  ];

  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-10">
        Confían en Nosotros
      </h2>

      <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 w-full">
        {brands.map((brand, index) => (
          <a
            key={index}
            href={brand.link}
            className="relative group flex items-center justify-center text-center overflow-hidden h-[85vh] md:h-auto"
            style={{
              backgroundImage: brand.bg,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* overlay oscuro */}
            <div className="absolute inset-0 bg-black/80 group-hover:bg-black/70 transition-colors" />

            {/* contenido */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6">
              <span className="text-white text-2xl md:text-4xl font-bold mb-2">
                {brand.name}
              </span>
              <span className="text-white text-lg md:text-xl font-medium">
                {brand.description}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BrandsTrustUs;
