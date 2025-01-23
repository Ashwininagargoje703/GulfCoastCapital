import React from "react";
import {
  ArrowRight,
  ChevronRight,
  Briefcase,
  LineChart,
  Shield,
  Home,
  PiggyBank,
  Users,
  Star,
} from "lucide-react";

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <Footer />
    </div>
  );
}

// Navbar Component
function Navbar() {
  return (
    <nav className="fixed w-full z-50  bg-black ">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div >
              <img
                src="https://image11112024.s3.eu-north-1.amazonaws.com/Gulf+image+6.png"
                alt="Gulf Coast Capital Logo"
            style={{width:"150px" , height:"100px"}}
              />
              <div className="absolute inset-0 "></div>
            </div>
            <div className="font-bold">
              <div className="text-4xl md:text-3xl leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent ">Gulf Coast Capital</div>
              <div className="text-sm tracking-wider leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">&amp; INVESTMENT</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {["About", "Services", "Why Us", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-emerald-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <>
    <section className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          alt="Modern cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      {/* Marquee */}
 

      {/* Hero Content */}
      <div className="relative min-h-screen container mx-auto px-6 flex items-center z-10">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Empowering Your Financial Growth
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-blue-100 font-light">
            Strategic Investment Solutions to Build, Grow, and Secure Your
            Wealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              text="Schedule a Free Consultation"
              icon={<ArrowRight className="w-5 h-5" />}
              primary
            />
            <Button
              text="Explore Our Services"
              icon={<ChevronRight className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>

    
    </section>

<div style={{marginTop:"-5rem"}}>
<marquee
  className="text-xl md:text-5xl font-bold text-white animate-marquee-400"
  behavior="scroll"
  direction="left"
  scrollamount="18" // Increase this number for faster scrolling
  style={{ height: "60px" }}
>
  Coming Soon!
</marquee>
</div>
</>
  );
}

// About Section
function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black via-blue-950/20 to-black"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Who We Are</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Gulf Coast Capital & Investment is a trusted partner in your
            financial journey. With years of expertise in asset management,
            private equity, and investment advisory, we help individuals and
            businesses achieve their financial aspirations. Our mission is to
            provide tailored solutions that drive long-term growth and security.
          </p>
          <Button
            text="Learn More About Us"
            icon={<ChevronRight className="w-5 h-5" />}
            link
          />
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Wealth Management",
      description: "Customized strategies to preserve and grow your wealth.",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Private Equity",
      description: "Unlocking high-potential investment opportunities.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Investment Advisory",
      description: "Expert guidance for smarter financial decisions.",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Real Estate Investments",
      description: "Profitable opportunities in real estate ventures.",
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Retirement Planning",
      description: "Secure your future with personalized retirement plans.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
          <div className="bg-blue-600/10 p-8 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors group">
            <Button
              text="Explore All Services"
              icon={<ChevronRight className="w-8 h-8" />}
              link
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Us Section
function WhyUsSection() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Tailored Solutions",
      description: "Every client is unique, and so are our strategies.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Proven Expertise",
      description:
        "Decades of experience in financial planning and investments.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transparency & Trust",
      description:
        "We believe in building relationships based on honesty and clarity.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Diverse Portfolio",
      description:
        "Access a wide range of investment opportunities tailored to your goals.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-20 bg-gradient-to-b from-black via-blue-950/20 to-black"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Why Gulf Coast Capital & Investment?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 bg-blue-950/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img
              src="https://image11112024.s3.eu-north-1.amazonaws.com/final_logo.png"
              alt="Gulf Coast Capital Logo"
              className="w-20 h-20 object-contain "
            />
            <span className="text-xl font-bold tracking-wide">
              Gulf Coast Capital & Investment
            </span>
          </div>
          <div className="flex space-x-6">
            {["Home", "About Us", "Services", "Contact Us"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm">
          © 2025 Gulf Coast Capital & Investment. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// Reusable Components
function Button({ text, icon, primary, link }) {
  const baseClasses =
    "px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors";
  const primaryClasses = "bg-blue-600 hover:bg-blue-700 text-white";
  const secondaryClasses =
    "border border-blue-400 hover:bg-blue-600/10 text-white";
  const linkClasses =
    "inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300";

  return (
    <button
      className={`${
        link ? linkClasses : primary ? primaryClasses : secondaryClasses
      } ${baseClasses}`}
    >
      <span>{text}</span>
      {icon}
    </button>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-blue-600/10 p-8 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-blue-600/10 p-6 rounded-lg border border-blue-500/20">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;
