
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-6"
      >
        Earn Money. Anytime. Anywhere.
      </motion.h1>
      <p className="text-lg max-w-xl">
        Welcome to TaskCash – the easiest way to earn money online with simple tasks.
      </p>
    </section>
  );
}
