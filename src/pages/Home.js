import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PetCard from "../components/PetCard/PetCard";
import "../App.css";
import closeIcon from "./close.png";
import {
  fetchPetCards,
  selectPetCards,
  selectAll,
  deselectAll,
  downloadSelected,
} from "../components/petCardSlice";

import {
  Title,
  Button,
  TextInput,
  Container,
  ImageModal,
  FullImage,
  Description,
  IconButton,
  DescriptionContainer,
} from "../components/StyledComponents";

function Home() {
  const [filterTerm, setFilterTerm] = React.useState("");
  const petCards = useSelector(selectPetCards);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({
    image: "",
    description: "",
  });

  const handleChange = (event) => {
    setFilterTerm(event.target.value);
  };

  React.useEffect(() => {
    if (petCards.length === 0) {
      dispatch(fetchPetCards());
    }
  }, []);
  return (
    <>
      <div>
        <Button primary onClick={() => dispatch(downloadSelected())}>
          Download Selected
        </Button>
        <Button onClick={() => dispatch(selectAll())}>Select All</Button>
        <Button onClick={() => dispatch(deselectAll())}>Deselect All</Button>
      </div>
      <Container row>
        <TextInput value={filterTerm} onChange={handleChange} />
        <Button onClick={() => setFilterTerm("")}>Clear</Button>
      </Container>
      <div className="petCardContainer">
        {petCards &&
          petCards
            .filter(
              (petCard) =>
                petCard.description
                  .toLowerCase()
                  .includes(filterTerm.toLowerCase()) ||
                petCard.title.toLowerCase().includes(filterTerm.toLowerCase())
            )
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
          <IconButton src={closeIcon} onClick={() => setOpenModal(false)} title="Close" />
        </DescriptionContainer>
      </ImageModal>
    </>
  );
}

export default Home;
