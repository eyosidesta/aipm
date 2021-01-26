import React, { Component } from 'react';
import { Image } from 'antd';
import { Typography, Layout, Divider, Card, Button, Row, Col, Carousel } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../App.less';

class Home extends Component {
    render() {
        const { Text, Title } = Typography;
        const { Header, Sider, Content, Footer } = Layout;
        const { Meta } = Card;
        const style = { background: '#0092ff', padding: '8px 0' };
        const contentStyle = { height: '360px', color: '#fff', 
        lineHeight: '160px', textAlign: 'center', background: '#364d79',
          };
        return (
            <Router>
                <div className="home-container">
                    <img className="home-img" src="./images/home-img.jpg"/>
                    <div className="aipm-home">
                        <Title className="aipm-home-title">AIPM</Title>
                        <Text className="aipm-home-desc">AIPM Ministry has send three hundred missionaries to different 
                            Ethiopian regions<br/> till now and around one Million people hear the
                            Gosple of our Lord Christ Jesus.
                        </Text>
                    </div>

                    <Button className="aipm-button" type="primary"><Link to="who-we-are">Who Is AIPM?</Link></Button>

                    <Row className="testimony-cards">
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Card className="card-testi-1"
                            hoverable
                            cover={<img className="testi-img-one" alt="example" src="./images/unreached-4.jpg" />}
                        >
                            <Meta title="Europe Street beat" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista" />
                        </Card>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Card className="card-testi-2"
                            hoverable
                            cover={<img className="testi-img-two" alt="example" src="./images/unreached-1.jpg" />}
                        >
                            <Meta title="Europe Street beat" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista" />
                        </Card>
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Card className="card-testi-3"
                            hoverable
                            cover={<img className="testi-img-three" alt="example" src="./images/unreached-2.jpg" />}
                        >
                            <Meta title="Europe Street beat" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista" />
                        </Card>
                        </Col>
                    </Row>
                    <Carousel autoplay className="carsousel">
                        <div>
                            <h2>Title</h2>
                            <h3><strong>Lorem</strong> ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum posuere 
                                ultricies. Pellentesque eu dapibus tortor, ut pretium ex. Aenean dictum libero id
                                 nunc congue ultricies. Proin eu malesuada velit. Praesent rutrum mollis nisi, 
                                 in suscipit urna. Phasellus vestibulum neque id luctus dignissim. Duis in congue sem.
                                  Vivamus risus mauris, finibus et fermentum eu, scelerisque sit amet augue.
                                   Nam dapibus libero at odio dictum, sit amet imperdiet turpis imperdiet. 
                                   Mauris ut neque ut arcu semper lobortis.</h3>
                        </div>
                        <div>
                            <h2>Title</h2>
                            <h3><strong>Lorem</strong> ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum posuere 
                                ultricies. Pellentesque eu dapibus tortor, ut pretium ex. Aenean dictum libero id
                                 nunc congue ultricies. Proin eu malesuada velit. Praesent rutrum mollis nisi, 
                                 in suscipit urna. Phasellus vestibulum neque id luctus dignissim. Duis in congue sem.
                                  Vivamus risus mauris, finibus et fermentum eu, scelerisque sit amet augue.
                                   Nam dapibus libero at odio dictum, sit amet imperdiet turpis imperdiet. 
                                   Mauris ut neque ut arcu semper lobortis.</h3>
                        </div>
                        <div>
                            <h2>Title</h2>
                            <h3><strong>Lorem</strong> ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum posuere 
                                ultricies. Pellentesque eu dapibus tortor, ut pretium ex. Aenean dictum libero id
                                 nunc congue ultricies. Proin eu malesuada velit. Praesent rutrum mollis nisi, 
                                 in suscipit urna. Phasellus vestibulum neque id luctus dignissim. Duis in congue sem.
                                  Vivamus risus mauris, finibus et fermentum eu, scelerisque sit amet augue.
                                   Nam dapibus libero at odio dictum, sit amet imperdiet turpis imperdiet. 
                                   Mauris ut neque ut arcu semper lobortis.</h3>
                        </div>
                        <div>
                            <h2>Title</h2>
                            <h3><strong>Lorem</strong> ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum posuere 
                                ultricies. Pellentesque eu dapibus tortor, ut pretium ex. Aenean dictum libero id
                                 nunc congue ultricies. Proin eu malesuada velit. Praesent rutrum mollis nisi, 
                                 in suscipit urna. Phasellus vestibulum neque id luctus dignissim. Duis in congue sem.
                                  Vivamus risus mauris, finibus et fermentum eu, scelerisque sit amet augue.
                                   Nam dapibus libero at odio dictum, sit amet imperdiet turpis imperdiet. 
                                   Mauris ut neque ut arcu semper lobortis.</h3>
                        </div>
                    </Carousel>
                </div>
            </Router>
         );
    }
}

export default Home;