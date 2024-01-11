import React, { useState, useEffect } from 'react'
import styles from './calculation.module.css'

function NewCalculation({ registrationDate }) {
    const [engineSize, setEngineSize] = useState('')
    const [fuelType, setFuelType] = useState('otto')
    const [co2Emissions, setCo2Emissions] = useState('')
    const [firstRegistrationYear, setFirstRegistrationYear] = useState('')
    const [tax, setTax] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if (registrationDate) {
            const year = registrationDate.getFullYear()
            setFirstRegistrationYear(year)
        }
    }, [registrationDate])

    const validateInputs = () => {
        if (
            !engineSize ||
            !fuelType ||
            !co2Emissions ||
            !firstRegistrationYear
        ) {
            setError('Alle Felder sind obligatorisch')
            return false
        }
        if (engineSize <= 0 || co2Emissions <= 0) {
            setError('Hubraum und CO2-Emissionen sollten mehr als 0 % sein')
            return false
        }
        setError('')
        return true
    }

    const calculateTax = () => {
        if (!validateInputs()) {
            return
        }

        const baseTaxPerCc = fuelType === 'otto' ? 0.02 : 0.095
        const engineTax = baseTaxPerCc * engineSize

        const registrationYear = parseInt(firstRegistrationYear, 10)

        let co2TaxRate = 2

        if (registrationYear >= 2021) {
            const co2 = parseInt(co2Emissions, 10)

            if (co2 <= 115) {
                co2TaxRate = 2.0
            } else if (co2 <= 135) {
                co2TaxRate = 2.2
            } else if (co2 <= 155) {
                co2TaxRate = 2.5
            } else if (co2 <= 175) {
                co2TaxRate = 2.9
            } else if (co2 <= 195) {
                co2TaxRate = 3.4
            } else {
                co2TaxRate = 4.0 // over 195 g/km
            }
        }

        let co2Allowance
        if (registrationYear <= 2011) {
            co2Allowance = 120
        }
        if (registrationYear >= 2012 && registrationYear <= 2013) {
            co2Allowance = 110
        } else {
            co2Allowance = 95
        }

        const taxableCo2Emissions = Math.max(
            0,
            parseInt(co2Emissions, 10) - co2Allowance
        )

        console.log(taxableCo2Emissions)
        console.log(co2Allowance)

        const co2Tax = co2TaxRate * taxableCo2Emissions

        const calculatedTax = co2Tax + engineTax

        setTax(calculatedTax)
        setShowResult(true)
    }

    const handleBack = () => {
        setShowResult(false)
    }

    if (showResult) {
        return (
            <div className={styles.container}>
                <p className={styles.result}>
                    Die Kfz-Steuer für das Fahrzeug beträgt: €{tax}
                </p>
                <button onClick={handleBack} className={styles.button}>
                    Zurück
                </button>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.inputGroup}>
                <label className={styles.label}>
                    Hubraum in ccm:
                    <input
                        type="number"
                        value={engineSize}
                        onChange={(e) => setEngineSize(e.target.value)}
                        className={styles.input}
                    />
                </label>
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label}>
                    Antriebsart
                    <select
                        value={fuelType}
                        onChange={(e) => setFuelType(e.target.value)}
                        className={styles.select}
                    >
                        <option value="otto">Otto</option>
                        <option value="diesel">Diesel</option>
                    </select>
                </label>
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label}>
                    CO2-Wert in g/km:
                    <input
                        type="number"
                        value={co2Emissions}
                        onChange={(e) => setCo2Emissions(e.target.value)}
                        className={styles.input}
                    />
                </label>
            </div>

            <div className={styles.inputGroup}>
                <button onClick={calculateTax} className={styles.button}>
                    Berechnen
                </button>
            </div>
        </div>
    )
}

export default NewCalculation
