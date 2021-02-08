import { useState } from 'react'

import styles from '../styles/components/Contact.module.css'

import { SiWhatsapp, SiGmail } from 'react-icons/si'

const Contact: React.FC = () => {
  const [whatsAppContactHeight, setWhatsAppContactHeight] = useState('0px')
  const [mailContactHeight, setMailContactHeight] = useState('0px')

  const [whatsAppMessage, setWhatsAppMessage] = useState<string>()

  const [copiedText, setCopiedText] = useState<string>('Copiar')
  const [hasCopied, setHasCopied] = useState(false)

  return (
    <section id="contato" className={styles.contactContainer}>
      <div className={styles.accordionContainer}>
        <a onClick={() => setWhatsAppContactHeight(oldValue => oldValue === '0px' ? '1000px' : '0px')}>
          <SiWhatsapp size={30} color="#0DC143" />
        </a>
        <div
          style={{
            maxHeight: whatsAppContactHeight,
            overflow: 'hidden',
            width: '100%',
            transition: '0.5s'
          }}
        >
          <form onSubmit={e => e.preventDefault()}>
            <label>Mensagem</label>
            <textarea
              value={whatsAppMessage}
              onChange={e => setWhatsAppMessage(e.target.value)}
            />
            <a
              target="_blank"
              href={
                `https://api.whatsapp.com/send/?phone=5593991384250&text=${whatsAppMessage}`
              }
              className={styles.whatsapp}
              type="submit"
            >
              Enviar
            </a>
          </form>
        </div>
      </div>
      <div className={styles.accordionContainer}>
        <a onClick={() => setMailContactHeight(oldValue => oldValue === '0px' ? '1000px' : '0px')}>
          <SiGmail size={30} color="#EA4335" />
        </a>
        <div
          style={{
            maxHeight: mailContactHeight,
            overflow: 'hidden',
            width: '100%',
            transition: '0.3s ease'
          }}
        >
          <div className={styles.mailContainer}>
            <p>joaopauloalencarrodrigues@gmail.com</p>
            <button
              className={hasCopied ? styles.copiedButton : 'button'}
              onClick={() => {
                var textField = document.createElement('textarea')
                textField.innerText = 'joaopauloalencarrodrigues@gmail.com'
                document.body.appendChild(textField)
                textField.select()
                document.execCommand('copy')
                textField.remove()

                setHasCopied(true)
                setCopiedText('Copiado!')
              }}
            >
              {copiedText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact