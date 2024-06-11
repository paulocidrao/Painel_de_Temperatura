import { useState, useEffect } from "react";
import { api } from "../../api/axiosConfig";
import { Container, ErroMessage } from "./styles";
interface IClima {
  cidade: string;
}
interface ITemperatura {
  location: {
    country: string;
    name: string;
  };
  current: {
    temp_c: number;
  };
}

function Clima({ cidade }: IClima) {
  const [temperatura, setTemperatura] = useState<ITemperatura | null>();
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    console.log("clima", cidade);
    cidade ? getcidade(cidade) : getcidade();
  }, [cidade]);

  const getcidade = async (capital = "Brasilia") => {
    const apikey = import.meta.env.VITE_API_KEY;
    try {
      const response = await api.get(
        `/current.json?key=${apikey}=${capital}&lang=pt`
      );
      if (response.status === 200) {
        setTemperatura(response.data);
        console.log(temperatura);
      } else {
        throw new Error("Erro ao pesquisar a sua cidade");
      }
    } catch (erro) {
      if (erro instanceof Error) {
        setTemperatura(null);
        setErro(erro.message);
      } else {
        console.error("Erro não esperado:", erro);
      }
    }
  };
  return (
    <>
      {erro && <ErroMessage>{erro}</ErroMessage>}
      {temperatura && (
        <Container>
          <h1>{temperatura.current.temp_c}º</h1>
          <h3>
            {temperatura.location.name} - {temperatura.location.country}
          </h3>
        </Container>
      )}
    </>
  );
}
export default Clima;
