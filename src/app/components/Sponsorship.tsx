import { motion } from "motion/react";
import { Check, Star, Crown, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const sponsorshipTiers = [
  {
    name: "Platinum",
    price: "Premium",
    icon: Crown,
    color: "purple",
    gradient: "from-purple-600 to-pink-600",
    bgGradient: "from-purple-900/40 to-pink-900/40",
    features: [
      "Exclusive title sponsor recognition",
      "Prime booth location (100+ sqm)",
      "VIP networking lounge access",
      "Speaking slot at main stage (30 mins)",
      "Logo on all marketing materials",
      "Social media campaign inclusion",
      "50 complimentary passes",
      "Exclusive product launch opportunity",
      "Post-event report & analytics",
      "Brand integration in esports tournaments"
    ],
    benefits: [
      "Maximum brand visibility to 3,000+ attendees",
      "Direct access to decision-makers",
      "Media coverage & press mentions",
      "Lead generation opportunities"
    ]
  },
  {
    name: "Gold",
    price: "Premium",
    icon: Star,
    color: "yellow",
    gradient: "from-yellow-600 to-orange-600",
    bgGradient: "from-yellow-900/40 to-orange-900/40",
    features: [
      "Featured sponsor recognition",
      "Premium booth location (60+ sqm)",
      "VIP lounge access",
      "Speaking slot (15 mins)",
      "Logo on event materials",
      "Social media mentions",
      "30 complimentary passes",
      "Product demo opportunities",
      "Event analytics access"
    ],
    benefits: [
      "High brand visibility",
      "Networking with key stakeholders",
      "Media exposure",
      "Customer engagement"
    ]
  },
  {
    name: "Silver",
    price: "Contact Us",
    icon: Sparkles,
    color: "cyan",
    gradient: "from-cyan-600 to-blue-600",
    bgGradient: "from-cyan-900/40 to-blue-900/40",
    features: [
      "Standard sponsor recognition",
      "Exhibition booth (30+ sqm)",
      "Networking access",
      "Logo on select materials",
      "Social media mention",
      "15 complimentary passes",
      "Brand activation space",
      "Post-event summary"
    ],
    benefits: [
      "Brand presence at major event",
      "Direct customer interaction",
      "Community engagement",
      "Market research opportunities"
    ]
  }
];

const additionalOpportunities = [
  {
    title: "Tournament Sponsorship",
    description: "Sponsor specific esports tournaments and competitions",
    icon: "🏆",
    color: "purple"
  },
  {
    title: "Stage Sponsorship",
    description: "Brand a specific stage or content area",
    icon: "🎤",
    color: "pink"
  },
  {
    title: "Experience Zone",
    description: "Sponsor interactive experiences and activations",
    icon: "🎮",
    color: "cyan"
  },
  {
    title: "Media Partnership",
    description: "Collaborate on content and media coverage",
    icon: "📱",
    color: "yellow"
  }
];

export function Sponsorship() {
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

        <div className="relative z-10 max-w-6xl mx-auto text-center">
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
              Sponsorship Packages
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Partner with Tour Arcade Lagos 2026 and position your brand at the forefront of gaming innovation
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">3,000+ Attendees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Multi-Channel Exposure</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">High Engagement</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`relative h-full bg-gradient-to-br ${tier.bgGradient} backdrop-blur-xl border border-${tier.color}-500/30 rounded-3xl p-8 overflow-hidden`}>
                  {/* Decorative Element */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${tier.gradient} opacity-20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`} />
                  
                  {/* Header */}
                  <div className="relative mb-8">
                    <div className={`bg-gradient-to-br ${tier.gradient} p-4 rounded-2xl inline-block mb-4`}>
                      <tier.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl mb-2 text-white">{tier.name}</h3>
                    <p className={`text-2xl bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                      {tier.price}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="relative mb-8">
                    <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Package Includes</h4>
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <Check className={`w-5 h-5 text-${tier.color}-400 flex-shrink-0 mt-0.5`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="relative mb-8">
                    <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Key Benefits</h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span>•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${tier.gradient} text-white px-6 py-4 rounded-full flex items-center justify-center gap-2`}
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Opportunities */}
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
              Additional Opportunities
            </h2>
            <p className="text-xl text-gray-300">
              Customize your sponsorship with targeted activations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalOpportunities.map((opp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br from-${opp.color}-900/40 to-black/60 backdrop-blur-xl border border-${opp.color}-500/30 rounded-2xl p-6 text-center`}
              >
                <div className="text-5xl mb-4">{opp.icon}</div>
                <h3 className="text-xl mb-2 text-white">{opp.title}</h3>
                <p className="text-sm text-gray-400">{opp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10"
          >
            <h3 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-center">
              Why Sponsor Tour Arcade?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="text-xl text-white mb-3">Reach & Audience</h4>
                <ul className="space-y-2 text-sm">
                  <li>• 1,000-3,000+ high-value attendees</li>
                  <li>• Gamers, founders, investors & decision-makers</li>
                  <li>• Pan-African and international reach</li>
                  <li>• Multiple demographic touchpoints</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl text-white mb-3">Brand Impact</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Position as gaming industry leader</li>
                  <li>• Direct customer engagement</li>
                  <li>• Social media amplification</li>
                  <li>• Long-term brand association</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl text-white mb-3">Business Value</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Lead generation opportunities</li>
                  <li>• Partnership & collaboration potential</li>
                  <li>• Market research & insights</li>
                  <li>• Product testing & feedback</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl text-white mb-3">Exclusive Access</h4>
                <ul className="space-y-2 text-sm">
                  <li>• VIP networking events</li>
                  <li>• Private investor meetings</li>
                  <li>• First look at innovations</li>
                  <li>• Post-event analytics</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-full text-lg"
              >
                Download Sponsorship Deck
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl mb-4 text-white">
              Ready to Partner With Us?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can create a custom sponsorship package for your brand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg"
              >
                Schedule a Call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-full text-lg hover:bg-white/20 transition-all"
              >
                Email Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
