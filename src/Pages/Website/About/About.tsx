import { Users } from "lucide-react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen pt-24 px-6">
        <section className="max-w-5xl mx-auto py-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-8"
            style={{ color: "#E2136E" }}
          >
            About Digital Wallet Management
          </motion.h1>
          <p className="text-lg text-neutral-300 text-center max-w-3xl mx-auto mb-12">
            Digital Wallet Management is designed to make money transactions
            easier, safer, and faster. From secure savings to instant transfers,
            our service is built to empower both users and agents with seamless
            financial solutions.
          </p>

          {/* Mission Section */}
          <div className="mb-16">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "#E2136E" }}
            >
              Our Mission
            </h2>
            <p className="text-neutral-300">
              Our mission is to bring secure, transparent, and user-friendly
              digital finance to everyone. We aim to build trust by offering
              reliable cash-in, cash-out, and transfer services with fair
              charges.
            </p>
          </div>

          {/* Team Section */}
          <div>
            <h2
              className="text-2xl font-semibold mb-8"
              style={{ color: "#E2136E" }}
            >
              Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Founder", "CTO", "Support Manager"].map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-neutral-900 p-6 rounded-xl shadow hover:shadow-lg hover:bg-neutral-800 transition"
                >
                  <Users
                    className="w-10 h-10 mb-4"
                    style={{ color: "#E2136E" }}
                  />
                  <h3 className="text-xl font-semibold mb-2">{role}</h3>
                  <p className="text-neutral-400">
                    Dedicated to making financial services easier and accessible
                    for all.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
