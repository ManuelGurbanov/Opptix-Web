import RightArrow from "./RightArrow"
import {translate} from "./Translations"
import ContactForm from "./ContactForm"
import {useState} from "react"


export default function ContractButton({language}) {
  const [contact, setContact] = useState(false);
    return (
        <>
        <button className=' bg-black text-nowrap rounded-3xl sm:px-4 sm:py-2 px-2 py-1 text-white flex items-center justify-center sm:gap-4 hover:scale-105 transition duration-75 sm:text-base text-[10px]' onClick={() => setContact(true)}>
        <span>{translate("contract", language)}</span>
        <a className='h-8 w-8 rounded-full -rotate-45 flex items-center justify-center hover:scale-105 transition duration-75 z-20' href='/services/0'>
          <RightArrow color="#ffffff"/>
        </a>
      </button>
      {contact ? <ContactForm language={language} setContact={setContact}/> : null}
      </>
    )
}
