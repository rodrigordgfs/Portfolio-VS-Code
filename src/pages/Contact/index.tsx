import { ContactContainer, ContactInfo, ContactList } from './styles'

export function Contact() {
  return (
    <ContactContainer>
      <ContactInfo>
        <h2>
          Quer entrar em
          <br />
          contato comigo?
        </h2>
        <p>Basta clicar em um dos links</p>
      </ContactInfo>
      <ContactList>
        <li>
          .<span>redes-sociais</span> {'{'}
        </li>
        <li>
          email:{' '}
          <a href="mailto:rodrigordgfs@gmail.com">rodrigordgfs@gmail.com</a>;
        </li>
        <li>
          github:{' '}
          <a
            target="_blank"
            href="https://github.com/rodrigordgfs"
            rel="noreferrer"
          >
            rodrigordgfs
          </a>
          ;
        </li>
        <li>
          linkedin:{' '}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rodrigo-viegas-rodrigues-83315164/"
            rel="noreferrer"
          >
            rodrigo-viegas-rodrigues
          </a>
          ;
        </li>
        <li>
          instagram:{' '}
          <a
            target="_blank"
            href="https://www.instagram.com/mr_shinodaa/"
            rel="noreferrer"
          >
            @mr_shinodaa
          </a>
          ;
        </li>
        <li>
          facebook:{' '}
          <a
            target="_blank"
            href="https://www.facebook.com/MrShiinoda/"
            rel="noreferrer"
          >
            rodrigo-shinoda
          </a>
          ;
        </li>
        <li>{'}'}</li>
      </ContactList>
    </ContactContainer>
  )
}
