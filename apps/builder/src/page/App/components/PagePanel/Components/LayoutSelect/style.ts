import { globalColor, illaPrefix } from "@illa-design/theme"
import { css } from "@emotion/react"

export const layoutSelectWrapperStyle = css`
  display: flex;
  align-items: center;
  height: 22px;
  gap: 4px;
`

export const layoutOptionsPanelWrapperStyle = css`
  padding: 16px;
  background-color: ${globalColor(`--${illaPrefix}-white-01`)};
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 88px);
`

export const layoutOptionItemWrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const applyLayoutOptionItemIconStyle = (isSelected: boolean) => {
  return css`
    padding: 8px;
    background-color: ${isSelected
      ? globalColor(`--${illaPrefix}-techPurple-07`)
      : globalColor(`--${illaPrefix}-grayBlue-09`)};
    border-radius: 4px;
    flex: none;
    border: 1px solid
      ${isSelected
        ? globalColor(`--${illaPrefix}-techPurple-01`)
        : "transparent"};
    cursor: pointer;
    :hover {
      border: 1px solid ${globalColor(`--${illaPrefix}-techPurple-01`)};
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
      background-color: ${globalColor(`--${illaPrefix}-techPurple-07`)};
    }
    :active {
      border: 1px solid ${globalColor(`--${illaPrefix}-techPurple-01`)};
      background-color: ${globalColor(`--${illaPrefix}-techPurple-07`)};
    }
  `
}

export const layoutOptionItemLabelStyle = css`
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  font-size: 14px;
`
