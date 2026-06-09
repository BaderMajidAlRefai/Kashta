import PeopleBox from './peoplebox'
import CarBox from './carbox'
import InventoryBox from './inventorybox'
import type { Trip } from '../types'


type tripManageBoxProps = {
    pageSelect: number;
    trip: Trip
}

function TripManageBox({ pageSelect, trip }: tripManageBoxProps){
    if (pageSelect === 1){
        return(
            <PeopleBox people = {trip.participants}/>
        )
    }

    if (pageSelect === 2){
        return(
            <CarBox/>
        )
    }

    if (pageSelect === 3){
        return(
            <InventoryBox/>
        )
    }
    
}

export default TripManageBox