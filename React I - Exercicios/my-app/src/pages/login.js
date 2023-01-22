function loginPage () {
    navigator("login");
  
    return(
      <div className="Container">
        <div className="box-login">
          <title text="Login"/>
          <input label="Usuario" type= "text"></input>
          <input label="Senha"></input>
          <button type="button" title="Entrar" redirecionar={loginPage}></button>
        </div>
      </div>
    )
  }
  
  export default loginPage;