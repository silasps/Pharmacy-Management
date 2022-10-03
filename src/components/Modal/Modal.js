import "./Modal.css";
import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalImg,
  ModalWrapper,
} from "./Styled";

export default function Modal({ showModal, setShowModal, cardId, medicineList }) {
  // como expliquei no outro comentário, a abordagem de bater na API novamente não é a melhor
  // além disso não é preciso criar um estado para guardar o medicamento filtrado

  // const [medicines, setMedicines] = useState([]);
  // const [filtered, setFiltered] = useState();

  // useEffect(() => {
  //   getMedicines();
  //   filteredMed(cardId);
  // }, [cardId]);

  // function getMedicines() {
  //   fetch(`http://localhost:3001/medicines`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMedicines(data);
  //       console.log(data);
  //     });
  // }

  // function filteredMed() {
  //   var filteredMedicines = medicineList.filter((item) => {
  //     return item.id === cardId;
  //   });
  //   setFiltered(filteredMedicines);
  //   console.log("filtrado", filtered);
  // }

  // a abordagem correta é filtrar a lista de medicamentos que já está no estado
  const filteredMedicines = medicineList.filter((item) => {
    return item.id === cardId;
  })
  // você pode colocar o [0] no final da linha acima, assim não precisa colocar no return
  // ou criar uma nova variável para isso, mas não é uma boa prática
  const filtered = filteredMedicines[0]

  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalImg src={filtered.imagem} alt="medicine" />
            <ModalContent>
              <h1>{filtered.nomeMedicamento}</h1>
              <p>{filtered.doseMedicamento}</p>
              <p><strong>Descrição</strong></p>
              <p>{filtered.descMedicamento}</p>
              <p><strong>Tipo</strong></p>
              <p>{filtered.tipoMedicamento}</p>
              <p><strong>Preço</strong></p>
              <p>{filtered.precoUnitario}</p>
            </ModalContent>
            <CloseModalButton
              cursor="pointer"
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}
