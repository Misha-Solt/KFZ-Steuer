import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import NewCalculation from './NewCalculation'
import OldCalculation from './OldCalculation'
import styles from './calculation.module.css'

function MainCalculation() {
    const [registrationDate, setRegistrationDate] = useState(null)
    const [showCalculator, setShowCalculator] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleProceed = () => {
        if (!registrationDate) {
            setErrorMessage('Bitte wählen Sie ein Registrierungsdatum aus.')
            return
        }
        setShowCalculator(true)
        setErrorMessage('')
    }

    const determineCalculator = () => {
        const cutoffDate = new Date('2008-11-04')
        return registrationDate && registrationDate <= cutoffDate ? (
            <OldCalculation />
        ) : (
            <NewCalculation registrationDate={registrationDate} />
        )
    }

    return (
        <div className={styles.container}>
            {!showCalculator && (
                <>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>
                            Erstzulassungsdatum:
                            <DatePicker
                                selected={registrationDate}
                                onChange={(date) => setRegistrationDate(date)}
                                dateFormat="dd.MM.yyyy"
                                placeholderText="DD.MM.YYYY"
                                className={styles.input}
                            />
                        </label>
                        {errorMessage && (
                            <p style={{ color: 'red' }}>{errorMessage}</p>
                        )}
                    </div>
                    <div>
                        <button
                            className={styles.button}
                            onClick={handleProceed}
                        >
                            Fortfahren
                        </button>
                    </div>
                </>
            )}
            {showCalculator && determineCalculator()}
        </div>
    )
}

export default MainCalculation
