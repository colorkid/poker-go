import React, {FC, useEffect, useState} from "react";
import {Paper, Skeleton} from '@material-ui/core';
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {INameField} from "../../Interfaces";

const useStyles = makeStyles({
    container: {

        '& .MuiInput-input': {
            fontSize: 28,
            width: 380,
        }
    },
    skeleton: {
        transform: 'none'
    }
});

const InputNameField: FC<INameField> = ({setNameStory, nameStory, subscribedState}) => {
    const [title, setTitle] = useState('');
    const styles = useStyles();

    useEffect(() => {
        setTitle(nameStory)
    }, [nameStory])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        setNameStory(e.target.value)
    }

    return <>
        {subscribedState
            ? <div className={styles.container}>
                <TextField
                    value={title}
                    label="Name of story"
                    variant="standard"
                    // InputLabelProps={{shrink: false}}
                    hiddenLabel={true}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                />
            </div>
            : <Skeleton width={294} height={80} className={styles.skeleton}/>}</>
}

export default InputNameField;