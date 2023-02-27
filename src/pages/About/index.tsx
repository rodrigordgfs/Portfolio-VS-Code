import {
  AboutContainer,
  AboutContent,
  Body,
  Doctype,
  H1,
  H2,
  Head,
  Header,
  Html,
  Input,
  Meta,
  P,
  PText,
  Section,
  Title,
} from './styles'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export function About() {
  return (
    <AboutContainer>
      <ScrollArea.Viewport>
        <AboutContent>
          <Doctype>
            &lt;
            <span>!DOCTYPE</span> <span>html</span>
            &gt;
          </Doctype>
          <Html>
            &lt;<span>html</span> <span>lang</span>=<span>{'pt-br'}</span>&gt;
          </Html>
          <Head>
            &lt;<span>head</span>&gt;
          </Head>
          <Meta>
            &lt;<span>meta</span> <span>charset</span>=<span>{'"UTF-8"'}</span>
            &gt;
          </Meta>
          <Title>
            &lt;<span>title</span>&gt;<p>Sobre min - Portfólio</p>&lt;
            <span>/title</span>
            &gt;
          </Title>
          <Head>
            &lt;<span>head</span>&gt;
          </Head>
          <Body>
            &lt;<span>body</span>&gt;
          </Body>
          <Header>
            &lt;<span>header</span>&gt;
          </Header>
          <H1>
            &lt;<span>h1</span>&gt;<p>Olá! meu nome é Rodrigo V. Rodrigues</p>
            &lt;
            <span>/h1</span>&gt;
          </H1>
          <P>
            &lt;<span>p</span>&gt;
          </P>
          <PText>
            Sou Desenvolvedor Web a cerca de 4 anos, mas estudando a mais de 7
            <br />
            anos. No meu dia a dia uso Vue.JS para o Front-end e Django com
            <br />
            Python para o Back-end. Atualmente estou focando meus estudos em
            <br />
            ReactJS com Typescritp e React Native.
          </PText>
          <P>
            &lt;<span>/p</span>&gt;
          </P>
          <Header>
            &lt;<span>/header</span>&gt;
          </Header>
          <Section>
            &lt;<span>section</span>&gt;
          </Section>
          <H2>
            &lt;<span>h2</span>&gt;<p>Minhas Habilidades</p>&lt;
            <span>/h2</span>&gt;
          </H2>
          <Input>
            &lt;<span>input</span> <span>type</span>=<span>{'"range"'}</span>{' '}
            <span>label</span>=<span>{'"Javascript"'}</span> <span>value</span>=
            <span>{'"90%"'}</span> /&gt;
          </Input>
          <Input>
            &lt;<span>input</span> <span>type</span>=<span>{'"range"'}</span>{' '}
            <span>label</span>=<span>{'"Vue.JS"'}</span> <span>value</span>=
            <span>{'"80%"'}</span> /&gt;
          </Input>
          <Input>
            &lt;<span>input</span> <span>type</span>=<span>{'"range"'}</span>{' '}
            <span>label</span>=<span>{'"Python"'}</span> <span>value</span>=
            <span>{'"40%"'}</span> /&gt;
          </Input>
          <Input>
            &lt;<span>input</span> <span>type</span>=<span>{'"range"'}</span>{' '}
            <span>label</span>=<span>{'"Django"'}</span> <span>value</span>=
            <span>{'"30%"'}</span> /&gt;
          </Input>
          <Input>
            &lt;<span>input</span> <span>type</span>=<span>{'"range"'}</span>{' '}
            <span>label</span>=<span>{'"ReactJS"'}</span> <span>value</span>=
            <span>{'"65%"'}</span> /&gt;
          </Input>
          <Input>
            &lt;<span>input</span> <span>type</span>=<span>{'"range"'}</span>{' '}
            <span>label</span>=<span>{'"Typescript"'}</span> <span>value</span>=
            <span>{'"45%"'}</span> /&gt;
          </Input>
          <Section>
            &lt;<span>/section</span>&gt;
          </Section>
          <Body>
            &lt;<span>/body</span>&gt;
          </Body>
          <Html>
            &lt;<span>/html</span>&gt;
          </Html>
        </AboutContent>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </AboutContainer>
  )
}
