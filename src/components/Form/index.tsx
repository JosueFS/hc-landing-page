import React, { FormEvent, useCallback, useRef } from 'react';
import { GiSpartanHelmet, GiSpartan } from 'react-icons/gi';

import Input from '../Input';

const Form: React.FC = () => {
  const inputName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    if(inputName.current !== null && inputEmail.current !== null) {
      localStorage.setItem('HiringCoders@Name', inputName.current.value)
      localStorage.setItem('HiringCoders@Email', inputEmail.current.value)

      inputName.current.value = '';
      inputEmail.current.value = '';
    }

    alert('Admirável! Você receberá instruções de como reforçar sua tropa a partir de 01/09/2021!')
  }, []);


  const handleInputFocus = useCallback((e: React.RefObject<HTMLInputElement>) => {
    e.current?.parentElement?.classList.add("focused");
  }, []);

  const handleInputBlur = useCallback((e: React.RefObject<HTMLInputElement>) => {
    if(!!e.current?.value) {
      e.current?.parentElement?.classList.add("filled");
    }
    e.current?.parentElement?.classList.remove("focused")
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h5>Contrate um dos 300 e transforme a sua empresa!</h5>
        <Input ref={inputName} isFocused={ref => handleInputFocus(inputName)} isFilled={ref => handleInputBlur(inputName)} name="name" type="text" placeholder="Seu nome" icon={GiSpartanHelmet} />
        <Input ref={inputEmail} isFocused={ref => handleInputFocus(inputEmail)} isFilled={ref => handleInputBlur(inputEmail)} name="email" type="email" placeholder="Seu email" icon={GiSpartan} />
        <button type="submit">Quero contratar!</button>
      </form>
    </>
  );
}

export default Form;