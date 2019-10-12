import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';

import {Link} from 'react-router-dom';

 class CourseItem extends Component {
  render() {
    let { maKhoaHoc,hinhAnh, tenKhoaHoc, moTa, luotXem } = this.props.course;
    return (
      <Grid item xs={12} sm={6} md={3} className="course__item">
        <Card className="course__item__card">
          <CardActionArea className="course__item__card-top">
            <CardMedia
              className="media__card"
              image={hinhAnh}
              title="Contemplative Reptile"
            />
            <CardContent className="content__card">
              <Typography gutterBottom variant="h5" component="h2">
                {tenKhoaHoc}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {moTa}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="button__card">
          <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={luotXem} color="secondary">
                <ThumbUpRoundedIcon style={{fontSize: 'large'}}/>
              </Badge>
            </IconButton>
            <Button size="small" color="primary">
              <Link to={`/course-detail/${maKhoaHoc}`}>Chi Tiết Khóa Học</Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
export default CourseItem;