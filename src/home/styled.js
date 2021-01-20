import styled from 'styled-components';
import {bottonColor, primary, textColor} from "../colors";
import {makeStyles} from "@material-ui/core";


export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: ${primary};
  box-shadow: 0px 1px black;
`;

export const Column = styled.div`
  width: 90%;
  padding: 20px;
`;

export const useStyles = makeStyles(theme => ({
    textTitle: {
        color: "#fff",
        fontSize: 18,
    },
}));
