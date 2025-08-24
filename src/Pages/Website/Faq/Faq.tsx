import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
const Faq = () => {
  const faqs = [
    {
      q: "What is the cash-out fee?",
      a: "For every 1000 Taka or above, the cash-out fee is 20 Taka (shared between Agent and Admin).",
    },
    {
      q: "Can I send money to other users?",
      a: "Yes, users can securely send money to other users instantly.",
    },
    {
      q: "How can agents top-up user accounts?",
      a: "Agents have the ability to top-up money into user accounts directly.",
    },
    {
      q: "Is my money safe?",
      a: "Yes, we use high-level security measures to protect your digital wallet.",
    },
  ];
  return (
    <>
      <div className="bg-black text-white min-h-screen pt-24 px-6">
        <section className="max-w-5xl mx-auto py-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "#E2136E" }}
          >
            Frequently Asked Questions
          </motion.h1>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-neutral-900 p-6 rounded-xl shadow hover:shadow-lg hover:bg-neutral-800 transition"
              >
                <div className="flex items-center mb-2">
                  <HelpCircle
                    className="w-6 h-6 mr-2"
                    style={{ color: "#E2136E" }}
                  />
                  <h3 className="text-lg font-semibold">{faq.q}</h3>
                </div>
                <p className="text-neutral-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Faq;
