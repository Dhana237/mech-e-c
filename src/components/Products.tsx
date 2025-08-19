import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wrench, 
  Truck, 
  Zap, 
  Construction,
  Forklift,
  Settings
} from 'lucide-react';

const Products = () => {
  const products = [
    { 
      name: 'Excavators', 
      icon: Construction,
      description: 'Professional excavation equipment for all construction needs'
    },
    { 
      name: 'Road Rollers', 
      icon: Settings,
      description: 'Heavy-duty compaction equipment for road construction'
    },
    { 
      name: 'Mowers', 
      icon: Settings,
      description: 'Commercial-grade mowing equipment for large-scale operations'
    },
    { 
      name: 'Tractors', 
      icon: Truck,
      description: 'Versatile agricultural and construction tractors'
    },
    { 
      name: 'Compactors', 
      icon: Settings,
      description: 'Soil and asphalt compaction machinery'
    },
    { 
      name: 'Dumpers', 
      icon: Truck,
      description: 'Heavy-duty dumping vehicles for material transport'
    },
    { 
      name: 'Generators', 
      icon: Zap,
      description: 'Industrial power generation equipment'
    },
    { 
      name: 'Air Compressors', 
      icon: Settings,
      description: 'High-pressure air compression systems'
    },
    { 
      name: 'Wheel Loaders', 
      icon: Construction,
      description: 'Front-loading heavy equipment for material handling'
    },
    { 
      name: 'Forklifts', 
      icon: Forklift,
      description: 'Material handling and warehouse equipment'
    },
    { 
      name: 'Dozer', 
      icon: Construction,
      description: 'Bulldozers for earthmoving and site preparation'
    },
    { 
      name: 'Skid Steers', 
      icon: Settings,
      description: 'Compact construction equipment for tight spaces'
    },
    { 
      name: 'Hydraulic Breakers', 
      icon: Wrench,
      description: 'Demolition and breaking equipment'
    },
    { 
      name: 'Boom Lifts', 
      icon: Settings,
      description: 'Aerial work platforms for elevated operations'
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of heavy machinery and construction equipment 
            for all your industrial needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card key={index} className="group hover:shadow-industrial transition-all duration-300 hover:scale-105 border-border">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <Icon className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;