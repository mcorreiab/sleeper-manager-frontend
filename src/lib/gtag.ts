export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

interface Event {
  action: string;
  category: string | undefined;
  label: string | undefined;
  value: number | undefined;
}

interface PageView {
  url: string | undefined;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = ({ url }: PageView) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: Event) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
