import {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact-me', 'template_wrarvcq', form.current, 'PjnIfnYS13NpgwdKy')
      .then((result) => {
          console.log(result.text);
          alert('Message envoyé');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <>
        <h2 className='font-bold text-primary padding-y text-center text-8xl font-montserrat'>Contact</h2>
        <form ref={form} onSubmit={sendEmail} id='contact' className='space-y-8 flex flex-col justify-center items-center'>
          <label className='block mb-2 text-sm font-montserrat text-primary'>Name</label>
          <input type="text" name="user-name" className='shadow-sm bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary focus:border-primary block w-1/2 p-2.5'/>
          <label className='block mb-2 text-sm font-montserrat text-primary'>Email</label>
          <input type="email" name="user-email" className='shadow-sm bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary focus:border-primary block w-1/2 p-2.5'/>
          <label>Message</label>
          <textarea name="message" className='shadow-sm bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary focus:border-primary block w-1/2 p-2.5'/>
          <input type="submit" value="Send" className='py-3 px-5 text-sm font-medium text-center text-secondary rounded-lg bg-primary'/>
        </form>
        </>
      );
}

export default Contact