function Story(props){
    return(
        <div class="story">
            <div class="imagem">
              <img src={props.imagem}/>
            </div>
            <div class="usuario">
               {props.nome}
            </div>
        </div>
    )
}

export default function Stories(){
    const stories = [
        {nome: '9gag', imagem:'assets/img/9gag.svg'},
        {nome:'meowed', imagem:'assets/img/meowed.svg'},
        {nome:'barked', imagem:'assets/img/barked.svg'},
        {nome:'nathanwpylestrangeplanet', imagem:'assets/img/nathanwpylestrangeplanet.svg'},
        {nome:'wawawicomics', imagem:'assets/img/wawawicomics.svg'},
        {nome:'respondeai', imagem:'assets/img/respondeai.svg'},
        {nome:'filomoderna', imagem:'assets/img/filomoderna.svg'},
        {nome:'memeriagourmet', imagem:'assets/img/memeriagourmet.svg'}
    ]
    return(
        <div class="stories">
          
          {stories.map((user) => <Story imagem={user.imagem} nome={user.nome} />)}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

    )
}