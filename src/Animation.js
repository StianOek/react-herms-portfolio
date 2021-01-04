export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
        
    },

    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            when: 'beforeChildren',
            staggerChildren: 0.1,
            
        },
    },
    exit: {
        opacity: 0,
        x: 300,
        transition: {
            duration: 1,
        }
    }
};

export const titleAnimation = {
    hidden: {
        y: 200
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            
        }
    }
    
};

export const titleAnimation2 = {
    hidden: {
        x: 600
    },
    show: {
        x: 0,
        transition: 1.5,
        ease: "easeOut",
        
    },
};



export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 1,
        }
    },
};

export const photoAnimation = {
    hidden: {
        scale: 2,
        opacity: 0,
    },

    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 1,
        },
    },
}