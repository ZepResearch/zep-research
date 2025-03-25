import Content from "./content";


export const metadata = {
  title: "Privacy Policy | Zepresearch | International Journal Publication and Conference",
  description: "Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI.",
  keywords: ["research journal", "international publication", "academic conference", "data science courses"],
  openGraph: {
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    type: "website",
    url: "https://zepresearch.com",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://zepresearch.com",
  },
};

export default function PrivacyPolicy() {
  

  return (
    <div className="py-24">
        <Content/>
    </div>
  );
}