import styles from '../styles/components/Main.module.css'

import { motion } from 'framer-motion'

import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoGitBranchOutline,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact
} from 'react-icons/io5'

const Main: React.FC = () => {
  return (
    <section className={styles.container}>
      <nav className={styles.navigationBar}>
        <a href="/">Início</a>
        <a href="/">Sobre</a>
        <a href="/">Knowledge</a>
        <a href="/">Contato</a>
      </nav>

      <div className={styles.mainSection}>
        <motion.p
          animate={{
            marginBottom: [150, 185, 150]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 1],
            loop: Infinity,
          }}
        >JOÃO PAULO</motion.p>
        <motion.h1
          animate={{
            marginTop: [-800, -75],
            rotate: [180, 17.07],
          }}
          transition={{
            duration: 1.4,
            ease: "easeInOut",
            times: [0, 1]
          }}
        >J</motion.h1>
        <div className={styles.iconsContainer}>
          <div className={styles.iconRow}>
            <IoLogoJavascript color="#1C2B30" size={40} />
            <IoLogoNodejs color="#1C2B30" size={40} />
            <IoGitBranchOutline color="#1C2B30" size={40} />
          </div>
          <div className={styles.iconRow}>
            <IoLogoHtml5 color="#1C2B30" size={40} />
            <IoLogoCss3 color="#1C2B30" size={40} />
            <IoLogoReact color="#1C2B30" size={40} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main