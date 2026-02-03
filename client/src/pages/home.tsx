import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Factory, FlaskConical, Truck, ShieldCheck, Warehouse, MapPin, Phone, Mail } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";
import drumImg from "@/assets/images/product-drum.png";
import labImg from "@/assets/images/product-lab.png";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-slate-900/60 z-10" /> {/* Overlay */}
        
        <div className="container relative z-20 px-4 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
              Industrial Chemical <br/>
              <span className="text-accent">Trading Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light">
              Precision sourcing. Reliable delivery. Trusted partnerships. 
              We ensure verified sourcing and dependable supply chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#products" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-sm font-semibold transition-all transform hover:-translate-y-1"
              >
                Explore Products
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-sm font-semibold transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story / About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Factory className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">Industry Challenges</h3>
              <p className="text-muted-foreground leading-relaxed">
                Inconsistent quality, unreliable sourcing, delayed logistics, and lack of documentation continue to impact industrial chemical procurement.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">Our Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Abhayam Transchem ensures verified sourcing, disciplined quality handling, and dependable supply chains designed for reliability.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">Why Abhayam</h3>
              <p className="text-muted-foreground leading-relaxed">
                We operate with process-driven precision, transparent communication, and long-term partnership thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities / How We Work */}
      <section id="capabilities" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">How We Work</h2>
            <p className="text-muted-foreground">
              A disciplined, transparent, and process-driven approach designed for industrial chemical trading.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { title: "Understanding", desc: "Analysis of application needs & specs", icon: CheckCircle2 },
              { title: "Verified Sourcing", desc: "Sourcing only from trusted manufacturers", icon: Factory },
              { title: "Quality & Docs", desc: "MSDS & compliance documentation readiness", icon: ShieldCheck },
              { title: "Storage", desc: "Proper storage & safety practices", icon: Warehouse },
              { title: "Logistics", desc: "Reliable dispatch & delivery coordination", icon: Truck },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-white p-6 rounded-lg border border-slate-200 h-full hover:border-primary/50 transition-colors">
                  <span className="text-4xl font-bold text-slate-100 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">0{i+1}</span>
                  <step.icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Products & Capabilities</h2>
              <p className="text-muted-foreground">
                We trade and source a wide range of industrial chemicals with a focus on reliability, compliance, and long-term supply.
              </p>
            </div>
            <Link href="/solvents">
              <a className="text-primary font-semibold hover:text-accent flex items-center gap-2 group">
                View Full Catalog <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Solvents Card - Featured */}
            <Link href="/solvents">
              <a className="group block relative overflow-hidden rounded-lg bg-slate-900 aspect-[4/3] cursor-pointer">
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

            {/* Acids Card */}
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

            {/* Dyes Card */}
            <Link href="/dyes">
              <a className="group block relative overflow-hidden rounded-lg bg-slate-900 aspect-[4/3] cursor-pointer">
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

            {/* Specialty Card */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-8 flex flex-col justify-center">
              <FlaskConical className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">Specialty & Custom</h3>
              <p className="text-muted-foreground mb-6">
                Trading of dyes, intermediates, and custom-sourced chemicals based on specific industrial requirements.
              </p>
              <span className="text-primary font-semibold text-sm">Made to order sourcing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-primary-foreground/80 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80 text-sm uppercase tracking-wider">Trusted Suppliers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-primary-foreground/80 text-sm uppercase tracking-wider">Products Sourced</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">Pan India</div>
              <div className="text-primary-foreground/80 text-sm uppercase tracking-wider">Supply Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Abhayam Transchem</h3>
                    <p className="text-muted-foreground text-sm">Chemical Trading & Industrial Supply</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <span className="block font-medium">Location</span>
                        <span className="text-muted-foreground">Gujarat, India</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <span className="block font-medium">Phone</span>
                        <span className="text-muted-foreground">+91 9377611150</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <span className="block font-medium">Email</span>
                        <span className="text-muted-foreground">info@abhayamtranschem.com</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                     <a href="https://wa.me/917043211680" target="_blank" className="inline-flex items-center justify-center w-full bg-[#25D366] text-white py-3 rounded-md font-bold hover:bg-[#20bd5a] transition-colors">
                       Chat on WhatsApp
                     </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-100 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-bold text-primary mb-4">Business Details</h3>
                <ul className="space-y-4 text-sm">
                  <li className="pb-4 border-b border-slate-200">
                    <strong className="block text-slate-700 mb-1">GSTIN</strong>
                    <span className="text-muted-foreground">24AEBPP4547G3ZJ</span>
                  </li>
                  <li className="pb-4 border-b border-slate-200">
                    <strong className="block text-slate-700 mb-1">Core Business</strong>
                    <span className="text-muted-foreground">Trading of chemicals, solvents, acids, dyes</span>
                  </li>
                  <li>
                    <strong className="block text-slate-700 mb-1">Packaging</strong>
                    <span className="text-muted-foreground">Drum / Bulk (as per requirement)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
