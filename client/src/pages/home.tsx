import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Factory, FlaskConical, Truck, ShieldCheck, Warehouse, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/images/hero-bg.png";
import drumImg from "@/assets/images/product-drum.png";
import labImg from "@/assets/images/product-lab.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
        
        <div className="container relative z-20 px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
              Industrial Chemical <br/>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-accent"
              >Trading Excellence</motion.span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light">
              Precision sourcing. Reliable delivery. Trusted partnerships. 
              We ensure verified sourcing and dependable supply chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="#products" 
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-sm font-semibold transition-all block"
                >
                  Explore Products
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="#contact" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-sm font-semibold transition-all block"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story / About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "Industry Challenges", icon: Factory, desc: "Inconsistent quality, unreliable sourcing, delayed logistics, and lack of documentation continue to impact industrial chemical procurement." },
              { title: "Our Solution", icon: ShieldCheck, desc: "Abhayam Transchem ensures verified sourcing, disciplined quality handling, and dependable supply chains designed for reliability." },
              { title: "Why Abhayam", icon: CheckCircle2, desc: "We operate with process-driven precision, transparent communication, and long-term partnership thinking." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="p-8 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities / How We Work */}
      <section id="capabilities" className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">How We Work</h2>
            <p className="text-muted-foreground">
              A disciplined, transparent, and process-driven approach designed for industrial chemical trading.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { title: "Understanding", desc: "Analysis of application needs & specs", icon: CheckCircle2 },
              { title: "Verified Sourcing", desc: "Sourcing only from trusted manufacturers", icon: Factory },
              { title: "Quality & Docs", desc: "MSDS & compliance documentation readiness", icon: ShieldCheck },
              { title: "Storage", desc: "Proper storage & safety practices", icon: Warehouse },
              { title: "Logistics", desc: "Reliable dispatch & delivery coordination", icon: Truck },
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white p-6 rounded-lg border border-slate-200 h-full hover:border-primary group-hover:shadow-md transition-all">
                  <span className="text-4xl font-bold text-slate-100 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">0{i+1}</span>
                  <step.icon className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Products & Capabilities</h2>
              <p className="text-muted-foreground">
                We trade and source a wide range of industrial chemicals with a focus on reliability, compliance, and long-term supply.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/solvents">
                <a className="text-primary font-semibold hover:text-accent flex items-center gap-2 group">
                  View Full Catalog <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Solvents Card - Featured */}
            <motion.div
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Link href="/solvents">
                <a className="group block relative overflow-hidden rounded-lg bg-slate-900 aspect-[4/3] cursor-pointer h-full">
                  <img 
                    src={drumImg} 
                    alt="Solvents" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">Solvents</h3>
                    <p className="text-slate-300 text-sm mb-4">DM PET Smell Drum, Acetone, Methanol & More</p>
                    <span className="text-accent text-sm font-semibold flex items-center gap-2">
                      Browse Category <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </Link>
            </motion.div>

            {/* Acids Card */}
            <motion.div whileHover={{ y: -10 }}>
              <div className="group block relative overflow-hidden rounded-lg bg-slate-900 aspect-[4/3]">
                <img 
                  src={labImg} 
                  alt="Acids" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Acids</h3>
                  <p className="text-slate-300 text-sm">Industrial & specialty acids with proper handling</p>
                </div>
              </div>
            </motion.div>

            {/* Dyes Card */}
            <motion.div whileHover={{ y: -10 }}>
              <Link href="/dyes">
                <a className="group block relative overflow-hidden rounded-lg bg-slate-900 aspect-[4/3] cursor-pointer h-full">
                  <img 
                    src={drumImg} 
                    alt="Dyes" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">Dyes & Intermediates</h3>
                    <p className="text-slate-300 text-sm">Textile, manufacturing, and specialty industrial applications</p>
                  </div>
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Trusted Suppliers", value: "50+" },
              { label: "Products Sourced", value: "100+" },
              { label: "Supply Network", value: "Pan India" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm uppercase tracking-widest font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Contact Information</h2>
                <div className="space-y-8">
                  <motion.div whileHover={{ x: 5 }}>
                    <h3 className="font-semibold text-lg mb-1">Abhayam Transchem</h3>
                    <p className="text-muted-foreground text-sm">Chemical Trading & Industrial Supply</p>
                  </motion.div>
                  
                  <div className="space-y-6">
                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <span className="block font-bold text-sm uppercase tracking-wider text-slate-400">Location</span>
                        <span className="text-slate-700 font-medium">Gujarat, India</span>
                      </div>
                    </motion.div>
                    
                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <span className="block font-bold text-sm uppercase tracking-wider text-slate-400">Phone</span>
                        <span className="text-slate-700 font-medium">+91 9377611150</span>
                      </div>
                    </motion.div>
                    
                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <span className="block font-bold text-sm uppercase tracking-wider text-slate-400">Email</span>
                        <span className="text-slate-700 font-medium">info@abhayamtranschem.com</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="pt-4">
                     <motion.a 
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                       href="https://wa.me/917043211680" 
                       target="_blank" 
                       className="inline-flex items-center justify-center w-full bg-[#25D366] text-white py-4 rounded-md font-bold hover:bg-[#20bd5a] shadow-lg transition-all"
                     >
                       Chat on WhatsApp
                     </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Factory size={200} />
                </div>
                <h3 className="font-bold text-accent text-xl mb-8 relative z-10">Business Details</h3>
                <ul className="space-y-6 relative z-10">
                  <li className="pb-4 border-b border-white/10">
                    <strong className="block text-accent/80 text-xs uppercase tracking-widest mb-2 font-bold">GSTIN</strong>
                    <span className="text-lg">24AEBPP4547G3ZJ</span>
                  </li>
                  <li className="pb-4 border-b border-white/10">
                    <strong className="block text-accent/80 text-xs uppercase tracking-widest mb-2 font-bold">Core Business</strong>
                    <span className="text-slate-300">Trading of chemicals, solvents, acids, dyes</span>
                  </li>
                  <li>
                    <strong className="block text-accent/80 text-xs uppercase tracking-widest mb-2 font-bold">Packaging</strong>
                    <span className="text-slate-300">Drum / Bulk (as per requirement)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
