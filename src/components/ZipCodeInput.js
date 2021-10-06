import { useState } from 'react'

const ZipCodeInput = ({onAdd}) => {
    const [zipCode, setZipCode] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault()
        if (!zipCode) {
            alert('Please enter a five digit ZIP code')
            return
        }
        onAdd(zipCode)
        setZipCode('')
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

export default ZipCodeInput
