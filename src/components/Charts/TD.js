import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';


import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid } from '@mui/material';
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import { grid } from '@mui/system';
import HowToRegIcon from '@mui/icons-material/HowToReg';











const data = [
    { 날짜: '22.09.03', TaskDetail수: 10},
    { 날짜: '22.09.09', TaskDetail수: 15 },
    { 날짜: '22.09.15', TaskDetail수: 27 },
    { 날짜: '22.09.21', TaskDetail수: 20 },
    { 날짜: '22.09.27', TaskDetail수: 12 },
    { 날짜: '22.10.01', TaskDetail수: 23},
    { 날짜: '22.10.07', TaskDetail수: 47},
    { 날짜: '22.10.10', TaskDetail수: 21 },
];




export default class rechartsSimpleLineChart extends PureComponent {
  
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  
    render() {
      
      
      return (
        <FormGroup sx={{ flexDirection: 'row' }}>
          <Grid letterSpacing={3} fontSize="h6.fontSize" fontWeight={600}
       padding='10px'>{<HowToRegIcon />} 작업상태1</Grid>
      <FormControlLabel control={<Checkbox defaultChecked />} label="할당준비" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="작업대기" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="작업중" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="작업완료" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="최종완료" />

      <FormGroup sx={{ flexDirection: 'row' }}>
          <Grid letterSpacing={3} fontSize="h6.fontSize" fontWeight={600}
       padding='10px'>{<HowToRegIcon />} 작업상태2</Grid>
      <FormControlLabel control={<Checkbox defaultChecked />} label="추가됨" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="삭제됨" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="미확인" />
     
    
     
       
      
        
      <FormControl sx={{ m: 1, minWidth: 120 }}>
          <NativeSelect 
            defaultValue={"none"}
            inputProps={{
              name: "category",
              id: "uncontrolled-native",
            }}
          >
            <option value={"none"}>통합검색</option>
            <option value={"day"}>일별</option>
            <option value={"week"}>주별</option>
            <option value={"month"}>월별</option>
            <option value={"year"}>년별</option>
          </NativeSelect>
        </FormControl>
        <LineChart
          width={1500}
          height={500}
          data={data}
          
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          
      
          <CartesianGrid strokeDasharray="1 3" />
          <XAxis dataKey="날짜" /><YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="TaskDetail수" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </FormGroup>
        <Grid> TaskDetail페이지입니다.</Grid>
        </FormGroup>
       
        
      );
    }
}



