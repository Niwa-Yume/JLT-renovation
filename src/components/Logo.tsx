import logoJLT from "@/assets/logo-jlt.jpeg";
import { cn } from "@/lib/utils";

// Le JPEG a beaucoup de marge blanche : on recadre sur la marque.
// Le fond (bg-*) sert de base au multiply qui fait disparaître le blanc du JPEG.
const Logo = ({ className }: { className?: string }) => (
  <span className={cn("block aspect-[3/2] overflow-hidden bg-background", className)}>
    <img
      src={logoJLT}
      alt="JLT Rénovation"
      className="h-full w-full scale-[1.9] object-cover mix-blend-multiply brightness-[1.04] contrast-[1.08]"
    />
  </span>
);

export default Logo;
