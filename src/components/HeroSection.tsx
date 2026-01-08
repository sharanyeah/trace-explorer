import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Database, FileCheck, Link2, LockKeyhole, Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* Animated Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Floating Blockchain Icons */}
      <motion.div
        className="absolute top-32 right-20 hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="glass p-4 rounded-2xl shadow-glow">
          <LockKeyhole className="w-8 h-8 text-primary" />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 hidden lg:block"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="glass p-4 rounded-2xl shadow-glow">
          <Database className="w-8 h-8 text-accent" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-60 left-40 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="glass p-3 rounded-xl">
          <FileCheck className="w-6 h-6 text-primary/70" />
        </div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Powered by Blockchain Technology</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          >
            <span className="text-foreground">Blockchain for</span>
            <br />
            <span className="text-gradient">Justice</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
          >
            A ready-to-use, blockchain-based evidence management system to preserve 
            the sanctity of evidences presented in courts. Secure. Transparent. Immutable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="xl">
              <Shield className="w-5 h-5 mr-2" />
              View Case List
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <LockKeyhole className="w-4 h-4 text-primary" />
              <span>End-to-end Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <Link2 className="w-4 h-4 text-primary" />
              <span>IPFS Storage</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>2FA Authentication</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual - Chain of Custody */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative"
        >
          <div className="glass-strong rounded-3xl p-8 max-w-4xl mx-auto shadow-glow">
            <div className="flex items-center justify-between flex-wrap gap-6">
              {/* Chain Nodes */}
              {[
                { icon: FileCheck, label: "Evidence Upload", color: "text-primary" },
                { icon: LockKeyhole, label: "Encrypted", color: "text-accent" },
                { icon: Database, label: "IPFS Stored", color: "text-primary" },
                { icon: Shield, label: "Court Verified", color: "text-accent" },
              ].map((node, index) => (
                <motion.div
                  key={node.label}
                  className="flex flex-col items-center text-center flex-1 min-w-[120px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className={`glass p-4 rounded-2xl mb-3 ${index === 3 ? "animate-glow-pulse" : ""}`}>
                    <node.icon className={`w-6 h-6 ${node.color}`} />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{node.label}</span>
                  
                  {/* Connector Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
