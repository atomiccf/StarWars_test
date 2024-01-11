import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import {Typography,SelectChangeEvent} from "@mui/material";

interface FilterControlsProps {
    cbGetFilterStr: (str:string) => void;
    cbGetFilterMin: (min:string) => void;
    cbGetFilterMax: (max:string) => void;
    cbGetFilterRadio: (gender:string) => void;
    cbGetFilterFilm:(film:string) => void;
}



const FilterControls:React.FC<FilterControlsProps> = ({cbGetFilterStr,cbGetFilterMin,cbGetFilterMax,cbGetFilterRadio,cbGetFilterFilm}) => {

    const formStyle ={ flexGrow: 1, width:"100%", padding:'20px',color:'gold', border: '2px solid gold', marginBottom:'20px'}
    const labelStyle ={ textAlign:'left',paddingLeft:'20px', fontSize:'20px', fontColor:'black' ,color:'gold', };
    const radioStyle = { paddingLeft: '20px',border: '2px solid gold',marginBottom: '20px','& .Mui-checked': { color: 'gold' } };
    const colorStyle = { color:'gold', };
    const defaultStyle = { paddingLeft:'20px', color:'gold', '& .Mui-checked': { color: 'gold' }, '& .Mui-desabled': { color: 'white' }};
    const selectStyle = { color:'gold', border: '2px solid gold',backgroundColor:'white'};
    const textFieldStyle = { border: '2px solid gold',marginBottom:'10px', backgroundColor:'white' ,'& .MuiOutlinedInput-root.Mui-focused': { color: 'gold' },};

const getFilterStr = (EO:React.ChangeEvent<HTMLInputElement>) => {
        cbGetFilterStr(EO.target.value);
    }
    const getMinValue = (EO:React.ChangeEvent<HTMLInputElement>) => {
        cbGetFilterMin(EO.target.value);
    }

    const getMaxValue = (EO:React.ChangeEvent<HTMLInputElement>) => {
        cbGetFilterMax(EO.target.value);
    }

    const handleRadioChange = (EO:React.ChangeEvent<HTMLInputElement>) => {
        cbGetFilterRadio(EO.target.value);
    };

    const handleSelectChange = (EO:SelectChangeEvent) => {
        cbGetFilterFilm(EO.target.value);
    };

    return (
        <>

            <FormControl sx={formStyle} className='wrapper_formcontrol' fullWidth>
                <Typography sx={colorStyle} variant="h4">Filter Controls</Typography>
                <FormControl>
                    <FormLabel  sx={labelStyle} id="radio_buttons_group_label">Gender</FormLabel>
                    <RadioGroup
                        sx={radioStyle}
                        aria-labelledby="radio_label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel sx={defaultStyle} value="female" control={<Radio />} label="Female"/>
                        <FormControlLabel sx={defaultStyle} value="male" control={<Radio />} label="Male" />
                        <FormControlLabel sx={defaultStyle} value="n/a" control={<Radio />} label="Other"/>
                    </RadioGroup>
                </FormControl>

                <FormControl sx={formStyle}>
                    <FormLabel sx={labelStyle} id="input_label_name">Search by name and Mass</FormLabel>
                    <TextField InputLabelProps={{ style: { color: 'gold' }, }} sx={textFieldStyle} id="outlined-basic" label="Search by name" variant="outlined" onChange={getFilterStr} />
                </FormControl>

                <FormControl sx={formStyle}>
                    <FormLabel  sx={labelStyle} id="input_label_min_max">Search by Mass</FormLabel>
                    <TextField InputLabelProps={{ style: { color: 'gold' } }} sx={textFieldStyle} id="min" label="Minimum mass value" variant="outlined" onChange={getMinValue} />
                    <TextField InputLabelProps={{ style: { color: 'gold' }, }}  sx={textFieldStyle} id="max" label="Max mass value" variant="outlined" onChange={getMaxValue} />
                </FormControl>
                <FormControl sx={formStyle}>
                    <FormLabel  sx={labelStyle} id="input_label_min_max">Films</FormLabel>
                    <Select
                        sx={selectStyle}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Films"
                        defaultValue=""
                        onChange={handleSelectChange}
                    >
                        <MenuItem sx={colorStyle} value={'A New Hope'}>A New Hope</MenuItem>
                        <MenuItem sx={colorStyle} value={'The Empire Strikes Back'}>The Empire Strikes Back</MenuItem>
                        <MenuItem sx={colorStyle} value={'Return of the Jedi'}>Return of the Jedi</MenuItem>
                        <MenuItem sx={colorStyle} value={'Revenge of the Sith'}>Revenge of the Sith </MenuItem>
                        <MenuItem sx={colorStyle} value={'Attack of the Clones'}>Attack of the Clones </MenuItem>
                        <MenuItem sx={colorStyle} value={'The Phantom Menace'}>The Phantom Menace </MenuItem>
                    </Select>
                </FormControl>
            </FormControl>
            </>


    )

}

export default FilterControls;