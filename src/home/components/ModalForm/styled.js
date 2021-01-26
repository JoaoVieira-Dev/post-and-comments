import {makeStyles} from "@material-ui/styles";
import {colors} from "@material-ui/core";

export const useStyles = makeStyles(() => ({

    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        minWidth: 450,
        maxWidth: 700,
        width: '80%',
        padding: 16,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textArea: {
        height: '100%',
        width: '100%',
        marginTop: 16,
        marginBottom: 4,
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
    },

    button: {
        height: 36,
    },
    errorMessage: {
        color: colors.red[700],
    },

}));
