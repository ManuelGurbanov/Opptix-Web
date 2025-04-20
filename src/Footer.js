import React from "react";
import Calendly from "./Calendly";
import { InstagramIcon } from "./InstagramIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { translate } from "./Translations";


import { useState } from "react";
import { Link } from "react-router-dom";

function Footer({
  language,
  services = [],
  caseStudies = [],
  reasons = [],
  packs = [],
}) {


const [result, setResult] = React.useState(false);
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
    <div
      className="w-full h-auto bg-zinc-200 flex flex-row justify-center items-start text-black sm:p-12 p-6 gap-9 text-sm"
      id="get-started"
    >
      {/* Intro Section */}
      <div className="flex-2 sm:mt-0 mt-3">
        <h1 className="font-bold">Newsletter</h1>
        
        <form className="w-full flex gap-1 mt-2" onSubmit={onSubmit}>
          <input name="name" type="name" placeholder={translate("name", language)} className="w-full p-2 rounded-lg" />
          <button className="px-3 py-2 rounded-xl bg-zinc-800 text-white" type="submit">
          {translate("enviar", language)}
          </button>
        </form>

        <div className="w-full flex gap-1 mt-4">
          <Link target="_blank" rel="noopener noreferrer" className="rounded-full bg-black text-white p-2 hover:bg-zinc-800 hover:scale-105 transition-all duration-75" to="https://www.linkedin.com/company/opptix/posts/?feedView=all">
            <LinkedinIcon/>
          </Link>
          {/* <button className="rounded-full bg-black text-white p-2 hover:bg-zinc-800 hover:scale-105 transition-all duration-75">
            <InstagramIcon/>
          </button> */}
        </div>
      </div>

      {/* Services Section */}
      <div className="flex-col gap-1 text-black">
        <h1 className="font-bold">{translate("services", language)}</h1>
        {services.map((service) => (
          <div key={service.id} className="hover:underline cursor-pointer">
            <a className="text-xs hover:underline">{service.name}</a>
          </div>
        ))}
      </div>

      {/* Case Studies Section */}
      <div className="flex-col gap-1 text-black sm:flex hidden">
        <h1 className="font-bold">{translate("caseStudies", language)}</h1>
        {caseStudies.map((caseStudy, index) => (
          <a 
            key={index} 
            className="text-xs hover:underline" 
            href={`https://opptix.com.ar/case-study?case=${encodeURIComponent(caseStudy)}`}
          >
            {caseStudy}
          </a>
        ))}
        <h1 className="font-bold mt-5">Packs</h1>
        {packs.map((pack, index) => (
          <a key={index} className="text-xs">{pack}</a>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="flex-col gap-2 text-black sm:flex hidden">
        <h1 className="font-bold">{translate("workTogether", language)}</h1>
        <p className="text-xs">{translate("reason1", language)}</p>
        <p className="text-xs">{translate("reason2", language)}</p>
        <p className="text-xs">{translate("reason3", language)}</p>
        <p className="text-xs">{translate("reason4", language)}</p>
        <Calendly language={language}/>
      </div>


    </div>
  );
}

export default Footer;
