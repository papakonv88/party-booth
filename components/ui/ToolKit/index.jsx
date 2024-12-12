import SectionWrapper from "../../SectionWrapper"

const ToolKit = () => {

    const features = [
        {
            title: "Υπηρεσία 4-6 Ωρών",
            desc: "Απολαύστε αδιάλειπτη διασκέδαση με το photo booth για 4 έως 6 ώρες στην εκδήλωσή σας."
        },
        {
            title: "Απεριόριστες Εκτυπώσεις",
            desc: "Αποκτήστε απεριόριστες εκτυπώσεις υψηλής ποιότητας για όλους τους καλεσμένους σας κατά τη διάρκεια της εκδήλωσης."
        },
        {
            title: "Δωρεάν Props & Αξεσουάρ",
            desc: "Παρέχουμε μια μεγάλη ποικιλία διασκεδαστικών props, όπως καπέλα, γυαλιά και πινακίδες για δημιουργικές φωτογραφίες."
        },
        {
            title: "Εμπειρία Κόκκινου Χαλιού",
            desc: "Προσθέστε μια νότα πολυτέλειας στην εκδήλωσή σας με την premium διακόσμηση κόκκινου χαλιού."
        },
        {
            title: "Φωτογραφίες Υψηλής Ανάλυσης",
            desc: "Απαθανατίστε κάθε στιγμή σε εκπληκτική υψηλή ανάλυση για αναμνήσεις που διαρκούν."
        },
        {
            title: "Κοινοποίηση στα Social Media",
            desc: "Μοιραστείτε τις αγαπημένες σας στιγμές στα social media ή μέσω email άμεσα."
        },
    ];

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Οι Υπηρεσίες μας
                    </h2>
                    <p>
                        Υπάρχουν κάποια πράγματα που μας κάνουν να ξεχωρίζουμε
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ToolKit
