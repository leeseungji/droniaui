import React from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { field: 'id', headerName: 'No.', width: 50 },
  {
    field: 'name',
    headerName: '이름',
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
    field: '활동지역',
    headerName: '활동지역',
    width: 120,
    editable: true,
  },
  {
    field: '희망지역',
    headerName: '희망지역',
    width: 120,
    editable: true,
  },
  {
    field: '영업거점',
    headerName: '영업거점',
    width: 120,
    editable: true,
  },
  {
    field: '보유드론',
    headerName: '보유드론',
    width: 120,
    editable: true,
  },
  {
    field: '경력',
    headerName: '경력',
    width: 90,
    editable: true,
  },
  {
    field: '가입일',
    headerName: '가입일',
    width: 120,
    editable: true,
  },
  {
    field: '마지막접속일',
    headerName: '마지막 접속일',
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
// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function () {
  return (
    <Box sx={{ height: '80vh', width: '100%' }}>
      <div style={{ margin: 10 }}>
      <div className="App">조종사 페이지입니다.</div> 
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
            <option value={"name"}>이름</option>
            <option value={"id"}>ID</option>
          </NativeSelect>
        </FormControl>
        <TextField id="standard-search" type="search" variant="standard" />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
          <Button variant="outlined" startIcon={<DeleteIcon />} >비활성화</Button>
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


const 조종사 = () => {
  return (
    <div className="App">
      조종사페이지입니다.
    </div>

  );
}

