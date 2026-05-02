import Script from "next/script";

const getUmamiScriptUrl = () => {
  const configuredUrl = process.env.NEXT_PUBLIC_UMAMI_URL;

  if (!configuredUrl) {
    return "https://analytics.zepresearch.com/script.js";
  }

  try {
    const parsedUrl = new URL(configuredUrl);
    return `${parsedUrl.origin}/script.js`;
  } catch {
    return "https://analytics.zepresearch.com/script.js";
  }
};

export default function UmamiAnalytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const scriptUrl = getUmamiScriptUrl();

  if (!websiteId) return null;

  return (
    <Script
      src={scriptUrl}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
