import { WorldMap } from "./component/world-map"
import { ContactForm } from "./component/contact-form"
import { MapPin, Mail, Phone, Globe } from "lucide-react"

export const metadata = {
  title: "Contact Us | Zepresearch | International Journal Publication and Conference",
  description: "Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI.",
  keywords: [
    "research journal",
    "international publication",
    "academic conference",
    "data science courses"
  ],
  openGraph: {
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    type: "website",
    url: "https://zepresearch.com/contact",
    images: ["/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://zepresearch.com/contact"
  }
};

// Sample connection points for the map
const connectionPoints = [
  {
    start: { lat: 40.7128, lng: -74.006, label: "New York" }, // New York
    end: { lat: 51.5074, lng: -0.1278, label: "London" }, // London
  },
  {
    start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" }, // Tokyo
    end: { lat: -33.8688, lng: 151.2093, label: "Sydney" }, // Sydney
  },
  {
    start: { lat: 19.076, lng: 72.8777, label: "Mumbai" }, // Mumbai
    end: { lat: -22.9068, lng: -43.1729, label: "Rio" }, // Rio de Janeiro
  },
  {
    start: { lat: 55.7558, lng: 37.6173, label: "Moscow" }, // Moscow
    end: { lat: 1.3521, lng: 103.8198, label: "Singapore" }, // Singapore
  },
]

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py- mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with Zep Research to explore collaboration opportunities, inquire about upcoming conferences, or
            discuss research initiatives.
          </p>
        </div>

        <div className="mb-16">
          <WorldMap dots={connectionPoints} lineColor="#0ea5e9" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  We're here to answer any questions you may have about our services, conferences, or research
                  opportunities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-12 w-12 text-cyan-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">
Flat No: 202
Plot.no.2028/2044, Sai Aarti Enclave, Behind Tanishq Chandasekharpur, Bhubaneshwar, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-cyan-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@zepresearch.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-cyan-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">
                    +91 7848854815</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-cyan-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Global Presence</h3>
                    <p className="text-muted-foreground">With partners and collaborators across 6 continents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <ContactForm />
          </div>
        </div>

       
      </div>
    </main>
  )
}

