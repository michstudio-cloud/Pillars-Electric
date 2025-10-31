import React, { useState } from 'react';
import Button from './Button';
import { Cta } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
      console.log('Form data submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '', company: '', phone: '', email: '', city: '', message: '',
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitCta: Cta = { text: isSubmitting ? 'Sending...' : 'Submit Request' };

  return (
    <div className="bg-neutral-800 p-10 rounded-4xl shadow-xl max-w-2xl mx-auto"> {/* Adjusted background, padding, rounded */}
      <form onSubmit={handleSubmit} className="space-y-10"> {/* Adjusted space-y */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-white mb-2">Name</label> {/* Adjusted font size */}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-5 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-gold-accent focus:border-gold-accent" // Adjusted padding, rounded
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-lg font-medium text-white mb-2">Company</label> {/* Adjusted font size */}
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-5 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-gold-accent focus:border-gold-accent" // Adjusted padding, rounded
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-lg font-medium text-white mb-2">Phone</label> {/* Adjusted font size */}
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-5 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-gold-accent focus:border-gold-accent" // Adjusted padding, rounded
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-white mb-2">Email</label> {/* Adjusted font size */}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-5 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-gold-accent focus:border-gold-accent" // Adjusted padding, rounded
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-lg font-medium text-white mb-2">City</label> {/* Adjusted font size */}
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-5 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-gold-accent focus:border-gold-accent" // Adjusted padding, rounded
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-white mb-2">Message</label> {/* Adjusted font size */}
          <textarea
            id="message"
            name="message"
            rows={6} // Increased rows
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-5 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-gold-accent focus:border-gold-accent" // Adjusted padding, rounded
          ></textarea>
        </div>
        <Button cta={submitCta} className="w-full" disabled={isSubmitting} />

        {submitStatus === 'success' && (
          <p className="mt-4 text-green-500 text-center font-semibold text-lg">Your request has been sent successfully!</p> {/* Adjusted font size */}
        )}
        {submitStatus === 'error' && (
          <p className="mt-4 text-red-500 text-center font-semibold text-lg">There was an error sending your request. Please try again.</p> {/* Adjusted font size */}
        )}
      </form>
    </div>
  );
};

export default ContactForm;