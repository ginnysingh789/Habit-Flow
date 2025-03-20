import { Box, Container, Typography } from "@mui/material"
import { AddHabit } from "./Components/AddHabit"
import { HabitList } from "./Components/HabitList"


function App() {


  return (
   <div>
    <Container>
    <Box>
      <Typography variant="h2" component="h1" align="center">Habit Tracker</Typography>
    </Box>
    <AddHabit></AddHabit>
    <HabitList></HabitList>
    </Container>
   </div>
  )
}

export default App
