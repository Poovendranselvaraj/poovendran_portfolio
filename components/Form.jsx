'use client'

import { useState } from 'react';
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Form = () => {
  // State to capture form data
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  // Handle form inputs change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    
    emailjs.send(
      'service_840a121',
      'template_2h2qdaa',
      {
        from_name: form.name,
        to_name: "poovendran",
        email: form.email,
        to_email: "poovendranselvaraj333@gmail.com",
        message: form.message
      },
      'JrnZAJaMi-WcQHS-k'
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
    }, (error) => {
      setLoading(false);     
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
      {/* Name input */}
      <div className='relative flex items-center'>
        <Input 
          type='text' 
          id='name' 
          placeholder='Name' 
          value={form.name}
          onChange={handleChange} 
        />
        <User className='absolute right-6' size={20} />
      </div>

      {/* Email input */}
      <div className='relative flex items-center'>
        <Input 
          type='email' 
          id='email' 
          placeholder='Email' 
          value={form.email}
          onChange={handleChange} 
        />
        <MailIcon className='absolute right-6' size={20} />
      </div>

      {/* Message textarea */}
      <div className='relative flex items-center'>
        <Textarea 
          placeholder='Type Your Message Here' 
          id='message' 
          value={form.message}
          onChange={handleChange} 
        />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>

      {/* Submit button */}
      <Button className='flex items-center max-w-[166px]' type="submit">
        send
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
