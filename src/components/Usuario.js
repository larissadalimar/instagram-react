import { useState } from "react"

export default function Usuario(){
    const [editname, setEditName] = useState('Catana')
    const [imagem, setImagem] = useState('assets/img/catanacomics.svg')

    function editaNome(){
        const novoNome = prompt('Edite seu nome:')

        if(novoNome) setEditName(novoNome)
    }

    function editaFoto(){
        const novaFoto = prompt('Envie o link da sua nova imagem:')

        if(novaFoto) setImagem(novaFoto)
    }

    function DadosUsuario(props){
        return(
            <div class="usuario">
              <img src={props.foto} onClick={editaFoto}/>
              <div class="texto">
                <strong>{props.nome}</strong>
                <span>
                  {props.editname}
                  <ion-icon name="pencil" onClick={editaNome}></ion-icon>
                </span>
              </div>
            </div>
        )
    }

    const usuario = {foto: imagem, nome: 'catanacomics', editname: editname}
    
    return(
        <DadosUsuario foto={usuario.foto} nome={usuario.nome} editname={usuario.editname}/>
    )
}