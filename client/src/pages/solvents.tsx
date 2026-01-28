import { Link } from "wouter";
import { ArrowLeft, Beaker, Package } from "lucide-react";
import drumImg from "@/assets/images/product-drum.png";
import labImg from "@/assets/images/product-lab.png";

export default function Solvents() {
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Solvents</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            High-purity industrial solvents for agrochemical, pharmaceutical, and manufacturing applications.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solvents.map((product, index) => (
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

                <div className="flex gap-3">
                  <button className="flex-1 bg-primary text-white py-2 rounded-sm font-medium text-sm hover:bg-primary/90 transition-colors">
                    Request Quote
                  </button>
                  <button className="px-3 border border-slate-200 rounded-sm hover:bg-slate-50">
                    <Package className="h-4 w-4 text-slate-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Inquiry Box */}
        <div className="mt-16 bg-white p-8 rounded-lg border border-slate-200 shadow-sm text-center">
          <Beaker className="h-10 w-10 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-2">Looking for a specific solvent?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            We source custom chemical requirements through our verified supplier network. 
            If you don't see what you need, let us know.
          </p>
          <a href="/#contact" className="inline-block bg-white border-2 border-primary text-primary px-8 py-2 rounded-sm font-bold hover:bg-primary hover:text-white transition-colors">
            Contact Sourcing Team
          </a>
        </div>
      </div>
    </div>
  );
}
