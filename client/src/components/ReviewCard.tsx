import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface ReviewCardProps {
  name: string;
  role?: string;
  content: string;
  rating: number;
  delay?: number;
}

export function ReviewCard({ name, role, content, rating, delay = 0 }: ReviewCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-3xl shadow-lg border border-border/50 relative"
    >
      <div className="absolute top-6 right-6 text-primary/10">
        <Quote size={40} />
      </div>
      
      <div className="flex gap-1 mb-4 text-accent">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            fill={i < rating ? "currentColor" : "none"} 
            className={i < rating ? "text-accent" : "text-gray-300"}
          />
        ))}
      </div>

      <p className="text-foreground/80 italic mb-6 leading-relaxed">
        "{content}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-foreground font-display">{name}</h4>
          {role && <p className="text-xs text-muted-foreground uppercase tracking-wider">{role}</p>}
        </div>
      </div>
    </motion.div>
  );
}
