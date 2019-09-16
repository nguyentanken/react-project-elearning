import React, { Component } from 'react';


export default class CourseItem extends Component {

    
constructor(props) {
    super(props);
    this.state = {
        editing: false,
    }
}; 
buttonEdit = () => {
    alert('NÚT EDIT')
};
buttonDelete = () => {
    alert('Nút Delete')
}
buttonSave = () => {

};

ShowButtonEditDelete = () => {
    return <div className="col-md-12 product-info smart-form" style={{ marginTop: 10 }}>
            <div className="form-group">
                <button className="btn btn-info" onClick={() =>  this.buttonEdit() }>Edit</button>
                <button className="btn btn-danger" onClick={() =>  this.buttonDelete() }>Delete</button>
            </div>
        </div>    
};
ShowButtonSave = () => {
    return <div className="col-md-12 product-info smart-form" style={{ marginTop : 10 }}>
	<div className="form-group">
		<input type="text" className="form-control" id="usr" /> 
	</div>
	<div className="form-group">
		<button className="btn btn-info" onClick={() =>  this.buttonSave() }>Save</button>
	</div>
</div>
};
ShowButton = () => {
    if(this.state.editing===false){
        return this.ShowButtonEditDelete();
    }else {
        return this.ShowButtonSave();
    }
};
    render() {
        return (
            <div className="col-xs-12 col-md-6">
                <div className="prod-info-main prod-wrap clearfix">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <div className="product-image">
                                <img src={this.props.img} className="img-responsive" alt="abc" />
                                <span className="tag2 hot">HOT</span>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 col-xs-12">
                            <div className="product-deatil">
                                <h5 className="name">
                                    <a href="abc"> {this.props.children} </a>
                                    <a href="abc"><span>Description Category</span></a>
                                </h5>
                                <p className="price-container">
                                    <span> {this.props.price} vnđ</span>
                                </p>
                                <span className="tag1" />
                            </div>
                            <div className="description">
                                <p>Mô tả ngắn </p>
                            </div>
                            <div className="product-info smart-form">
                                <div className="row">
                                    <div className="col-md-12">
                                        <a href="abc" data-toggle="modal" data-target="#myModal" className="btn btn-danger">Thêm vào giỏ hàng</a>
                                        <a href="abc" data-toggle="modal" data-target="#myModal" className="btn btn-info">Thông tin chi tiết</a>
                                        { this.ShowButton()}
                                    </div>
                                    <div className="col-md-12">
                                        <div className="rating">Rating:<label htmlFor="stars-rating-5"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-4"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-3"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-2"><i className="fa fa-star text-warning" /></label>
                                            <label htmlFor="stars-rating-1"><i className="fa fa-star text-warning" /></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
