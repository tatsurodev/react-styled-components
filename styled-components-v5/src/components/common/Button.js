import styled, { css } from 'styled-components'

const Button = styled.button`
  color: white;
  /* 変数展開内の関数でcomponentのpropsにaccessできる */
  background: ${(p) =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  font-weight: bold;
  /* 複数のpropertyをcss helperを使うと1つのinterpolate functionで記述できる */
  ${(p) =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}

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
