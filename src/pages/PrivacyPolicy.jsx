import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/sections/Footer.jsx";
import PageHeader from "../components/ui/PageHeader.jsx";

const LAST_UPDATED = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const SECTIONS = [
  {
    title: "1. Introduction",
    body: `Creoture operates this website. This Privacy Policy explains how we collect, use, and protect information when you visit our website or contact us about our services. By using this website, you agree to the terms described here.`,
  },
  {
    title: "2. Information We Collect",
    body: `We may collect information you provide directly, such as your name, email address, phone number, and project details when you submit a contact form or reach out to us. We may also collect limited technical information automatically, such as browser type, device information, and pages visited, to help us understand how our website is used.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use the information we collect to respond to inquiries, provide quotes and consultations, deliver the services you request, improve our website and offerings, and communicate with you about your project. We do not sell your personal information to third parties.`,
  },
  {
    title: "4. Cookies",
    body: `Our website may use cookies or similar technologies to support basic functionality and understand general usage patterns. You can control or disable cookies through your browser settings; doing so may affect certain features of the site.`,
  },
  {
    title: "5. Sharing Of Information",
    body: `We may share information with trusted third-party service providers who help us operate our website or deliver our services (for example, hosting or email providers), and only to the extent necessary for them to perform those services. We may also disclose information if required by law.`,
  },
  {
    title: "6. Data Security",
    body: `We take reasonable technical and organizational measures to protect the information we hold. However, no method of transmission or storage over the internet is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "7. Your Choices",
    body: `You may contact us at any time to ask what information we hold about you, to request a correction, or to request that we delete it, subject to any legal or legitimate business requirements to retain certain records.`,
  },
  {
    title: "8. Third-Party Links",
    body: `Our website may contain links to third-party websites, including social media platforms. We are not responsible for the privacy practices or content of those external sites.`,
  },
  {
    title: "9. Changes To This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated version will be posted on this page with a revised date.`,
  },
  {
    title: "10. Contact Us",
    body: `If you have questions about this Privacy Policy or how we handle your information, contact us at info.creoture@gmail.com or +92 324 5856347, Drigh Road, Karachi.`,
  },
];

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Legal"
          title="Privacy Policy"
          description={`Last updated: ${LAST_UPDATED}`}
        />

        <section className="px-4 sm:px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-3xl flex flex-col gap-10">
            {SECTIONS.map((section) => (
              <div key={section.title} className="flex flex-col gap-2.5">
                <h2 className="font-display text-lg font-semibold text-white">{section.title}</h2>
                <p className="!text-zinc-400 leading-relaxed text-sm sm:text-base">{section.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
