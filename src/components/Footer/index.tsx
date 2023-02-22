import { FooterBranch, FooterContainer, FooterSSL } from './styles'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { BiGitBranch } from 'react-icons/bi'

export function Footer() {
  return (
    <FooterContainer>
      <FooterSSL
        target="_blank"
        href="https://github.com/rodrigordgfs/Portfolio-VS-Code"
      >
        <RiCodeSSlashFill />
      </FooterSSL>
      <FooterBranch>
        <BiGitBranch />
        <p>master</p>
      </FooterBranch>
    </FooterContainer>
  )
}
