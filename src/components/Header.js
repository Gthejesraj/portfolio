import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <img src={`${process.env.PUBLIC_URL}/images/banner.jpg`} alt="Banner" className="banner-image" />
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="header-content"
            >
                <h1>Building Blocks of My Data Science Journey</h1>
                <p>Explore how my experience grows like an ML model, from feature engineering to final tuning.</p>
            </motion.div>
        </header>
    );
};

export default Header;
