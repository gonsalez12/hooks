import React, {useState, useEffect, useMemo, useCallback} from 'react';

function App() {

  const [tarefas, setTarefas] = useState([  ]);

  const [input, setInput] = useState([])

  const handleAdd = useCallback(() =>{
    setTarefas([...tarefas, input])
    setInput('');
  }, [input, tarefas]); 

  const [nome, setNome] = useState(['Matheus'])

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  },[tarefas])


  useEffect(() =>{
    const tarefasStorage = localStorage.getItem('tarefas');
   
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }

  },[])

const totaTarefas = useMemo(() => tarefas.length,[tarefas])



  return (
    <div>
      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br/>
      <strong>Voce tem {totaTarefas}</strong><br/>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} ></input>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
