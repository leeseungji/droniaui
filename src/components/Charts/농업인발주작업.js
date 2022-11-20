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
    { 날짜: '22.09.03', 면적: 100, 건수: 3},
    { 날짜: '22.09.09', 면적: 110, 건수: 8},
    { 날짜: '22.09.15', 면적: 220, 건수: 18 },
    { 날짜: '22.09.21', 면적: 100, 건수: 5 },
    { 날짜: '22.09.27', 면적: 109,건수: 20},
    { 날짜: '22.10.01', 면적: 315, 건수: 26},
    { 날짜: '22.10.07', 면적: 356, 건수: 33},
    { 날짜: '22.10.10', 면적: 202, 건수: 16},
];




export default class rechartsSimpleLineChart extends PureComponent {
  
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  
    render() {
      
      
      return (
        <FormGroup sx={{ flexDirection: 'row' }}>
          
          
          <Grid letterSpacing={3} fontSize="h6.fontSize" fontWeight={500}
       padding='9px' >{<HowToRegIcon />} 발주지역 </Grid>
      <FormControlLabel control={<Checkbox defaultChecked />} label="서울" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="경기북부" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="경기남부" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="강원" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="충북" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="충남" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="경남" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="전북" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="전남" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="제주" />
     
    
     
       <FormGroup sx={{ flexDirection: 'row' }}>
       <Grid letterSpacing={3} fontSize="h6.fontSize" fontWeight={500}
       padding='9px' >{<HowToRegIcon />} 작업상태  </Grid>
       <FormControlLabel control={<Checkbox defaultChecked />} label="발주대기" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="발주완료" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="작업대기" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="작업진행" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="작업완료" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="최종완료" />
      
  
      
        
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
          <Line type="monotone" dataKey="면적" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="건수" stroke="#82ca9d" activeDot={{ r: 8 }}/>
        </LineChart>
        </FormGroup>
        <grid>농업인발주작업페이지입니다.</grid>
        </FormGroup>
        
      );
    }
}



