import React from 'react';
import { CONTACT_PAGE_CONTENT } from '../constants';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import SectionHeader from '../components/SectionHeader';

const Contact: React.FC = () => {
  const { hero } = CONTACT_PAGE_CONTENT;

  return (
    <div className="min-h-screen">
      <Hero
        headline={hero.headline}
        body={hero.copy}
        imageUrl="https://images.unsplash.com/photo-1587825590989-13e00e2b34a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" // Modern office/support setting with industrial elements
        className="h-[60vh] min-h-[500px]" // Adjusted hero height
      />

      <section className="py-24 px-8 bg-black">
        <SectionHeader headline="Get In Touch" copy="We're here to help power your project. Fill out the form below or reach us directly." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 max-w-7xl mx-auto"> {/* Adjusted margin-top */}
          {/* Contact Info */}
          <div className="bg-neutral-800 p-12 rounded-4xl shadow-xl flex flex-col justify-center"> {/* Adjusted background, padding, rounded */}
            <h3 className="text-3xl font-bold text-gold-accent mb-8">Our Details</h3> {/* Adjusted font size and margin-bottom */}
            <div className="space-y-6 text-xl text-white"> {/* Adjusted space-y */}
              <p><strong>Address:</strong> {hero.address}</p>
              <p><strong>Phone:</strong> <a href={`tel:${hero.phone}`} className="hover:text-gold-accent transition-colors">{hero.phone}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${hero.email}`} className="hover:text-gold-accent transition-colors">{hero.email}</a></p>
            </div>
            <div className="mt-12"> {/* Adjusted margin-top */}
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
                className="rounded-3xl shadow-lg border-2 border-gray-700" // Adjusted rounded, shadow, border
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