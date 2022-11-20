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
    field: 'title',
    headerName: '제목',
    width: 120,
    editable: true,
  },
  {
    field: 'subtitle',
    headerName: '부제목',
    width: 110,
    editable: true,
  },
  {
    field: 'phonenumber',
    headerName: 'ID(전화번호)',
    width:130,
    editable: true,
  },
  {
    field: 'tdnum',
    headerName: 'TD수',
    width: 120,
    editable: true,
  },
  {
    field: '총면적',
    headerName: '총면적',
    width: 120,
    editable: true,
  },
  {
    field: '작업상태',
    headerName: '작업상태',
    width: 120,
    editable: true,
  },
  {
    field: '참여인원',
    headerName: '참여인원',
    width: 120,
    editable: true,
  },
  {
    field: 'TG명',
    headerName: 'TG명',
    width: 120,
    editable: true,
  },
  {
    field: 'tgid',
    headerName: 'TG ID',
    width: 120,
    editable: true,
  },
  {
    field: '생성인ID',
    headerName: '생성인ID',
    width: 120,
    editable: true,
  },
  {
    field: '생성인이름',
    headerName: '생성인이름',
    width: 120,
    editable: true,
  },
  {
    field: '생성일',
    headerName: '생성일',
    width: 120,
    editable: true,
  },
  {
    field: '대표주소',
    headerName: '대표주소',
    width: 150,
    editable: true,
  }
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
      <div className="App">Task 페이지입니다.</div> 
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
            <option value={"id"}>ID</option>
            <option value={"address"}>대표주소</option>
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





