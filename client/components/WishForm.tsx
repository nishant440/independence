import React, { useState } from 'react';
import { Send, Heart, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Wish {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

export const WishForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [wishes, setWishes] = useState<Wish[]>([
    {
      id: 1,
      name: "Priya Sharma",
      message: "Happy Independence Day! Proud to be an Indian! 🇮🇳",
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      message: "Jai Hind! Let's celebrate our freedom and unity.",
      timestamp: new Date(Date.now() - 7200000)
    },
    {
      id: 3,
      name: "Anita Patel",
      message: "Remembering our heroes on this special day. Vande Mataram!",
      timestamp: new Date(Date.now() - 10800000)
    }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newWish: Wish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date()
    };
    
    setWishes(prev => [newWish, ...prev]);
    setName('');
    setMessage('');
    setIsSubmitting(false);
    
    // Show success animation
    const button = document.querySelector('.submit-button');
    button?.classList.add('animate-bounce');
    setTimeout(() => button?.classList.remove('animate-bounce'), 1000);
  };

  const getGlowColor = (fieldName: string) => {
    if (focusedField === fieldName) {
      return 'shadow-lg shadow-tricolor-saffron/50 border-tricolor-saffron';
    }
    return 'border-white/30';
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    if (diffInHours < 1) return 'Just now';
    if (diffInHours === 1) return '1 hour ago';
    return `${diffInHours} hours ago`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-tricolor-saffron/10 via-tricolor-white to-tricolor-navy/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className={"bg-[url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23FF9933\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M40 0L43.8 28.2H72L51.6 45.2L58.2 73.2L40 56.2L21.8 73.2L28.4 45.2L8 28.2H36.2L40 0Z\"/%3E%3C/g%3E%3C/svg%3E')] h-full w-full"} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-tricolor-navy mb-4">
              Share Your Independence Day Wishes
            </h2>
            <p className="text-lg md:text-xl text-tricolor-navy/80 max-w-3xl mx-auto">
              Express your patriotic spirit and join the celebration. Your wishes will inspire others to cherish our freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Wish form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl p-8 hover:shadow-tricolor-green/20 transition-all duration-500">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-2 text-2xl font-semibold text-tricolor-navy">
                    <Flag size={28} className="text-tricolor-saffron" />
                    <span>Send Your Wishes</span>
                    <Heart size={28} className="text-tricolor-green" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-tricolor-navy">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={cn(
                        "w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border-2 text-tricolor-navy placeholder-tricolor-navy/60 transition-all duration-300 focus:outline-none focus:scale-105",
                        getGlowColor('name')
                      )}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-tricolor-navy">
                      Independence Day Wish
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      className={cn(
                        "w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border-2 text-tricolor-navy placeholder-tricolor-navy/60 transition-all duration-300 focus:outline-none focus:scale-105 resize-none",
                        getGlowColor('message')
                      )}
                      placeholder="Share your Independence Day message..."
                      required
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !name.trim() || !message.trim()}
                    className="submit-button w-full bg-gradient-to-r from-tricolor-saffron to-tricolor-green hover:from-tricolor-green hover:to-tricolor-saffron text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Wishes</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Wishes display */}
            <div className="order-1 lg:order-2">
              <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl p-8 h-96 overflow-hidden">
                <h3 className="text-2xl font-semibold text-tricolor-navy mb-6 text-center">
                  Recent Wishes 💝
                </h3>
                
                <div className="space-y-4 h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-tricolor-saffron scrollbar-track-white/20">
                  {wishes.map((wish) => (
                    <div
                      key={wish.id}
                      className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-102"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-tricolor-navy">{wish.name}</h4>
                        <span className="text-xs text-tricolor-navy/60">{formatTimeAgo(wish.timestamp)}</span>
                      </div>
                      <p className="text-tricolor-navy/80 text-sm leading-relaxed">{wish.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 text-3xl animate-float">🎆</div>
      <div className="absolute top-20 right-20 text-2xl animate-float" style={{ animationDelay: "1s" }}>✨</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-float" style={{ animationDelay: "2s" }}>🎊</div>
    </section>
  );
};
