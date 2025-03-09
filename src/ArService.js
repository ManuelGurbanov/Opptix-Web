import ContractButton from "./ContractButton";
import DataBlock from "./DataBlock";

export default function ArService ({language}) {
    return (
    <section className='w-full flex-col items-center justify-start text-black gap-4'>
                <div className="flex sm:flex-row items-center justify-between w-full bg-white h-full">
                    <div className="w-full flex flex-col items-start justify-start gap-2">
                    <h1 className="font-black text-[80px] w-full text-left">AR/VR</h1>
                    <p className="font-light text-xl w-full text-left h-full">Con Realidad Aumentada (AR), los usuarios pueden ver cómo se verán los productos en su hogar, mientras que con Realidad Virtual (VR) pueden sumergirse en experiencias más envolventes.</p>
                    </div>


                    <div className="w-2/5 flex flex-col items-end justify-start gap-6 p-8 h-full">
                        <ContractButton language={language}/>
                    </div>
                </div>
        
                <div className="flex items-center justify-center w-full gap-4">
                    <div className="flex items-center justify-center">
                        <img className="w-64 h-64" src="/qrcodes/bike.png"></img>
                        <img className="w-64 h-64" src="/qrcodes/bike.png"></img>
                    </div>

                    <hr className='bg-black bg-opacity-20 w-[3px] h-64'></hr>

                    <div className="flex items-center justify-center">
                        <img className="w-64 h-64" src="/qrcodes/bike.png"></img>
                        <img className="w-64 h-64" src="/qrcodes/bike.png"></img>
                    </div>
                </div>

                <div className="justify-self-center w-screen flex flex-col items-center justify-center gap-4">
                    <DataBlock data1="data1AR" data2="data2AR" data3="data3AR" language={language}/>
                </div>

                <div className="flex items-center justify-center w-full gap-4">
                    <div className="flex items-center justify-center">
                        <img className="w-64 h-64" src="/qrcodes/bike.png"></img>
                        <img className="w-64 h-64" src="/qrcodes/bike.png"></img>
                    </div>

                    <hr className='bg-black bg-opacity-20 w-[3px] h-64'></hr>

                    <div className="flex items-center justify-center">
                        <img className="w-64 h-64" src="/qrcodes/bike.png"></img>
                        <img className="w-64 h-64" src="/qrcodes/bike.png"></img>
                    </div>
                </div>
    </section>
    )
}