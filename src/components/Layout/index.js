import styled, { css } from "vue-styled-components";

const ColProps = {
  align: String,
  justify: String,
  self: String,
  position: String,
  fit: Boolean,
  size: Number,
  xs: Number,
  sm: Number,
  md: Number,
  lg: Number,
  xl: Number,
  padding: Number,
  paddingX: Number,
  paddingY: Number,
  paddingT: Number,
  paddingR: Number,
  paddingB: Number,
  paddingL: Number,
  margin: Number,
  marginY: Number,
  marginX: Number,
  marginT: Number,
  marginR: Number,
  marginB: Number,
  marginL: Number,
  reverse: Boolean,
  width: Number,
};

const RowProps = {
  align: String,
  justify: String,
  self: String,
  position: String,
  padding: Number,
  paddingX: Number,
  paddingY: Number,
  paddingT: Number,
  paddingR: Number,
  paddingB: Number,
  paddingL: Number,
  margin: Number,
  marginY: Number,
  marginX: Number,
  marginT: Number,
  marginR: Number,
  marginB: Number,
  marginL: Number,
  break: Boolean,
};

const Alignment = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

const Justify = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
};

export const Col = styled("div", ColProps)`
  display: flex;

  ${(props) => css`
    flex-direction: ${props.reverse ? "column-reverse" : "column"};
    align-items: ${Alignment[props.align || "start"]};
    justify-content: ${Justify[props.justify || "start"]};
    justify-self: ${Alignment[props.self || "start"]};
    position: ${props.position || "initial"};

    ${props.fit
      ? `
      width: fit-content;
    `
      : `
      width: ${((props.size || 12) / 12) * 100}%;
    `}
    ${props.padding ? `padding: ${props.padding}px;` : ""}
    ${props.paddingX
      ? `padding-left: ${props.paddingX}px; padding-right: ${props.paddingX}px;`
      : ""}
    ${props.paddingY
      ? `padding-top: ${props.paddingY}px; padding-bottom: ${props.paddingY}px;`
      : ""}
    ${props.paddingT ? `padding-top: ${props.paddingT}px;` : ""}
    ${props.paddingR ? `padding-right: ${props.paddingR}px;` : ""}
    ${props.paddingB ? `padding-bottom: ${props.paddingB}px;` : ""}
    ${props.paddingL ? `padding-left: ${props.paddingL}px;` : ""}
    ${props.margin ? `margin: ${props.margin}px;` : ""}
    ${props.marginX
      ? `margin-left: ${props.marginX}px; margin-right: ${props.marginX}px;`
      : ""}
    ${props.marginY
      ? `margin-top: ${props.marginY}px; margin-bottom: ${props.marginY}px;`
      : ""}
    ${props.marginT ? `margin-top: ${props.marginT}px;` : ""}
    ${props.marginR ? `margin-right: ${props.marginR}px;` : ""}
    ${props.marginB ? `margin-bottom: ${props.marginB}px;` : ""}
    ${props.marginL ? `margin-left: ${props.marginL}px;` : ""}
    
    /* Phone only */ 
    @media screen and (max-width: 599px) {
      ${props.xs ? `width: ${(props.xs / 12) * 100}%` : ""}
    }

    /* Tablet portrait up */
    @media screen and (min-width: 600px) {
      ${props.sm ? `width: ${(props.sm / 12) * 100}%` : ""}
    }

    /* Tablet landscape up */
    @media screen and (min-width: 900px) {
      ${props.md ? `width: ${(props.md / 12) * 100}%` : ""}
    }

    /* Desktop up */
    @media screen and (min-width: 1200px) {
      ${props.lg ? `width: ${(props.lg / 12) * 100}%` : ""}
    }

    /* Big desktop up */
    @media screen and (min-width: 1800px) {
      ${props.xl ? `width: ${(props.xl / 12) * 100}%` : ""}
    }
  `}

  ${(props) =>
    props.width
      ? css`
          width: ${props.width}px;
        `
      : ""}

  
@media screen and (min-width: 1024px) {
    ${(props) => css`
      ${props.padding ? `padding: ${props.padding * 2}px;` : ""}
      ${props.paddingX
        ? `padding-left: ${props.paddingX * 2}px; padding-right: ${
            props.paddingX * 2
          }px;`
        : ""}
      ${props.paddingY
        ? `padding-top: ${props.paddingY * 2}px; padding-bottom: ${
            props.paddingY * 2
          }px;`
        : ""}
      ${props.paddingT ? `padding-top: ${props.paddingT * 2}px;` : ""}
      ${props.paddingR ? `padding-right: ${props.paddingR * 2}px;` : ""}
      ${props.paddingB ? `padding-bottom: ${props.paddingB * 2}px;` : ""}
      ${props.paddingL ? `padding-left: ${props.paddingL * 2}px;` : ""}
      ${props.margin ? `margin: ${props.margin * 2}px;` : ""}
      ${props.marginX
        ? `margin-left: ${props.marginX * 2}px; margin-right: ${
            props.marginX * 2
          }px;`
        : ""}
      ${props.marginY
        ? `margin-top: ${props.marginY * 2}px; margin-bottom: ${
            props.marginY * 2
          }px;`
        : ""}
      ${props.marginT ? `margin-top: ${props.marginT * 2}px;` : ""}
      ${props.marginR ? `margin-right: ${props.marginR * 2}px;` : ""}
      ${props.marginB ? `margin-bottom: ${props.marginB * 2}px;` : ""}
      ${props.marginL ? `margin-left: ${props.marginL * 2}px;` : ""};
    `}
  }
`;

export const Row = styled("div", RowProps)`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${(props) => css`
    align-items: ${Alignment[props.align || "start"]};
    justify-content: ${Justify[props.justify || "start"]};
    justify-self: ${Alignment[props.self || "start"]};
    flex-wrap: ${props.break ? "wrap" : "nowrap"};
    position: ${props.position || "initial"};

    ${props.padding ? `padding: ${props.padding}px;` : ""}
    ${props.paddingX
      ? `padding-left: ${props.paddingX}px; padding-right: ${props.paddingX}px;`
      : ""}
    ${props.paddingY
      ? `padding-top: ${props.paddingY}px; padding-bottom: ${props.paddingY}px;`
      : ""}
    ${props.paddingT ? `padding-top: ${props.paddingT}px;` : ""}
    ${props.paddingR ? `padding-right: ${props.paddingR}px;` : ""}
    ${props.paddingB ? `padding-bottom: ${props.paddingB}px;` : ""}
    ${props.paddingL ? `padding-left: ${props.paddingL}px;` : ""}
    ${props.margin ? `margin: ${props.margin}px;` : ""}
    ${props.marginX
      ? `margin-left: ${props.marginX}px; margin-right: ${props.marginX}px;`
      : ""}
    ${props.marginY
      ? `margin-top: ${props.marginY}px; margin-bottom: ${props.marginY}px;`
      : ""}
    ${props.marginT ? `margin-top: ${props.marginT}px;` : ""}
    ${props.marginR ? `margin-right: ${props.marginR}px;` : ""}
    ${props.marginB ? `margin-bottom: ${props.marginB}px;` : ""}
    ${props.marginL ? `margin-left: ${props.marginL}px;` : ""};
  `}

  @media screen and (min-width: 1024px) {
    &.app-container {
      padding-left: calc(50% - 512px);
      padding-right: calc(50% - 512px);
    }

    ${(props) => css`
      ${props.padding ? `padding: ${props.padding * 2}px;` : ""}
      ${props.paddingX
        ? `padding-left: ${props.paddingX * 2}px; padding-right: ${
            props.paddingX * 2
          }px;`
        : ""}
      ${props.paddingY
        ? `padding-top: ${props.paddingY * 2}px; padding-bottom: ${
            props.paddingY * 2
          }px;`
        : ""}
      ${props.paddingT ? `padding-top: ${props.paddingT * 2}px;` : ""}
      ${props.paddingR ? `padding-right: ${props.paddingR * 2}px;` : ""}
      ${props.paddingB ? `padding-bottom: ${props.paddingB * 2}px;` : ""}
      ${props.paddingL ? `padding-left: ${props.paddingL * 2}px;` : ""}
      ${props.margin ? `margin: ${props.margin * 2}px;` : ""}
      ${props.marginX
        ? `margin-left: ${props.marginX * 2}px; margin-right: ${
            props.marginX * 2
          }px;`
        : ""}
      ${props.marginY
        ? `margin-top: ${props.marginY * 2}px; margin-bottom: ${
            props.marginY * 2
          }px;`
        : ""}
      ${props.marginT ? `margin-top: ${props.marginT * 2}px;` : ""}
      ${props.marginR ? `margin-right: ${props.marginR * 2}px;` : ""}
      ${props.marginB ? `margin-bottom: ${props.marginB * 2}px;` : ""}
      ${props.marginL ? `margin-left: ${props.marginL * 2}px;` : ""};
    `}
  }
`;
