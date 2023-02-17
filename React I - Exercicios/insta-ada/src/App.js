import { Navbar } from "./components/navbar/Nav-bar";
import { Header } from "./components/Header";
import { Grid, GridItem } from "./ui/grid"




function App  () {
    return (
        <Grid>
            <GridItem>
                <Navbar />
            </GridItem>
            <GridItem>
                <Header />
            </GridItem>
        </Grid>
    );
}

export default App;