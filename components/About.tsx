import styles from '../styles/components/About.module.css'
import Image from 'next/image'

const About: React.FC = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutTitleContainer}>
        <h1>Sobre</h1>
      </div>

      <div className={styles.mainContent}>
        <Image
          src="/eu.png"
          alt="João Paulo"
          width={207.41}
          height={235}
        />
        <div className={styles.infoContent}>
          <h1>João Paulo Alencar Rodrigues</h1>
          <h1>Programador Fullstack</h1>
          <h3>(back-end & front-end)</h3>
          <h1>Design de UI, DevOps</h1>
        </div>
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