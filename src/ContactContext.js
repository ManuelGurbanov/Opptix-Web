import React, { createContext, useContext, useState } from "react";
import ContactForm from "./ContactForm";

const ContactContext = createContext();

export const ContactProvider = ({ children, language }) => {
  const [isContactVisible, setContactVisible] = useState(false);

  const showContactForm = () => setContactVisible(true);
  const hideContactForm = () => setContactVisible(false);

  return (
    <ContactContext.Provider value={{ showContactForm, hideContactForm }}>
      {children}
      {isContactVisible && <ContactForm setContact={hideContactForm} language={language} />}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
