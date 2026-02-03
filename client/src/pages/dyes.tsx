import { Link } from "wouter";
import { ArrowLeft, Beaker, Package, MessageSquare, ShoppingCart } from "lucide-react";
import drumImg from "@/assets/images/product-drum.png";
import labImg from "@/assets/images/product-lab.png";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Dyes() {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"Inquiry" | "Order">("Inquiry");
  const [selectedProduct, setSelectedProduct] = useState("");

  const dyes = [
    {
      name: "Reactive Dyes",
      desc: "High-quality reactive dyes for textile applications with excellent color fastness.",
      image: labImg,
      tags: ["Textile", "Color Fastness", "Reactive"]
    },
    {
      name: "Acid Dyes",
      desc: "Specialized acid dyes for wool, silk, and nylon fibers.",
      image: labImg,
      tags: ["Wool", "Silk", "Nylon"]
    },
    {
      name: "Disperse Dyes",
      desc: "Used for dyeing polyester and acetate fibers with vibrant results.",
      image: drumImg,
      tags: ["Polyester", "Acetate", "Vibrant"]
    },
    {
      name: "Vat Dyes",
      desc: "Exceptional color fastness properties for cotton and cellulose fibers.",
      image: drumImg,
      tags: ["Cotton", "Cellulose", "Durable"]
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
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <a className="inline-flex items-center text-primary-foreground/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Dyes & Intermediates</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            High-performance dyes for textile, manufacturing, and specialty industrial applications.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dyes.map((product, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
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
            </div>
          ))}
        </div>

        {/* Custom Inquiry Box */}
        <div className="mt-16 bg-white p-8 rounded-lg border border-slate-200 shadow-sm text-center">
          <Beaker className="h-10 w-10 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-2">Looking for a specific dye?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            We trade a wide variety of chemical intermediates and dyes. If you have a specific requirement, contact us.
          </p>
          <a href="/#contact" className="inline-block bg-white border-2 border-primary text-primary px-8 py-2 rounded-sm font-bold hover:bg-primary hover:text-white transition-colors">
            Contact Sourcing Team
          </a>
        </div>
      </div>

      {/* Inquiry/Order Modal */}
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
                <Input id="quantity" placeholder="e.g., 25kg Bags / Bulk" required />
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
    </div>
  );
}
