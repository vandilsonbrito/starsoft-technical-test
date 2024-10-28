'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FadeInOnScroll = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement | null>(null);

    const checkVisibility = () => {
        const element = ref.current;
        if (element) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Verifica se o elemento está visível na tela
            if (rect.top <= windowHeight * 0.9) { // Dispara a animação ao aparecer na tela
                setIsVisible(true);
            }
        }
    };

    useEffect(() => {
        if (isVisible) {
            controls.start({ opacity: 1 });
        } else {
            controls.start({ opacity: 0 });
        }
    }, [isVisible, controls]);

    useEffect(() => {
        checkVisibility(); // Verifica visibilidade imediatamente na montagem

        const handleScroll = () => checkVisibility();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }} 
            animate={controls}
            transition={{ duration: 1.8, ease: [0.3, 0, 0.1, 1] }} // Transição suave
        >
            {children}
        </motion.div>
    );
};

export default FadeInOnScroll;
