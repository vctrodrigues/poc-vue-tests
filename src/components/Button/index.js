import styled, { css } from "vue-styled-components";
import theme from "@/components/theme";

const ButtonProps = {
  type: String,
};

const ButtonTypes = {
  primary: {
    "background-color": theme.colors.primary.base,
    color: theme.colors.white.base,
  },
  secondary: {
    "background-color": theme.colors.secondary.base,
    color: theme.colors.white.base,
  },
};

export const Button = styled("button", ButtonProps)`
  width: fit-content;
  padding: 8px 16px;

  border: none;
  border-radius: 4px;

  cursor: pointer;

  ${(props) =>
    ["background-color", "color"].map(
      (key) => css`
        ${key}: ${ButtonTypes[props.type || "primary"][key]};
      `
    )}

  transition: ${({ theme }) => theme.transitions[1]};

  &:hover {
    filter: brightness(1.2);
  }
`;
