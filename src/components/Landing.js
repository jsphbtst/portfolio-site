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
                    <Col xs="12" sm="8">
                        <Elements header="Artificial Intelligence"
                                title="Image Classification"
                                subtitle="Convolutional Neural Networks"
                                text="Here I implemented a CNN using Keras to classify whether a given image is a cat or a dog. The accuracy reached 98%." 
                                link="https://github.com/jsphbtst/CatsvDogs/blob/master/CNN%20Image%20Recognizer%20for%20Cats%20and%20Dogs.ipynb"
                                imgSource={require("../images/cnn.png")}/>
                    </Col>
                    <Col xs="12" sm="4">
                        <Elements header="Data Visualization"
                                title="Node and D3JS"
                                subtitle="World Map and Environmental Data"
                                text="This was for a data visualization class back in undergrad. Working on this with me were Mikaela Malit and June Guerrero. We visualized environmental data that we got from the World Bank onto the world map. We originally only used D3JS with no backend at the end of the semester this was done. Later on I added a Node and Express backend just to make it stable and deployable to Heroku." 
                                link="https://cryptic-journey-51108.herokuapp.com/"
                                imgSource={require("../images/cnn.png")}/>
                    </Col>
                </Row>
            </Container>
            
            <br />
            
            <Container>
                <Row>
                    <Col xs="12" sm="4">
                        <Elements header="Data Exploration"
                                title="FIES Analysis"
                                subtitle="Exploration of Philippine Statistics Authority Data"
                                text="I explored the FIES data in my Jupyter Notebook to draw up some insights into the income and expenditure patterns of Filipino families." 
                                link="/" 
                                imgSource={require("../images/fies.png")}/>
                    </Col>

                    <Col xs="12" sm="4">
                        <Elements header="ReactJS"
                                title="React Countdown Timer"
                                subtitle="Basic React App"
                                text="This my first ever ReactJS App. I also managed to deploy it to Heroku the same day. Here I programmed a countdown timer in anticipation of Avengers: Infinity War. " 
                                link="https://thawing-fjord-96551.herokuapp.com/"
                                imgSource={require("../images/avengers.jpg")} />
                    </Col>

                    <Col xs="12" sm="4">
                        <Elements header="Deep NLP"
                                title="Spam Detection Using LSTM"
                                subtitle="Deep NLP with Keras" 
                                text="This was Day 31 of my #100DaysOfCode journey. Here I implemented a simple LSTM model using Keras to detect whether a given text in an email is spam or not. The purpose was to just get used to how text analytics is done. Learning never stops!" 
                                link="https://github.com/jsphbtst/SpamDetectionLSTM/blob/master/Spam%20Detection%20Using%20LSTM.ipynb"
                                imgSource={require("../images/lstm.svg")} />
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
        );
    }
}
export default Landing;