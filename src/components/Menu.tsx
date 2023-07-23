import './menu.css';
import Clima from './Clima';
import  { useState } from 'react';
import {useForm} from 'react-hook-form';


interface FormData {
  cidade: string
}
interface WelcomeModalProps {
  fecharModal: () => void;
}


function WelcomeModal({ fecharModal }: WelcomeModalProps) {
  const submit = (e: any) => {
   e.preventDefault();
    fecharModal();
  };
  
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Bem-Vindo(a)!</h2>
        <p>Pesquise pela temperatura <br></br>da  sua cidade</p>
          <button type='submit' onClick={submit}>Continuar</button>
      </div>
    </div>
  );
}



function Menu() {
  const [mostrarModal, setMostrarModal] = useState(true);
  const [cidade,setCidade] = useState<string>();
  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm<FormData>()
 


  const onSubmit = (data:FormData):any =>{
    console.log(JSON.stringify(data.cidade))
    setCidade(data.cidade)
  }

  const closeModal = () => {
    setMostrarModal(false);
  };



  return (
    <section>
      <h1>Atualmente faz:</h1>
      <div className='weather'>
        <img src="\src\assets\pageIcon.svg" alt='' />
       { <Clima CidadeLocal={cidade}/>}
      </div>

      {mostrarModal && (
        <WelcomeModal fecharModal={closeModal}  />
      )}
      <input
      className={errors?.cidade && 'input-error'}
        type='text'
        placeholder='Pesquise pela sua cidade'
        {...register('cidade',{
        required:true,
        
      })}
      />
      {errors?.cidade?.type === 'required' && <p className="error-message">O nome da sua cidade é obrigatorio</p>}
      <button onClick={() => handleSubmit(onSubmit)()} >Pesquisar</button>
    </section>
  );
}

export default Menu;
