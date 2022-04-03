

export default function Selection() {
  return (
    <div>
      <h1>Safra Pocket</h1>
      <p>Com o Safra Pocket criar sua conta é muito fácil.</p>

      <p>Selecione a instituição com a qual deseja compartilhar informações com o Safra. </p>
      <div>
      <form action="/action_page.php">
        <label for="Bancos">Escolha um banco:</label>
        <select name="Bancos" id="bancos">
          <option value="Banco A">Banco A</option>
          <option value="Banco B">Banco B</option>
          <option value="Banco C">Banco C</option>
          <option value="Banco D">Banco D</option>
        </select>
        <br></br>
          <input type="submit" value="Ir para o site da instituição">
            <input type="submit" value="Já Compartilhei minhas informações com o Safra">
            </form>
            <p>No site desta instituição você deve autorizar o compartilhamento de dados com o Safra.</p>
      </div>

     
      
      {/* 

      

      


            

          </body>
        </html>
          html banco terceiro:
          <!DOCTYPE html>
          <html>
            <body>
              <h1>Banco X</h1>
              <p>
                Selecione as configurações para o compartilhamento de dados
              </p>
              <form action="/action_page.php">
                <label for="Período">
                  Escolha um período de compartilhamento:
                </label>
                <select name="Tempo" id="Tempo">
                  <option value="Período 1">3 meses</option>
                  <option value="Período 2">6 meses</option>
                  <option value="Período 3">9 meses</option>
                  <option value="Período 4">12 meses</option>
                </select>
                <br><br>
                  <label for="cpf">
                    CPF:
                    <input type="text" value="" id="cpf" name="cpf" />
                    <br><br>
                    </label>
                      <button>
                        Compartilhar meus dados
                      </button>
                    </form>
                    <p>Para voltar a instituição desejada, selecione o botão abaixo</p>
                    <button>
                      Voltar
                    </button> */}
                  </div>
                  );
  }