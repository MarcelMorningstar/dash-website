import React, { useState } from 'react';
import HeaderBasic from '../components/HeaderBasic';
import ContactForm from '../components/ContactForm';

export default function Contact(){
    return(
        <div>
            <HeaderBasic title="Kontakti">
                Ir jautājumi? Droši jautā!
            </HeaderBasic>
            <ContactForm />
        </div>
    )
}