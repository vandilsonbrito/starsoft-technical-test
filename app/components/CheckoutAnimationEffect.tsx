'use client';
import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { IsCheckoutOpen } from '@/utils/types/types';
import { useMedia } from 'use-media';

export default function CheckoutAnimationEffect({ children, isCheckoutOpen }: { children: React.ReactNode, isCheckoutOpen: IsCheckoutOpen }) {

    const isMobile = useMedia({ maxWidth: '719px' });
    const isMedium = useMedia({ minWidth: '720px', maxWidth: '1024px' });
    const isDesktop = useMedia({ minWidth: '1025px', maxWidth: '1499px' });
    const isLarge = useMedia({ minWidth: '1500px' });

    const menu: Variants = {
        closed: {
            opacity: 0,
            scale: 0,
            x: "100%",
            y: "-100%",
            transition: {
                type: "spring",
                stiffness: 60, //suavizar a saída
                damping: isMobile ? 15 : 25,  //mais alto para transição mais lenta
                duration: isMobile ? 0.3 : 0.5,
            },
        },
        open: {
        opacity: 1,
        scale: 1,
        x: "0%",
        y: "0%",
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 15,
            duration: isMobile ? 0.3 : 0.5,
        },
        },
    };

    return (
        <motion.div
        animate={isCheckoutOpen.value ? "open" : "closed"}
        initial="closed"
        exit="closed"
        variants={menu}
        style={{
            position: 'fixed',
            top: 0,
            right: 0,
            height: '100vh',
            width: isMedium ? '40%' : isDesktop ? '600px' : isLarge ? '679px' : '100%',
            backgroundColor: '#232323', 
            overflow: 'hidden',
            zIndex: '100'

        }}
        >
        {children}
        </motion.div>
    );
}
