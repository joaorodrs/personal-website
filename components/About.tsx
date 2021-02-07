import styles from '../styles/components/About.module.css'
import Image from 'next/image'

import {
  SiNextDotJs,
  SiRedux,
  SiReact,
  SiGit,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiNodeDotJs
} from 'react-icons/si'

const About: React.FC = () => {
  return (
    <section id="sobre" className={styles.aboutContainer}>
      <div className={styles.aboutTitleContainer}>
        <h1>Sobre</h1>
      </div>

      <div className={styles.mainContent}>
        <Image
          src="/eu.png"
          alt="João Paulo"
          width={200}
          height={225}
        />
        <div className={styles.infoContent}>
          <h1>João Paulo Alencar Rodrigues</h1>
          <h1>Programador Fullstack</h1>
          <h3>(back-end & front-end)</h3>
          <h1>Design de UI, DevOps</h1>
        </div>
      </div>

      <div className={styles.techLogosContainer}>
        <SiNextDotJs size={35} color="white"/>
        <SiRedux size={35} color="white"/>
        <SiReact size={35} color="white"/>
        <SiGit size={35} color="white"/>
        <SiTypescript size={35} color="white"/>
        <SiCss3 size={35} color="white"/>
        <SiHtml5 size={35} color="white"/>
        <SiNodeDotJs size={35} color="white"/>
      </div>

      <div className={styles.descriptionContainer}>
        <p>
          Olá! Meu nome é João, tenho 17 anos e sou completamente
          louco (no bom sentido) por tecnologia e principalmente
          pela área de desenvolvimento e solução de problemas.
        </p>
      </div>
    </section>
  )
}

export default About