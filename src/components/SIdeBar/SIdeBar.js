import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
       
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
        
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SIdeBar = () => {
    const [currency, setCurrency] = React.useState('EUR');


    const classes = useStyles();

    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };


    return (   
            <div className="text-start mx-3 my-2" style={{color:"yellow"}}>
                <h5 className="mx-2">Find a Rental Property</h5>
                
                <div style={{ borderRadius: "10px"}} className="my-2">
                    <TextField 
                    id=""
                        // variant="filled"
                        label="Search Area"
                        color="green"
                        style={{ margin: 8 }}
                        placeholder="eg. Oxford or NW3"
                        // helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <div className="row d-flex justify-content-center align-items-center my-2">
                <div className="col col-xs-6 col-md-6 col-sm-6  col-lg-6 bg bg-prima">
                        <FormControl fullWidth id="input"
                            margin="normal" className={classes.formControl}>
                           
                                <InputLabel shrink htmlFor="age-native-label-placeholder">
                                    Minimum beds
                            </InputLabel>

                                <NativeSelect
                                // variant="filled"
                                    value={state.age}
                                    onChange={handleChange}
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-native-label-placeholder',
                                    }}
                                >
                                    <option value="">None</option>
                                    <option value={10}>1</option>
                                    <option value={20}>2</option>
                                    <option value={30}>3</option>
                                    <option value={40}>4</option>
                                    <option value={50}>5</option>
                                    <option value={60}>6</option>
                                </NativeSelect>
                        </FormControl>
                        
                    </div>

                <div className=" col col-xs-6 col-sm-6  col-md-6">
                        <FormControl fullWidth id="input"
                            margin="normal" className={classes.formControl}>

                            <InputLabel shrink htmlFor="age-native-label-placeholder">
                                Maximum beds
                            </InputLabel>

                            <NativeSelect
                                // variant="filled"
                                value={state.age}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-native-label-placeholder',
                                }}
                            >
                                <option value="">None</option>
                                <option value={10}>1</option>
                                <option value={20}>2</option>
                                <option value={30}>3</option>
                                <option value={40}>4</option>
                                <option value={50}>5</option>
                                <option value={60}>6</option>
                            </NativeSelect>
                        </FormControl>
                    </div>
                </div>

                <FormControl fullWidth id="input" className="my-2"
                    margin="normal" className={classes.formControl}>

                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                        Price per
                            </InputLabel>

                    <NativeSelect
                        // variant="filled"
                        value={state.age}
                        onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'age-native-label-placeholder',
                        }}

                    >

                        <option value="">Month</option>
                        <option value={10}>Weekly</option>
                        <option value={20}>Forthnightly</option>
                        <option value={30}>Yearly</option>
                       
                    </NativeSelect>
                </FormControl>

                <div className="row d-flex justify-content-center align-items-center my-2">
                <div className="col col-xs-6 col-sm-6">
                        <FormControl fullWidth id="input"
                            margin="normal" className={classes.formControl}>

                            <InputLabel shrink htmlFor="age-native-label-placeholder">
                                Minimum Price
                            </InputLabel>

                            <NativeSelect
                                // variant="filled"
                                value={state.age}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-native-label-placeholder',
                                }}
                            >
                                <option value="">None</option>
                                <option value={10}>1</option>
                                <option value={20}>2</option>
                                <option value={30}>3</option>
                                <option value={40}>4</option>
                                <option value={50}>5</option>
                                <option value={60}>6</option>
                                
                            </NativeSelect>
                        </FormControl>
                    </div>
                <div className="col col-xs-6 col-sm-6">
                        <FormControl fullWidth id="input"
                            margin="normal" className={classes.formControl}>

                            <InputLabel shrink htmlFor="age-native-label-placeholder">
                                Maximum Price
                            </InputLabel>

                            <NativeSelect
                                // variant="filled"
                                value={state.age}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-native-label-placeholder',
                                }}
                            >
                                <option value="">None</option>
                                <option value={10}>1</option>
                                <option value={20}>2</option>
                                <option value={30}>3</option>
                                <option value={40}>4</option>
                                <option value={50}>5</option>
                                <option value={60}>6</option>
                               
                            </NativeSelect>
                        </FormControl>
                    </div>                   
                </div>
                <div className="my-4">
                    <FormControl fullWidth >
                    <button style={{ backgroundColor:"#D41553",color:"white"}} className="btn btn-lg "> <h6>FIND PROPERTIES</h6> </button>
                    </FormControl>
                </div>
    
            </div>

    );
};

export default SIdeBar;