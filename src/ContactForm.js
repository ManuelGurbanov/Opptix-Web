import { translate } from "./Translations";
import React, { useState } from "react";
import CalendlyScheduler from "./Calendly";

export default function ContactForm({ language, setContact }) {
  const [result, setResult] = useState(false);
  const [view, setView] = useState("form"); // "form" o "calendly"

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "44747489-02c0-4f6e-a6bf-6c32b44839f1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult(true);
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };

  return (
    <div className="w-screen h-screen bg-black bg-opacity-40 fixed top-0 left-0 flex items-center justify-center z-50">
      <section className="flex flex-col items-center justify-start w-full h-full gap-4 mb-12 relative mt-20" id="contact">
        
        <button className="absolute top-12 right-12 w-6 h-6 text-lg text-white" onClick={() => setContact(false)}>
          ✖
        </button>
        
        <div className="flex gap-4 mb-4 mt-4">
          <button className={`p-2 rounded-[48px] text-black ${view === "form" ? "bg-lightblue6" : "bg-gray-300"}`} onClick={() => setView("form")}>
            Email
          </button>
          <button className={`p-2 rounded-[48px] text-black ${view === "calendly" ? "bg-lightblue6" : "bg-gray-300"}`} onClick={() => setView("calendly")}>
            Agendar Llamada
          </button>
        </div>

        {view === "form" && (
          <form className="flex flex-col items-center gap-4 p-6 bg-black rounded-3xl" onSubmit={onSubmit}>
            <h1 className="text-3xl font-bold text-white text-center">{translate("contact", language)}</h1>
            <input name="name" type="text" placeholder={translate("name", language)} className="p-3 text-black border border-black rounded-3xl w-80" />
            <input name="email" type="email" placeholder={translate("correo", language)} className="p-3 text-black border border-black rounded-3xl w-80" />
            <input name="company" type="text" placeholder={translate("empresa", language)} className="p-3 text-black border border-black rounded-3xl w-80" />
            <textarea name="message" placeholder={translate("mensaje", language)} maxLength={240} className="h-40 p-3 text-black border border-black resize-none rounded-3xl w-80" />
            <button className="p-3 font-bold text-black bg-lightblue rounded-3xl hover:scale-105 w-80">{translate("enviar", language)}</button>
            {result && <span className="text-xl text-lightblue6 text-center">{translate("result", language)}</span>}
          </form>
        )}

        {view === "calendly" && <CalendlyScheduler language={language} />}
      </section>
    </div>
  );
}
