import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    player: {
        display: 'flex',
        width: 125,
        flexDirection: 'column',
        alignItems: 'center',
        wordBreak: 'break-word',
        marginRight: -22.5,
        marginLeft: -22.5,

        '&:nth-child(odd)': {
            alignSelf: 'flex-end',
        },
        '&:nth-child(even)': {
            alignSelf: 'flex-start',
            paddingTop: 5,
        }
    },
    body: {
        backgroundColor: 'rgba(0, 0, 0, 0.11)',
        width: 35,
        height: 65,
        borderRadius: 4,
        transition: '0.2s',
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
    },
    name: {
        fontSize: 18,
        fontWeight: 600,
        paddingTop: 8,
        textAlign: 'center',
        lineHeight: 1.3,
        minHeight: 54,
        display: 'flex',
        alignItems: 'center',
    },
    voted: {
        backgroundColor: '#115293'
    },
    number: {
        border: '2px solid #1976d2',
        borderRadius: 4,
        color: "#1976d2",
        fontWeight: "bold",
        backgroundColor: '#fff',
    }
});

export interface IPlayer {
    onDoubleClickHandler?: () => void,
    name: string,
    isVoted?: boolean,
    number?: number,
}

const Player: FC<IPlayer> = ({name, onDoubleClickHandler, isVoted, number}) => {
    const styles = useStyles();

    return <div className={styles.player}>
        <div
            className={`${styles.body} ${isVoted ? styles.voted : ''} ${number || number === 0 ? styles.number : ''}`}>{number === -1 ? '?' : number}</div>
        <div
            className={styles.name}
            onDoubleClick={onDoubleClickHandler}>
            {name}
        </div>
    </div>
}

export default Player;
