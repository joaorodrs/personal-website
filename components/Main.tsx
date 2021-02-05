import styles from '../styles/components/Main.module.css'

const Main: React.FC = () => {
  return (
    <section className={styles.container}>
      <nav className={styles.navigationBar}>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#knowledge">Knowledge</a>
        <a href="#contato">Contato</a>
      </nav>
    </section>
  )
}

export default Main