"use client";

import { AlertCircle, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProjectIframeProps {
  src: string;
  title: string;
  url: string;
}

export function ProjectIframe({ src, title, url }: ProjectIframeProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full aspect-video bg-muted/50 overflow-hidden group/iframe">
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-sm text-muted-foreground mb-4">
            Preview unavailable - site blocks iframe embedding
          </p>
          <Button size="sm" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open Site Directly
            </a>
          </Button>
        </div>
      ) : (
        <>
          <iframe
            src={src}
            className="w-full h-full border-0 scale-100 group-hover/iframe:scale-[1.02] transition-transform duration-300"
            title={title}
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
            referrerPolicy="no-referrer-when-downgrade"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none opacity-0 group-hover/iframe:opacity-100 transition-opacity" />
        </>
      )}
    </div>
  );
}
