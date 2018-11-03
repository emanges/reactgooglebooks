import React, { Component } from 'react';
import { Grid, Row, Col, Accordion, Panel, ListGroup, ListGroupItem, } from 'react-bootstrap';

class Books extends Component {
  render() {
    let bookItems;
    if (this.props.books) {
      bookItems = this.props.books.map(book => {
        let id = book.id;
        let title = book.volumeInfo.title;
        let categories = book.volumeInfo.categories;
        let authors = book.volumeInfo.authors;
        let publisher = book.volumeInfo.publisher;
        let description = book.volumeInfo.description;
        let publishedDate = book.volumeInfo.publishedDate;
        return (
          <Panel key={id} header={title} eventKey={id}>
            <Grid>
              <Row>
                <Col xs={3} md={3} lg={3}>
                </Col>
                <Col xs={8} md={8} lg={8}>
                  <ListGroup>
                    <ListGroupItem><strong>Category: </strong>{categories}</ListGroupItem>
                    <ListGroupItem><strong>Author: </strong>{authors}</ListGroupItem>
                    <ListGroupItem><strong>Publisher: </strong>{publisher}</ListGroupItem>
                    <ListGroupItem><strong>Publish Date: </strong>{publishedDate}</ListGroupItem>
        
                  </ListGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={11} md={11} lg={11}>
                  <h3>Description</h3>
                  {description}
                  <hr />
                </Col>
              </Row>
            </Grid>
          </Panel>
        );
      });
    }
    return (
      <div>
        <Accordion>
          {bookItems}
        </Accordion>
      </div>
    );
  }
}

export default Books;
