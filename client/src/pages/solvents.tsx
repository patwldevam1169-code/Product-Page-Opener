import { Link } from "wouter";
import { ArrowLeft, Beaker, Package, MessageSquare, ShoppingCart } from "lucide-react";
import drumImg from "@/assets/images/product-drum.png";
import labImg from "@/assets/images/product-lab.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

export default function Solvents() {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"Inquiry" | "Order">("Inquiry");
  const [selectedProduct, setSelectedProduct] = useState("");

  const solvents = [
    {
      name: "DM PET Smell Drum",
      desc: "Used in Agro granular Products, Such as chloro 10% GR. Purely Solvent Base.",
      image: drumImg,
      tags: ["Agro", "Granular", "Solvent Base"]
    },
    {
      name: "Acetone",
      desc: "High purity industrial solvent widely used in laboratories and manufacturing.",
      image: labImg,
      tags: ["High Purity", "Lab Grade"]
    },
    {
      name: "Methanol",
      desc: "Industrial grade methanol for various chemical applications.",
      image: labImg,
      tags: ["Industrial Grade", "Alcohol"]
    },
    {
      name: "Toluene",
      desc: "Aromatic hydrocarbon solvent used in paint thinners and chemical synthesis.",
      image: drumImg,
      tags: ["Aromatic", "Hydrocarbon"]
    }
  ];

  const handleAction = (type: "Inquiry" | "Order", productName: string) => {
    setModalType(type);
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: `${modalType} Sent`,
      description: `Your ${modalType.toLowerCase()} for ${selectedProduct} has been sent successfully.`,
    });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-primary text-white py-16"
      >
        <div className="container mx-auto px-4">
          <Link href="/">
            <motion.a 
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-primary-foreground/70 hover:text-white mb-6 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
            </motion.a>
          </Link>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Solvents
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 max-w-2xl"
          >
            High-purity industrial solvents for agrochemical, pharmaceutical, and manufacturing applications.
          </motion.p>
        </div>
      </motion.div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solvents.map((product, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  In Stock
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{product.name}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {product.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleAction("Inquiry", product.name)}
                      className="flex-1 bg-white border-primary text-primary hover:bg-slate-50 border h-9 text-sm"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" /> Inquiry
                    </Button>
                    <Button 
                      onClick={() => handleAction("Order", product.name)}
                      className="flex-1 bg-primary text-white hover:bg-primary/90 h-9 text-sm"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" /> Order
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Inquiry Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-lg border border-slate-200 shadow-sm text-center"
        >
          <Beaker className="h-10 w-10 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-2">Looking for a specific solvent?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            We source custom chemical requirements through our verified supplier network. 
            If you don't see what you need, let us know.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/#contact" 
            className="inline-block bg-white border-2 border-primary text-primary px-8 py-2 rounded-sm font-bold hover:bg-primary hover:text-white transition-colors cursor-pointer"
          >
            Contact Sourcing Team
          </motion.a>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading font-bold text-primary">
                  Product {modalType}
                </DialogTitle>
                <DialogDescription>
                  {modalType === "Inquiry" 
                    ? `Request information about ${selectedProduct}` 
                    : `Place an order request for ${selectedProduct}`}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Enter company name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 ..." required />
                </div>
                {modalType === "Order" && (
                  <div className="grid gap-2">
                    <Label htmlFor="quantity">Quantity Required</Label>
                    <Input id="quantity" placeholder="e.g., 500 Liters / 10 Drums" required />
                  </div>
                )}
                <div className="grid gap-2">
                  <Label htmlFor="message">Message / Specifications</Label>
                  <Textarea id="message" placeholder="Include any specific requirements..." />
                </div>
                <DialogFooter className="pt-4">
                  <Button type="submit" className="w-full bg-primary">
                    Submit {modalType}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
