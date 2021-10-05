import { useState } from 'react'

const AddZipCode = ({onAdd}) => {
    const [zipCode, setZipCode] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        if (!zipCode) {
            alert('Please enter a five digit ZIP code')
            return
        }
        onAdd(zipCode)
        setZipCode('')
        fetchZipCode(zipCode)
    }

    const fetchZipCode = async (zipCode) => {
        const res = await fetch('https://api.zippopotam.us/us/'+zipCode)
        const data = await res.json()
        console.log(data)
        return data
    }

    return (
        <div>
            <form className='zip-form' onSubmit={onSubmit}>
                <input
                    type='text'
                    className='zipInput'
                    placeholder="Enter ZIP code (ex 90210)"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}>
                </input>
                <input type='submit' value='Submit' className='btnSubmit'></input>
            </form>
        </div>
    )
}

export default AddZipCode
