import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: { preventDefault: () => void; }) { //! বুঝা লাগবে এখানে 
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <>
      <div className="bg-black text-white min-h-screen pt-24 px-6">
        <section className="max-w-4xl mx-auto py-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "#E2136E" }}
          >
            Contact Us
          </motion.h1>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-[#E2136E]"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-[#E2136E]"
              />
              <textarea
                placeholder="Your Message"
                required
                className="w-full p-3 rounded bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-[#E2136E]"
                // rows="5"
              ></textarea>
              <Button
                type="submit"
                className="text-white"
                style={{ backgroundColor: "#E2136E" }}
              >
                Send Message
              </Button>
            </form>
          ) : (
            <div className="text-center text-lg text-green-400">
              ✅ Your inquiry has been submitted successfully!
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Contact;
