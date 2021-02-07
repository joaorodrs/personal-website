import styles from '../styles/components/Main.module.css'

import { Link } from 'react-scroll'

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
        <Link to="inicio" smooth>Início</Link>
        <Link to="sobre" smooth>Sobre</Link>
        <Link to="portfolio" smooth>Portfólio</Link>
        <Link to="contato" smooth>Contato</Link>
      </nav>

      <div id="inicio"></div>

      <div className={styles.mainSection}>
        <div className={styles.nameWrapper}>
          <p>JOÃO PAULO</p>
        </div>
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
        <h1 style={{ opacity: 0, position: 'relative' }}>J</h1>
        <div className={styles.iconsContainer}>
          <div className={styles.iconRow}>
            <IoLogoJavascript color="#22123d" size={40} />
            <IoLogoNodejs color="#22123d" size={40} />
            <IoGitBranchOutline color="#22123d" size={40} />
          </div>
          <div className={styles.iconRow}>
            <IoLogoHtml5 color="#22123d" size={40} />
            <IoLogoCss3 color="#22123d" size={40} />
            <IoLogoReact color="#22123d" size={40} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main