import React, {useEffect, useState} from "react";
import {Header, useStyles} from "./styled";
import {Button, Typography} from "@material-ui/core";
import {bottonColor, textColor} from "../colors";
import PostTable from "./components/PostTable";
import ModalForm from "./components/ModalForm";
import {deletePost, savePost} from "../services/api";

export default function Home() {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [dataEdit, setDataEdit] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((response) => setData(response));
        };
        fetchData();
    }, []);

    const handleClose = () => {
        setDataEdit({})
        setIsOpen(false);
    }

    const submitFormLoading = () => {
        setIsLoading(true);
    }

    const editPostForm = (props) => {
        setDataEdit(props);
        setIsOpen(true);
    }

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
                    onClick={() => {
                        setIsOpen(true);
                    }}
                >
                    <Typography>Inserir</Typography>
                </Button>
            </Header>
            <PostTable
                data={data}
                setDataEdit={setDataEdit}
                deletePost={deletePost}
                setForm={editPostForm}
            />
            <ModalForm
                isOpen={isOpen}
                handleClose={handleClose}
                data={dataEdit}
                isLoading={isLoading}
                submitFormLoading={submitFormLoading}
                savePost={savePost}
            />
        </>

    );
};
