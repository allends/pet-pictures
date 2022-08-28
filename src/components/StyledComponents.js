import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  font-family: poppins;
`;

export const Description = styled.h1`
  font-size: 1em;
  text-align: center;
  color: black;
  padding: 0.25em;
  font-family: poppins;
  text-align: left;
`;

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#77B5FE" : "white")};
  color: ${(props) => (props.primary ? "white" : "#77B5FE")};
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #77b5fe;
  border-radius: 3px;
`;

export const TextInput = styled.input.attrs((props) => ({
  type: "text",
}))`
  border-radius: 3px;
  border: 1px solid #77b5fe;
  display: block;
  margin: 0 0 1em;
  padding: ${(props) => props.padding};
  font-size: 1em;
  ::placeholder {
    color: palevioletred;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => props.justifyContent || "center"};
  padding: ${(props) => props.padding || "0"};
  align-items: baseline;
  padding
`;

export const ClickableEmoji = styled.span`
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none; 
  user-select: none; 
`;

export const NavigationBar = styled.nav`
  background-color: #77b5fe;
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
`;

export const ColorCard = styled.div`
  background-color: ${(props) => props.color || "#77B5FE"};
`;
export const PetCardContainer = styled.div`
  width: min-content;
  height: min-content;
  border-style: solid;
  border-width: 5px;
  border-color: ${(props) => (props.selected ? "#f8312f" : "#77B5FE")};
`;

export const Image = styled.img`
  width: 20em;
  height: 10em;
  object-fit: cover;
`;

export const FullImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: aut0;
  object-fit: cover;
`;

export const ImageModal = styled.div`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.active ? "block" : "none")};
  width: min-content;
  height: min-content;
  border-style: solid;
  border-width: 5px;
  border-color: #77b5fe;
`;

export const ExpandContainer = styled.div`
  position: relative,
  display: inline-block,
  fontSize: 1.5em,
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
`;

export const IconButton = styled.img`
  width: 1.25em;
  height: 1.25em;
  cursor: pointer;
`;