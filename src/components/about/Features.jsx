import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCog, FaBolt, FaToolbox, FaUsers, FaShieldAlt } from 'react-icons/fa';

const features = [
    {
        id: 1,
        icon: <FaCog size={24} />,
        title: 'Customizable',
        description: "Tailor your landing page's look and feel, from the color scheme to the font size, to the design of the page."
    },
    {
        id: 2,
        icon: <FaBolt size={24} />,
        title: 'Fast Performance',
        description: 'We build our templates for speed in mind, for super-fast load times so your customers never waver.'
    },
    {
        id: 3,
        icon: <FaToolbox size={24} />,
        title: 'Fully Featured',
        description: 'Everything you need to succeed and launch your landing page, right out of the box. No need to install anything else.'
    },
    {
        id: 4,
        icon: <FaUsers size={24} />,
        title: 'Excellent Sales Team',
        description: 'Have an excellent elite sales team.'
    },
    {
        id: 5,
        icon: <FaShieldAlt size={24} />,
        title: 'Quality Guaranteed',
        description: 'Equipment quality is guaranteed.'
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

const FeatureSection = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target); // Stop observing once it's in view
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of the component is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="bg-white mt-40">
            <section id="features" className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-300 bg-neutral-100" ref={sectionRef}>
                <div className="relative mx-auto max-w-5xl text-center">
                    <h2 className="block w-full bg-gradient-to-b from-prime to-gray-700 bg-clip-text font-assistant font-bold text-transparent text-3xl sm:text-4xl">
                        Why Choose Us
                    </h2>
                </div>

                <motion.div
                    className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                >
                    {features.map((feature) => (
                        <div key={feature.id} className="rounded-md border border-neutral-300 bg-white p-8 text-center shadow transition-transform duration-300 hover:scale-110">
                            <div
                                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                                style={{ backgroundImage: 'linear-gradient(rgba(84, 68, 132, 0.3) 0%, rgba(84, 68, 132, 0.8) 100%)' }}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="mt-6 font-assistant font-bold text-gray-700">{feature.title}</h3>
                            <p className="my-4 mb-0 font-assistant leading-relaxed tracking-wide text-gray-700">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </motion.div>

                <div
                    className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
                    style={{ backgroundImage: 'linear-gradient(to right top, rgba(84, 68, 132, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(84, 68, 132, 0.2)' }}
                ></div>
                <div
                    className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
                    style={{ backgroundImage: 'linear-gradient(to left top, rgba(84, 68, 132, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(84, 68, 132, 0.2)' }}
                ></div>
            </section>
        </div>
    );
};

export default FeatureSection;
