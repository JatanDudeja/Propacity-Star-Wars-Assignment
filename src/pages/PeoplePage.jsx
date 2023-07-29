import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../Context'
import GridView from './Peoples/Views/GridView'
import ListView from './Peoples/Views/ListView'
import axios from 'axios'


export default function PeoplePage(){
    const { peopleData, filmGrid, gridSetter } = useGlobalContext()

    const [people, setPeople] = useState(peopleData)

    useEffect(() => {
        
        const fetching = async (obj) =>{
            
            
            const arr = obj.map( async item => ({
                        data: await axios.get(item.url)
                    }));

            const promises = await Promise.all(arr)
            console.log("done",promises)
            
            var j = 0;

            const  dataSet = []
            people.map(item => {
                return (
                    item.species.length > 0 ? dataSet.push({...item , species: [promises[j].data.data.name]}) && j++  : dataSet.push({...item})
                )  
            })
            console.log("data",dataSet)
            setPeople(dataSet)

        }
        
        const modify = () => {
            console.log("pd",people)
            if(people.length > 0){

                var data=[] 
                people.map((item,id) =>(

                    item.species.length > 0 ? data.push({url: item.species }) :  null
                ))
                console.log( "f",fetching(data))
                // console.log(data);

            }
        }
        
        modify();
     }, [])


    if(!filmGrid){
        return(
            <GridView people={people}/>
            // <div>Hi</div>
        )
    }

    else{
        return(
            <ListView people={people} />
        )
    }
}