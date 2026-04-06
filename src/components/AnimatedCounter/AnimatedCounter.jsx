import { motion } from 'framer-motion';

// Animated counter inspired by animate-ui patterns
// Numbers animate up/down when they change, like a slot machine

export default function AnimatedCounter({ value, className = '', prefix = '', suffix = '' }) {
  const digits = String(value).split('');

  return (
    <span className={className} style={{ display: 'inline-flex', overflow: 'hidden' }}>
      {prefix && <span>{prefix}</span>}
      {digits.map((digit, i) => (
        <motion.span
          key={`${i}-${digit}`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
            delay: i * 0.05,
          }}
          style={{ display: 'inline-block' }}
        >
          {digit}
        </motion.span>
      ))}
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
