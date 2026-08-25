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
    title: "1. Agreement To Terms",
    body: `These Terms and Conditions govern your use of the Creoture website and any services you engage us for. By using this website or engaging our services, you agree to be bound by these terms. If you do not agree, please do not use our website or services.`,
  },
  {
    title: "2. Services",
    body: `Creoture provides website design and development, UI/UX design, custom web applications, eCommerce development, WordPress development, website maintenance and hosting, and SEO services. The exact scope, deliverables, timeline, and cost for any project will be agreed separately with each client before work begins.`,
  },
  {
    title: "3. Project Engagement",
    body: `Project timelines are estimates and depend on the scope, complexity, and responsiveness of the client during the discovery, design, development, and review stages. Delays in providing content, feedback, or approvals may affect the final delivery date.`,
  },
  {
    title: "4. Payments",
    body: `Payment terms, including any deposits, milestones, and final payments, will be agreed upon before a project begins. Work may be paused if agreed payments are not received on schedule.`,
  },
  {
    title: "5. Intellectual Property",
    body: `Upon full payment, ownership of the final deliverables (such as website design and code created specifically for the client) transfers to the client, unless otherwise agreed in writing. Creoture retains the right to showcase completed work in its portfolio unless the client requests otherwise.`,
  },
  {
    title: "6. Third-Party Tools And Licenses",
    body: `Some projects may rely on third-party platforms, plugins, themes, or services (such as hosting, domain registrars, or WordPress plugins). Ongoing fees or licenses for these tools are the client's responsibility unless otherwise agreed.`,
  },
  {
    title: "7. Website Content",
    body: `Clients are responsible for ensuring that any content, images, or materials they provide for use on their website do not infringe on the rights of any third party.`,
  },
  {
    title: "8. Maintenance And Support",
    body: `Ongoing maintenance, hosting, and support services are provided under separate terms or agreements, and are not automatically included with a one-time project unless specified.`,
  },
  {
    title: "9. Limitation Of Liability",
    body: `Creoture will make reasonable efforts to deliver reliable, well-tested work, but we do not guarantee that any website or application will be completely free of errors or uninterrupted at all times. To the extent permitted by law, Creoture is not liable for indirect or consequential losses arising from the use of our services.`,
  },
  {
    title: "10. Changes To These Terms",
    body: `We may update these Terms and Conditions from time to time. The updated version will be posted on this page with a revised date.`,
  },
  {
    title: "11. Contact Us",
    body: `If you have questions about these Terms and Conditions, contact us at info.creoture@gmail.com or +92 324 5856347, Drigh Road, Karachi.`,
  },
];

function TermsConditions() {
  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Legal"
          title="Terms & Conditions"
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

export default TermsConditions;
