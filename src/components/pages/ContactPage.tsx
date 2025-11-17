import { motion } from 'motion/react';
import { useState } from 'react';
import { Theme } from '../../App';
import { toast } from 'sonner@2.0.3';

interface ContactPageProps {
  theme: Theme;
}

export function ContactPage({ theme }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Web3Forms submission
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '97803f03-feee-4d97-a54a-f3e5d7a1766c',
          subject: `${formData.name} - ${formData.email}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: 'evelyn@proxima.investments',
          // Format the email body as specified
          custom_fields: {
            Name: formData.name,
            Email: formData.email,
            Message: formData.message
          }
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank you for your interest. We will be in touch soon.');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error submitting your message. Please try again or email us directly at evelyn@proxima.investments');
    } finally {
      setIsSubmitting(false);
    }
  };

  const bgColor = theme === 'light' ? 'bg-white' : 'bg-[#020847]';
  const textColor = theme === 'light' ? 'text-[#020847]' : 'text-white';
  const inputBorderColor = theme === 'light' ? 'border-[#020847]/10' : 'border-white/10';
  const inputFocusBorder = theme === 'light' ? 'focus:border-[#020847]/40' : 'focus:border-white/40';
  const placeholderColor = theme === 'light' ? 'placeholder:text-[#020847]/30' : 'placeholder:text-white/30';
  const buttonBg = theme === 'light' ? 'bg-[#020847]' : 'bg-white';
  const buttonText = theme === 'light' ? 'text-white' : 'text-black';
  const buttonHover = theme === 'light' ? 'hover:bg-[#020847]/90' : 'hover:bg-white/90';

  return (
    <div className={`min-h-screen ${bgColor} pt-32 px-8 lg:px-16 pb-32 transition-colors duration-700`}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h1 className={`text-[clamp(2.5rem,6vw,4.5rem)] leading-tight ${textColor} mb-8`}>Contact Us</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className={`w-full bg-transparent border-b ${inputBorderColor} ${textColor} px-0 py-4 focus:outline-none ${inputFocusBorder} transition-all duration-300 ${placeholderColor}`}
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className={`w-full bg-transparent border-b ${inputBorderColor} ${textColor} px-0 py-4 focus:outline-none ${inputFocusBorder} transition-all duration-300 ${placeholderColor}`}
              />
            </div>
            
            <div>
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className={`w-full bg-transparent border ${inputBorderColor} ${textColor} px-4 py-4 focus:outline-none ${inputFocusBorder} transition-all duration-300 ${placeholderColor} resize-none mt-4`}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-8 w-full ${buttonBg} ${buttonText} py-5 ${buttonHover} transition-all duration-300 tracking-wider text-sm text-center font-bold disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
