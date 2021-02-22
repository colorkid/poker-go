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
    }
});

export interface IPlayer {
    onDoubleClickHandler?: () => void,
    name: string,
    isVoted?: boolean,
}

const Player: FC<IPlayer> = ({name, onDoubleClickHandler, isVoted}) => {
    const styles = useStyles();

    return <div className={styles.player}>
        <div className={`${styles.body} ${isVoted ? styles.voted : ''}`} />
        <div
            className={styles.name}
            onDoubleClick={onDoubleClickHandler}>
            {name}
        </div>
    </div>
}

export default Player;
