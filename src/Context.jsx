import React, { useContext, useState, useEffect } from "react"
import axios from "axios"
import StData from "./StData"
import SData from "./SData"
import Data from './Data'
import PeopleData from "./PeopleData"
import VehiclesData from './VehiclesData'
import PData from "./PData"

const AppContext = React.createContext()



export default function AppProvider({ children }) {

    const [detail, setDetail] = React.useState({})

    // stores the detail side bar state of every page
    const [showSideBar, setShowSideBar] = React.useState(
        {
            filmPage: false,
            peoplePage: false,
            planetPage: false,
            speciesPage: false,
            vehiclesPage: false,
            startshipsPage: false
        }
    )

    const [dataToDelete, setDataToDelete] = React.useState({})

    const [deleteElement, setDeleteElement] = React.useState(false) // state for delete element dialog box
    const [confirm, setConfirm] = React.useState(false) // confirm delete

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
    function gridSetter(grid) {
        if (grid) {
            setFilmGrid(true)
        }
        else {
            setFilmGrid(false)
        }
    }


    function deleteCautionTrigger(id, page, item) {
        // console.log("caution");
        setDataToDelete({ id, page, item })
        // setShowOptionMenu(false)
        setDeleteElement(true)
    }

    function closeDialogBox() {
        console.log("close");
        setDataToDelete(null)
        setDeleteElement(false)
    }


    function removeData(id, page, item) {
        if (page === 'film') {
            // console.log(data)
            const newData = filmsData.filter(item => {
                return (
                    item.episode_id !== id
                )
            })

            setFilmsData(newData)
        }
        else if (page === 'people') {
            const newData = peopleData.filter(item => {
                return (
                    item.height !== id
                )
            })

            setPeopleData(newData)

        }
        else if (page === 'planets') {
            const newData = planetsData.filter(item => {
                return (
                    item.name !== id
                )
            })

            setPlanetsData(newData)

        }
        else if (page === 'species') {
            const newData = speciesData.filter(item => {
                return (
                    item.name !== id
                )
            })

            setSpeciesData(newData)

        }
        else if (page === 'starships') {
            const newData = starShipsData.filter(item => {
                return (
                    item.name !== id
                )
            })

            setStarShipsData(newData)

        }
        else if (page === 'vehicles') {
            const newData = vehiclesData.filter(item => {
                return (
                    item.name !== id
                )
            })

            setVehiclesData(newData)

        }

        setDataToDelete({})
        setDeleteElement(false)
        setShowOptionMenu(false)

    }



    // Tells which page are we on
    function tellPage(page) {
        showSearchFunction(page)
        setShowSideBar({
            filmPage: false,
            peoplePage: false,
            planetPage: false,
            speciesPage: false,
            vehiclesPage: false,
            startshipsPage: false
        })

        if (page === 'home')
            return;

        if (page === 'films') {
            setFilmGrid(true)
            return
        }
        // return;
        else {
            setFilmGrid(true)

        }


    }


    // function to change the state of search box visibilty
    function showSearchFunction(page) {
        // console.log("in");
        if (page === 'home') {
            setShowSearch(false)
            return;
        }
        setShowSearch(true)

    }


    // function to change the state of visibilty of options menu by clicking on kebab / three dot menu
    function showDots(id, dataArray, page) {
        // console.log(dataArray);
        // console.log(page);


        if (page === 'films') {
            // console.log(id)
            const data = dataArray.map(item => {

                return (
                    item.episode_id === id ? { ...item, show: !item.show } : { ...item, show: false }
                )
            })
            setFilmsData(data)

        }
        else if (page === 'people') {
            console.log(id)
            const data = dataArray.map(item => {

                return (
                    item.height === id ? { ...item, show: !item.show } : { ...item, show: false }
                )
            })
            setPeopleData(data)

        }
        else if (page === 'planets') {
            const data = dataArray.map(item => {

                return (
                    item.name === id ? { ...item, show: !item.show } : { ...item, show: false }
                )
            })
            setPlanetsData(data)

        }
        else if (page === 'species') {
            const data = dataArray.map(item => {

                return (
                    item.name === id ? { ...item, show: !item.show } : { ...item, show: false }
                )
            })
            setSpeciesData(data)

        }
        else if (page === 'starships') {
            console.log("Into starships")
            const data = dataArray.map(item => {

                return (
                    item.name === id ? { ...item, show: !item.show } : { ...item, show: false }
                )
            })
            setStarShipsData(data)


        }
        else if (page === 'vehicles') {
            const data = dataArray.map(item => {

                return (
                    item.name === id ? { ...item, show: !item.show } : { ...item, show: false }
                )
            })
            setVehiclesData(data)


        }

        // console.log("1")

    }


    function showDetailSideBar(id, page) {
        setDetail({ id: id })
        if (page === 'film') {
            // console.log(data)
            setShowSideBar({ ...showSideBar, filmPage: true })
        }
        else if (page === 'people') {
            setShowSideBar({ ...showSideBar, peoplePage: true })

        }
        else if (page === 'planets') {
            setShowSideBar({ ...showSideBar, planetPage: true })

        }
        else if (page === 'species') {
            setShowSideBar({ ...showSideBar, speciesPage: true })

        }
        else if (page === 'starships') {
            setShowSideBar({ ...showSideBar, startshipsPage: true })

        }
        else if (page === 'vehicles') {
            setShowSideBar({ ...showSideBar, vehiclesPage: true })

        }

        // console.log(id, page);

    }


    function closeDetailSideBar() {
        // console.log("in");
        setShowSideBar(
            {
                filmPage: false,
                peoplePage: false,
                planetPage: false,
                speciesPage: false,
                vehiclesPage: false,
                startshipsPage: false
            }
        )
    }




    // api link
    const starWars = 'https://swapi.dev/api/'


    // collection of all the data from api on the very first render
    React.useEffect(() => {

        const pr = ['films', 'people', 'planets', 'species', 'starships', 'vehicles']
        const arr = pr.map(async item => ({
            data: await axios.get(starWars + item)
        }));


        // const results = await Promise.all(arr);


        // const films = Data
        // const peeps = PeopleData
        // const plans = PData
        // const spe = SData
        // const star = StData
        // const vec = VehiclesData

        // films.map(item => (
        //     { ...item, show: false }
        // ))


        // peeps.map(item => (
        //     { ...item, show: false }
        // ))

        // plans.map(item => (
        //     { ...item, show: false }
        // ))

        // spe.map(item => (
        //     { ...item, show: false }
        // ))

        // star.map(item => (
        //     { ...item, show: false }
        // ))

        // vec.map(item => (
        //     { ...item, show: false }
        // ))

        // setPeopleData(peeps)
        // setFilmsData(films)
        // setPlanetsData(plans)
        // setSpeciesData(spe)
        // setStarShipsData(star)
        // setVehiclesData(vec)



        const calling = async () => {
            const results = await Promise.all(arr);


            const films = results[0].data.data.results;
            const peeps = results[1].data.data.results;

            const plans = results[2].data.data.results;
            const spe = results[3].data.data.results;
            const star = results[4].data.data.results;
            const vec = results[5].data.data.results;


            films.map(item => (
                { ...item, show: false }
            ))


            peeps.map(item => (
                { ...item, show: false }
            ))

            plans.map(item => (
                { ...item, show: false }
            ))

            spe.map(item => (
                { ...item, show: false }
            ))

            star.map(item => (
                { ...item, show: false }
            ))

            vec.map(item => (
                { ...item, show: false }
            ))

            setPeopleData(peeps)
            setFilmsData(films)
            setPlanetsData(plans)
            setSpeciesData(spe)
            setStarShipsData(star)
            setVehiclesData(vec)
        }
        calling();




    }, [])




    return (
        <AppContext.Provider value={{ filmsData, peopleData, planetsData, starShipsData, vehiclesData, speciesData, filmGrid, gridSetter, tellPage, showSearch, showSearchFunction, showOptionMenu, showDots, showSideBar, showDetailSideBar, detail, closeDetailSideBar, deleteElement, deleteCautionTrigger, removeData, closeDialogBox, dataToDelete }}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext }

