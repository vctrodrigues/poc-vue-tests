import styled from "vue-styled-components";
import { keyToColor } from "@/components/theme";

const TextProps = {
  color: String,
};

export const Span = styled("span", TextProps)`
  font-size: 1rem;
  color: ${({ color }) => keyToColor(color || "primary")};
`;

export const P = styled("p", TextProps)`
  font-size: 1rem;
  color: ${({ color }) => keyToColor(color || "primary")};
`;

export const Link = styled("a", TextProps)`
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;

  color: ${({ color }) => keyToColor(color || "primary")};
  transition: ${({ theme }) => theme.transitions[1]};

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Hint = styled(Span)`
  font-size: 0.85rem;
  color: ${({ color }) => keyToColor(color || "primary")};
`;
