import React from 'react'

export default function Dice(props){
    
    const styles = {
        backgroundColor: props.isChange ? "white" : "#59E391"
    }

    return (
        <div 
        className= "dice"
        style={styles}
        onClick={() => props.changeEle(props.id)}>
            {props.data}
        </div>
    )
}