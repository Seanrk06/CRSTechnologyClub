import React, {useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated,  setErrorState, setSucessState, setLoadingState}) => {
    // const {modalOpen, setModalOpen} = useGHStContext();

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });

    }

    // useEffect(() => {
    //     if(status === "success") clearFields()
    // })

    // const clearFields = () => {
    //     setFirstName('');
    //     setLastName('');
    //     setEmail('');
    // }


    return (
        
        <div className="mt-10 sm:mt-12 flex align-content: center">
        
        <form
            className="sm:mx-auto sm:max-w-xl lg:mx-0"
            onSubmit={(e) => handleSubmit(e)}
        >
            <div className="sm:flex">

            {status === "sending" && (
                setLoadingState(true),
                setSucessState(false),
                setErrorState(false)
            )}
            {status === "error" && (
                setErrorState(true),
                setLoadingState(false),
                setSucessState(false)
            )}
            {status === "success" && (
                setSucessState(true),
                setLoadingState(false),
                setErrorState(false)
            )}

            {status !== "success" ? (
                <div className="">
                    <input
                        label="First Name"
                        onChange={(e)=>setFirstName(e.target.value)}
                        type="text"
                        value={firstName}
                        placeholder="First Name"
                        isRequired
                        className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 m-3"
                    />

                    <input
                        label="Last Name"
                        onChange={(e)=>setLastName(e.target.value)}
                        type="text"
                        value={lastName}
                        placeholder="Last Name"
                        isRequired
                        className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 m-3"
                    />

                    <input
                        label="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        value={email}
                        placeholder="Non School Email"
                        isRequired
                        className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 m-3"
                    />

                    <button
                    type="submit"
                    label="subscribe"
                    className="block mx-5  w-fit rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                    Click to add to emailing list!
                    </button>

                </div>
            ) : null}

            
            
            </div>
            
        </form>

        </div>
 
    );
};



const MailchimpForm = props => {
    const url = `https://genhybridsystems.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (

        <div className="mc__form-container">
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                        setSucessState={props.setSucessState} 
                        setErrorState={props.setErrorState}
                        setLoadingState= {props.setLoadingState}
                    />
                )}
            />
        </div>
        
    )
}
export {CustomForm, MailchimpForm};

