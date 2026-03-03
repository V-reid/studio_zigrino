import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, details, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <Card className="h-full border border-border/50 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-300 group bg-card">
        <CardHeader className="pb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
          </div>
          <CardTitle className="text-xl font-display text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
          <ul className="space-y-2">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-start text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-3 shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
