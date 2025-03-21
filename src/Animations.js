import React from 'react'
import { translate } from './Translations';
import DataBlock from './DataBlock';
import ContractButton from './ContractButton';

export default function Animations({language}) {
    return (
              
              <section className='relative flex flex-col items-center justify-start w-full sm:p-12 p-2 py-4'>
        
                <header className='w-full flex items-start justify-between gap-4 sm:min-h-[18vh]'>
                  <div className='flex flex-col w-full'>
                    <h1 className='sm:text-[60px] text-2xl text-left w-full mb-3'>{translate("animTittle", language)}</h1>
                    <p className='w-full font-light text-left'>
                    {translate("animacionesDescription", language)}
                    </p>
                  </div>
                  <div className='flex items-start justify-end w-full h-14 sm:relative absolute top-2 right-2'>
                  <ContractButton language={language}/>
                  </div>
                </header>
        
                <div className="flex flex-col items-center justify-center w-screen gap-4 justify-self-center sm:mt-0 mt-2">
                <DataBlock data1="data1Anim" data2="data2Anim" data3="data3Anim" language={language}/>
                </div>
        
        
                <div className="flex flex-row items-center justify-start w-full h-full gap-4 px-4 mt-12 mb-12 overflow-x-scroll self-start p-3">
                    <div className="flex flex-row gap-4 min-w-max">

                      {[1,2,3,4].map((i) => (
                        <article key={i} className='flex flex-col items-center justify-center h-[60vh] sm:w-96 w-60'>
                        <video className='object-cover h-full w-full rounded-3xl' autoPlay loop muted>
                            <source src={`/video/${i}.mp4`} type="video/mp4"></source>
                        </video>
                        </article>
                      ))
                      }
                        <article className='flex flex-col items-center justify-center h-[60vh] w-96'>
                        <video className='object-cover h-full w-full rounded-3xl' autoPlay loop muted>
                            <source src="/carVideo.mp4" type="video/mp4"></source>
                        </video>
                        </article>

                    </div>
                </div>



              </section>  
    )
}