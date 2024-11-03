import React from 'react';
import { motion } from 'framer-motion';
import './Hobbies.css';

const hobbies = ["Reading", "Hiking", "Coding", "Photography"];

const Hobbies = () => (
    <section className="hobbies centered-section">
        <h2>Hobbies</h2>
        <div className="hobby-list">
            {hobbies.map((hobby, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, color: "#4a90e2" }}
                    transition={{ duration: 0.3 }}
                    className="hobby"
                >
                    • {hobby}
                </motion.div>
            ))}
        </div>
    </section>
);

export default Hobbies;
