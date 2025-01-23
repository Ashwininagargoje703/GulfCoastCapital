import React, { useState } from "react";
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
  Menu,
  X,
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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Function for scrolling to a section
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false); // Close the drawer after clicking a link
  };

  return (
    <nav className="fixed w-full z-50 bg-black">
      <div className="container mx-auto px-4 md:px-1">
        <div className="flex justify-between items-center py-1">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img
              src="https://image11112024.s3.eu-north-1.amazonaws.com/Gulf+only+logo.png"
              alt="Gulf Coast Capital Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300"
            />
            <div className="font-bold leading-tight">
              <div className="text-lg sm:text-2xl md:text-3xl bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent tracking-wide shadow-lg">
                Gulf Coast Capital
              </div>
              <div className="text-sm sm:text-lg md:text-xl bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent tracking-wide">
                & Investment
              </div>
            </div>
          </div>

          {/* Navigation Links for Larger Screens */}
          <div className="hidden md:flex space-x-6">
            {["About", "Services", "Why Us"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  handleScroll(`#${item.toLowerCase().replace(" ", "-")}`)
                  
                }
                className="text-gray-500  bg-gradient-to-r from-blue-500 via-blue-300 to-blue-200 bg-clip-text text-transparent tracking-wide shadow-lg hover:text-blue-400 transition-colors "
              >
                {item}
              </button>
            ))}
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={toggleDrawer}
          >
            {drawerOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-black shadow-lg transform ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-3/4 sm:w-1/2 md:hidden`}
      >
        <div className="flex flex-col space-y-6 p-6">
          {["About", "Services", "Why Us"].map((item) => (
            <button
              key={item}
              onClick={() =>
                handleScroll(`#${item.toLowerCase().replace(" ", "-")}`)
              }
              className="text-white text-lg "
            >
              {item}
            </button>
          ))}
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

        {/* Hero Content */}
        <div className="relative container mx-auto px-6 flex items-center min-h-screen">
          <div className="max-w-4xl text-center sm:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Empowering Your Financial Growth
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl mb-8 text-blue-100 font-light">
              Strategic Investment Solutions to Build, Grow, and Secure Your
              Wealth.
            </p>
          </div>
        </div>
      </section>

      {/* <div className="mt-[-18rem] sm:mt-[-5rem]">
        <marquee
          className="text-5xl sm:text-5xl md:text-5xl font-bold text-white"
          behavior="scroll"
          direction="left"
          scrollamount="12"
          style={{ height: "60px" }}
        >
          Coming Soon!
        </marquee>
      </div> */}
    </>
  );
}

// About Section
function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-gradient-to-b from-black via-blue-950/20 to-black"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 md:mb-16 text-center bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent tracking-wide shadow-lg">
          Who We Are
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className=" text-gray-300 mb-8 leading-relaxed"
            style={{ fontSize: "18px" }}
          >
            Gulf Coast Capital & Investment is a trusted partner in your
            financial journey. With years of expertise in asset management,
            private equity, and investment advisory, we help individuals and
            businesses achieve their financial aspirations. Our mission is to
            provide tailored solutions that drive long-term growth and security.
          </p>

          <div style={{ justifyContent: "center", display: "flex" }}>
            <Button
              text="Learn More About Us"
              icon={<ArrowRight className="w-5 h-5" />}
              primary
            />
          </div>
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
    <section id="services" className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 md:mb-16 text-center bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent tracking-wide shadow-lg">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
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
      className="py-12 md:py-20 bg-gradient-to-b from-black via-blue-950/20 to-black"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 md:mb-16 text-center bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent tracking-wide shadow-lg">
          Why Gulf Coast Capital & Investment?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
        <div className="flex items-center space-x-4">
            <img
              src="https://image11112024.s3.eu-north-1.amazonaws.com/Gulf+only+logo.png"
              alt="Gulf Coast Capital Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300"
            />
            <div className="font-bold leading-tight">
              <div className="text-lg sm:text-2xl md:text-3xl bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent tracking-wide shadow-lg">
                Gulf Coast Capital
              </div>
              <div className="text-sm sm:text-lg md:text-xl bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent tracking-wide">
                & Investment
              </div>
            </div>
          </div>
          <div className="flex space-x-6">
            {["Home", "About Us", "Services", "Contact Us"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-blue-400 transition-colors bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent tracking-wide shadow-lg"
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
    "px-6 py-3 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors";
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
    <div className="bg-blue-600/10 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
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
