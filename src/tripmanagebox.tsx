type tripManageBoxProps = {
    pageSelect: number;
}

function TripManageBox({ pageSelect }: tripManageBoxProps){
    if (pageSelect === 1){
        return(
            <h1>
                People page
            </h1>
        )
    }

    if (pageSelect === 2){
        return(
            <h1>
                Cars page
            </h1>
        )
    }

    if (pageSelect === 3){
        return(
            <h1>
                Inventory Page            
            </h1>
        )
    }
    
}

export default TripManageBox