import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "../grid-item";


const variants ={
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit:{opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }) => (
    // <motion.article initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.4, type: 'easeInOut' }} style={{ position:'relative', boxShadow: '-2px 0px 93px 21px  rgba(84,82,84,1)',  borderRadius:'10px', padding:'10px'}}></motion.article>
    <motion.article initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.4, type: 'easeInOut' }} style={{ position:'relative'}}>
        <>
            {title && (<Head>
                <title>{title } - Yevhen Pastukhov</title>
            </Head>)}
            {children}
            <GridItemStyle/>
        </>
    </motion.article>
) 

export default Layout