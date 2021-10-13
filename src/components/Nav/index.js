import styled from "vue-styled-components";

const NavLinkProps = {
  isActive: Boolean,
};

export const Nav = styled.nav`
  display: flex;

  justify-content: flex-start;
  align-items: center;

  padding: 4px 20px;

  background-color: var(--app-color-background-lighten-1);
`;

export const NavLink = styled("a", NavLinkProps)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
  padding: 20px 40px;

  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  transition: 0.3s ease-in-out;

  position: relative;
  cursor: pointer;

  filter: ${(props) => (props.isActive ? "brightness(1.25)" : "")};
  &::after {
    content: " ";
    position: absolute;
    display: flex;

    bottom: -4px;

    width: ${(props) => (props.isActive ? "100%" : "0")};
    height: 2px;

    transition: 0.3s ease-in-out;
    background-color: var(--app-color-primary);
  }

  &:hover {
    filter: brightness(1.25);

    &::after {
      width: 100%;
    }
  }
`;
