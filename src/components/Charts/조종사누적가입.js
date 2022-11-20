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
    { 날짜: '22.09.03', 조종사누적가입수: 10},
    { 날짜: '22.09.09', 조종사누적가입수: 26 },
    { 날짜: '22.09.15', 조종사누적가입수: 56 },
    { 날짜: '22.09.21', 조종사누적가입수: 89 },
    { 날짜: '22.09.27', 조종사누적가입수: 101 },
    { 날짜: '22.10.01', 조종사누적가입수: 154},
    { 날짜: '22.10.07', 조종사누적가입수: 194},
    { 날짜: '22.10.10', 조종사누적가입수: 262},
];




export default class rechartsSimpleLineChart extends PureComponent {
  
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  
    render() {
      
      
      return (
        <FormGroup sx={{ flexDirection: 'row' }}>
          
          
          <Grid letterSpacing={3} fontSize="h6.fontSize" fontWeight={500}
       padding='9px' >{<HowToRegIcon />} 영업거점 </Grid>
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
       padding='9px' >{<HowToRegIcon />} 활동지역  </Grid>
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
       padding='9px' >{<HowToRegIcon />} 보유드론  </Grid>
       <FormControlLabel control={<Checkbox defaultChecked />} label="쿼드5리터" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="쿼드10리터" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="헥사5리터" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="옥토5리터" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="입제살포용" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="기타" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="없음" />
      
        
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
          <Line type="monotone" dataKey="조종사누적가입수" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </FormGroup>
        </FormGroup>
        <grid>조종사누적가입페이지입니다.</grid>
        </FormGroup>
        
      );
    }
}



