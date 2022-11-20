import React from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";



const columns = [
  { field: 'id', headerName: 'No.', width: 50 },
  {
    field: 'address',
    headerName: '주소',
    width: 120,
    editable: true,
  },
  {
    field: '면적',
    headerName: '면적',
    width: 120,
    editable: true,
  },
  {
    field: 'name',
    headerName: '농업인 이름',
    width: 110,
    editable: true,
  },
  {
    field: '작업상태1',
    headerName: '작업상태1',
    width:130,
    editable: true,
  },
  {
    field: '작업상태2',
    headerName: '작업상태2',
    width: 120,
    editable: true,
  },
  {
    field: '관리자메모',
    headerName: '관리자메모',
    width: 120,
    editable: true,
  },
  {
    field: '참여자메모',
    headerName: '참여자메모',
    width: 120,
    editable: true,
  },
  {
    field: 'adminid',
    headerName: '관리자ID',
    width: 120,
    editable: true,
  },
  {
    field: '참여자ID',
    headerName: '참여자ID',
    width: 150,
    editable: true,
  },
  {
    field: 'tgtitle',
    headerName: 'TG제목',
    width: 150,
    editable: true,
  },
  {
    field: 'tasktitle',
    headerName: 'Task제목',
    width: 150,
    editable: true,
  },
  {
    field: '생성일',
    headerName: '생성일',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, },
  { id: 2,  },
  { id: 3,  },
  { id: 4, },
  { id: 5,  },
  { id: 6,  },
  { id: 7,  },
  { id: 8,  },
  { id: 9,  },
  { id: 10, },
  { id: 11,  },
  { id: 12,  },
  { id: 13, },
  { id: 14,  },
  { id: 15,  },
  { id: 16,  },
  { id: 17,  },
  { id: 18,  },
];

export default function () {
  return (
    




    <Box sx={{ height: '80vh', width: '100%' }}>
      <div style={{ margin: 10 }}>
      <div className="App">Task_Detail 페이지입니다.</div> 
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {" "}
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <NativeSelect
            defaultValue={"none"}
            inputProps={{
              name: "category",
              id: "uncontrolled-native",
            }}
          >
            <option value={"none"}>통합검색</option>
            <option value={"address"}>주소</option>
          </NativeSelect>
        </FormControl>
        <TextField id="standard-search" type="search" variant="standard" />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
    </div>
  
      
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}





