import React, {useState} from "react";
import {
    Button,
    Card,
    CircularProgress,
    Grid,
    IconButton,
    Modal,
    TextField,
    Typography
} from "@material-ui/core";
import {FiX, FiArrowDown, FiArrowUp} from 'react-icons/fi'
import {ErrorMessage, Formik} from 'formik';
import {bottonColor} from "../../../colors";
import {useStyles} from "./styled";

export default function ModalForm(props) {
    const classes = useStyles();
    const [showComments, setShowComments] = useState(false);

    const handleShowComments = () => {
      setShowComments(!showComments);
    };

    return (
        <Modal open={props.isOpen} onClose={props.handleClose} className={classes.modal}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Card className={classes.container}>
                    <Grid className={classes.header}>
                        <Typography>{props?.data?.id ? "Editar Post" : "Novo Post"}</Typography>
                        <IconButton onClick={props.handleClose}>
                            <FiX/>
                        </IconButton>
                    </Grid>
                    <Formik
                        initialValues={props.data}
                        onSubmit={(values) => {
                            props.savePost(values);
                        }}
                    >
                        {(props) => {
                            const {values, handleChange, handleSubmit} = props;
                            return (
                                <Grid>
                                    <TextField
                                        name="title"
                                        placeholder="Escreva o titulo da mensagem"
                                        className={classes.textArea}
                                        value={values?.title}
                                        variant="outlined"
                                        onChange={handleChange}
                                        disabled={props?.isLoading}
                                    />
                                    <ErrorMessage
                                        name="title"
                                        render={msg => (
                                            <Typography
                                                className={classes?.errorMessage}
                                            >
                                                {msg}
                                            </Typography>
                                        )}
                                    />
                                    <TextField
                                        name="body"
                                        value={values?.body}
                                        placeholder="Escreva sua mensagem"
                                        className={classes.textArea}
                                        rows={8}
                                        variant="outlined"
                                        multiline
                                        onChange={handleChange}
                                        disabled={props?.isLoading}
                                    />
                                    <ErrorMessage
                                        name="body"
                                        render={msg => (
                                            <Typography
                                                className={classes?.errorMessage}
                                            >
                                                {msg}
                                            </Typography>
                                        )}
                                    />
                                    <Grid className={classes.footer}>
                                        {props?.isLoading ? (
                                                <CircularProgress color="primary" size={24}/>
                                            )
                                            : (<>
                                                    <Button
                                                        variant="contained"
                                                        color={bottonColor}
                                                        className={classes.button}
                                                        onClick={handleSubmit}
                                                    >
                                                        Salvar
                                                    </Button>

                                                    <IconButton onClick={handleShowComments}>
                                                        {!showComments
                                                            ? <FiArrowDown size={20}/>
                                                            : <FiArrowUp size={20}/>
                                                        }
                                                    </IconButton>

                                                    <Button
                                                        variant="contained"
                                                        color={bottonColor}
                                                        className={classes.button}
                                                        onClick={handleSubmit}
                                                    >
                                                        Salvar e continuar
                                                    </Button>
                                                </>


                                            )}

                                    </Grid>
                                </Grid>
                            );
                        }}
                    </Formik>
                </Card>

            </Grid>
        </Modal>
    );
}
