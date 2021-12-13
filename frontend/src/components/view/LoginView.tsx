import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Paper from '@material-ui/core/Paper';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) => createStyles(({
    card: {
        flexGrow: 1,
        width: "100%",
        height: 260,
        border: "1px solid #EAEEF3 !important"
    },
    box: {
        boxShadow: "none !important",
        borderStyle: "solid",
        borderColor: "#EAEEF3",
        borderWidth: 0,
        borderBottomWidth: "thin",
        backgroundColor: "#fff",
        color: "black",
    },
})));

export default function() {
    const classes = useStyles();
    const [email, setEmail] = React.useState<string>("");
    const [pswd, setPswd] = React.useState<string>("");
    const history = useHistory();
    const onEmailTextChange = (e: any) => setEmail(e.target.value);
    const onPswdTextChange = (e: any) => setPswd(e.target.value);

    const loginRequest = async () => {
        try {
            if(email === "" || pswd === "") {
                alert("enter email and password");
            }
            const { data } = await axios.post("http://localhost:5406/api/service/v1/login", { email, pswd });
            if(data.success) {
                localStorage.setItem('authorized', JSON.stringify({
                    authenticated: true,
                    success: true,
                    orchisToken: data.payload[0]
                }));

                 history.push(`/auth`);
            }
        } catch(error) {
            console.log(error);
        }
    };

    return (
        <Container fixed maxWidth="lg">
            <Box display="flex" mt={6} justifyContent="center">
                <Box display="flex" justifyContent="center" width="50%">
                    <Card className={classes.card} variant="outlined" >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                               Login
                            </Typography>
                            <Box display="flex" justifyContent="center" width="100%">
                                <Box display="flex" flexDirection="column" width="70%">
                                    <TextField
                                        id="email"
                                        label="Email"
                                        variant="standard"
                                        margin="dense"
                                        onChange={onEmailTextChange}
                                        value={email} />
                                    <TextField
                                        id="pswd"
                                        label="Password"
                                        variant="standard"
                                        margin="dense"
                                        type="password"
                                        onChange={onPswdTextChange}
                                        value={pswd} />
                                </Box>
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" width="100%" margin={2}>
                                <Box display="flex">
                                    <Button size="small">help</Button>
                                    <Button
                                        color="primary"
                                        size="small"
                                        onClick={loginRequest}
                                        variant="outlined">
                                        go
                                    </Button>
                                </Box>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
        </Container>
    );
}
