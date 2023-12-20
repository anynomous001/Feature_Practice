import { data } from './data'
import React from 'react'
import './style.css'

export default function Accordian() {

    const [selected, setSelected] = React.useState(null)
    const [multiSelection, setMultiSelection] = React.useState(false)

    function handleClick(id) {
        selected === id ? setSelected(null) : setSelected(id)
    }
    function handleMultiClick() {
        setMultiSelection(!multiSelection)
    }
    console.log(selected)
    return (
        <div>
            <div className="container">
                {/* For Multi selection*/}

                <button onClick={handleMultiClick}>Multi Selection</button>
                {/* For single selection*/}
                {
                    data && data.length > 0 ? (
                        data.map(item => (
                            <div key={item.age} onClick={() => handleClick(item.age)}>
                                <h2 >{item.name}</h2>
                                <span>+</span>
                                {
                                    selected == item.age || multiSelection ? <div>
                                        <p>{item.about}</p>
                                    </div> : null
                                }
                            </div>
                        ))
                    ) : (
                        <h1>Data is not fetched</h1>
                    )
                }

            </div>


        </div >
    )
}

