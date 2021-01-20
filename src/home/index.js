import React, {useEffect, useState} from "react";
import {Column, Header, useStyles} from "./styled";
import {Button, Typography} from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import {bottonColor, textColor} from "../colors";
import PostTable from "./PostTable";

export default function Home() {
    const [data, setData] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((response) => setData(response));
        };
        fetchData();
    }, []);

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

                <PostTable
                    data={data}
                />
        </>

    );
};
