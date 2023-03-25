## React-router-dom

Na rota "/", a estrutura a ser renderizada é: 

##### `<DefaultPage>`
#####    `<Home />`
##### `</DefaultPage>`

Na rota "/aboutme", a estrutura a ser renderizada é: 

##### `<DefaultPage>`
#####    `<AboutMe />`
##### `</DefaultPage>`

#### É uma boa forma de aproveitar componentes

### Usar o seletor coringa

#### Foi utilizado o seletor coringa `*`, além do `:` nesse projeto. A grande diferença dos dois é que com o dois pontos você consegue pegar essa informação e utilizá-la com o hook useParams();

#### Foi utilizado também o hook useNavigate() para navegar entre as páginas da aplicação.