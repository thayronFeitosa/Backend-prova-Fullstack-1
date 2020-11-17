import React, { Component } from 'react';
import ApiService from '../../Utils/ApiService'
import { CSVReader } from 'react-papaparse'
import './Importar.css';


const buttonRef = React.createRef()

export default class Inportar extends Component {
  handleOpenDialog = (e) => {
    
    if (buttonRef.current) {
      buttonRef.current.open(e)
    }
  }

  handleOnFileLoad = (data) => {

    ApiService.uploadPem(data);

  }

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  handleOnRemoveFile = (data) => {

  }

  handleRemoveFile = (e) => {
    if (buttonRef.current) {
      buttonRef.current.removeFile(e)
    }
  }

  render() {
    return (

      <div>


        <div id="importar-body">


          <CSVReader


            ref={buttonRef}
            onFileLoad={this.handleOnFileLoad}
            onError={this.handleOnError}
            noClick
            noDrag
            onRemoveFile={this.handleOnRemoveFile}
          >


            {({ file }) => (
              <aside
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 10
                }}
              >
                <div id="importarTabela-row">

                  <div id="importarTabela-title">
                    <h1>Importar Certificado</h1>
                  </div>

                  <div id="importar-instrucoes-body">
                    <div id="importar-instrucoes-row">

                      <div id="importar-instrucoes">
                        <p>
                          Instruções: <br />
                        Escolha arquivo o certificado .pem para a importação.
                      </p>

                      </div>s
                    </div>

                    <div id="importar-botao-importar">
                      <label htmlFor="">Arquivo:</label>
                      <button type='button' onClick={this.handleOpenDialog}>Escolher Arquivo .pem</button>

                      <div id="import-nome-arquivo">
                        <p> {file && file.name}</p>

                      </div>
                    </div>

                  </div>

                  <div id="import-botao-rem">
                    <button id="import-botao-remover" onClick={this.handleRemoveFile}>Remove</button>
                  </div>
                </div>
              </aside>
            )}
          </CSVReader>
          <div id="import-botao-fechar-row" >
            <button id="import-botao-fechar" onClick={this.handleRemoveFile}>FECHAR</button>
          </div>
        </div>


      </div>

    )
  }
}