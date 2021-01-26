import React, {useState} from "react";
import {CellParams, DataGrid, GridApi} from "@material-ui/data-grid";
import {IconButton} from "@material-ui/core";
import {FaEdit, FaTrash} from 'react-icons/fa';

export default function PostTable(props) {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function () {
        setwindowWidth(window.innerWidth);
    })

    const columns = [
        {field: 'userId', headerName: 'Usuário', width: windowWidth * 0.1},
        {field: 'id', headerName: 'id Post', width: windowWidth * 0.1},
        {field: 'title', headerName: 'Titulo', width: windowWidth * 0.2},
        {field: 'body', headerName: 'Mensagem', width: windowWidth * 0.45},
        {
            field: "",
            headerName: "",
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: (params: CellParams) => {
                const onClick = (edit) => {
                    const api: GridApi = params.api;
                    const fields = api
                        .getAllColumns()
                        .map((c) => c.field)
                        .filter((c) => c !== "__check__" && !!c);
                    const thisRow = {};

                    fields.forEach((f) => {
                        thisRow[f] = params.getValue(f);
                    });

                    return edit ? props.setForm(thisRow) : props.deletePost(thisRow.id);
                };

                return (
                    <>
                        <IconButton size={15} onClick={() => {onClick(true)}}>
                            <FaEdit size={15}/>
                        </IconButton>
                        <IconButton size={15} onClick={onClick}>
                            <FaTrash size={15}/>
                        </IconButton>
                    </>
                );
            }
        },
    ];

    const rows = props?.data?.map((item) => ({
        userId: item?.userId,
        id: item?.id,
        title: item?.title,
        body: item?.body,
    }))

    return (
        <div style={{width: windowWidth * 0.95, margin: 20}}>
            {props.data
                ? <DataGrid
                    columns={columns}
                    rows={rows}
                    pageSize={10}
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    autoHeight
                /> : null}

        </div>
    );
};
