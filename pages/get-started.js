import Head from "next/head";
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
        "Wedding",
        "Baptism",
        "Party",
        "Event",
    ];

    const handleSubmit = async (e) => {
        setIsloading(true)
        e.preventDefault();
        try {
            const response = await fetch('/api/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
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
                <title>Contact us - Blinder</title>
            </Head>
            {isLoading ? <Loading loading={isLoading} /> : null}
            <div className='pt-28 pb-12'>
                <div className='custom-screen text-gray-600'>
                    <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
                        <div className='max-w-lg sm:text-center lg:text-left'>
                            <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                                Επικοινωνήστε με κάποιον από την ομάδα μας
                            </h1>
                            <p className='mt-3'>
                                Θα χαρούμε να λύσουμε οποιαδήποτε απορία έχετε σχετικά με την ενοικίαση του εξοπλισμού μας. Παρακαλώ επικοινωνήστε μαζί μας στο{" "}
                                <a
                                    href='mailto:partyboothskg@hotmail.com'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='text-indigo-600 hover:text-indigo-400 font-medium duration-150'>
                                    partyboothskg@hotmail.com.
                                </a>
                            </p>
                        </div>
                        <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>
                            {!isMail ?
                                <form
                                    onSubmit={(e) => handleSubmit(e)}
                                    className='space-y-5 font-medium'>
                                    <div>
                                        <label>Full name</label>
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
                                        <label>Contact Number</label>
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
                                        <label>Location</label>
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
                                        <label>Select a date</label>
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
                                        <label>Message</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => handleInputChange(e, 'message')}
                                            aria-label='Message'
                                            required
                                            className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'></textarea>
                                    </div>
                                    <div>
                                        <label>Service</label>
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
                                            Submit
                                        </Button>
                                    </div>
                                </form> :
                                <div className='class="max-w-lg sm:text-center lg:text-center"'>
                                    <h1 className='text-green-800 text-3xl font-semibold sm:text-4xl'>
                                       Thank you! Your message has been sent successfully!
                                    </h1>
                                    <p className='mt-5'>
                                        Someone from our team will be in touch with you very soon :)
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
