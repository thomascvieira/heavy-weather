import { useState, useEffect, useRef } from 'react'

const ZipCodeInput = ({ onAdd }) => {
    const [zipCode, setZipCode] = useState('');

    // set focus to input on pageload
    const zipInput = useRef(null);
    useEffect(() => {
      zipInput.current.focus();
    },[])

    const onSubmit = (e) => {
        e.preventDefault()

        // checks that input is 5 digits
        const zipValidator = /(\d){5}/
        const zipIsValid = zipValidator.test(zipCode)

        // alert thrown if zip is empty or not 5 digits
        if (!zipCode || !zipIsValid) {
            alert('Please enter a valid five digit ZIP code')
            setZipCode('')
            return
        }

        onAdd(zipCode)
        setZipCode('')
    }

    return (
        <div>
            <form className='zip-form' onSubmit={onSubmit}>
                <input
                    ref={zipInput}
                    type='text'
                    className='zip-input'
                    placeholder="Enter ZIP code (ex 90210)"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}>
                </input>
                <input type='submit' value='Submit' className='btn btn-submit'></input>
            </form>
        </div>
    )
}

export default ZipCodeInput
