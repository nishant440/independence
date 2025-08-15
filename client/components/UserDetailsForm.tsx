import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserDetails {
  name: string;
  phone: string;
  email: string;
  city: string;
  age: string;
}

interface UserDetailsFormProps {
  onSubmit: (details: UserDetails) => void;
}

export const UserDetailsForm: React.FC<UserDetailsFormProps> = ({ onSubmit }) => {
  const [details, setDetails] = useState<UserDetails>({
    name: '',
    phone: '',
    email: '',
    city: '',
    age: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (!details.name.trim() || !details.phone.trim() || !details.email.trim() || !details.city.trim() || !details.age.trim()) {
      alert('Please fill all fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onSubmit(details);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof UserDetails, value: string) => {
    setDetails(prev => ({ ...prev, [field]: value }));
  };

  const getGlowColor = (fieldName: string) => {
    if (focusedField === fieldName) {
      return 'shadow-lg shadow-tricolor-saffron/50 border-tricolor-saffron scale-105';
    }
    return 'border-white/30';
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-tricolor-saffron/20 via-tricolor-white to-tricolor-green/20 flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <User size={48} className="text-tricolor-navy" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-tricolor-navy mb-2">
            Welcome to Independence Day 2025!
          </h2>
          <p className="text-lg text-tricolor-navy/80">
            Join our Independence Day celebration by sharing your details
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <div className="space-y-2">
              <label htmlFor="name" className="flex items-center space-x-2 text-sm font-medium text-tricolor-navy">
                <User size={16} />
                <span>Your Full Name</span>
              </label>
              <input
                type="text"
                id="name"
                value={details.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={cn(
                  "w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border-2 text-tricolor-navy placeholder-tricolor-navy/60 transition-all duration-300 focus:outline-none",
                  getGlowColor('name')
                )}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Phone field */}
            <div className="space-y-2">
              <label htmlFor="phone" className="flex items-center space-x-2 text-sm font-medium text-tricolor-navy">
                <Phone size={16} />
                <span>Phone Number</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={details.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className={cn(
                  "w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border-2 text-tricolor-navy placeholder-tricolor-navy/60 transition-all duration-300 focus:outline-none",
                  getGlowColor('phone')
                )}
                placeholder="+91 9876543210"
                required
              />
            </div>

            {/* Email field */}
            <div className="space-y-2">
              <label htmlFor="email" className="flex items-center space-x-2 text-sm font-medium text-tricolor-navy">
                <Mail size={16} />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                id="email"
                value={details.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={cn(
                  "w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border-2 text-tricolor-navy placeholder-tricolor-navy/60 transition-all duration-300 focus:outline-none",
                  getGlowColor('email')
                )}
                placeholder="your.email@gmail.com"
                required
              />
            </div>

            {/* City field */}
            <div className="space-y-2">
              <label htmlFor="city" className="flex items-center space-x-2 text-sm font-medium text-tricolor-navy">
                <MapPin size={16} />
                <span>City</span>
              </label>
              <input
                type="text"
                id="city"
                value={details.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                onFocus={() => setFocusedField('city')}
                onBlur={() => setFocusedField(null)}
                className={cn(
                  "w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border-2 text-tricolor-navy placeholder-tricolor-navy/60 transition-all duration-300 focus:outline-none",
                  getGlowColor('city')
                )}
                placeholder="Your city name"
                required
              />
            </div>

            {/* Age field */}
            <div className="space-y-2">
              <label htmlFor="age" className="flex items-center space-x-2 text-sm font-medium text-tricolor-navy">
                <Calendar size={16} />
                <span>Age</span>
              </label>
              <input
                type="number"
                id="age"
                value={details.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                onFocus={() => setFocusedField('age')}
                onBlur={() => setFocusedField(null)}
                className={cn(
                  "w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border-2 text-tricolor-navy placeholder-tricolor-navy/60 transition-all duration-300 focus:outline-none",
                  getGlowColor('age')
                )}
                placeholder="25"
                min="1"
                max="120"
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-tricolor-saffron to-tricolor-green hover:from-tricolor-green hover:to-tricolor-saffron text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Joining the Celebration...</span>
                </>
              ) : (
                <>
                  <span>🎆 Join Independence Day 2025 Celebration! 🎆</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer message */}
        <div className="text-center mt-8">
          <p className="text-tricolor-navy/80 text-sm">
            🇮🇳 Your information is completely secure 🇮🇳
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-4xl animate-float">🎈</div>
      <div className="absolute top-20 right-20 text-3xl animate-float" style={{ animationDelay: "1s" }}>🎊</div>
      <div className="absolute bottom-20 left-20 text-5xl animate-float" style={{ animationDelay: "2s" }}>🎆</div>
      <div className="absolute bottom-10 right-10 text-2xl animate-float" style={{ animationDelay: "0.5s" }}>✨</div>
    </section>
  );
};
