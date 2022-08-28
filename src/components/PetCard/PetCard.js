import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { toggleSelect, toggleFavorite } from "../petCardSlice";
import {
  ClickableEmoji,
  ColorCard,
  Container,
  PetCardContainer,
  Title,
  Image,
  DescriptionContainer,
  IconButton,
} from "../StyledComponents";
import "./PetCard.css";
import expandIcon from "./expand.png";

const PetCard = ({ data, setPetCard, setModalOpen }) => {
  const dispatch = useDispatch();
  const displayDate = moment(data.created).format("MMM Do YYYY");

  return (
    <PetCardContainer selected={data.selected}>
      <ColorCard>
        <Container row justifyContent="space-between" padding="0 1em">
          <Title>
            <ClickableEmoji
              onClick={() => dispatch(toggleFavorite(data.id))}
              title="Favorite"
            >
              {data.favorited ? "❤️" : "🤍"}
            </ClickableEmoji>
            {` ${data.title}`}
          </Title>
          <Title>
            <ClickableEmoji
              onClick={() => dispatch(toggleSelect(data.id))}
              title="Select for download"
            >
              {data.selected ? "▣" : "▢"}
            </ClickableEmoji>
          </Title>
        </Container>
      </ColorCard>

      <Image src={data.url} alt="pet" />
      <DescriptionContainer>
        <div
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
          }}
        >
          {displayDate}
        </div>
        <IconButton
          title="View full image and description"
          src={expandIcon}
          onClick={() => {
            setPetCard({
              image: data.url,
              description: data.description,
            });
            setModalOpen(true);
          }}
        />
      </DescriptionContainer>
    </PetCardContainer>
  );
};

export default PetCard;
