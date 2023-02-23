import {
  HelloText,
  HomeContainer,
  ImageContainer,
  ImageRodrigo,
  NameText,
  PresentationContainer,
} from './styles'
import Typing from 'react-typing-animation'

export function Home() {
  return (
    <HomeContainer>
      <PresentationContainer>
        <HelloText>
          <span>{'<'}</span>HelloWorld 😎 eu sou o
        </HelloText>
        <NameText>
          Rodrigo Viegas &nbsp;<span>{'/>'}</span>
        </NameText>
        <Typing speed={100} loop={true}>
          <span>Desenvolvedor Front-End</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={25} />
          <span>Desenvolvedor Full-Stack</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={25} />
          <span>UI/UX</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={25} />
        </Typing>
      </PresentationContainer>
      <ImageContainer>
        <ImageRodrigo src="https://i.imgur.com/8LNBW16.jpg" alt="Rodrigo" />
      </ImageContainer>
    </HomeContainer>
  )
}
