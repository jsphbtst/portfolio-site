import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Elements extends Component {
    
    render() {
        return(
        <div>
        <Card>
            <CardImg top width="100%" src={require("../images/cnn.png")} alt="Card image cap" />
            <CardBlock>
                <CardTitle className="card-title">{this.props.title}</CardTitle>
                <CardSubtitle className="card-subtitle">{this.props.subtitle}</CardSubtitle>
                <CardText className="card-text">{this.props.text}</CardText>
                <Button outline color="secondary" className="float-right">Check It Out Here</Button>
            </CardBlock>
        </Card>
        </div>
        );
    }
}
export default Elements;