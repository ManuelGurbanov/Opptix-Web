import { translate } from "./Translations";
import React, { useContext, useState } from "react";
import CalendlyScheduler from "./Calendly";

import { useLanguage } from './LanguageContext';

export default function ContactForm({ setContact }) {
  const [result, setResult] = useState(false);
  const [view, setView] = useState("form");

  const { language } = useLanguage();

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
    <div
      className="w-screen h-screen bg-black bg-opacity-40 fixed top-0 left-0 flex items-center justify-center z-50"
      onClick={() => setContact(false)}
    >
      <div
        className="flex flex-col items-center justify-start gap-4 mb-12 relative mt-20"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          className="flex flex-col items-center gap-4 p-6 bg-black rounded-3xl relative"
          onSubmit={onSubmit}
        >
          <button
            type="button"
            className="absolute top-4 right-4 w-6 h-6 text-lg text-white"
            onClick={() => setContact(false)}
          >
            ✖
          </button>
          <h1 className="text-3xl font-bold text-white text-center">{translate("contact", language)}</h1>
          <input name="name" type="text" placeholder={translate("name", language)} className="p-3 text-black border border-black rounded-3xl w-80" />
          <input name="email" type="email" placeholder={translate("correo", language)} className="p-3 text-black border border-black rounded-3xl w-80" />
          <input name="company" type="text" placeholder={translate("empresa", language)} className="p-3 text-black border border-black rounded-3xl w-80" />
          <textarea name="message" placeholder={translate("mensaje", language)} maxLength={240} className="h-40 p-3 text-black border border-black resize-none rounded-3xl w-80" />
          <button className="p-3 font-bold text-black bg-lightblue rounded-3xl hover:scale-105 w-80">{translate("enviar", language)}</button>
          {result && <span className="text-xl text-lightblue6 text-center">{translate("result", language)}</span>}
        </form>

        <CalendlyScheduler lightblueBackground language={language} />
      </div>
    </div>
  );
}
