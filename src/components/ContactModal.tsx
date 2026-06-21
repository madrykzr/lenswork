import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, CheckCircle2, DollarSign, Calendar } from 'lucide-react';
import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [sessionType, setSessionType] = useState<string>('Portrait Study');
  const [budget, setBudget] = useState<string>('Medium Budget');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 3500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay background blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 cursor-crosshair"
          />

          {/* Sliding Cabinet */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-[#0E0F0E] text-white border-l border-white/10 shadow-2xl p-6 md:p-10 z-50 overflow-y-auto flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-6">
              <div>
                <span className="font-mono text-[9px] tracking-widest text-[#C3F53C] block uppercase mb-1">
                  ★ RECORDING COMMISSION MODULE
                </span>
                <h3 className="font-sans font-black text-xl uppercase tracking-tight">
                  INQUIRE COMMISSION
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-white/5 hover:bg-[#C3F53C] hover:text-black rounded-full border border-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {formSubmitted ? (
              /* Success Panel */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="my-auto text-center space-y-4 py-12 px-4"
              >
                <CheckCircle2 className="w-16 h-16 text-[#C3F53C] mx-auto animate-bounce" />
                <h4 className="font-sans font-black text-2xl uppercase tracking-tighter text-white">
                  RECORDING INGESTED
                </h4>
                <p className="font-mono text-xs text-gray-400 uppercase leading-relaxed max-w-sm mx-auto">
                  Our lead director has received your parameters. Expect a comprehensive concept slate in your inbox within 24 hours.
                </p>
                <div className="pt-4">
                  <div className="inline-flex items-center space-x-2 font-mono text-[9px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[#C3F53C]">
                    <Sparkles className="w-3 h-3 text-[#C3F53C]" />
                    <span>LENSWORK DISPATCH TKN #LW-504</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Inquiry Form block */
              <form onSubmit={handleSubmit} className="space-y-6 my-auto py-8">
                {/* Form Row: Name */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                    Your Name // Entity
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.G. ALEXANDER HEIN"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-mono text-xs text-white uppercase placeholder-gray-600 focus:border-[#C3F53C]/60 outline-none transition-colors"
                  />
                </div>

                {/* Form Row: Email */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                    Digital Inbox Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.G. ALEXANDER@STUDIO.DE"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-mono text-xs text-white uppercase placeholder-gray-600 focus:border-[#C3F53C]/60 outline-none transition-colors"
                  />
                </div>

                {/* Service Picker */}
                <div className="space-y-2">
                  <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                    Desired Photography Segment
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Portrait Study', 'Fashion Editorial', 'Still Life Product', 'Architectural'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSessionType(type)}
                        className={`py-2 px-3 rounded-xl font-mono text-[9.5px] uppercase border transition-all text-left ${
                          sessionType === type
                            ? 'bg-[#C3F53C] text-black border-[#C3F53C] font-bold'
                            : 'bg-white/5 border-white/10 text-gray-350 hover:bg-white/10'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Multiplier */}
                <div className="space-y-2">
                  <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest font-semibold flex items-center space-x-1">
                    <DollarSign className="w-3 h-3 text-[#C3F53C]" />
                    <span>ESTIMATED INVESTMENT</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Lower Scale', 'Medium Scale', 'Campaign Scale'].map((scale) => (
                      <button
                        key={scale}
                        type="button"
                        onClick={() => setBudget(scale)}
                        className={`py-2 px-1.5 rounded-xl font-mono text-[8vw] md:text-[8px] uppercase border text-center transition-all ${
                          budget === scale
                            ? 'bg-[#0E0F0E] text-[#C3F53C] border-[#C3F53C]'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                        }`}
                      >
                        {scale}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message text area */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                    Brief Narrative Core / Specs
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="DESCRIBE STORYBOARD SPECIFICATIONS, STAGES, TIMELINES..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 font-mono text-xs text-white uppercase placeholder-gray-600 focus:border-[#C3F53C]/60 outline-none transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#C3F53C] hover:bg-white text-black py-4 rounded-xl font-mono text-xs uppercase font-extrabold flex items-center justify-center space-x-2 transition-colors cursor-pointer group"
                >
                  <span>DISPATCH CORE COMMISSION INQUIRY</span>
                  <Send className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}

            {/* Cabinet Footer */}
            <div className="border-t border-white/10 pt-6 flex justify-between items-center text-gray-500 font-mono text-[10px]">
              <span className="flex items-center space-x-1.5 text-gray-400 font-bold">
                <Calendar className="w-3.5 h-3.5 text-[#C3F53C]" />
                <span>BOOKINGS REMAIN STABLE</span>
              </span>
              <span>LENSWORK SYSTEM V1.0</span>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
