import Head from "next/head";
import axios from "axios";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Loading from "../components/ui/Loading";
import {useState} from "react";

export default function GetStarted() {
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        email: '',
        location: '',
        date: '',
        message: '',
        services: [],
    });
    const [isMail, setIsMail] = useState(false)
    const [isLoading, setIsloading] = useState(false)
    const servicesItems = [
        "Γάμος",
        "Βάφτιση",
        "Party",
        "Εκδήλωση",
    ];

    const handleSubmit = async (e) => {
        setIsloading(true)
        e.preventDefault();
        try {
            const response = await axios.post(
                    " https://www.party-booth.gr/api/sendMail",
                    formData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
            ;
            if (response.status === 200) {
                setIsMail(true)
                setIsloading(false)
            } else {
                setIsloading(false)
                console.error('Failed to send email:', data.message);
            }
        } catch (e) {
            console.log(e)
            setIsloading(false)
            alert('Κάτι πήγε στραβά, δοκιμάστε ξανά σε λίγο.')
        }
    };

    const handleInputChange = (e, prop) => {
        if (prop === 'services') {
            if (e && !formData.services.includes(e)) {
                setFormData(prev => ({...prev, services: [...prev.services, e]}));
            } else {
                setFormData(prev => ({...prev, services: prev.services.filter((item) => item !== e)}));
            }
        } else {
            const {value} = e.target;
            setFormData(prev => ({...prev, [prop]: value}));
        }
    };

    return (
        <>
            <Head>
                <title>Επικοινωνήστε μαζί μας - PartyBoothSKG</title>
                <meta name="description" content="Contact Us, book your photbooth rental"/>
                <meta name="robots" content="index, follow"/>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "ProfessionalService",
                        "name": "Party Booth | SKG",
                        "url": "https://www.party-booth.gr/get-started",
                        "telephone": "+306989386480",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+306989386480",
                            "contactType": "Customer Service",
                            "areaServed": "GR",
                            "availableLanguage": ["Greek", "English"]
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Not Specified",
                            "addressLocality": "Thessaloniki",
                            "addressRegion": "GR",
                            "postalCode": "Not Specified",
                            "addressCountry": "GR"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 40.6401,
                            "longitude": 22.9444
                        },
                        "sameAs": [
                            "https://www.instagram.com/partybooth_skg",
                        ]
                    })}
                </script>
            </Head>
            {isLoading ? <Loading loading={isLoading}/> : null}
            <div className='pt-28 pb-12'>
                <div className='custom-screen text-gray-600'>
                    <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
                        <div className='max-w-lg sm:text-center lg:text-left'>
                            <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                                Επικοινωνήστε άμεσα, με έναν εκπρόσωπό μας
                            </h1>
                            <p className='mt-3'>
                                Θα χαρούμε να λύσουμε οποιαδήποτε απορία έχετε σχετικά με την ενοικίαση του εξοπλισμού
                                μας. Παρακαλώ επικοινωνήστε μαζί μας στο{" "}
                                <a
                                    href='mailto:partyboothskg2024@gmail.com'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='text-indigo-600 hover:text-indigo-400 font-medium duration-150'>
                                    partyboothskg2024@gmail.com.
                                </a>
                            </p>
                        </div>
                        <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>
                            {!isMail ?
                                <form
                                    onSubmit={(e) => handleSubmit(e)}
                                    className='space-y-5 font-medium'>
                                    <div>
                                        <label>Ονοματεπώνυμο</label>
                                        <Input
                                            aria-label='Full name'
                                            type='text'
                                            required
                                            className='mt-2 focus:border-indigo-600'
                                            value={formData.fullName}
                                            onChange={(e) => handleInputChange(e, 'fullName')}
                                        />
                                    </div>
                                    <div>
                                        <label>Τηλέφωνο Επικοινωνίας</label>
                                        <Input
                                            value={formData.contactNumber}
                                            onChange={(e) => handleInputChange(e, 'contactNumber')}
                                            aria-label='Contact Number'
                                            type='text'
                                            required
                                            className='mt-2 focus:border-indigo-600'
                                        />
                                    </div>
                                    <div>
                                        <label>Email</label>
                                        <Input
                                            value={formData.email}
                                            onChange={(e) => handleInputChange(e, 'email')}
                                            aria-label='Email'
                                            type='email'
                                            required
                                            className='mt-2 focus:border-indigo-600'
                                        />
                                    </div>
                                    <div>
                                        <label>Τοποθεσία εκδήλωσης</label>
                                        <Input
                                            value={formData.location}
                                            onChange={(e) => handleInputChange(e, 'location')}
                                            aria-label='Location'
                                            type='text'
                                            required
                                            className='mt-2 focus:border-indigo-600'
                                        />
                                    </div>
                                    <div>
                                        <label>Ημερομηνία εκδήλωσης</label>
                                        <Input
                                            value={formData.date}
                                            onChange={(e) => handleInputChange(e, 'date')}
                                            aria-label='Date'
                                            type='date'
                                            required
                                            className='mt-2 focus:border-indigo-600'
                                        />
                                    </div>
                                    <div>
                                        <label>Μήνυμα</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => handleInputChange(e, 'message')}
                                            aria-label='Message'
                                            required
                                            className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'></textarea>
                                    </div>
                                    <div>
                                        <label>Υπηρεσία</label>
                                        <ul className='mt-3 flex flex-wrap gap-x-8 gap-y-3 font-normal max-w-md sm:gap-x-16'>
                                            {servicesItems.map((item, idx) => (
                                                <li key={idx} className='flex gap-x-2 items-center'>
                                                    <Checkbox checked={formData.services.includes(item)}
                                                              onChange={() => handleInputChange(item, 'services')}
                                                              id={`service-${idx}`}/>
                                                    <label htmlFor={`service-${idx}`} className='text-sm'>
                                                        {item}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='pt-1'>
                                        <Button
                                            className='w-full text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 ring-offset-2 ring-indigo-600 focus:ring'>
                                            Υποβολή
                                        </Button>
                                    </div>
                                </form> :
                                <div className='class="max-w-lg sm:text-center lg:text-center"'>
                                    <h1 className='text-green-800 text-3xl font-semibold sm:text-4xl'>
                                        Ευχαριστούμε! Το μήνυμα σας, στάλθηκε επιτυχώς!
                                    </h1>
                                    <p className='mt-5'>
                                        Κάποιος από την ομάδα μας, θα επικοινωνήσει μαζί σας πολύ σύντομα :)
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
