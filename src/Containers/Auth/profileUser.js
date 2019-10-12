import React, { Component } from "react";
import { getUserProfile } from "../../Actions/user";
import _ from "lodash";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import {updateUserProfile} from '../../Actions/user';

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: "2rem"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class profileUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      hoTen: "",
      email: "",
      soDT: "",
    };
    this.onChange = this.onChange.bind(this);
  }
onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
onUpdateUser =(e) => {
    e.preventDefault();
    let newUser = {...this.state.userData,
        hoTen: this.state.hoTen,
        email: this.state.email,
        soDT: this.state.soDT
    };
    newUser = _.omit(newUser, ["chiTietKhoaHocGhiDanh"]);
    
    updateUserProfile(newUser);
}
  render() { 
    const { classes } = this.props;
    //const { hoTen, email, soDT } = this.state;
    // const {
    //    hinhAnh,
    //   tenKhoaHoc,
    //   moTa
    // } = this.state.userData;
    return (
      <React.Fragment>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h5" align="center">
            Thông Tin Tài Khoản
          </Typography>
          {/* <Grid item xs={12} sm={4}>
            <Typography component="h1" variant="h5" align="center">
              Khóa Học Đã Ghi Danh
            </Typography>
            <Card className="course-item">
              <CardActionArea>
                <CardMedia
                  className="course-item__media"
                  image={hinhAnh}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {tenKhoaHoc}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {moTa}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid> */}
          <Grid item xs={12} sm={8}>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-read-only-input"
                    //label="Tài Khoản"
                    fullWidth
                    value={this.state.userData.taiKhoan}
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    className={classes.textField}
                    required
                    fullWidth
                    id="hoTen"
                    label="Họ Tên"
                    name="hoTen"
                    value={this.state.hoTen || ''}
                    autoComplete="hoTen"
                    onChange={this.onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    className={classes.textField}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={this.state.email || ''}
                    autoComplete="email"
                    onChange={this.onChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    required
                    fullWidth
                    id="number"
                    label="Số Điện Thoại"
                    name="soDT"
                    value={this.state.soDT || ''}
                    autoComplete="soDT"
                    onChange={this.onChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.onUpdateUser}
              >
                Cập Nhập
              </Button>
            </form>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
  componentDidMount() {
    const taikhoan = _.last(this.props.history.location.pathname.split("/"));
    getUserProfile(taikhoan, result => {
      this.setState({
        userData: result,
        hoTen: result.hoTen,
        email: result.email,
        soDT: result.soDT
      });
    });
  }
}

export default withStyles(styles)(profileUser);
