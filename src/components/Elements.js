import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, CardHeader } from 'reactstrap';

class Elements extends Component {
    render() {
        return(
        <div>
        <Card className="elements">
            <CardHeader><h4>{this.props.header}</h4></CardHeader>
            <a href={this.props.link}>
                <CardImg top width="100%" src={this.props.imgSource} alt="Card image cap" className="thumbnail"/>
            </a>
            <CardBlock>
                <CardTitle className="card-title">{this.props.title}</CardTitle>
                <CardSubtitle className="card-subtitle">{this.props.subtitle}</CardSubtitle>
                <CardText className="card-text">{this.props.text}</CardText>
            </CardBlock>
        </Card>
        </div>
        );
    }
}
export default Elements;