import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
    {
        title: "v1.0 - Foundational Learning (Education at CMR Institute of Technology)",
        description: "Built a strong foundation in computer science through rigorous coursework in Python, Java, DBMS, and Big Data. Developed essential skills that paved the way for effective data processing, analysis, and programming proficiency. Gained knowledge in database management and programming, setting the stage for future data analytics and software development roles."
    },
    {
        title: "v2.0 - Data Integration and Pattern Recognition (Research Assistant, Wilkin Lab)",
        description: "Assisted Biology and Fire Ecology students with geospatial data analysis, leveraging Python and R to extract meaningful insights from environmental data. Identified critical patterns that supported advanced ecological research. Contributed to impactful research projects by enhancing data accuracy and analytical depth, providing valuable support for environmental research initiatives."
    },
    {
        title: "v3.0 - Data-Driven Decision Making (Data Analyst, Handlkart)",
        description: "Analyzed sales and customer behavior data to optimize product offerings, leading to a boost in overall sales performance. Developed real-time dashboards in Tableau that improved operational efficiency and enabled data-driven decisions within the team. Increased customer retention by 15% and enhanced team decision-making efficiency by 25%, demonstrating the power of actionable insights and visual analytics."
    },
    {
        title: "v4.0 - Real-World Deployment and User Engagement (Software Development Intern, NexTurn)",
        description: "Created a dynamic website using React to promote environmental sustainability, focusing on raising awareness about carbon emissions. Emphasized usability and aesthetics, delivering an engaging and informative user experience. Streamlined development processes, improved team productivity through organized code, and contributed to the promotion of sustainability, blending technical skills with impactful messaging."
    },
    {
        title: "v5.0 - Model Selection and Future Goals (Current)",
        description: "Currently advancing data analytics and machine learning skills through a Master’s program in Data Analytics at San Jose State University. Engaged in coursework related to Data Warehousing, Visualization, and Mathematical Methods for Data Analytics. Preparing for Summer 2025 internships and full-time opportunities post-graduation in 2026, with a commitment to applying data science and machine learning expertise in real-world applications."
    }
];

const Experience = () => (
    <section className="experience centered-section">
        <h2>Experience Journey - Model Iterations</h2>
        {experiences.map((exp, index) => (
            <motion.div
                key={index}
                className="experience-item"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <h3>{exp.title}</h3>
                <div className="experience-content">
                    <p>{exp.description}</p>
                </div>
            </motion.div>
        ))}
    </section>
);

export default Experience;
