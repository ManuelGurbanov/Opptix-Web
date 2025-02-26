import ContractButton from "./ContractButton";

export default function ArService () {
    return (
              <section className='w-full flex-col items-center justify-start px-16 text-black h-[70vh] py-4 mt-8'>

                <div className="flex sm:flex-row items-center justify-between w-full bg-white h-full">
                    <div className="w-2/5 flex flex-col items-center justify-start gap-2 ">
                        <h1 className="font-bold text-[39px] w-full text-left">Bicicleta</h1>
                        <p className="font-light text-[26px] w-full text-left">Escanea el código QR para ver la Bicicleta en tu espacio.</p>
                        <footer className="w-full flex items-center justify-center gap-2">
                            <img className="w-1/2" src="/qrcodes/bike.png" alt="QR Code">
                            </img>
                            <img className="w-1/2" src="/arPhone.webp" alt="QR Code">
                            </img>
                        </footer>
                    </div>


                    <div className="w-2/5 flex flex-col items-end justify-start gap-6 p-8 h-full">
                        <h1 className="font-normal text-[58px] w-full text-right">Realidad Aumentada</h1>
                        <p className="font-light text-[26px] w-full text-right">Ve un modelo 3D en tu casa con nuestra Realidad Virtual.</p>
                        <ContractButton/>
                    </div>
                </div>
        
                <hr className='bg-lightblue bg-opacity-20 w-full h-[1px] mt-12 mb-12'></hr>
        
                <hr className='bg-lightblue bg-opacity-20 w-full h-[1px] mt-12 mb-12'></hr>
        
        
                <hr className='bg-lightblue bg-opacity-20 w-full h-[1px] mt-12 mb-12'></hr>
        
              </section>
    )
}