import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.primary};
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  -moz-box-shadow: 4px 0px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 4px 0px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.4);
`
export const FooterSSL = styled.div`
  background: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 60px;
  cursor: pointer;
`
export const FooterBranch = styled.div`
  color: ${(props) => props.theme['gray-300']};
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 16px;
  gap: 8px;
  cursor: pointer;
`
