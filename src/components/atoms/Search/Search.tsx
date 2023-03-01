import styles from './Search.module.scss'
import { useState } from 'react';

function Search(){

    const [digitacao, setDigitacao] = useState<string>('');
    const [eFocoPointer, setEFocadoPointer] = useState<boolean>(false);

    const mudancaNaDigitacao =  (e: React.ChangeEvent<HTMLInputElement>): void => {
        setDigitacao(e.target.value);
    }

    const inputFocado = () => {
        document.body.style.cursor = 'Pointer'
        setEFocadoPointer(true)
    }

    const inputNaoFocado = () => {
        document.body.style
    }

    return(
        <div>
            <input type='text' className={styles.input} value={digitacao} onChange={mudancaNaDigitacao} placeholder='Search DarkReguts'/>
        </div>
    );
}

export default Search