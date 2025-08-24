import Navbar from "@/layout/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SkeletonCard from "@/Pages/MYComponent/SkeletonCard";
const Home = () => {
  const [loading, setLoading] = useState(true);

  // Fake loading
  setTimeout(() => setLoading(false), 2000);
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
            style={{ color: "#E2136E" }}
          >
            Digital Wallet Management
          </motion.h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
            Manage your money with elegance, speed, and security.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Button
              className="text-white"
              style={{ backgroundColor: "#E2136E" }}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-white text-[#E2136E] hover:border-[#E2136E] hover:text-[#E2136E]"
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
                    className="bg-neutral-900 p-6 rounded-xl shadow hover:shadow-lg hover:bg-neutral-800 transition"
                  >
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: "#E2136E" }}
                    >
                      {feature}
                    </h3>
                    <p className="mt-2 text-neutral-300">
                      Enjoy {feature.toLowerCase()} with Digital Wallet
                      Management.
                    </p>
                  </motion.div>
                )
              )
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-neutral-950">
          <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
          <p className="text-center text-neutral-300">
            We’d love to hear from you! 💬
          </p>
        </section>

        {/* Footer */}
        <footer className="bg-black py-6 text-center text-neutral-400">
          © {new Date().getFullYear()} Digital Wallet Management. All rights
          reserved.
        </footer>
      </div>
    </>
  );
};

export default Home;
