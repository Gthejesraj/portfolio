import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Events.css';

const events = [
    "Google Developer Group.",
    "AI & Tech Talks at Zoom HQ.",
    "Intuit Open Source Meetup - AI and Kubernetes.",
    "AI Summit - Silicon Valley.",
];

const Events = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % events.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="events centered-section">
            <h2>Events Attended</h2>
            <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {events[index]}
            </motion.p>
        </section>
    );
};

export default Events;
