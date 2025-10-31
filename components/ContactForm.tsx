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
    <div className="bg-neutral-900 p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-gold-accent focus:border-gold-accent"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white mb-2">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-gold-accent focus:border-gold-accent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-gold-accent focus:border-gold-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-gold-accent focus:border-gold-accent"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-white mb-2">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-gold-accent focus:border-gold-accent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-gold-accent focus:border-gold-accent"
          ></textarea>
        </div>
        <Button cta={submitCta} className="w-full" disabled={isSubmitting} />

        {submitStatus === 'success' && (
          <p className="mt-4 text-green-500 text-center font-semibold">Your request has been sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-4 text-red-500 text-center font-semibold">There was an error sending your request. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;