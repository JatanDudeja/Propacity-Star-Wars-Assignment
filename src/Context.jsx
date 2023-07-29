import React, { useContext, useState , useEffect} from "react"
import axios from "axios"
import Data from "./Data"

const AppContext = React.createContext()



export default function AppProvider({children}){

    const [detail, setDetail] = React.useState({})

    const [showSideBar, setShowSideBar] = React.useState(false)

    const [filmGrid, setFilmGrid] = React.useState(true) //check if grid layout is selected or list layout
    const [showSearch, setShowSearch] = React.useState(false) // checks when to show the search box
    const [peopleData, setPeopleData] = useState([]) // people data array
    const [filmsData, setFilmsData] = useState([]) //film data array
    const [planetsData, setPlanetsData] = useState([]) //planets data array
    const [speciesData, setSpeciesData] = useState([]) // speceis data array
    const [starShipsData, setStarShipsData] = useState([]) // starships data array
    const [vehiclesData, setVehiclesData] = useState([]) // vehicles data array

    const [showOptionMenu, setShowOptionMenu] = React.useState(false) // checks if three dot / kebab menu is clicked or not and whether to display options menu or not

    // grid / list layout changing button click method
    function gridSetter(grid){
        if(grid){
            setFilmGrid(true)
        }
        else{
            setFilmGrid(false)
        }
    }

    


    function getFromLocalStorage(){
        let favourites = localStorage.getItem('filmsData')
        if(favourites)
            favourites = JSON.parse(favourites)
        else{
            favourites = []
        }

        return favourites 
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


    // function to change the state of search box visibilty
    function showSearchFunction(page){
        // console.log("in");
        if(page ==='home'){
            setShowSearch(false)
            return;
        }
        setShowSearch(true)

    }


    // function to change the state of visibilty of options menu by clicking on kebab / three dot menu
    function showDots(id){
        
        const film = filmsData.map(item => {
            return (
                item.episode_id === id ? {...item , show: !item.show} : {...item , show:false}
            )
        })    

        setFilmsData(film)
        // console.log("1")
        
    }


    function showDetailSideBar(id, page){
        if(page === 'film'){
            const dataObj = ['title', 'episode_id', 'opening_crawl', 'director', 'producer', 'release_date', 'url']
            setDetail({data : dataObj, pageData : filmsData, id : id})
        }

        console.log(id, page);
        setShowSideBar(prevState => !prevState)
        
    }


    function closeDetailSideBar(){
        console.log("in");
        // setShowSideBar(false)
    }


    // console.log(window.location.pathname)


    // api link
    const starWars = 'https://swapi.dev/api/'


    // collection of all the data from api on the very first render
    React.useEffect(() => {
        // hard coded films array
        setFilmsData(Data)
        
        const pr = ['films' , 'people', 'planets','species', 'starships','vehicles']
        const arr = pr.map( async item => ({
            data: await axios.get(starWars + item)
        }));

        const calling = async () =>{
            const results = await Promise.all(arr);
            // console.log(results);
            
            // filmsData = results[0]
            // localStorage.setItem('filmsData', filmsData)


            // setFilmsData(results[0].data.data.results)
            const films = Data
            // const films = results[0].data.data.results;
            // console.log(films)8

            const filmDataModify = films.map(item => (
                { ...item, show: false }
            ))

            // console.log("modify" , filmDataModify)


            setPeopleData(results[1].data.data.results)
            setPlanetsData(results[2].data.data.results)
            setSpeciesData(results[3].data.data.results)
            setStarShipsData(results[4].data.data.results)
            setVehiclesData(results[5].data.data.results)
        }
        calling();

        
        

    }, [])

    

    

    // const link = async text => {
    //     console.log("fetching data...");
    //     try{
    //         const url = starWars+text;
    //         const {data} = await axios.get(url)
    //         const results = data.results
    //         results ? setstarWarsData(results) : setstarWarsData([])
    //         console.log(results)
    //     }
    //     catch(e){
    //         console.log(e.response)
    //     }

    // }





    return(
        <AppContext.Provider value={{filmsData, peopleData, planetsData, starShipsData, vehiclesData, speciesData, filmGrid, gridSetter, tellPage, showSearch, showSearchFunction, showOptionMenu, showDots, showSideBar, showDetailSideBar, detail, closeDetailSideBar}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext}

