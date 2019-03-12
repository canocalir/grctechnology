import React, { Component } from 'react';
import { Jumbotron, Row, Col} from 'reactstrap';
import { Button } from 'react-bulma-components/full';
import { Link } from 'react-router-dom';
import { Card, Media, Image, Heading, Content, Tile } from 'react-bulma-components'



export default class About extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm="12">
                <Jumbotron>
                <h3 className="display-3">Hello, world!</h3>
                     <p>Paper can be used to build surface or other elements for your application.</p>
                <Link to="/about">
                    <Button color="danger" size="large" rounded outlined>About</Button>
                </Link>
                </Jumbotron>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm="4">
                    <Card>
      <Card.Image size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderAs="p" size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>
              @johnsmith
            </Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
    </Card>
                    </Col>
                    <Col sm="4">
                    <Card>
      <Card.Image size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderAs="p" size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>
              @johnsmith
            </Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
    </Card>
                    </Col>
                    <Col sm="4">
                    <Card>
      <Card.Image size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderAs="p" size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>
              @johnsmith
            </Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
    </Card>
                    </Col>
                </Row>
            <Row>
                <Col sm="5">
                <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="primary" gradient>
                <Heading>Middle Tile...</Heading>
                <Heading subtitle>With image Tile...</Heading>
                <Image size="4by3" src="http://bulma.io/images/placeholders/640x480.png" />
              </Tile>
            </Tile>
                </Col>
            </Row>
            </div>
        )
    }
}