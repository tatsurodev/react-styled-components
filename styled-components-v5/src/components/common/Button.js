import styled, { css } from 'styled-components'

// styleのlogicを専用のfunctionに移動、引数でpropsにaccess可
const largeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5em;
    `
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1em;
    `
  }
}

const Button = styled.button`
  color: white;
  /* 変数展開内の関数でcomponentのpropsにaccessできる */
  background: ${(p) =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  font-weight: bold;
  /* 複数のpropertyをcss helperを使うと1つのinterpolate functionで記述できる */
  ${largeStyles}

  box-shadow: none;
  border: none;
  width: 100%;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`
export { Button }
