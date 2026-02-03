// Animation variants for reusable animations

export const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -60 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const imageHover = {
    scale: 1.1,
    transition: { duration: 0.3, ease: "easeInOut" }
};

export const buttonHover = {
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    transition: { duration: 0.2 }
};

export const buttonTap = {
    scale: 0.95
};
