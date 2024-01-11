import React, { useState } from 'react'
import styles from './calculation.module.css'

function OldCalculation() {
    const [engineSize, setEngineSize] = useState('')
    const [emissionClass, setEmissionClass] = useState('')
    const [engineType, setEngineType] = useState('')
    const [tax, setTax] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [error, setError] = useState('')

    const calculateTax = () => {
        if (!engineSize || !emissionClass || !engineType) {
            setError('Alle Felder sind obligatorisch')
            return
        }
        if (engineSize <= 0) {
            setError('Bitte geben Sie eine gültige Motorgröße größer 0 ein.')
            return
        }

        const taxRates = {
            euro3: { petrol: 6.75, diesel: 15.44 },
            euro2: { petrol: 7.36, diesel: 16.05 },
            euro1: { petrol: 15.13, diesel: 27.35 },
            euro0: { petrol: 21.07, diesel: 33.29 },
        }

        const engineSizeInHundreds = parseInt(engineSize, 10) / 100
        const calculatedTax =
            taxRates[emissionClass][engineType] * engineSizeInHundreds

        setTax(calculatedTax)
        setShowResult(true)
    }

    if (showResult) {
        return (
         
            <div className={styles.container}>
                <p className={styles.result}>
                    Die Kfz-Steuer für das Fahrzeug beträgt: €{tax.toFixed(2)}
                </p>
                <button
                    onClick={() => setShowResult(false)}
                    className={styles.button}
                >
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
                    Antriebsart:
                    <select
                        value={engineType}
                        onChange={(e) => setEngineType(e.target.value)}
                        className={styles.select}
                    >
                        <option value="">Motortyp auswählen</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                    </select>
                </label>
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label}>
                    Schadstoffklasse:
                    <select
                        value={emissionClass}
                        onChange={(e) => setEmissionClass(e.target.value)}
                        className={styles.select}
                    >
                        <option value="">Emissionsklasse auswählen</option>
                        <option value="euro3">Euro 3 oder besser</option>
                        <option value="euro2">Euro 2</option>
                        <option value="euro1">Euro 1</option>
                        <option value="euro0">Euro 0</option>
                    </select>
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

export default OldCalculation
