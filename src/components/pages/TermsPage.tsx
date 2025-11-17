import { motion } from 'motion/react';
import { Theme } from '../../App';
import { X } from 'lucide-react';

interface TermsPageProps {
  theme: Theme;
  onClose: () => void;
}

export function TermsPage({ theme, onClose }: TermsPageProps) {
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
            aria-label="Close terms and conditions"
          >
            <X className="w-8 h-8" />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className={`text-[clamp(2.5rem,6vw,4.5rem)] leading-tight ${textColor} mb-16`}>Terms and Conditions</h1>

            <div className={`${textColor} space-y-12`}>
              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">1. Introduction</h2>
                <p className={`${subtextColor} leading-relaxed mb-4`}>
                  Welcome to Proxima Investments ("we," "our," or "the Firm"). These Terms and Conditions ("Terms") govern your use of our website, communications, and any materials or information made available by the Firm.
                </p>
                <p className={`${subtextColor} leading-relaxed`}>
                  By accessing or using any of our services, you agree to comply with these Terms. If you do not agree, you should discontinue use of our materials and platforms immediately.
                </p>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">2. Firm Status</h2>
                <p className={`${subtextColor} leading-relaxed mb-4`}>
                  Proxima Investments is in the process of establishing a formal legal entity and currently operates in a limited capacity for the purposes of research, investment evaluation, and professional advisory discussions.
                </p>
                <p className={`${subtextColor} leading-relaxed`}>
                  Nothing on this website or in our communications constitutes a legally binding offer, solicitation, or agreement to invest, advise, or transact until the Firm's legal incorporation and necessary regulatory clearances are complete.
                </p>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">3. Use of Information</h2>
                <ul className={`${subtextColor} space-y-2 pl-6 list-disc leading-relaxed`}>
                  <li>The materials and information provided by the Firm are for informational and educational purposes only.</li>
                  <li>They do not constitute investment, legal, financial, or tax advice.</li>
                  <li>You should conduct your own due diligence and seek independent professional advice before making any decision based on information obtained from us.</li>
                  <li>The Firm reserves the right to modify, update, or remove information at any time without notice.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">4. Intellectual Property</h2>
                <ul className={`${subtextColor} space-y-2 pl-6 list-disc leading-relaxed`}>
                  <li>All content, logos, trademarks, and materials on this website or provided by the Firm are the intellectual property of Proxima Investments or its licensors.</li>
                  <li>You may not reproduce, distribute, modify, or exploit such materials without prior written consent.</li>
                  <li>Any unauthorized use of the Firm's intellectual property may result in legal action once the Firm's entity formation is completed.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">5. Confidentiality and Submissions</h2>
                <ul className={`${subtextColor} space-y-2 pl-6 list-disc leading-relaxed`}>
                  <li>Any information submitted to the Firm—such as business plans, pitch decks, or related materials—will be treated with reasonable confidentiality and professional care.</li>
                  <li>Submission of such materials does not establish any fiduciary, partnership, or advisory relationship between the submitting party and the Firm.</li>
                  <li>The Firm is under no obligation to pursue, respond to, or invest in any opportunity submitted unless formal agreements are executed.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">6. Limitation of Liability</h2>
                <ul className={`${subtextColor} space-y-2 pl-6 list-disc leading-relaxed`}>
                  <li>The Firm provides all materials and communications "as is" without warranty of any kind.</li>
                  <li>To the fullest extent permitted by law, the Firm shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or reliance upon, its materials or communications.</li>
                  <li>The Firm disclaims all warranties regarding accuracy, completeness, and fitness for purpose of information shared prior to incorporation.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">7. Third-Party Links</h2>
                <ul className={`${subtextColor} space-y-2 pl-6 list-disc leading-relaxed`}>
                  <li>Our website or communications may contain links to third-party websites or content.</li>
                  <li>These links are provided for convenience only, and the Firm assumes no responsibility or liability for the content, security, or practices of such third parties.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">8. No Offer or Solicitation</h2>
                <p className={`${subtextColor} leading-relaxed`}>
                  Nothing contained on the Firm's website or in its communications constitutes an offer or solicitation to buy or sell securities, financial instruments, or advisory services in any jurisdiction where such offer or solicitation would be unlawful prior to regulatory approval or entity formation.
                </p>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">9. Governing Law</h2>
                <p className={`${subtextColor} leading-relaxed`}>
                  These Terms are governed by general principles of international commercial practice. Once a legal domicile is established, the Terms will be governed by and construed in accordance with the laws of that jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">10. Updates to These Terms</h2>
                <p className={`${subtextColor} leading-relaxed`}>
                  We may revise or update these Terms from time to time. Any modifications will take effect immediately upon posting or distribution. Continued use of our website or services following such updates constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section className="pb-16">
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-4">11. Contact Information</h2>
                <p className={`${subtextColor} leading-relaxed mb-4`}>
                  If you have any questions or concerns regarding these Terms, please contact us at:
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
