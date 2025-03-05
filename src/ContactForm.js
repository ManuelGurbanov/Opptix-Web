import { translate } from "./Translations";

export default function ContactForm ({language}) {
    return (
        <section className="flex flex-col items-center justify-center w-full h-full gap-4 mb-12" id="contact">
            <form className="flex flex-col items-center justify-center w-1/3 gap-4 p-8 bg-black rounded-3xl">
            <h1 className="text-3xl font-bold text-white">{translate("contact", language)}</h1>
            <p className="text-xl font-light text-white">{translate("contact2", language)}</p>
            <input type="text" placeholder={translate("name", language)} className="p-3 text-black border border-black w-96 rounded-3xl" />
            <input type="email" placeholder={translate("correo", language)} className="p-3 text-black border border-black w-96 rounded-3xl" />
            <input type="text" placeholder={translate("empresa", language)} className="p-3 text-black border border-black w-96 rounded-3xl" />
            <textarea placeholder={translate("mensaje", language)} maxLength={240} className="h-56 p-3 text-black border border-black resize-none w-96 rounded-3xl" />
            <button className="p-3 font-bold text-black transition bg-lightblue w-96 rounded-3xl hover:scale-105">{translate("enviar", language)}</button>
            </form>
        </section>
    )
}