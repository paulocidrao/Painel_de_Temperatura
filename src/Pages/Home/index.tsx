import Clima from "../../components/weather/index.tsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "../../components/Modal";
import { CloudSun } from "@phosphor-icons/react";
import * as S from "./styles";
interface FormData {
  cidade: string;
}

export const Home = () => {
  const [modalShow, setmodalShow] = useState(true);
  const [cidade, setCidade] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setCidade(data.cidade);
  };

  const closeModal = () => {
    setmodalShow((prevModalShow) => !prevModalShow);
  };

  return (
    <S.Container>
      <h1>Atualmente faz:</h1>
      <S.Weather>
        <CloudSun size={170} />
        {<Clima cidade={cidade} />}
      </S.Weather>

      {modalShow && <Modal closeModal={closeModal} showModal={modalShow} />}
      <input
        className={errors?.cidade && "input-error"}
        type="text"
        placeholder="Pesquise pela sua cidade"
        {...register("cidade", {
          required: true,
        })}
      />
      {errors?.cidade?.type === "required" && (
        <S.ErroMessage>O nome da sua cidade é obrigatorio</S.ErroMessage>
      )}
      <button onClick={handleSubmit(onSubmit)}>Pesquisar</button>
    </S.Container>
  );
};
