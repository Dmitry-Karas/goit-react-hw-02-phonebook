import styled from "@emotion/styled/macro";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  margin-bottom: 40px;
  padding-left: 40px;
  border: none;
  border-bottom: 1px solid tan;

  font-size: 20px;
  color: darkred;
  background-color: transparent;

  transition: all 250ms ease-in-out;

  &::placeholder {
    opacity: 0;

    color: darkred;

    transition: opacity 250ms ease;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--color-accent);

    &::placeholder {
      opacity: 0.5;
      transition-delay: 250ms;
    }
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translate(-36px, -26px);
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;

    & svg {
      transform: translate(36px, 26px);
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  bottom: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  cursor: text;

  font-size: 20px;
  color: tan;

  transition: transform 250ms ease-in-out;

  & svg {
    margin-right: 10px;
    transition: transform 250ms ease-in-out;
  }
`;
