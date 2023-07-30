import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../Context'
import GridView from './Specie/Views/GridView'
import ListView from './Specie/Views/ListView'
import axios from 'axios'

export default function SpeciesPage() {
    const { speciesData, filmGrid, gridSetter } = useGlobalContext()
    // console.log("species",speciesData);

    // const [speciesDD, setspeciesDD] = useState(speciesData)

    // useEffect(() => {
        
    //     const fetching = async (obj) =>{
        
    //         const arr = obj.map( async item => ({
    //                     data: await axios.get(item.url)
    //                 }));

    //         const promises = await Promise.all(arr)
    //         // console.log("done",promises)
            
    //         var j = 0;
    //                 console.log(promises[0].data.data.name)
    //         const  dataSet = []
    //         speciesDD.map(item => {
    //             return (
    //                 item.homeworld ? dataSet.push({...item , homeworld: promises[j].data.data.name}) && j++  : dataSet.push({...item})
    //             )  
    //         })
    //         // console.log("data",dataSet)
    //         setspeciesDD(dataSet)

    //     }
        
    //     const modify = () => {
    //         // console.log("pd",speciesDD)
    //         if(speciesDD.length > 0){

    //             var data=[] 
    //             speciesDD.map((item,id) =>(

    //                 item.homeworld ? data.push({url: item.homeworld }) :  null
    //             ))
    //             // console.log(data)
    //             fetching(data)

    //         }
    //     }
        
    //     modify();
    //  }, [])


    if (!filmGrid) {
        return (
            // <GridView speciesDD={speciesDD} />
            <GridView />
                            
        )
    }


    else{
        // return(<ListView  speciesDD={speciesDD} />)
        return(<ListView />)
    }
}