import React, {FC, useMemo, useState} from "react";
import {NUMBERS} from "./Constants";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    cardsWrapper: {
        display: 'flex',
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
        maxWidth: 725,
    },
    card: {
        width: 50,
        height: 80,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        border: '2px solid #1976d2',
        borderRadius: 4,
        color: "#1976d2",
        fontSize: 20,
        fontWeight: "bold",
        cursor: "pointer",
        transition: '0.2s',

        "&:hover": {
            transform: "translate(0, -4px)",
            backgroundColor: "rgba(0, 0, 0, 0.04)",
        }
    },
    title: {
        width: "100%",
        textAlign: "center",
        fontWeight: 300,
    },
    cardActive: {
        transform: "translate(0, -4px)",
        backgroundColor: "rgba(0, 0, 0, 0.04)",
    }
});

interface ICards {
    setNumber: Function,
}

const Cards: FC<ICards> = ({setNumber}) => {
    const [activeCard, setActiveCard] = useState<number | string>('');
    const styles = useStyles();

    const handleClick = (item: string | number) => {
        setNumber(item)
        setActiveCard(item)
    }

    const Numbers = useMemo(() => {
        return NUMBERS.map((item: number | string) => {
            return <div key={item} className={`${styles.card} ${activeCard === item && styles.cardActive}`}
                        onClick={() => handleClick(item)}>{item}</div>
        })
    }, [activeCard])

    return <div className={styles.cardsWrapper}>
        <p className={styles.title}>Choose your card</p>
        {Numbers}
    </div>
}

export default Cards;