import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Γνωρίστε μας καλύτερα
                </h2>
                <p className="mt-3 text-gray-600">
                    Ονειρεύεστε μια εκδήλωση που θα συζητιέται για καιρό; ✨ Το Magic Mirror Photo Booth είναι εδώ για να μετατρέψει κάθε στιγμή σε μια αξέχαστη εμπειρία! 📸 Χαρίστε στους καλεσμένους σας διασκέδαση, γέλιο και αναμνήσεις με τις πιο εντυπωσιακές φωτογραφίες. Μη χάνετε χρόνο, επικοινωνήστε μαζί μας τώρα και εξασφαλίστε τη δική σας μαγική εμπειρία! 🎉💫
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
                    Εκδήλωση Ενδιαφέροντος
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA
