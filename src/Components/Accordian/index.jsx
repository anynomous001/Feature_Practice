import { data } from './data'
import React from 'react'
import './style.css'

export default function Accordian() {

    const [selected, setSelected] = React.useState(null)
    const [multiSelection, setMultiSelection] = React.useState(false)
    const [multi, setMulti] = React.useState([])


    function handleClick(id) {
        selected === id ? setSelected(null) : setSelected(id)
    }

    function handleMultiClick(id) {
        const copyMulti = [...multi]

        const indexofItem = copyMulti.indexOf(id)

        if (indexofItem === -1) {
            copyMulti.push(id)
        } else {
            copyMulti.splice(indexofItem, 1)
        }
        setMulti(copyMulti)
    }
    return (
        <div className='outer-container'>
            <div className="container">
                {/* For Multi selection*/}

                <button className='multi-btn' onClick={() => setMultiSelection(!multiSelection)}>Enable{`${multiSelection ? 'd' : ''}`} Multi Selection</button>
                {/* For single selection*/}
                {
                    data && data.length > 0 ? (
                        data.map(item => (
                            <div key={item.age} onClick={multiSelection ? () => handleMultiClick(item.age) : () => handleClick(item.age)}>
                                <h2 className='h2'>{item.name}</h2>
                                <span>+</span>
                                {multiSelection ?
                                    multi.indexOf(item.age) !== -1 &&
                                    (<div className='answers'>
                                        <p className='p'>{item.about}</p>
                                    </div>)
                                    : selected === item.age &&
                                    (<div className='answers'>
                                        <p className='p'>{item.about}</p>
                                    </div>)
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

