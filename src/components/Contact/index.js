import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact () {
    const [formState, setFormState] = useState({ name: '', email: '', messege: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function pageReload() {
        window.location.reload(false);
    };

    if (state.succeeded) {
        return (
            <div>
                <p>Thank you for reaching out. Ill get back to you soon.</p>
                <button className='button is-medium is-primary is-half m-6' onClick={pageReload}>Submit New Message</button>
            </div>
        );
    }

    const handleChange = (e) => {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your Email is invalid.')
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
        
    };

    return (
        <div>

            <p className='content is-medium'>Contact Me:</p>

            <hr />

            <form id='contact-form' onSubmit={handleSubmit}>

                <div className='field'>
                    <label className='label' htmlFor='name'>Name</label>
                    <input className='input' type='text' name='name' defaultValue={name} onBlur={handleChange} />
                </div>

                <div className='field'>
                    <label className='label' htmlFor='email'>Email</label>
                    <input className='input' type='email' name='email' defaultValue={email} onBlur={handleChange} />
                </div>

                <div className='field'>
                    <label className='label' htmlFor='messege'>Message</label>
                    <textarea className='textarea' name='message' rows='5' defaultValue={message} onBlur={handleChange} />
                </div>

                {errorMessage && (
                    <div>
                        <p className='is-danger'>{errorMessage}</p>
                    </div>
                )}
                <button className='button is-medium is-primary is-fullwidth' data-testid='button' type='submit'>Submit</button>
            </form>

        </div>
    );
}

export default Contact;