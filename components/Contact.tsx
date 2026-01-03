
import React, { useState } from 'react';
import { FacebookIcon, InstagramIcon, XIcon } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000); // Hide toast after 4 seconds
      } else {
        // You could add error handling here, e.g., show an error toast
        alert('There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900 relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <form 
          action="https://formspree.io/f/xykzddev" 
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto text-left"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                    <input type="text" id="name" name="name" required className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"/>
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                    <input type="email" id="email" name="_replyto" required className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"/>
                </div>
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"></textarea>
            </div>
            <div className="text-center">
                 <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 text-lg shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:scale-100"
                    >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>
        </form>

        <div className="mt-16 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <FacebookIcon className="w-8 h-8"/>
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <InstagramIcon className="w-8 h-8"/>
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <XIcon className="w-8 h-8"/>
            </a>
        </div>
      </div>
       {/* Toast Notification */}
      <div
        className={`fixed bottom-5 right-5 bg-green-500 text-white py-3 px-6 rounded-lg shadow-xl transition-all duration-500 transform ${
          showToast ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        role="alert"
        aria-live="assertive"
      >
        Thanks for submitting!
      </div>
    </section>
  );
};

export default Contact;