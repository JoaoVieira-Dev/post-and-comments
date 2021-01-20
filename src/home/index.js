import React from "react";
import {Header, useStyles} from "./styled";
import {Button, Typography} from "@material-ui/core";
import {bottonColor, primary, textColor} from "../colors";

export default function Home() {
    const classes = useStyles();
    return (
        <>
            <Header>
                <Typography className={classes.textTitle}>Posts and Comments</Typography>
                <Button
                    style={{
                        fontSize: 18,
                        height: 30,
                        marginRight: 15,
                        color: textColor,
                        backgroundColor: bottonColor,
                        marginLeft: 100
                    }}
                    variant={"contained"}
                    onClick={() => {}}
                >
                    <Typography>Inserir</Typography>
                </Button>
            </Header>
        </>

    );
};
