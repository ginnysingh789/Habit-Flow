import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react"
import useHabitStore from "../Store/store";

export function AddHabit() {
    const [name, setName] = useState('');
    const [frequency, setfrequency] = useState<'daily' | 'weekly'>('daily');
    const{Habits,addHabit}=useHabitStore();
    console.log(Habits)
    const handleFunction=(e:React.FormEvent)=>{
        e.preventDefault();
        if(name.trim())
        {   addHabit(name,frequency);
            setName("")
        }
        

    }
    return (
        <form onSubmit={handleFunction}>
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                gap:3,

            }}>
                <TextField label='Habit Name' value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter your Habit" fullWidth></TextField>
                <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select
                        value={frequency}
                        label='Frequency'
                        onChange={(e) => { setfrequency(e.target.value as 'daily' | 'weekly') }} >
                        <MenuItem value="daily">Daily</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Add Habit </Button>
            </Box>
        </form>
    )
}