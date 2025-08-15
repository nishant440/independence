import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Preloader } from '../components/Preloader';
import { UserDetailsForm } from '../components/UserDetailsForm';
import { CelebrationMessage } from '../components/CelebrationMessage';
import { AnimatedHeader } from '../components/AnimatedHeader';
import { HeroBanner } from '../components/HeroBanner';
import { FlagCeremony } from '../components/FlagCeremony';
import { PersonalDetails } from '../components/PersonalDetails';
import { Footer } from '../components/Footer';
import { Fireworks } from '../components/Fireworks';
import { FloatingBalloons } from '../components/FloatingBalloons';

interface UserDetails {
  name: string;
  phone: string;
  email: string;
  city: string;
  age: string;
}

type AppState = 'loading' | 'form' | 'celebration' | 'main';

export default function Index() {
  const [appState, setAppState] = useState<AppState>('loading');
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const handleLoadingComplete = () => {
    setAppState('form');
  };

  const handleFormSubmit = (details: UserDetails) => {
    setUserDetails(details);
    setAppState('celebration');
  };

  const handleCelebrationContinue = () => {
    setAppState('main');
  };

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Add parallax effect on scroll for main content
  useEffect(() => {
    if (appState !== 'main') return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelectorAll('.parallax');
      const speed = 0.5;

      parallax.forEach((element) => {
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [appState]);

  // Loading state
  if (appState === 'loading') {
    return <Preloader onComplete={handleLoadingComplete} />;
  }

  // Form state
  if (appState === 'form') {
    return (
      <div className="min-h-screen">
        <UserDetailsForm onSubmit={handleFormSubmit} />
      </div>
    );
  }

  // Celebration message state
  if (appState === 'celebration' && userDetails) {
    return (
      <div className="min-h-screen">
        <CelebrationMessage 
          userDetails={userDetails} 
          onContinue={handleCelebrationContinue} 
        />
      </div>
    );
  }

  // Main website state
  return (
    <Fireworks>
      <div className="min-h-screen bg-tricolor-white">
        {/* Fixed Header */}
        <Header />
        
        {/* Floating balloons */}
        <FloatingBalloons />
        
        {/* Main content */}
        <main className="pt-16 md:pt-20">
          {/* Hero Section */}
          <section id="home" className="parallax">
            <AnimatedHeader />
          </section>

          {/* Celebration Section */}
          <section id="celebration">
            <HeroBanner />
          </section>

          {/* Flag Ceremony Section */}
          <section id="ceremony">
            {userDetails && (
              <FlagCeremony userDetails={userDetails} />
            )}
          </section>

          {/* About Developer Section */}
          <section id="about">
            <PersonalDetails />
          </section>
        </main>

        {/* Footer */}
        <Footer />

        {/* Click anywhere for fireworks hint */}
        <div className="fixed bottom-4 right-4 bg-gradient-to-r from-tricolor-saffron to-tricolor-green text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-xl z-50 animate-pulse backdrop-blur-sm border border-white/20">
          <span className="hidden md:inline">🎆 Click anywhere for fireworks!</span>
          <span className="md:hidden">🎆 Tap for fireworks!</span>
        </div>

        {/* Welcome message for user */}
        {userDetails && (
          <div className="fixed top-20 md:top-24 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white/90 backdrop-blur-md text-tricolor-navy px-4 py-3 rounded-2xl shadow-xl z-40 border border-white/30">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🙏</div>
              <div>
                <p className="font-semibold text-sm md:text-base">
                  Welcome {userDetails.name}!
                </p>
                <p className="text-xs md:text-sm text-tricolor-navy/70">
                  From {userDetails.city} • Independence Day Celebration
                </p>
              </div>
              <button 
                onClick={() => {
                  const elem = document.querySelector('.fixed.top-20') as HTMLElement;
                  if (elem) elem.style.display = 'none';
                }}
                className="text-tricolor-navy/50 hover:text-tricolor-navy text-xl"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </Fireworks>
  );
}
