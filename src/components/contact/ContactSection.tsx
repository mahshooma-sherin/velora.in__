import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../context/StoreContext';
import {
  MessageCircle,
  Phone,
  Sparkles,
  ArrowRight,
  Heart,
  Instagram,
  Send,
  Calendar,
  User,
  CheckCircle2
} from 'lucide-react';

interface ContactSectionProps {
  preselectedTemplateId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedTemplateId }) => {
  const { getWhatsAppLink, settings } = useStore();

  const [name, setName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [interest, setInterest] = useState('Wedding Website');
  const [notes, setNotes] = useState('');

  const quickEnquiries = [
    {
      title: 'Wedding Website',
      desc: 'Interactive link with RSVP, Maps & Music',
      icon: '💍',
      message: 'Hi Velora! I would like to create a personalised wedding website. Could you share the details?'
    },
    {
      title: 'Digital Video Invitation',
      desc: 'Animated story reel for WhatsApp & Instagram',
      icon: '💌',
      message: 'Hi Velora! I would like to get an animated digital video invitation. Could you share sample videos?'
    },
    {
      title: 'Save the Date / Nikah Card',
      desc: 'High-res interactive card with location pin',
      icon: '✨',
      message: 'Hi Velora! I am looking for a Save the Date / Nikah invitation design.'
    },
    {
      title: 'Talk Directly with Designer',
      desc: 'Discuss custom theme, pricing or rush delivery',
      icon: '💬',
      message: 'Hi Velora! I have a few questions about your designs and would like to talk directly with a designer.'
    }
  ];

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `*NEW ENQUIRY FOR VELORA*
• *Name:* ${name || 'Customer'}
• *Looking for:* ${interest}
${eventDate ? `• *Event Date:* ${eventDate}\n` : ''}${notes ? `• *Details:* ${notes}\n` : ''}
Hello Velora team, I would love to know more!`;

    window.open(getWhatsAppLink(formatted), '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#EFE5D8]/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE5D8] border border-[#C6A16B]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A16B]" />
            <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#34251D] font-medium">
              Instant WhatsApp Support
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#34251D] tracking-tight">
            Connect with Velora
          </h2>

          <p className="text-sm sm:text-base text-[#514338]/90 font-sans leading-relaxed">
            No complicated forms. Chat directly with our design team on WhatsApp at <strong className="text-[#34251D] font-semibold">+91 70254 23395</strong> to choose your template and get started.
          </p>
        </div>

        {/* 1-Tap Quick Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {quickEnquiries.map((item, idx) => (
            <motion.a
              key={idx}
              href={getWhatsAppLink(item.message)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="bg-white p-5 rounded-2xl border border-[#C6A16B]/25 hover:border-[#C6A16B] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <h4 className="font-serif text-base font-medium text-[#34251D] group-hover:text-[#C6A16B] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#7E6F64] mt-1 leading-snug">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#C6A16B]/15 flex items-center justify-between text-xs text-[#C6A16B] font-medium">
                <span>Chat Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Simplified Direct Enquiry Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#C6A16B]/30 shadow-luxury max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#C6A16B]/20">
            <div>
              <h3 className="font-serif text-2xl text-[#34251D]">
                Quick Enquiry to WhatsApp
              </h3>
              <p className="text-xs text-[#7E6F64] mt-0.5">
                Send your details in seconds. We reply within minutes.
              </p>
            </div>

            <a
              href="tel:+917025423395"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-[#F8F3EC] text-[#34251D] border border-[#C6A16B]/30 hover:bg-[#EFE5D8] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A16B]" />
              <span>+91 70254 23395</span>
            </a>
          </div>

          <form onSubmit={handleCustomSend} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#34251D] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C6A16B]" />
                  <span>Your Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ayesha / Rahul"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#F8F3EC]/50 border border-[#C6A16B]/30 text-[#34251D] focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#34251D] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C6A16B]" />
                  <span>Event Date or Month</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. December 2026"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#F8F3EC]/50 border border-[#C6A16B]/30 text-[#34251D] focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#34251D]">
                  I am interested in:
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#F8F3EC]/50 border border-[#C6A16B]/30 text-[#34251D] focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
                >
                  <option value="Wedding Website (from ₹499)">Wedding Website (from ₹499)</option>
                  <option value="Digital Video Invitation">Digital Video Invitation</option>
                  <option value="Save The Date Announcement">Save The Date Announcement</option>
                  <option value="Bespoke Luxury Suite (₹1,499 - ₹1,999)">Bespoke Luxury Suite (₹1,499 - ₹1,999)</option>
                  <option value="Custom Requirement">Custom Requirement</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#34251D]">
                  Any specific notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Islamic Nikah, Traditional Hindu, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#F8F3EC]/50 border border-[#C6A16B]/30 text-[#34251D] focus:outline-none focus:ring-1 focus:ring-[#C6A16B]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-full bg-[#34251D] hover:bg-[#C6A16B] text-white text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 group"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A16B] group-hover:text-white transition-colors" />
                <span>Send via WhatsApp (+91 70254 23395)</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-[11px] text-[#7E6F64]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A16B]" />
                <span>Instant direct reply</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A16B]" />
                <span>No registration required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A16B]" />
                <span>Custom design assistance</span>
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
