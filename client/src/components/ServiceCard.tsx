import { LucideIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  price?: string;
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, price, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 border border-border/50 hover:border-primary/20 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
        <Icon size={120} className="text-primary" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon size={28} />
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-3 font-display group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {price && (
          <div className="mb-6 font-semibold text-secondary">
            {price}
          </div>
        )}

        <Link
          to="booking"
          smooth={true}
          duration={500}
          className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors cursor-pointer group/link"
        >
          Đặt lịch ngay
          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
