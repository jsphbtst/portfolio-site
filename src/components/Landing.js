import React, { Component } from 'react';
import { Jumbotron, Row, Col, Container } from 'reactstrap';
import Elements from './Elements';

class Landing extends Component {
    render() {
        return(
        <div>
        <Jumbotron className="Jumbotron">
            <h1 className="display-3">Joseph J. Bautista</h1>
            <h3><small>Data Science, Artificial Intelligence, and Full Stack Development.</small></h3>
            <hr className="my-2" />
            <p>Technology is here to make life easier. It has continued to enable us to enhance our own human capabilities to levels our ancestors would think were works of fiction. Imagine the countless possibilities with the new industrial revolution led by A.I. However, the values that we transmit through the creation and implementation of A.I. is important. Some people, including your own governments, are now using it for nefarious purposes to take away liberty. As classical liberals, it is our job to transmit these values to society as a whole so that A.I. can enhance liberty, not take it away from us.</p>
        </Jumbotron>
        
        <h1 className="Featured-Work">Featured Work</h1>
        <div className="Container">
            <Container>
                <Row>
                    <Col xs="8" sm="8">
                        <h2>Artificial Intelligence</h2>
                        <Elements title="Image Classification"
                                subtitle="Convolutional Neural Networks"
                                text="Here I implemented a CNN using Keras to classify whether a given image is a cat or a dog. The accuracy reached 98%." />
                    </Col>
                    <Col xs="4" sm="4">
                        <h2>Data Visualization</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </Col>
                </Row>

                <br />

                <Row>
                    <Col xs="4" sm="4">
                        <h2>One</h2>
                            <Elements title="FIES PH Analysis"
                                    subtitle="Data Exploration of FIES data from the Philippine Statistics Authority"
                                    text="I explored the FIES data in my Jupyter Notebook to draw up some insights into the income and expenditure patterns of Filipino families." />
                    </Col>
                    <Col xs="4" sm="4">
                        <h2>Two</h2>
                        <Elements title="Something"
                                subtitle="Something else"
                                text="Something else entirely" />
                    </Col>
                    <Col xs="4" sm="4">
                        <h2>Three</h2>
                        <Elements title="Another something"
                                subtitle="Aonther something else" 
                                text="Another something else entirely" />
                    </Col>
                </Row>
            </Container>
        </div>

        </div>
        );
    }
}
export default Landing;