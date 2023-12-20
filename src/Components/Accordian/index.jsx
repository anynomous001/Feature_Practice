import { data } from './data'
import React from 'react'

export default function Accordian() {

    const [selected, setSelected] = React.useState(null)

    function handleClick(id) {
        selected === id ? setSelected(null) : setSelected(id)
    }
    console.log(selected)
    return (
        <div>
            <div className="container">
                {/* For single selection*/}
                {
                    data && data.length > 0 ? (
                        data.map(item => (
                            <div key={item.age} onClick={() => handleClick(item.age)}>
                                <h2 >{item.name}</h2>
                                <span>+</span>
                                {
                                    selected == item.age ? <div>
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

