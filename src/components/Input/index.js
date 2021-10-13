import styled, { css } from "vue-styled-components";

export const Input = styled.input`
  width: 100%;
  display: flex;
  padding: 8px 16px;

  font-size: 1rem;

  border: 1px solid var(--app-color-primary-darken-2);
  border-radius: 4px;

  outline: none;
  color: var(--app-color-primary);

  transition: 0.3s ease-in-out;
  background-color: var(--app-color-background-lighten-2);

  &:hover,
  &:focus {
    border-color: var(--app-color-primary);
  }

  &::placeholder {
    color: var(--app-color-primary-opacity-5);
  }
`;

const CheckboxProps = {
  checked: Boolean,
};

export const Checkbox = styled("div", CheckboxProps)`
  width: 18px;
  height: 18px;
  padding: 3px;

  display: flex;
  position: relative;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.primary["lighten-1"]};

  &::after {
    content: " ";
    width: 11px;
    height: 10px;

    background-color: ${({ theme }) => theme.colors.primary.base};
    border-radius: 1px;

    opacity: 0;
    transform: scale(0);
    transition: 0.3s ease-in-out;
  }

  ${({ checked }) =>
    !checked ||
    css`
      &::after {
        display: flex;
        opacity: 1;
        transform: scale(1);
      }
    `};
`;
