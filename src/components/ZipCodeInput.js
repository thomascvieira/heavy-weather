import { useState } from 'react'

const ZipCodeInput = ({onAdd}) => {
    const [zipCode, setZipCode] = useState('');
    const [toggleInput, setToggleInput] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()
        if (!zipCode) {
            alert('Please enter a five digit ZIP code')
            return
        }
        onAdd(zipCode)
        setZipCode('')
        toggle(toggleInput)
        // fetchZipCode(zipCode)
    }

    const toggle = (toggleInput) => {
        return setToggleInput(!toggleInput)
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
