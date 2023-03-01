import styles from './CardSearch.module.scss'
import PopularIcon from '../../../assets/PopularIcon'

interface CardSearchProps {
    title: string
    content: string
    userName: string
    userIcon: string
    imagem?: string
}
function CardSearch({title, content, userName, userIcon, imagem}: CardSearchProps) {
    return(
            <div className={styles.card}>
                <div className={styles.top}>
                    <div className={styles.icon}>
                        <PopularIcon/>
                    </div>
                <div className={styles.title}>
                    {title}
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.content}>
                    {content}
                </div>
                <div className={styles.image}>
                    <img src={imagem} alt={title}/>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.page__icon}>
                    <img src={userIcon} alt={title} />
                </div>
                    <div className={styles.userName}>
                        d/{userName}
                    </div>
                </div>
            </div>
    );
}

export default CardSearch