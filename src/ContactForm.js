import { translate } from "./Translations";
import React from "react";
import CalendlyScheduler from "./Calendly";
export default function ContactForm ({language, setContact}) {

    const [result, setResult] = React.useState(false);

    const [render, setRender] = React.useState(true);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "72dff9c7-0190-4056-8d96-d7b744cdbdfa");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
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
        <section className="flex items-center justify-center w-full h-full gap-4 mb-12 relative" id="contact">
            
        <button className="w-5 h-5 rounded-full absolute top-12 right-12 flex items-center justify-center" onClick={() => setContact(false)}>
        <svg fill="#ffffff" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490" stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
            <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon>
            </g>
        </svg>
        </button>


            <form className="flex sm:flex-row flex-col items-center justify-center gap-4 p-6 bg-black rounded-3xl" onSubmit={onSubmit}>
            <div
                className="flex flex-col items-center justify-center gap-4 sm:w-96 w-full">

                {(render &&
                <>
                    <h1 className="text-3xl font-bold text-white w-full text-center">{translate("contact", language)}</h1>
                    <p className="text-xl font-light text-white w-full text-center">{translate("contact2", language)}</p>
                </>
                )}
                

                <CalendlyScheduler language={language} setRender={setRender} lightblueBackground/>

                { ( result && render ) && <span className="text-xl text-lightblue6 text-center">{translate("result", language)}</span>}
                
            </div>

                { ( !result && render ) && (
                        <div
                            className="flex flex-col items-center justify-center gap-4 sm:w-96 w-full">
                            <input name="name" type="name" placeholder={translate("name", language)} className="p-3 text-black border border-black sm:w-96 rounded-3xl w-3/4" />
                            <input name="email" type="email" placeholder={translate("correo", language)} className="p-3 text-black border border-black sm:w-96 rounded-3xl w-3/4" />
                            <input type="company" placeholder={translate("empresa", language)} className="p-3 text-black border border-black sm:w-96 rounded-3xl w-3/4" />
                            <textarea name="message" placeholder={translate("mensaje", language)} maxLength={240} className="sm:h-56 p-3 text-black border border-black resize-none sm:w-96 rounded-3xl w-3/4" />
                            <button className="p-3 font-bold text-black transition bg-lightblue sm:w-96 rounded-3xl hover:scale-105 w-3/4">{translate("enviar", language)}</button>
                        </div>
                )}

            </form>
        </section>
        </div>
    )
}