import { motion } from "motion/react";
import { Smartphone, Globe, Trophy, Users, Zap, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Trophy,
    title: "Tournament Platform",
    description: "Host and join gaming tournaments with automated brackets, scoring, and prize distribution."
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "Connect with gamers, join teams, find scrim partners, and build your gaming network."
  },
  {
    icon: Zap,
    title: "Live Streaming",
    description: "Stream your gameplay, watch tournaments live, and engage with the gaming community in real-time."
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe and secure payment processing for tournament entries, prize distribution, and in-app purchases."
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description: "Access from web or mobile app. Play on console, PC, or mobile - we support all platforms."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Optimized mobile experience for gaming on the go with offline capabilities and push notifications."
  }
];

const platforms = [
  { name: "FIFA/FC", icon: "⚽" },
  { name: "PUBG Mobile", icon: "🎮" },
  { name: "Call of Duty Mobile", icon: "🔫" },
  { name: "Free Fire", icon: "🔥" },
  { name: "Tekken", icon: "🥊" },
  { name: "More Coming", icon: "➕" }
];

export function AboutTourArcade() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
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
                <span className="text-purple-400 uppercase tracking-wider text-sm">The Platform</span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Tour Arcade Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Africa's premier gaming tournament and community platform. Compete, connect, and earn — all in one place.
            </p>
            <Link to="/tour-arcade-launch">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-full text-lg flex items-center gap-2 mx-auto"
              >
                View Launch Details
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What is Tour Arcade */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                What is Tour Arcade?
              </h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Tour Arcade is a comprehensive gaming platform designed specifically for the African gaming community. 
                  We're building the infrastructure for competitive gaming, making it easy for anyone to compete, earn, and grow.
                </p>
                <p>
                  Whether you're a casual player looking for fun tournaments or a pro gamer aiming for the top, 
                  Tour Arcade provides the tools, community, and opportunities you need to succeed.
                </p>
                <p className="text-purple-400">
                  <strong>Mission:</strong> To democratize competitive gaming in Africa and create sustainable pathways 
                  for gamers to monetize their skills.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1640823127518-65e1ad563576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGdhbWluZ3xlbnwxfHx8fDE3NjY0NTk0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Gaming Platform"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-cyan-900/40" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
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
              Platform Features
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need for competitive gaming
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-purple-900/40 to-black/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8"
              >
                <div className="bg-gradient-to-br from-purple-600/30 to-cyan-600/30 p-4 rounded-2xl inline-block mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Games */}
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
              Supported Games
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 text-center"
                >
                  <div className="text-5xl mb-3">{platform.icon}</div>
                  <p className="text-white">{platform.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
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
              How It Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Sign Up", desc: "Create your free account and build your gaming profile" },
              { step: "2", title: "Join Tournaments", desc: "Browse and enter tournaments for your favorite games" },
              { step: "3", title: "Compete & Win", desc: "Play matches, climb leaderboards, and earn prizes" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-3xl text-white">
                      {item.step}
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full blur-xl" />
                  </div>
                  <h3 className="text-2xl mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10"
          >
            <h3 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Join the Beta
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to experience Tour Arcade. Sign up for early access and exclusive beta benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-full text-lg"
              >
                Join Beta Waitlist
              </motion.button>
              <Link to="/tour-arcade-launch">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-4 rounded-full text-lg hover:bg-white/20 transition-all"
                >
                  View Launch Event
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
