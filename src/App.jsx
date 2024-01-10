import { useState } from 'react'
import MainCalculation from './components/MainCalculation'
import styles from './App.module.css'
import mainLogo from './Kfz-Steuer-Rechner.png'

function App() {
    const [key, setKey] = useState(0)

    const restartApplication = () => {
        setKey((prevKey) => prevKey + 1)
    }
    return (
        <div>
            <div className={styles.header}>
                <img src={mainLogo} alt="logo" className={styles.logo} />
                <h2 className={styles.title}>Kfz-Steuer-Rechner für Pkw</h2>
            </div>
            <div className={styles.container}>
                <>
                    <main>
                        <MainCalculation key={key} />
                        <button onClick={restartApplication} className={styles.button}>Neustart</button>
                    </main>
                </>
            </div>
        </div>
    )
}

export default App
