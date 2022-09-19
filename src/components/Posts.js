import React from "react";
import { useState } from "react"

function Post(props){

    const [savedIcon, setSavedIcon] = useState("bookmark-outline")
    const [like, setLike] = useState("heart-outline")
    const [curtidas, setCurtidas] = useState(props.quantidade_curtidas)
    const [corLike, setCorLike] = useState("")

    function savePost(){
        if(savedIcon === "bookmark-outline") setSavedIcon("bookmark")
        else setSavedIcon("bookmark-outline")
    }

    function Like(){
        setLike("heart")
        setCurtidas(curtidas + 1)
        setCorLike("curtiu")
    }

    function Dislike(){
        setLike("heart-outline")
        setCurtidas(curtidas - 1)
        setCorLike("")
    }

    return(
        <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.usuario}/>
                 {props.nome}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo" onClick={() => {if(like === "heart-outline") Like()}}>
              <img src={props.conteudo}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon class="like-icon" name={like} className={corLike} onClick={() => {if(like === "heart-outline") Like(); else Dislike()}}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={savedIcon} onClick={savePost}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.foto_curtidas}/>
                <div class="texto">
                  Curtido por <strong>{props.nome_curtida}</strong> e <strong>outras {curtidas.toLocaleString('de-DE')} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}

export default function Posts(){
    const posts =[
        {usuario:'assets/img/meowed.svg', nome:'meowed', conteudo: 'assets/img/gato-telefone.svg', foto_curtidas: 'assets/img/respondeai.svg', nome_curtida: 'respondeai', quantidade_curtidas: 101523},
        {usuario:'assets/img/barked.svg', nome:'barked', conteudo: 'assets/img/dog.svg', foto_curtidas: 'assets/img/adorable_animals.svg', nome_curtida: 'adorable_animals', quantidade_curtidas: 99159}
    ]
    return(
        <div class="posts">
          {posts.map((post) => <Post usuario={post.usuario} nome={post.nome} conteudo={post.conteudo} foto_curtidas={post.foto_curtidas} nome_curtida={post.nome_curtida} quantidade_curtidas={post.quantidade_curtidas}/>)}
        </div>
    )
}