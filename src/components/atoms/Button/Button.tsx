
import { Children, ReactElement } from 'react'
import styles from './Button.module.scss'

interface ButtonProps{
    children: ReactElement | string
}

function Button({children} : ButtonProps){

    return(
        <div>
            <button className={styles.button}>{children}</button>
        </div>
    )

}

export default Button