import M from 'materialize-css';




/**
 * componente PopUp  retorna na tela do cliente uma mensagem amigavel 
 * verde caso o cliente for o status success, caso error vermelho 
 */
const PopUp = {
  exibeMensagem: (status, msg, seg) => {
      const segundos = seg ===undefined ? 2000 :seg;
    if (status === "success")
      M.toast({ html: msg, classes: "green", displayLength: segundos })


    if (status === "error")
      M.toast({ html: msg, classes: "red", displayLength: segundos })


  }
}
export default PopUp;