import React from 'react';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import { COMPANY_NAME, INFO_EMAIL } from '../constants'; // Import INFO_EMAIL

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-20"> {/* pt-20 to offset fixed header */}
      <Hero
        headline="Privacy Policy"
        subheadline="Your privacy is important to us."
        imageUrl="https://images.unsplash.com/photo-1549247738-95a9e1e2d409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" // Digital security/privacy theme
        className="h-[40vh] min-h-[250px]"
      />

      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <SectionHeader headline="Our Commitment to Your Privacy" align="left" className="mb-12" />

        <div className="prose prose-lg prose-invert max-w-none text-white space-y-6">
          <p>This Privacy Policy describes how {COMPANY_NAME} ("we," "us," or "our") collects, uses, and discloses your information when you visit our website at pillarselectrical.com (the "Site") and interact with our services.</p>

          <h2 className="text-gold-accent">Information We Collect</h2>
          <p>We collect various types of information in connection with the services we provide, including:</p>
          <ul>
            <li><strong>Personal Information:</strong> This includes information you voluntarily provide to us when you contact us, request service, or fill out forms on our Site, such as your name, company name, email address, phone number, and city.</li>
            <li><strong>Usage Data:</strong> We automatically collect information about how you access and use the Site. This may include your IP address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.</li>
          </ul>

          <h2 className="text-gold-accent">How We Use Your Information</h2>
          <p>We use the collected information for various purposes:</p>
          <ul>
            <li>To provide and maintain our Service.</li>
            <li>To notify you about changes to our Service.</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so.</li>
            <li>To provide customer support.</li>
            <li>To gather analysis or valuable information so that we can improve our Service.</li>
            <li>To monitor the usage of our Service.</li>
            <li>To detect, prevent and address technical issues.</li>
          </ul>

          <h2 className="text-gold-accent">Disclosure of Your Information</h2>
          <p>We may disclose your Personal Information in the good faith belief that such action is necessary to:</p>
          <ul>
            <li>To comply with a legal obligation.</li>
            <li>To protect and defend the rights or property of {COMPANY_NAME}.</li>
            <li>To prevent or investigate possible wrongdoing in connection with the Service.</li>
            <li>To protect the personal safety of users of the Service or the public.</li>
            <li>To protect against legal liability.</li>
          </ul>

          <h2 className="text-gold-accent">Security of Your Data</h2>
          <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>

          <h2 className="text-gold-accent">Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

          <h2 className="text-gold-accent">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li>By email: <a href={`mailto:${INFO_EMAIL}`} className="text-gold-accent hover:underline">{INFO_EMAIL}</a></li>
            <li>By visiting this page on our website: <a href="/contact" className="text-gold-accent hover:underline">/contact</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;