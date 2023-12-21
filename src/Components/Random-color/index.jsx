import React from 'react'
import './style.css'

export default function RandomColor() {
    const [typeOfColor, SetTypeOfColor] = React.useState('hex')
    const [color, setColor] = React.useState("#00000")



    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)

    }

    function createRandomHexColor() {
        SetTypeOfColor('hex')
        const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
        let hexValue = '#'

        for (let index = 0; index < 6; index++) {
            hexValue += hexArray[randomColorUtility(hexArray.length)]
        }
        setColor(hexValue)
        console.log(hexValue)

    }

    function createRandomRgbColor() {
        SetTypeOfColor('rgb')

        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)
        setColor(`rgb(${r}, ${g}, ${b})`)
        console.log(color)
    }


    return (
        <>
            <div className="color" style={{ backgroundColor: color }}>
                <button onClick={createRandomHexColor}>Create Hex Color</button>
                <button onClick={createRandomRgbColor}>Create RGB Color</button>
                <button onClick={typeOfColor == 'hex' ? createRandomHexColor : createRandomRgbColor}>Generate New Color</button>
                <div className='colorName'>
                    <h2>{`${typeOfColor == 'hex' ? 'Hex -' : ''}  ${color}`}</h2>
                </div>

            </div >

        </>
    )
}

