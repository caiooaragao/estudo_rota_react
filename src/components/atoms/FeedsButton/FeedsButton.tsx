import React from 'react';
import styles from './FeedsButton.module.scss'

interface FeedButtonProps{
    nome: string
    icon: React.ReactNode
}

export const FeedButton = ({nome, icon}: FeedButtonProps) => {
    return(
        <div>
            <a className={styles.feedButton}>
                <i>{icon}</i>
                <span>{nome}</span>
            </a>
        </div>
    );
}

export default FeedButton;
