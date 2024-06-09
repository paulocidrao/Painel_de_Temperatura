import * as S from "./styles";
interface WelcomeModalProps {
  showModal: boolean;
  closeModal: () => void;
}
export const Modal = ({ closeModal, showModal }: WelcomeModalProps) => {
  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      {showModal && (
        <S.Container>
          <S.Modal>
            <h2>Bem-Vindo(a)!</h2>
            <p>
              Pesquise pela temperatura <br></br>da sua cidade
            </p>
            <button type="submit" onClick={submit}>
              Continuar
            </button>
          </S.Modal>
        </S.Container>
      )}
    </>
  );
};
