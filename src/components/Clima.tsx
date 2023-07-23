import { useState,useEffect} from "react";
import './clima.css';


function Clima(props:any){
    const [temperatura,setTemperatura] = useState<any>();
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        const cidadeLocal = props.CidadeLocal;
        console.log(props.CidadeLocal)
        cidadeLocal ? getcidade(cidadeLocal) : getcidade();
      },[props.CidadeLocal])
   


   const getcidade = (capital = "Brasilia") =>{
        const apikey = "643c84735eea4eec853221852232101&q";
        fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}=${capital}&lang=pt`)
        .then(res => {
            if(res.ok){
                return res.json()
            }else{
                throw new Error("Erro ao pesquisar a sua cidade")
            }
        })
        .then(data=>{
            setTemperatura(data)
            setErro(null);
        })
        .catch(erro =>{
            setTemperatura(null);
            setErro(erro.message)
        })
        
        
    }
   return(
    <>
    {erro && <p className="error-message">{erro}</p>}
    {temperatura && (<div className="weather-api">
        <h1>{temperatura.current.temp_c}º</h1>
        <h3>{temperatura.location.name} - {temperatura.location.country}</h3>
    </div>
    )}

    </>
   )

   

}
export default Clima;
