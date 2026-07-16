import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const metrics = [
  ['20+', 'Years technology leadership'],
  ['20+', 'Years growth marketing leadership'],
  ['Global', 'Client experience'],
  ['One', 'AI + software + marketing team'],
];

export default function Metrics() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: '-80px' });
  return (
    <div className="metrics" ref={ref}>
      {metrics.map(([value, label], index) => (
        <motion.div className="metric" key={label} initial={{ opacity: 0, y: 18 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * .08, duration: .45 }}>
          <strong>{value}</strong><span>{label}</span>
        </motion.div>
      ))}
    </div>
  );
}
