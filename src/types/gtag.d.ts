interface Window {
  gtag?: (
    command: "config" | "event" | "js" | "set",
    targetId: string | Date,
    config?: {
      page_path?: string;
      [key: string]: unknown;
    }
  ) => void;
  dataLayer?: unknown[];
}

