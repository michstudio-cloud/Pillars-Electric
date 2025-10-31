import React from 'react';
import { CONTACT_PAGE_CONTENT } from '../constants';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import SectionHeader from '../components/SectionHeader';

const Contact: React.FC = () => {
  const { hero } = CONTACT_PAGE_CONTENT;

  return (
    <div className="min-h-screen pt-20"> {/* pt-20 to offset fixed header */}
      <Hero
        headline={hero.headline}
        body={hero.copy}
        imageUrl="https://images.unsplash.com/photo-1587825590989-13e00e2b34a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" // Modern office/support setting with industrial elements
        className="h-[50vh] min-h-[300px]"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <SectionHeader headline="Get In Touch" copy="We're here to help power your project. Fill out the form below or reach us directly." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="bg-neutral-900 p-8 rounded-lg shadow-xl flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gold-accent mb-6">Our Details</h3>
            <div className="space-y-4 text-xl text-white">
              <p><strong>Address:</strong> {hero.address}</p>
              <p><strong>Phone:</strong> <a href={`tel:${hero.phone}`} className="hover:text-gold-accent transition-colors">{hero.phone}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${hero.email}`} className="hover:text-gold-accent transition-colors">{hero.email}</a></p>
            </div>
            <div className="mt-8">
              {/* Optional: Embed Google Map for address */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.5759719460023!2d-95.49257698488825!3d29.646960081997847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c2134267425f%3A0x6d11b22e1a3d0f0c!2s11333%20Chimney%20Rock%20Rd%2C%20Houston%2C%20TX%2077035%2C%20USA!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pillars Electrical Location"
                className="rounded-lg shadow-md border-2 border-gray-800"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;