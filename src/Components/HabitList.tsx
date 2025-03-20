import { Box, Grid, Paper, Typography ,Button} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete"

import useHabitStore from "../Store/store"

export function HabitList() {
    const { Habits ,removeHabit,toggleHabot} = useHabitStore();
    const today=new Date().toISOString().split("T")[0];
    return (
        <div>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
                {Habits.map((habit) => (
                    <Paper key={habit.id} elevation={2} sx={{
                        p:2
                    }}>
                        <Grid container alignItems='center'>
                            <Grid xs={12} sm={6}>
                                <Typography variant="h6">{habit.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{habit.frequency}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} container justifyContent="flex-end">
                                <Box sx={{display:'flex',gap:1}}>
                                    <Button variant="outlined" color={habit.completedDates.includes(today)?'success':'primary'} startIcon={<CheckCircleIcon></CheckCircleIcon>} onClick={()=>toggleHabot(habit.id,today)}>{habit.completedDates.includes(today)?'Completed':'Mark completed'}</Button>
                                    <Button variant="outlined" color="error" startIcon={<DeleteIcon></DeleteIcon>} onClick={()=>removeHabit(habit.id)}>Remove</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}

            </Box>
        </div>
    )
}