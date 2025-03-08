import { translate } from "./Translations";
import React from "react";
export default function ContactForm ({language}) {

    const [result, setResult] = React.useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "44747489-02c0-4f6e-a6bf-6c32b44839f1");

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
        <section className="flex flex-col items-center justify-center w-full h-full gap-4 mb-12" id="contact">
            <form className="flex flex-col items-center justify-center w-1/3 gap-4 p-8 bg-black rounded-3xl" onSubmit={onSubmit}>
                <h1 className="text-3xl font-bold text-white">{translate("contact", language)}</h1>
                <p className="text-xl font-light text-white">{translate("contact2", language)}</p>

                { !result ? (
                        <>
                            <input name="name" type="name" placeholder={translate("name", language)} className="p-3 text-black border border-black w-96 rounded-3xl" />
                            <input name="email" type="email" placeholder={translate("correo", language)} className="p-3 text-black border border-black w-96 rounded-3xl" />
                            <input type="company" placeholder={translate("empresa", language)} className="p-3 text-black border border-black w-96 rounded-3xl" />
                            <textarea name="message" placeholder={translate("mensaje", language)} maxLength={240} className="h-56 p-3 text-black border border-black resize-none w-96 rounded-3xl" />
                            <button className="p-3 font-bold text-black transition bg-lightblue w-96 rounded-3xl hover:scale-105">{translate("enviar", language)}</button>
                        </>
                ) : (
                    <span className="text-3xl text-lightblue6">{translate("result", language)}</span>
                )}

            </form>
        </section>
    )
}