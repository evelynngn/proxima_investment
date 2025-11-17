import { motion } from 'motion/react';
import { Theme } from '../../App';
import { X } from 'lucide-react';

interface PrivacyPageProps {
  theme: Theme;
  onClose: () => void;
}

export function PrivacyPage({ theme, onClose }: PrivacyPageProps) {
  const bgColor = theme === 'light' ? 'bg-white' : 'bg-[#010420]';
  const textColor = theme === 'light' ? 'text-[#010420]' : 'text-white';
  const subtextColor = theme === 'light' ? 'text-[#010420]/70' : 'text-white/70';
  const borderColor = theme === 'light' ? 'border-[#010420]/10' : 'border-white/10';
  const closeButtonColor = theme === 'light' ? 'text-[#010420]/60 hover:text-[#010420]' : 'text-white/60 hover:text-white';

  return (
    <div className={`fixed inset-0 ${bgColor} z-50 overflow-y-auto transition-colors duration-700`}>
      <div className="min-h-screen px-8 lg:px-16 py-32">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onClose}
            className={`fixed top-8 right-8 ${closeButtonColor} transition-colors duration-300`}
            aria-label="Close privacy policy"
          >
            <X className="w-8 h-8" />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className={`text-[clamp(2.5rem,6vw,4.5rem)] leading-tight ${textColor} mb-16`}>Privacy Policy</h1>

            <div className={`${textColor} space-y-12`}>
              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">1. Introduction</h2>
                <p className={`${subtextColor} leading-relaxed`}>
                  This Privacy Policy explains how Proxima Investments ("we," "our," or "the Firm") collects, uses, stores, and protects personal information. The Firm is currently in the process of establishing its legal entity and operates on a preliminary basis to explore advisory and investment opportunities in the technology, artificial intelligence, and blockchain sectors.
                </p>
                <p className={`${subtextColor} leading-relaxed mt-4`}>
                  We are committed to respecting your privacy and handling personal data responsibly, transparently, and in accordance with internationally recognized data-protection principles.
                </p>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">2. Information We Collect</h2>
                <p className={`${subtextColor} leading-relaxed mb-4`}>
                  We may collect and process the following types of information:
                </p>
                <ul className={`${subtextColor} space-y-3 pl-6 list-disc leading-relaxed`}>
                  <li><strong>Personal Information</strong> – such as your name, email address, phone number, professional title, and company affiliation when you voluntarily share it with us.</li>
                  <li><strong>Business Information</strong> – including materials, presentations, or pitch decks submitted for advisory or investment consideration.</li>
                  <li><strong>Technical Information</strong> – such as browser type, operating system, IP address, and pages visited on our website through cookies or analytics tools.</li>
                  <li><strong>Communications Data</strong> – such as correspondence through email, messaging platforms, or online forms.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">3. Purpose of Data Use</h2>
                <p className={`${subtextColor} leading-relaxed mb-4`}>
                  We use the information collected for the following legitimate purposes:
                </p>
                <ul className={`${subtextColor} space-y-2 pl-6 list-disc leading-relaxed`}>
                  <li>To evaluate potential advisory or investment opportunities.</li>
                  <li>To maintain professional communications with founders, partners, and stakeholders.</li>
                  <li>To conduct market research and improve operational processes.</li>
                  <li>To manage compliance and record-keeping obligations once formal registration occurs.</li>
                  <li>To respond to lawful requests or regulatory requirements when applicable.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">4. Data Sharing and Disclosure</h2>
                <p className={`${subtextColor} leading-relaxed mb-4`}>
                  We do not sell, rent, or trade personal data. Information may be shared only with:
                </p>
                <ul className={`${subtextColor} space-y-2 pl-6 list-disc leading-relaxed`}>
                  <li>Professional advisors (e.g., legal, tax, or compliance consultants).</li>
                  <li>Third-party service providers who assist in communication, data hosting, or analytics under confidentiality terms.</li>
                  <li>Potential business partners or affiliates under mutual non-disclosure obligations.</li>
                </ul>
                <p className={`${subtextColor} leading-relaxed mt-4`}>
                  We require all third parties to maintain security and confidentiality standards consistent with this Policy.
                </p>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">5. Data Retention</h2>
                <p className={`${subtextColor} leading-relaxed`}>
                  Information is retained only as long as necessary for the purposes outlined in this Policy or as required by applicable law. Once the Firm's legal entity is established, retention periods may be reviewed and updated in accordance with local regulations.
                </p>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">6. Security Measures</h2>
                <p className={`${subtextColor} leading-relaxed`}>
                  We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, alteration, or disclosure. Data may be stored using secure third-party services that employ encryption and industry-standard protection protocols.
                </p>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">7. Your Rights</h2>
                <p className={`${subtextColor} leading-relaxed mb-4`}>
                  Depending on your jurisdiction, you may have rights to:
                </p>
                <ul className={`${subtextColor} space-y-2 pl-6 list-disc leading-relaxed`}>
                  <li>Access and obtain a copy of your personal data.</li>
                  <li>Request correction or deletion of your information.</li>
                  <li>Withdraw consent for data processing, where applicable.</li>
                  <li>Object to or restrict certain processing activities.</li>
                </ul>
                <p className={`${subtextColor} leading-relaxed mt-4`}>
                  Requests may be directed to we@proxima.investments. We will make reasonable efforts to respond promptly.
                </p>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">8. International Data Transfers</h2>
                <p className={`${subtextColor} leading-relaxed`}>
                  As the Firm may operate globally, information could be stored or processed in multiple jurisdictions. We take appropriate steps to ensure any cross-border data transfers are conducted under adequate privacy protections and contractual safeguards.
                </p>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">9. Updates to This Policy</h2>
                <p className={`${subtextColor} leading-relaxed`}>
                  This Privacy Policy may be amended periodically to reflect new operational or legal requirements. The latest version will always be available on our communication channels, with the date of the most recent revision clearly stated above.
                </p>
              </section>

              <section className="pb-16">
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">10. Contact Information</h2>
                <p className={`${subtextColor} leading-relaxed mb-4`}>
                  If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:
                </p>
                <p className={`${subtextColor} leading-relaxed`}>
                  Email: <a href="mailto:we@proxima.investments" className="underline hover:opacity-70 transition-opacity">we@proxima.investments</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
