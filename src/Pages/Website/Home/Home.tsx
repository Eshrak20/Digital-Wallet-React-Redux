import Navbar from "@/layout/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SkeletonCard from "@/Pages/MYComponent/SkeletonCard";

const Home = () => {
  const [loading, setLoading] = useState(true);

  // Fake loading
  setTimeout(() => setLoading(false), 1000);
  
  return (
    <>
      <div className="bg-background text-foreground min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
            style={{ color: "var(--primary)" }}
          >
            Digital Wallet Management
          </motion.h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage your money with elegance, speed, and security.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Button
              className="text-primary-foreground"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Get Started
            </Button>
            <Button
              variant="link"
              className="border-border text-primary hover:border-primary hover:text-primary"
            >
              Learn More
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : (
              ["Fast Transactions", "Top Security", "24/7 Access"].map(
                (feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    className="bg-card text-card-foreground p-6 rounded-xl shadow hover:shadow-lg hover:bg-secondary transition"
                  >
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: "var(--primary)" }}
                    >
                      {feature}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Enjoy {feature.toLowerCase()} with Digital Wallet
                      Management.
                    </p>
                  </motion.div>
                )
              )
            )}
          </div>
        </section>

       
      </div>
    </>
  );
};

export default Home;