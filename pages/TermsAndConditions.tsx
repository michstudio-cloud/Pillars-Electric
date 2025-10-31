import React from 'react';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import { COMPANY_NAME, INFO_EMAIL } from '../constants'; // Import INFO_EMAIL

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero
        headline="Terms & Conditions"
        subheadline="Understanding our service agreement."
        imageUrl="https://images.unsplash.com/photo-1620077271457-3a8a3a0c0b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" // Legal document/agreement theme
        className="h-[50vh] min-h-[400px]" // Adjusted hero height
      />

      <section className="max-w-7xl mx-auto py-16 px-8 bg-black text-white"> {/* Adjusted max-width, padding */}
        <div className="bg-neutral-800 p-12 rounded-4xl shadow-xl"> {/* Content wrapper for terms and conditions */}
          <SectionHeader headline="Agreement to Terms" align="left" className="mb-16" /> {/* Adjusted margin-bottom */}

          <div className="prose prose-xl prose-invert max-w-none text-white space-y-8"> {/* Adjusted prose size, space-y */}
            <p>These Terms and Conditions ("Terms") govern your use of the website operated by {COMPANY_NAME} ("we," "us," or "our") at pillarselectrical.com (the "Site") and the services we provide. By accessing or using the Site or our services, you agree to be bound by these Terms.</p>

            <h2 className="text-gold-accent mt-10">Use of Our Services</h2> {/* Adjusted margin-top */}
            <p>Our electrical services are provided by licensed professionals in accordance with all applicable state and local regulations. All projects are subject to a written agreement outlining the scope of work, pricing, and timelines. We reserve the right to refuse service to anyone for any reason at any time.</p>

            <h2 className="text-gold-accent mt-10">Intellectual Property</h2> {/* Adjusted margin-top */}
            <p>The content, features, and functionality of the Site are and will remain the exclusive property of {COMPANY_NAME} and its licensors. The Site is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>

            <h2 className="text-gold-accent mt-10">Limitation of Liability</h2> {/* Adjusted margin-top */}
            <p>In no event shall {COMPANY_NAME}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

            <h2 className="text-gold-accent mt-10">Disclaimer</h2> {/* Adjusted margin-top */}
            <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
            <p>{COMPANY_NAME} does not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.</p>

            <h2 className="text-gold-accent mt-10">Governing Law</h2> {/* Adjusted margin-top */}
            <p>These Terms shall be governed and construed in accordance with the laws of Texas, United States, without regard to its conflict of law provisions.</p>

            <h2 className="text-gold-accent mt-10">Changes to Terms</h2> {/* Adjusted margin-top */}
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

            <h2 className="text-gold-accent mt-10">Contact Us</h2> {/* Adjusted margin-top */}
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul>
              <li>By email: <a href={`mailto:${INFO_EMAIL}`} className="text-gold-accent hover:underline">{INFO_EMAIL}</a></li>
              <li>By visiting this page on our website: <a href="/contact" className="text-gold-accent hover:underline">/contact</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;