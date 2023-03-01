import CardSearch from "../../atoms/CardSearch/CardSearch";
import data from './../../../data/data.json'

function SearchDropDown(){
    return(
        <div>
            {data.map((card) => (
                <CardSearch key={card.id} title={card.title} content={card.content} imagem={card.imagem} userIcon={card.usuario.userIcon} userName={card.usuario.userName}/>
            ))}
        </div>
    );
}

export default SearchDropDown