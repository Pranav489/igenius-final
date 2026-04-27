import { siteSEO } from "@/utils/seoConfig";

export default function SeoWrapper({ schemas = [], pageUrl = "/", children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${siteSEO.baseUrl}/#organization`,
        name: siteSEO.siteName,
        alternateName: "I-Genius Abacus Academy",
        url: `${siteSEO.baseUrl}${pageUrl}`,
        logo: `${siteSEO.baseUrl}/logo.png`,
        image: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
        description: siteSEO.defaultDescription,
        telephone: siteSEO.phone,
        email: siteSEO.email,
        foundingDate: siteSEO.foundingYear,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office No. 7/8/9, 2nd Floor Silver Plaza, Opp. BSNL Office, Canada Corner Sharanpur Road",
          addressLocality: "Nashik",
          addressRegion: "Maharashtra",
          postalCode: "422002",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "20.0059",
          longitude: "73.7897",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteSEO.phone,
          contactType: "customer service",
          availableLanguage: ["English", "Hindi", "Marathi"],
          areaServed: ["Nashik", "Pune", "Mumbai", "Maharashtra", "India"]
        },
        sameAs: [
          "https://www.instagram.com/igenius_abacus_/",
          "https://www.youtube.com/@igeniusabacusacademy",
          "https://www.facebook.com/igeniusabacus",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "ISO 9001:2015 Certified",
            recognizedBy: {
              "@type": "Organization",
              name: "International Organization for Standardization"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Govt. Authorised by EBVTR",
            recognizedBy: {
              "@type": "GovernmentOrganization",
              name: "Educational Board of Vocational Training & Research",
              parentOrganization: {
                "@type": "GovernmentOrganization",
                name: "Government of India"
              }
            }
          }
        ],
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 50,
          maxValue: 100
        },
        knowsAbout: [
          "Abacus Education",
          "Mental Math Training",
          "Brain Development Programs",
          "Vedic Mathematics",
          "Rubik's Cube Training",
          "Whole Brain Development",
          "Cognitive Skills Enhancement",
          "Child Education"
        ],
        award: [
          "One of The Best Abacus Institutes in Maharashtra",
          "World Record Holder - Wonder Book of International London",
          "Best Abacus Academy Award (4 times)"
        ],
        founder: {
          "@type": "Person",
          name: "Nita Pawar",
          jobTitle: "Founder & Director",
          description: "Visionary founder who started I-Genius in 2007 with just 2 students, building it into a nationally recognized institution."
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteSEO.baseUrl}/#localbusiness`,
        name: siteSEO.siteName,
        image: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
        url: `${siteSEO.baseUrl}${pageUrl}`,
        telephone: siteSEO.phone,
        email: siteSEO.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office No. 7/8/9, 2nd Floor Silver Plaza, Opp. BSNL Office, Canada Corner Sharanpur Road",
          addressLocality: "Nashik",
          addressRegion: "Maharashtra",
          postalCode: "422002",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "20.0059",
          longitude: "73.7897",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "14:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "Closed",
            closes: "Closed",
          }
        ],
        priceRange: "₹₹",
        areaServed: [
          "Nashik",
          "Pune",
          "Mumbai",
          "Nagpur",
          "Aurangabad",
          "Dhule",
          "Malegaon",
          "Jalgaon",
          "Ahmednagar",
          "Solapur",
          "Maharashtra",
          "Gujarat",
          "Madhya Pradesh",
          "Uttar Pradesh",
          "Rajasthan",
          "Karnataka",
          "Tamil Nadu",
          "Telangana",
          "Delhi",
          "Haryana",
          "Punjab",
          "West Bengal",
          "India"
        ],
        hasMap: "https://maps.google.com/?q=20.0059,73.7897",
        currenciesAccepted: "INR",
        paymentAccepted: ["Cash", "Online Transfer", "UPI", "Cheque"],
        services: [
          "Abacus Classes",
          "Vedic Maths Classes",
          "Rubik's Cube Classes",
          "Brain Development Programs",
          "School Project Partnerships",
          "Franchise Opportunities",
          "Teacher Training"
        ],
        slogans: ["Unlock the Genius Within", "Whole Brain Development"]
      },
      {
        "@type": "WebSite",
        "@id": `${siteSEO.baseUrl}/#website`,
        url: siteSEO.baseUrl,
        name: siteSEO.siteName,
        alternateName: siteSEO.shortName,
        description: siteSEO.defaultDescription,
        inLanguage: ["en", "hi", "mr"],
        publisher: {
          "@type": "Organization",
          "@id": `${siteSEO.baseUrl}/#organization`,
          name: siteSEO.siteName,
          logo: `${siteSEO.baseUrl}/logo.png`
        },
        copyrightYear: new Date().getFullYear(),
        copyrightHolder: {
          "@type": "Organization",
          name: siteSEO.siteName
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteSEO.baseUrl}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": `${siteSEO.baseUrl}/#brand`,
        name: siteSEO.siteName,
        url: siteSEO.baseUrl,
        logo: `${siteSEO.baseUrl}/logo.png`,
        brand: {
          "@type": "Brand",
          name: siteSEO.shortName,
          slogan: "Unlock the Genius Within"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          ratingCount: "5000",
          reviewCount: "2847"
        }
      },
      ...schemas,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}