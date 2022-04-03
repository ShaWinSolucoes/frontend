import React from 'react'
import { useHistory} from 'react-router-dom'

export default function Home() {
  const history = useHistory();
  return (
    <div>
        <h1>Banco Safra</h1>
        <button onClink={ ()=> history.push('/selection')}>Criar sua conta via Open banking</button>
    </div>
  );
}

