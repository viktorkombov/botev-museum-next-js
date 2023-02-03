import { motion } from 'framer-motion';

const PageTransition = props => {
    const { children } = props;
    const pageVariants = {
        initial: {
           opacity: 0.5
        },
        in: {
            opacity: 1
        },
        out: {
            opacity: 0.5, transition: {duration: 0.15}
        }
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.2
    };

    return (
        <motion.div
            // initial="initial"
            // animate="in"
            // exit="out"
            // style={{overflowX: "hidden"}}
            // variants={pageVariants}
            // transition={pageTransition}
        >
            {children}
        </motion.div>
    )

}

export default PageTransition;