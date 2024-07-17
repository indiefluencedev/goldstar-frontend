import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Form = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        user_subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'user_phone') {
            // Allow only numbers, parentheses, and plus sign
            if (/^[\d()+-]*$/.test(value)) {
                setFormData({
                    ...formData,
                    [name]: value
                });
            }
        } else if (name === 'user_name' || name === 'message') {
            // Prevent scripts and sanitize input
            const sanitizedValue = value.replace(/<[^>]*>/g, '');
            setFormData({
                ...formData,
                [name]: sanitizedValue
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const [errors, setErrors] = useState({});

    const isValidEmail = (email) => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phoneNumber) => {
        // Allow phone number with digits, parentheses, and plus sign
        const phoneRegex = /^[\d()+]{10,15}$/;
        return phoneRegex.test(phoneNumber);
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.user_name) {
            newErrors.user_name = t("*Name is required");
        }
        if (!formData.user_email) {
            newErrors.user_email = t("*Email is required");
        } else if (!isValidEmail(formData.user_email)) {
            newErrors.user_email = t("*Invalid email format");
        }
        if (!formData.user_phone) {
            newErrors.user_phone = t("*Phone number is required");
        } else if (!isValidPhoneNumber(formData.user_phone)) {
            newErrors.user_phone = t("*Phone number must be 10-15 characters long, and can include digits, parentheses, and plus sign");
        }
        if (!formData.message) {
            newErrors.message = t("*Message is required");
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            emailjs
                .sendForm(
                    import.meta.env.VITE_SERVICE_ID,
                    import.meta.env.VITE_CONTACT_TEMPLATE_ID,
                    form.current,
                    import.meta.env.VITE_PUBLIC_KEY
                )
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        } else {
            console.log("Form Validation Failed");
        }
    };

    return (
        <div className='w-full max-w-[400px]'>
            <h2 className="text-[38px] font-bold mb-4">{t('get_in_touch')}</h2>
            <p className="mb-6">{t('get_in_touch_description')}</p>
            <form className='w-full' ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder={t('your_name')}
                        value={formData.user_name}
                        onChange={handleChange}
                        name='user_name'
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.user_name && <div className="error text-[12px] text-red-600">{errors.user_name}</div>}
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder={t('your_email')}
                        value={formData.user_email}
                        onChange={handleChange}
                        name='user_email'
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.user_email && <div className="error text-[12px] text-red-600">{errors.user_email}</div>}
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder={t('your_phone')}
                        value={formData.user_phone}
                        onChange={handleChange}
                        name='user_phone'
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.user_phone && <div className="error text-[12px] text-red-600">{errors.user_phone}</div>}
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder={t('type_your_message')}
                        value={formData.message}
                        onChange={handleChange}
                        name='message'
                        className="w-full p-2 border border-gray-300 rounded h-32 resize-none"
                    ></textarea>
                    {errors.message && <div className="error text-[12px] text-red-600 ">{errors.message}</div>}
                </div>
                <div>
                    <button
                        type="submit"
                        value="Send"
                        className="w-full p-2 bg-prime text-white rounded shadow hover:bg-purple-900 transition duration-200"
                    >
                        {t('send')}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
