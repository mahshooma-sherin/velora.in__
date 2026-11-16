import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../context/StoreContext';
import {
  MessageCircle,
  Instagram,
  Send,
  CheckCircle,
  Calendar,
  Phone,
  User,
  Heart,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ContactSectionProps {
  preselectedTemplateId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedTemplateId }) => {
  const { settings, getWhatsAppLink, addEnquiry, selectedOrderTemplate, templates } = useStore();

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [eventType, setEventType] = useState('Wedding Ceremony');
  const [eventDate, setEventDate] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('Classic Package (₹799)');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedId, setSubmittedId] = useState('');

  // Auto-populate template if passed or selected in store
  useEffect(() => {
    if (selectedOrderTemplate) {
      setSelectedTemplate(`${selectedOrderTemplate.id} - ${selectedOrderTemplate.name}`);
      setSelectedPackage(`${selectedOrderTemplate.collectionName} (₹${selectedOrderTemplate.price})`);
    } else if (preselectedTemplateId) {
      const match = templates.find((t) => t.id === preselectedTemplateId);
      if (match) {
        setSelectedTemplate(`${match.id} - ${match.name}`);
        setSelectedPackage(`${match.collectionName} (₹${match.price})`);
      }
    }
  }, [selectedOrderTemplate, preselectedTemplateId, templates]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) return;

    const newEnquiry = addEnquiry({
      name,
      whatsapp,
      eventType,
      eventDate,
      selectedPackage,
      templateId: selectedTemplate,
      message,
    });

    setSubmittedId(newEnquiry.id);
    setSubmitted(true);

    // Automatically open WhatsApp with the pre-filled enquiry directly to the business owner (+91 70254 23395)
    const formattedMsg = `*VELORA CELEBRATION ENQUIRY (#${newEnquiry.id})*
• *Customer Name:* ${name}
• *WhatsApp Number:* ${whatsapp}
• *Event Type:* ${eventType}
• *Event Date:* ${eventDate || 'TBD'}
• *Selected Package:* ${selectedPackage}
${selectedTemplate ? `• *Template Choice:* ${selectedTemplate}\n` : ''}${message ? `• *Customer Notes:* ${message}\n` : ''}
Sent from Velora Website`;

    const forwardUrl = getWhatsAppLink(formattedMsg);
    window.open(forwardUrl, '_blank');
  };

  const getWhatsAppForwardUrl = () => {
    const formattedMsg = `*VELORA ENQUIRY (#${submittedId || 'NEW'})*
• *Name:* ${name}
• *WhatsApp:* ${whatsapp}
• *Event Type:* ${eventType}
• *Event Date:* ${eventDate || 'TBD'}
• *Selected Package:* ${selectedPackage}
${selectedTemplate ? `• *Template Choice:* ${selectedTemplate}\n` : ''}${message ? `• *Notes:* ${message}\n` : ''}
Looking forward to creating something beautiful with Velora!`;

    return getWhatsAppLink(formattedMsg);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#EFE5D8]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE5D8] border border-[#C6A16B]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A16B]" />
            <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#34251D] font-medium">
              Start Your Journey
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#34251D] tracking-tight">
            Contact & Custom Enquiries
          </h2>

          <p className="text-sm sm:text-base text-[#514338]/90 font-sans leading-relaxed">
            Ready to bring your love story to life? Submit your celebration details below or chat with our design team instantly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct WhatsApp & Studio Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-[#C6A16B]/25 shadow-luxury space-y-6">
              
              <div>
                <span className="text-xs font-serif uppercase tracking-widest text-[#C6A16B] font-semibold">
                  Personalized Assistance
                </span>
                <h3 className="font-serif text-2xl text-[#34251D] mt-1">
                  Chat Directly with Our Creative Director
                </h3>
                <p className="text-xs sm:text-sm text-[#7E6F64] mt-2 leading-relaxed">
                  We answer questions, help select the right template for your cultural traditions, and take custom requests.
                </p>
              </div>

              {/* Instant WhatsApp Action Card */}
              <div className="p-5 rounded-2xl bg-[#F8F3EC] border border-[#C6A16B]/30 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#34251D] flex items-center justify-center text-[#C6A16B]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#34251D]">WhatsApp Business</h4>
                    <p className="text-xs text-[#7E6F64]">+91 70254 23395 • Active 7 Days</p>
                  </div>
                </div>

                <a
                  href={getWhatsAppLink('Hi Velora! I would like to enquire about a wedding website.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#34251D] text-[#F8F3EC] text-xs uppercase tracking-wider font-medium hover:bg-[#C6A16B] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#C6A16B]" />
                  <span>Open WhatsApp Direct Chat</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2 border-t border-[#C6A16B]/20">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#7E6F64]">Direct Enquiry:</span>
                  <a
                    href="tel:+917025423395"
                    className="font-medium text-[#34251D] hover:text-[#C6A16B] transition-colors"
                  >
                    +91 70254 23395
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#7E6F64]">Instagram Portfolio:</span>
                  <a
                    href={`https://instagram.com/${settings.instagramHandle.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#34251D] hover:text-[#C6A16B] flex items-center gap-1.5 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#C6A16B]" />
                    <span>{settings.instagramHandle}</span>
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#7E6F64]">Turnaround Delivery:</span>
                  <span className="text-[#34251D] font-medium">Within 24 to 48 Hours</span>
                </div>
              </div>

            </div>

            {/* Editorial Quote Card */}
            <div className="bg-[#34251D] text-[#F8F3EC] rounded-3xl p-7 shadow-xl space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A16B]/10 rounded-full blur-2xl" />
              <Heart className="w-6 h-6 text-[#C6A16B]" />
              <h4 className="font-serif text-xl italic font-light">
                "Every love story deserves its own design."
              </h4>
              <p className="text-xs text-[#EFE5D8]/80 leading-relaxed">
                From your first greeting to the final RSVP, Velora creates an invitation your loved ones will remember forever.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form / Confirmation Message */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#C6A16B]/25 shadow-luxury">
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Confirmation View */
                  <motion.div
                    key="confirmed"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#C6A16B] font-semibold">
                        Thank You, {name}!
                      </span>
                      <h3 className="font-serif text-3xl text-[#34251D]">
                        Your Enquiry Has Been Received
                      </h3>
                      <p className="text-xs sm:text-sm text-[#7E6F64] max-w-md mx-auto leading-relaxed">
                        Enquiry Reference: <span className="font-mono text-[#34251D] font-semibold">{submittedId}</span>. Our design team will connect with you on WhatsApp ({whatsapp}) shortly.
                      </p>
                    </div>

                    {/* Instant WhatsApp Continuity Button */}
                    <div className="pt-4 max-w-md mx-auto space-y-3">
                      <a
                        href={getWhatsAppForwardUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#34251D] text-[#F8F3EC] text-xs uppercase tracking-widest font-medium hover:bg-[#C6A16B] transition-colors shadow-md"
                      >
                        <MessageCircle className="w-4 h-4 text-[#C6A16B]" />
                        <span>Continue to WhatsApp with this Enquiry</span>
                      </a>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setName('');
                          setWhatsapp('');
                          setMessage('');
                        }}
                        className="text-xs text-[#7E6F64] hover:text-[#34251D] underline"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Functional Enquiry Form */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="font-serif text-2xl text-[#34251D]">
                        Share Your Celebration Details
                      </h3>
                      <p className="text-xs text-[#7E6F64] mt-1">
                        Fill in what you know; we can finalize photos, music and RSVP preferences together.
                      </p>
                    </div>

                    {/* Name & WhatsApp Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-[#34251D] flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#C6A16B]" />
                          <span>Customer Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ayesha / Rohan"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#F8F3EC]/50 border border-[#C6A16B]/30 text-[#34251D] focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-[#34251D] flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#C6A16B]" />
                          <span>WhatsApp Number *</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#F8F3EC]/50 border border-[#C6A16B]/30 text-[#34251D] focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
                        />
                      </div>
                    </div>

                    {/* Event Type & Event Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-[#34251D] flex items-center gap-1.5">
                          <Heart className="w-3.5 h-3.5 text-[#C6A16B]" />
                          <span>Event Type</span>
                        </label>
                        <select
                          value={eventType}
                          onChange={(e) => setEventType(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#F8F3EC]/50 border border-[#C6A16B]/30 text-[#34251D] focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
                        >
                          <option value="Wedding Ceremony">Wedding Ceremony</option>
                          <option value="Nikah Ceremony">Nikah Ceremony</option>
                          <option value="Engagement">Engagement & Ring Ceremony</option>
                          <option value="Save the Date">Save the Date Announcement</option>
                          <option value="Grand Reception">Grand Reception</option>
                          <option value="Milestone Birthday">Milestone Birthday</option>
                          <option value="Other Celebration">Other Celebration</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-[#34251D] flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#C6A16B]" />
                          <span>Event Date (or Approximate Month)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Dec 2026 or 14/01/2027"
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#F8F3EC]/50 border border-[#C6A16B]/30 text-[#34251D] focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
                        />
                      </div>
                    </div>

                    {/* Selected Package & Template Preference */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-[#34251D]">
                          Selected Package
                        </label>
                        <select
                          value={selectedPackage}
                          onChange={(e) => setSelectedPackage(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#F8F3EC]/50 border border-[#C6A16B]/30 text-[#34251D] focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
                        >
                          <option value="Starter Package (₹499)">Starter Package – ₹499</option>
                          <option value="Classic Package (₹799)">Classic Package – ₹799</option>
                          <option value="Royal Premium (₹999)">Royal Premium – ₹999</option>
                          <option value="Luxury Haute (₹1,499)">Luxury Haute – ₹1,499</option>
                          <option value="Bespoke Exclusive (₹1,999)">Bespoke Exclusive – ₹1,999</option>
                          <option value="Customized Package">Customized Package / Not Sure Yet</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-[#34251D]">
                          Preferred Template / Design
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. A1 - Erfana & Sukail or Floral"
                          value={selectedTemplate}
                          onChange={(e) => setSelectedTemplate(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#F8F3EC]/50 border border-[#C6A16B]/30 text-[#34251D] focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
                        />
                      </div>
                    </div>

                    {/* Message / Special Requests */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#34251D]">
                        Your Message / Special Requests
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your venue, color palette preferences, or any specific music tracks you love..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#F8F3EC]/50 border border-[#C6A16B]/30 text-[#34251D] focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-full bg-[#34251D] hover:bg-[#C6A16B] text-[#F8F3EC] text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
                      >
                        <MessageCircle className="w-4 h-4 text-[#C6A16B] group-hover:text-white transition-colors" />
                        <span>Submit & Send Enquiry via WhatsApp</span>
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-[#7E6F64] pt-1">
                      📱 Opens WhatsApp directly with your enquiry to our team at +91 70254 23395.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

