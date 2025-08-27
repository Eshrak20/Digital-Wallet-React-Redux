import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setSubmitted(true);
  }
  
  return (
    <>
      <div className="bg-background text-foreground min-h-screen pt-24 px-6">
        <section className="max-w-4xl mx-auto py-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--primary)" }}
          >
            Contact Us
          </motion.h1>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded bg-card text-card-foreground border border-input focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded bg-card text-card-foreground border border-input focus:outline-none focus:border-primary"
              />
              <textarea
                placeholder="Your Message"
                required
                className="w-full p-3 rounded bg-card text-card-foreground border border-input focus:outline-none focus:border-primary"
                rows={5}
              ></textarea>
              <Button
                type="submit"
                className="text-primary-foreground bg-primary hover:bg-primary/90"
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