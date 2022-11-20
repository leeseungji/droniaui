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
    { 날짜: '22.09.03', 누적결제수: 10},
    { 날짜: '22.09.09', 누적결제수: 26 },
    { 날짜: '22.09.15', 누적결제수: 56 },
    { 날짜: '22.09.21', 누적결제수: 89 },
    { 날짜: '22.09.27', 누적결제수: 101 },
    { 날짜: '22.10.01', 누적결제수: 154},
    { 날짜: '22.10.07', 누적결제수: 194},
    { 날짜: '22.10.10', 누적결제수: 290},
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
          <Line type="monotone" dataKey="누적결제수" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        
        <grid>누적결제페이지입니다.</grid>
        
        </FormControl>
        
      );
    }
}



