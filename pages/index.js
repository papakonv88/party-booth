import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";
import image1 from "../public/image-1.jpg";
import image2 from "../public/image-2.jpg";
import image3 from "../public/image-3.jpg";

export default function Home() {
    return (
        <>
            <Head>
                <title>PartyBooth | SKG</title>
                <meta name="description" content="PartyBooth | SKG, photobooth rental in thessaloniki area"/>
                <meta name='robots' content='index, follow'/>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "ProfessionalService",
                        "name": "Party Booth | SKG",
                        "image": "https://www.party-booth.gr/logo.svg",
                        "@id": "https://party-booth.gr",
                        "url": "https://party-booth.gr",
                        "telephone": "+306989386480",
                        "priceRange": "€€",
                        "areaServed": [
                            {"@type": "City", "name": "Thessaloniki"},
                            {"@type": "City", "name": "Halkidiki"},
                            {"@type": "City", "name": "Kilkis"},
                            {"@type": "City", "name": "Veroia"},
                            {"@type": "City", "name": "Edessa"},
                        ],
                        "geo": {
                            "@type": "GeoCircle",
                            "geoMidpoint": {
                                "@type": "GeoCoordinates",
                                "latitude": 40.6401,
                                "longitude": 22.9444
                            },
                            "geoRadius": "50"
                        },
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                "opens": "10:00",
                                "closes": "22:00"
                            }
                        ],
                        "sameAs": [
                            "https://www.instagram.com/partybooth_skg",
                        ]
                    })}
                </script>
            </Head>
            <Hero/>
            <Testimonials/>
            <GradientWrapper className="wrapper">
                <Features/>
                <CTA reverse={false} image={image1} title={'Μirror Photo Booth'}
                     description={'Το Magic Mirror Photo Booth είναι η ιδανική επιλογή για κάθε εκδήλωση, προσφέροντας έναν εντυπωσιακό καθρέφτη με οθόνη αφής 65 ιντσών, που χαρίζει μια διαδραστική και ξεχωριστή εμπειρία. Με απεριόριστες φωτογραφίες υψηλής ανάλυσης, διασκεδαστικά props, δυνατότητα άμεσης εκτύπωσης και ψηφιακής αποστολής, οι καλεσμένοι σας θα απολαύσουν μοναδικές στιγμές που θα μείνουν αξέχαστες. Ιδανικό για γάμους, βαπτίσεις, εταιρικά events και γενέθλια, το Magic Mirror Photo Booth προσθέτει λάμψη και διασκέδαση σε κάθε περίσταση!'}/>
                <CTA reverse={true} image={image2} title={'Διασκέδαση Χωρίς Όρια στη Θεσσαλονίκη και Γύρω Περιοχές!'}
                     description={'Καλύπτουμε την περιοχή της Θεσσαλονίκης και τις γύρω πόλεις, προσφέροντας ενοικίαση εξοπλισμού μαζί με απεριόριστα props, δύο άτομα για υποστήριξη, και εγκατάσταση με εγγύηση σωστής λειτουργίας. Οι φωτογραφίες σας μοιράζονται άμεσα στα social media και εκτυπώνονται στη στιγμή, χωρίς περιορισμούς. Χαρίστε στις εκδηλώσεις σας διασκέδαση και ποιότητα που ξεχωρίζει!'}/>
                <CTA reverse={false} image={image3} title={'Η Ιδανική Επιλογή για Κάθε Ξεχωριστή Εκδήλωση!'}
                     description={'Το Magic Mirror Photo Booth είναι η τέλεια επιλογή για να κάνετε κάθε εκδήλωση ξεχωριστή και αξέχαστη! Είτε σχεδιάζετε έναν ρομαντικό γάμο 💍, μια χαρούμενη βάπτιση 👶, ένα διασκεδαστικό πάρτι γενεθλίων 🎉, είτε ένα εντυπωσιακό εταιρικό event 📊, το photo booth μας προσαρμόζεται απόλυτα στις ανάγκες σας. Με τη διαδραστική του εμπειρία, την απεριόριστη χρήση και τις μοναδικές δυνατότητες του, υπόσχεται να χαρίσει στιγμές χαράς και γέλιου σε όλους τους καλεσμένους σας. Προσθέστε μια δόση λάμψης, διασκέδασης και δημιουργικότητας στις πιο σημαντικές σας στιγμές και απολαύστε αναμνήσεις που θα μείνουν ανεξίτηλες!'}/>
            </GradientWrapper>
            <ToolKit/>
            <FooterCTA/>
        </>
    );
}
