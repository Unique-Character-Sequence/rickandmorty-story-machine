import randomNumberInRange from "../../utils/randomNumberInRange";
import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api"

const getCharactersArray_API = (setCharacter) => {
    const randomNum = randomNumberInRange(1, 826)
    axios.get(`${API_URL}/character/${randomNum}`)
        .then(response => {
            const name = response.data.name
            const imageUrl = response.data.image
            const species = response.data.species
            const location = response.data.location.name
            const id = response.data.id
            const character = {name, imageUrl, species, location, id} // instead of {image: image, name: name}
            setCharacter(character)
            console.log(response.data);
        })
        .catch(error => {
            // Handle the error
            console.error(error);
        });
}

export default getCharactersArray_API