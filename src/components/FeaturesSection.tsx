import { motion } from "framer-motion";
import { Database, FileCheck, Fingerprint, Link2, Lock, Shield, UserCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Chain of Custody",
    description: "Complete tracking of evidence from collection to court presentation with immutable blockchain records.",
    gradient: "from-primary to-blue-500",
  },
  {
    icon: Database,
    title: "IPFS Storage",
    description: "Decentralized file storage ensures your evidence files are never lost, corrupted, or tampered with.",
    gradient: "from-accent to-orange-500",
  },
  {
    icon: Lock,
    title: "Digital Signatures",
    description: "Cryptographic signatures authenticate every transfer and modification of evidence files.",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: Fingerprint,
    title: "Two-Factor Auth",
    description: "Multi-layer authentication protects access to sensitive case files and evidence data.",
    gradient: "from-accent to-yellow-500",
  },
  {
    icon: Shield,
    title: "Tamper-Proof",
    description: "Blockchain technology makes it impossible to alter evidence once recorded on the chain.",
    gradient: "from-green-400 to-primary",
  },
  {
    icon: UserCheck,
    title: "Role-Based Access",
    description: "Granular permissions ensure only authorized personnel can view or manage specific cases.",
    gradient: "from-primary to-indigo-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Powerful Features</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            <span className="text-foreground">Built for </span>
            <span className="text-gradient">Security</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every feature is designed to maintain the highest standards of evidence integrity 
            and chain of custody documentation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-strong rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-glow hover:border-primary/30 hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
