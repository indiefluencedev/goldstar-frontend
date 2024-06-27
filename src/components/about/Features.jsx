import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Heritage from '../../assets/svg/heritage.svg';
import Excellence from '../../assets/svg/mdi_prize.svg';
import Assurance from '../../assets/svg/assurance.svg';
import Service from '../../assets/svg/support.png';
import Variety from '../../assets/svg/variety.svg';
import Innovation from '../../assets/svg/innovation.svg';

const features = [
    {
        id: 1,
        icon: Heritage,
        title: 'Heritage',
        description: "Our sewing equipment has a long-standing history, crafted with expertise and innovation over many years, ensuring superior quality."
    },
    {
        id: 2,
        icon: Excellence,
        title: 'Excellence',
        description: 'Our sales team is renowned for their professionalism and dedication, delivering outstanding service and customer satisfaction.'
    },
    {
        id: 3,
        icon: Assurance,
        title: 'Assurance',
        description: 'We guarantee the quality of our equipment, offering reliable performance and durability, backed by rigorous testing and standards.'
    },
    {
        id: 4,
        icon: Service,
        title: 'Service',
        description: 'Our after-sales service is exceptional, consistently praised by customers for its efficiency, reliability, and customer-centric approach.'
    },
    {
        id: 5,
        icon: Variety,
        title: 'Variety',
        description: 'We offer a complete range of sewing equipment categories, catering to diverse needs and preferences with versatile, high-quality products.'
    },
    {
        id: 6,
        icon: Innovation,
        title: 'Innovation',
        description: 'We continuously innovate our sewing equipment, integrating the latest technologies to meet evolving industry standards and customer expectations.'
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
                                className="button-text mx-auto flex h-16 w-16 items-center justify-center rounded-md  p-2"
                                // style={{ backgroundImage: 'linear-gradient(rgba(84, 68, 132, 0.3) 0%, rgba(84, 68, 132, 0.8) 100%)' }}
                            >
                                <img src={feature.icon} alt={feature.title} className="h-full w-full object-contain" />
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
