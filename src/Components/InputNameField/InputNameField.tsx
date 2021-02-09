import React, {FC, useEffect, useState} from "react";
import {Paper, Skeleton} from '@material-ui/core';
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {INameField} from "../../Interfaces";

const useStyles = makeStyles({
    container: {
        padding: 8,

        '& .MuiOutlinedInput-input': {
            fontSize: 22,
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
            ? <Paper className={styles.container}>
                <TextField
                    value={title}
                    label="Name of story"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                />
            </Paper>
            : <Skeleton width={294} height={80} className={styles.skeleton}/>}</>
}

export default InputNameField;