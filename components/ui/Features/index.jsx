import SectionWrapper from "../../SectionWrapper"

const Features = () => {

    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0z"/>
                </svg>
            ,
            title: "Κάντε την στιγμή σας, μια ξεχωριστή ανάμνηση",
            desc: "Μετατρέψτε κάθε στιγμή σε ανάμνηση με το Magic Mirror Photo Booth. Είτε πρόκειται για γάμο, εταιρική εκδήλωση ή πάρτι γενεθλίων, το Magic Mirror Photo Booth είναι σχεδιασμένα να αποτυπώνουν τη χαρά, το γέλιο και τη δημιουργικότητα των καλεσμένων σας. Με προσαρμόσιμα φόντα, διασκεδαστικά αξεσουάρ και άμεση εκτύπωση, η εκδήλωσή σας θα μείνει αξέχαστη!"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15.75 8.25v-1.5A2.25 2.25 0 0013.5 4.5h-3a2.25 2.25 0 00-2.25 2.25v1.5m-3 0a2.25 2.25 0 012.25-2.25h12a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 17.25v-9z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3 3-3"/>
                </svg>,
            title: "Μαγεία Παντού",
            desc: "Tο Magic Mirror Photo Booth διαθέτει επιλογές ψηφιακού διαμοιρασμού, κάνοντας ευκολότερη από ποτέ τη δημοσίευση αγαπημένων φωτογραφιών στα μέσα κοινωνικής δικτύωσης ή την αποστολή τους μέσω email. Με φωτογραφίες υψηλής ανάλυσης και GIFs, η εκδήλωσή σας θα γίνει viral σε χρόνο μηδέν!"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M4.5 9.75l7.5-6 7.5 6M4.5 19.5h15m-15 0a2.25 2.25 0 01-2.25-2.25v-9A2.25 2.25 0 014.5 6.75m15 12.75a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25m-15 0h15"/>
                </svg>,
            title: "Εύκολη Εγκατάσταση",
            desc: "Αφήστε σε εμάς την εγκατάσταση και εσείς επικεντρωθείτε στο να απολαύσετε την εκδήλωσή σας. Η ομάδα μας παρέχει επαγγελματική παράδοση, εγκατάσταση και υποστήριξη στον χώρο για να διασφαλίσει ότι όλα λειτουργούν ομαλά. Από την αρχή μέχρι το τέλος, είμαστε δίπλα σας—γιατί η δημιουργία αναμνήσεων πρέπει να είναι χωρίς άγχος."
        }
    ];


    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600">
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        features.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SectionWrapper>
    )
}

export default Features
