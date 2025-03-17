import React from 'react'
import { translate } from './Translations';
import DataBlock from './DataBlock';
import ContractButton from './ContractButton';

export default function StaticRenders({language}) {
    return (
              <section className='relative flex flex-col items-center justify-start w-full sm:p-12 px-2 py-4'>
                <header className='w-full flex items-start justify-between gap-4 sm:min-h-[30vh]'>
                  <div className='flex flex-col w-full'>
                    <h1 className='sm:text-[60px] text-2xl text-left w-full mb-3'>{translate("staticRenderTittle", language)}</h1>
                    <p className='w-full font-light text-left'>
                    {translate("staticRenderText", language)}
                    </p>
                  </div>
                  <div className='flex items-start justify-end w-full h-14 sm:relative absolute top-2 right-2'>
                  <ContractButton language={language}/>
                  </div>
                </header>
        
                <div className="flex flex-col items-center justify-center w-screen gap-4 justify-self-center mt-2">
                <DataBlock data1="data1Anim" data2="data2Anim" data3="data3Anim" language={language}/>
                </div>
        
        
                <div className="flex flex-row items-center justify-start w-full h-full gap-4 px-4 mt-12 mb-12 overflow-x-scroll self-start p-3">
                    <div className="flex flex-row gap-4 min-w-max">
                      {[1,2,3,4,5,6].map((i) => (
                        <article key={i} className='flex flex-col items-center justify-center h-[60vh] sm:w-96 w-60'>
                        <img className='object-cover h-full w-full rounded-3xl' src={`/renders/${i}.webp`} alt="render"></img>
                        </article>
                      ))
                      }
                    </div>
                </div>



              </section>  
    )
}