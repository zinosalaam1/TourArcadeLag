import { motion } from "motion/react";
import { Rocket, Calendar, MapPin, Users, Smartphone, Globe, Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const launchHighlights = [
  {
    icon: Smartphone,
    title: "App Demo & Walkthrough",
    description: "Experience the platform firsthand with live demonstrations and guided tours"
  },
  {
    icon: Users,
    title: "Meet the Team",
    description: "Connect with founders, developers, and community managers"
  },
  {
    icon: Gift,
    title: "Exclusive Early Access",
    description: "First attendees get premium accounts and special in-app benefits"
  },
  {
    icon: Globe,
    title: "Live Tournament",
    description: "Watch or participate in the platform's inaugural tournament"
  }
];

const featuresShowcased = [
  { title: "Tournament System", desc: "See how easy it is to create and join tournaments" },
  { title: "Payment Integration", desc: "Secure and instant prize distribution demo" },
  { title: "Live Streaming", desc: "Built-in streaming capabilities showcase" },
  { title: "Community Features", desc: "Team building, messaging, and social tools" }
];

export function TourArcadeLaunch() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-cyan-900/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1640823127518-65e1ad563576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGdhbWluZ3xlbnwxfHx8fDE3NjY0NTk0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="VR Gaming"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="absolute inset-0 opacity-20 z-10"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <Link to="/" className="inline-block text-purple-400 hover:text-purple-300 transition-colors">
                ← Back to Home
              </Link>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-xl border border-purple-500/30 rounded-full px-6 py-2">
                <span className="text-purple-400 uppercase tracking-wider text-sm flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Official Launch
                </span>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Tour Arcade Platform Launch
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Witness the unveiling of Africa's premier gaming tournament platform at Tour Arcade Lagos 2026
            </p>

            {/* Launch Event Details */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-full px-8 py-4"
              >
                <Calendar className="w-6 h-6 text-purple-400" />
                <div className="text-left">
                  <p className="text-xs text-purple-300 uppercase tracking-wider">Launch Date</p>
                  <p className="text-xl">May 6, 2026</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-full px-8 py-4"
              >
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <p className="text-xs text-cyan-300 uppercase tracking-wider">Venue</p>
                  <p className="text-xl">Lagos, Nigeria</p>
                </div>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-12 py-5 rounded-full text-xl flex items-center gap-3 mx-auto"
            >
              Register for Launch Event
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              What to Expect at Launch
            </h2>
            <p className="text-xl text-gray-300">
              An immersive experience showcasing the future of competitive gaming in Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {launchHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-purple-900/40 to-black/60 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8"
              >
                <div className="bg-gradient-to-br from-purple-600/30 to-cyan-600/30 p-4 rounded-2xl inline-block mb-6">
                  <highlight.icon className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-2xl mb-4 text-white">{highlight.title}</h3>
                <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10"
          >
            <h3 className="text-3xl md:text-4xl mb-8 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Features Being Showcased
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuresShowcased.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6"
                >
                  <h4 className="text-xl mb-2 text-white">{feature.title}</h4>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Launch Schedule */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Launch Day Schedule
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { time: "10:00 AM", title: "Platform Unveiling", desc: "Official reveal of Tour Arcade web & mobile apps" },
              { time: "11:00 AM", title: "Live Demo & Walkthrough", desc: "Guided tour of platform features and capabilities" },
              { time: "1:00 PM", title: "Inaugural Tournament", desc: "First official tournament on the platform" },
              { time: "3:00 PM", title: "Q&A with Founders", desc: "Ask anything about the platform and our vision" },
              { time: "4:00 PM", title: "Early Access Registration", desc: "Sign up for beta access and premium accounts" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl px-4 py-2">
                    <p className="text-white text-sm">{item.time}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Launch Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10 text-center"
          >
            <h3 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Exclusive Launch Day Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-5xl mb-3">🎁</div>
                <h4 className="text-xl text-white mb-2">Premium Account</h4>
                <p className="text-gray-400 text-sm">6 months free premium access (Worth ₦50,000)</p>
              </div>
              <div>
                <div className="text-5xl mb-3">🏆</div>
                <h4 className="text-xl text-white mb-2">Launch Tournament</h4>
                <p className="text-gray-400 text-sm">Free entry to ₦500,000 prize pool tournament</p>
              </div>
              <div>
                <div className="text-5xl mb-3">⚡</div>
                <h4 className="text-xl text-white mb-2">Founding Member</h4>
                <p className="text-gray-400 text-sm">Special badge & exclusive perks</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-lg"
            >
              Claim Your Spot
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Learn More CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl mb-4 text-white">
              Want to Learn More About the Platform?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Discover all the features and capabilities of Tour Arcade
            </p>
            <Link to="/about-tour-arcade">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-4 rounded-full text-lg hover:bg-white/20 transition-all"
              >
                Explore Platform Details
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}