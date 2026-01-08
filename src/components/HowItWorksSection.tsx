import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileUp, Lock, Search, Shield, Upload, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Evidence",
    description: "Securely upload digital evidence files with automatic hash generation for integrity verification.",
    details: ["Drag & drop interface", "Auto hash generation", "Metadata extraction"],
  },
  {
    number: "02",
    icon: Lock,
    title: "Encrypt & Store",
    description: "Evidence is encrypted and distributed across IPFS nodes, ensuring redundancy and security.",
    details: ["AES-256 encryption", "IPFS distributed storage", "Blockchain anchoring"],
  },
  {
    number: "03",
    icon: Users,
    title: "Transfer Custody",
    description: "Every custody transfer is recorded with digital signatures and timestamps on the blockchain.",
    details: ["Digital signatures", "Timestamp verification", "Audit trail"],
  },
  {
    number: "04",
    icon: Shield,
    title: "Court Verification",
    description: "Courts can independently verify evidence integrity and complete chain of custody history.",
    details: ["Hash verification", "Complete history", "Legal compliance"],
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative bg-card/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Search className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">How It Works</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            <span className="text-foreground">From Upload to </span>
            <span className="text-gradient">Courtroom</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A seamless, secure journey for your digital evidence through the legal system.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="glass-strong rounded-2xl p-8 h-full hover:shadow-glow transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-display text-gradient opacity-50 group-hover:opacity-100 transition-opacity">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-button">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-32 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
