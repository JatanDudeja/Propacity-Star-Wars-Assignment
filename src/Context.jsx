import React, { useContext, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const AppContext = React.createContext()



export default function AppProvider({children}){

    const [filmGrid, setFilmGrid] = React.useState(true)
    const [showSearch, setShowSearch] = React.useState(false)

    const [currentPage, setCurrentPage] = React.useState('home')

    const [starWarsData, setstarWarsData] = React.useState([])
    const [currentUrlState, setCurrenrtUrlState] = React.useState(window.location.pathname)
    const [peopleData, setPeopleData] = useState([])
    const [filmsData, setFilmsData] = useState([])
    const [planetsData, setPlanetsData] = useState([])
    const [speciesData, setSpeciesData] = useState([])
    const [starShipsData, setStarShipsData] = useState([])
    const [vehiclesData, setVehiclesData] = useState([])

    const [showOptionMenu, setShowOptionMenu] = React.useState(false)


    function gridSetter(grid){
        if(grid){
            setFilmGrid(true)
        }
        else{
            setFilmGrid(false)
        }
    }

    // Tells which page are we on
    function tellPage(page){
        showSearchFunction(page)

        if(page === 'home')
            return;

        if(page === 'films'){
            setFilmGrid(true)
            return
        }
            // return;
        else{
            setFilmGrid(true)

        }


    }



    function showSearchFunction(page){
        console.log("in");
        if(page ==='home'){
            setShowSearch(false)
            return;
        }
        setShowSearch(true)

    }

    function showOptionsMenu(){
        setShowOptionMenu(prevState => !prevState)
    }


    // console.log(window.location.pathname)

    const starWars = 'https://swapi.dev/api/'

    React.useEffect(() => {
        
        const pr = ['films' , 'people', 'planets','species', 'starships','vehicles']
        const arr = pr.map( async item => ({
            data: await axios.get(starWars + item)
        }));

        const calling = async () =>{
            const results = await Promise.all(arr);
            // console.log(results);
            
            // filmsData = results[0]
            setFilmsData(results[0].data.data.results)
            // localStorage.setItem('filmsData')
            setPeopleData(results[1].data.data.results)
            setPlanetsData(results[2].data.data.results)
            setSpeciesData(results[3].data.data.results)
            setStarShipsData(results[4].data.data.results)
            setVehiclesData(results[5].data.data.results)
        }
        calling();




        // const fetching = async () =>{
        //     const films = await axios.get(starWars+"films");
        //     const people = await axios.get(starWars+"people");
        //     console.log(films , people)
        // }
        //  fetching();
 

        

    }, [])

    const link = async text => {
        console.log("fetching data...");
        try{
            const url = starWars+text;
            const {data} = await axios.get(url)
            const results = data.results
            results ? setstarWarsData(results) : setstarWarsData([])
            console.log(results)
        }
        catch(e){
            console.log(e.response)
        }

    }





    return(
        <AppContext.Provider value={{link, filmsData, peopleData, planetsData, starShipsData, vehiclesData, speciesData, filmGrid, gridSetter, tellPage, showSearch, showSearchFunction, showOptionMenu, showOptionsMenu}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext}

