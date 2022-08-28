import React from "react";
import { useSelector, useDispatch } from "react-redux";

import PetCard from "../components/PetCard/PetCard";
import "../App.css";
import { selectPetCards, fetchPetCards } from "../components/petCardSlice";

import {
  Title,
  ImageModal,
  FullImage,
  Description,
  IconButton,
  DescriptionContainer,
} from "../components/StyledComponents";
import closeIcon from "./close.png";

function Favorites() {
  const petCards = useSelector(selectPetCards);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({
    image: "",
    description: "",
  });

  React.useEffect(() => {
    if (petCards.length === 0) {
      dispatch(fetchPetCards());
    }
  }, []);
  return (
    <>
      <Title>Your favorites</Title>
      <div className="petCardContainer">
        {petCards &&
          petCards
            .filter((petCard) => petCard.favorited)
            .map((data) => (
              <PetCard
                data={data}
                key={data.id}
                setPetCard={setModalInfo}
                setModalOpen={setOpenModal}
              />
            ))}
      </div>
      <ImageModal active={openModal}>
        <FullImage src={modalInfo.image} alt="pet" />
        <DescriptionContainer>
          <Description>{modalInfo.description}</Description>
          <IconButton
            src={closeIcon}
            onClick={() => setOpenModal(false)}
            title="Close"
          />
        </DescriptionContainer>
      </ImageModal>
    </>
  );
}

export default Favorites;
