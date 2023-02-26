import styled from 'styled-components'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export const ContactContainer = styled(ScrollArea.Root)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
  height: calc(100vh - 120px);

  @media only screen and (max-device-width: 980px) {
    flex-direction: column;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  height: 200px;
  gap: 16px;
  padding-right: 18px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    text-align: end;
  }

  p {
    color: ${({ theme }) => theme['gray-400']};
    text-align: end;
  }

  @media only screen and (max-device-width: 980px) {
    align-items: center;
    gap: 8px;
    padding-right: 0;
    h2 {
      text-align: center;
    }

    p {
      text-align: center;
    }
  }
`

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  line-height: 160%;
  font-size: 18px;
  padding-left: 18px;
  list-style-type: none;

  li {
    span {
      color: ${({ theme }) => theme.accent};
      font-weight: 700;
    }
  }

  li:not(:first-child):not(:last-child) {
    padding-left: 16px;
  }

  a {
    color: ${({ theme }) => theme.accent};
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    @media only screen and (max-device-width: 980px) {
      padding-left: 0;
    }
  }
`
