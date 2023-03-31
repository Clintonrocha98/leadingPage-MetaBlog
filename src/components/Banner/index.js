import Image from "next/image";
import styles from "./styles.module.scss";

export const Banner = ({ img, title, category, author, authorImg, date }) => {
    return (
        <div className={styles.containerBanner}>
            <Image
                src={img}
                alt={`${title}, ${author}`}
                width="1440"
                height="600"
            />
            <div className={styles.card}>
                <span className={styles.category}>{category}</span>
                <h1>{title}</h1>
                <div>
                    <Image
                        src={authorImg}
                        alt={`${author}`}
                        width="36"
                        height="36"
                    />
                    <span>{author}</span>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
};
