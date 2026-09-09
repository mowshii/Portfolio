import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
};

export function SmartImage({ src, alt, className, fallback }: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return (
    <img
      src={src}
      alt={alt}
      className={cn(className)}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
