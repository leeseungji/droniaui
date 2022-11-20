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
    { 날짜: '22.09.03', 농업인접속자수: 10},
    { 날짜: '22.09.09', 농업인접속자수: 15 },
    { 날짜: '22.09.15', 농업인접속자수: 27 },
    { 날짜: '22.09.21', 농업인접속자수: 20 },
    { 날짜: '22.09.27', 농업인접속자수: 12 },
    { 날짜: '22.10.01', 농업인접속자수: 23},
    { 날짜: '22.10.07', 농업인접속자수: 47},
    { 날짜: '22.10.10', 농업인접속자수: 21 },
];




export default class rechartsSimpleLineChart extends PureComponent {
  
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  
    render() {
      
      
      return (
      
     
    
     

      
        
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
          <Line type="monotone" dataKey="농업인접속자수" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        <grid>농업인접속자수 페이지입니다.</grid>
       
        </FormControl>
     
        
      );
    }
}



