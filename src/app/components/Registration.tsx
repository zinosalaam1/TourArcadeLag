import { motion } from "motion/react";
import { Users, Briefcase, Building2, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const registrationCategories = [
  {
    icon: Users,
    title: "Attendees",
    subtitle: "General Access",
    description: "Register to attend Tour Arcade Lagos 2026 and experience all six event pillars.",
    buttonText: "Register Here",
    link: "#",
    color: "purple",
    bgImage: "https://images.unsplash.com/photo-1627223159500-311b2b23f3d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb21wZXRpdGlvbiUyMGNyb3dkfGVufDF8fHx8MTc2NjUxOTIyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Access to all 6 event pillars",
      "Networking opportunities",
      "Panel discussions & talks",
      "Interactive experiences"
    ]
  },
  {
    icon: Briefcase,
    title: "Investors",
    subtitle: "Partnership Opportunities",
    description: "Connect with promising gaming startups and explore investment opportunities.",
    buttonText: "Contact Us",
    link: "#",
    color: "yellow",
    bgImage: "https://images.unsplash.com/photo-1599592187465-6dc742367282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcGl0Y2glMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzY2NDUzMDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Early access to startups",
      "Private pitch sessions",
      "VIP networking lounge",
      "Market insights"
    ]
  },
  {
    icon: Building2,
    title: "Brands",
    subtitle: "Sponsorship & Activation",
    description: "Showcase your brand to thousands of engaged gaming and tech enthusiasts.",
    buttonText: "Contact Us",
    link: "#",
    color: "cyan",
    bgImage: "https://images.unsplash.com/photo-1675716921224-e087a0cca69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3NjY1MTE2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Exhibition booth space",
      "Brand activation zones",
      "Direct audience engagement",
      "Custom sponsorship packages"
    ]
  },
  {
    icon: Trophy,
    title: "Game Tournament",
    subtitle: "Compete for Glory",
    description: "Register your team for tournament competitions across multiple gaming titles.",
    buttonText: "Register Here",
    link: "#",
    color: "pink",
    bgImage: "https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdG91cm5hbWVudCUyMGFyZW5hfGVufDF8fHx8MTc2NjUxOTIyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Multiple game titles",
      "Cash prizes & rewards",
      "Live audience engagement",
      "Pro-player opportunities"
    ]
  },
];

export function Registration() {
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

        <div className="relative z-10 max-w-4xl mx-auto text-center">
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
            
            <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Register Your Interest
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose your category below to join us at Tour Arcade Lagos 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {registrationCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden h-[600px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={category.bgImage}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}-900/60 to-black/80 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                  {/* Top Section */}
                  <div>
                    <div className={`bg-gradient-to-br from-${category.color}-600/30 to-${category.color}-900/30 backdrop-blur-xl p-4 rounded-2xl inline-block mb-6 border border-${category.color}-500/30`}>
                      <category.icon className={`w-12 h-12 text-${category.color}-400`} />
                    </div>

                    <h2 className="text-3xl md:text-4xl mb-2 text-white">{category.title}</h2>
                    <p className={`text-xl text-${category.color}-400 mb-4`}>{category.subtitle}</p>
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full bg-${category.color}-400 mt-2 flex-shrink-0`} />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Section - CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group/btn w-full bg-gradient-to-r from-${category.color}-600 to-${category.color}-500 text-white px-8 py-5 rounded-full text-xl flex items-center justify-center gap-3 shadow-lg`}
                  >
                    {category.buttonText}
                    <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 border-2 border-${category.color}-500/0 group-hover:border-${category.color}-500/60 rounded-3xl pointer-events-none transition-all duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10 text-center"
          >
            <h3 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Need Help Choosing?
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Contact our team for more information about registration categories and benefits.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-4 rounded-full text-lg hover:bg-white/20 transition-all"
            >
              Contact Support
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
