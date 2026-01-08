import { motion } from "framer-motion";
import { BarChart3, FileCheck, Shield, Users } from "lucide-react";

const stats = [
  {
    icon: FileCheck,
    value: "10,000+",
    label: "Evidence Files Secured",
    description: "Documents safely stored on blockchain",
  },
  {
    icon: Users,
    value: "500+",
    label: "Verified Users",
    description: "Legal professionals using TraceX",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Integrity Rate",
    description: "Zero evidence tampering incidents",
  },
  {
    icon: BarChart3,
    value: "50+",
    label: "Court Systems",
    description: "Integrated jurisdictions",
  },
];

export const StatsSection = () => {
  return (
    <section id="stats" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            <span className="text-foreground">Trusted by </span>
            <span className="text-gradient-gold">Justice Systems</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real impact in preserving evidence integrity across legal systems worldwide.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-strong rounded-2xl p-8 text-center h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-primary mb-6 shadow-button group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Value */}
                <div className="font-display text-4xl mb-2 text-gradient">
                  {stat.value}
                </div>

                {/* Label */}
                <h3 className="font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
