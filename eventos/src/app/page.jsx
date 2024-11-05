'use client'
import { useState } from "react";

export default function Home() {

  const [nomeEvento, setNomeEvento] = useState('')
  const [dataEvento, setDataEvento] = useState('')

 async function handleSubmit(e) {
    e.preventDefault()
    const resposta = await fetch('http://localhost:3000/eventos',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:
      JSON.stringify({
        "titulo":nomeEvento,
        "dataEvento":dataEvento
      })
    })
    if (resposta.ok) {
      alert('Cadastrado com sucesso!')
    }else{
      alert('ERROR!!!!!!!!!!!!')
    }
  }

  return (
    <div className="m-4">
      <h1 className="text-2xl">Cadastro de eventos</h1>
      {/* <div className="bg-red-500 p-1">
        Nome do evento:<b>{nomeEvento}</b> <br />
        Data do evento:<b>{dataEvento}</b>
      </div> */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-2">
          <label htmlFor="nome">Nome do evento:</label>
            <input 
            type="text" 
            id="nome"
            value={nomeEvento} 
            onChange={e => setNomeEvento(e.target.value)}
            className="text-gray-950 p-1"/>
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="data">Data do evento:</label>
            <input 
            type="date" 
            id="data" 
            value={dataEvento}
            onChange={e => setDataEvento(e.target.value)}
            className="text-gray-950 p-1"/>
        </div>
        <div>
          <input 
          type="submit"
          value="Cadastrar"
          className="bg-blue-700 text-gray-100 p-1 rounded" />
        </div>
      </form>
    </div>
  );
}
