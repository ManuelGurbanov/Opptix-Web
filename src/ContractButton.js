import RightArrow from "./RightArrow"
import {translate} from "./Translations"

export default function ContractButton({language}) {
    return (
        <button className=' bg-black rounded-3xl px-4 py-2 text-white flex items-center justify-center gap-4 hover:scale-105 transition duration-75'>
        <span>{translate("contract", language)}</span> <a className='aspect-square h-8 rounded-full -rotate-45 flex items-center justify-center hover:scale-105 transition duration-75' href='/services/0'>
                                                <RightArrow color="#ffffff" />
        </a>
      </button>
    )
}
