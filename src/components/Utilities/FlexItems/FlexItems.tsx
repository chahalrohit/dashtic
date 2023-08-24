import React from "react";
import { Card, CardHeader, Row, CardBody, Col, CardTitle } from "reactstrap";
import {PageHeaders }from "../../../Shared/Prism/Prism";

const FlexItems = () => (
  <div>
    <PageHeaders
      title="Flex"
      home="Home"
      name="Utilites"
      fonticonsname="Flex"
    />
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle>Enable Flex</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-flex p-3 bg-light">I'm a flexbox container!</div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Direction</CardTitle>
          </CardHeader>
          <CardBody>
            <div>
              <div className="d-flex flex-row bg-light mb-4">
                <div className="p-3 bg-gray-100">Flex item 1</div>
                <div className="p-3 bg-gray-200">Flex item 2</div>
                <div className="p-3 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex flex-row-reverse bg-light">
                <div className="p-3 bg-gray-100">Flex item 1</div>
                <div className="p-3 bg-gray-200">Flex item 2</div>
                <div className="p-3 bg-gray-300">Flex item 3</div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Justify Content</CardTitle>
          </CardHeader>
          <CardBody>
            <div>
              <div className="d-flex flex-row justify-content-start bg-light mb-4">
                <div className="p-3 bg-gray-100">Flex item 1</div>
                <div className="p-3 bg-gray-200">Flex item 2</div>
                <div className="p-3 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-end bg-light mb-4">
                <div className="p-3 bg-gray-100">Flex item 1</div>
                <div className="p-3 bg-gray-200">Flex item 2</div>
                <div className="p-3 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-center bg-light mb-4">
                <div className="p-3 bg-gray-100">Flex item 1</div>
                <div className="p-3 bg-gray-200">Flex item 2</div>
                <div className="p-3 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-between bg-light mb-4">
                <div className="p-3 bg-gray-100">Flex item 1</div>
                <div className="p-3 bg-gray-200">Flex item 2</div>
                <div className="p-3 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-around bg-light">
                <div className="p-3 bg-gray-100">Flex item 1</div>
                <div className="p-3 bg-gray-200">Flex item 2</div>
                <div className="p-3 bg-gray-300">Flex item 3</div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Align Items</CardTitle>
          </CardHeader>
          <CardBody>
            <div>
              <div className="d-flex flex-row align-items-start bg-light h-9 mb-4">
                <div className="p-3 bg-gray-100">Flex item 1</div>
                <div className="p-3 bg-gray-200">Flex item 2</div>
                <div className="p-3 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex flex-row align-items-center bg-light h-9 mb-4">
                <div className="p-3 bg-gray-100">Flex item 1</div>
                <div className="p-3 bg-gray-200">Flex item 2</div>
                <div className="p-3 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex flex-row align-items-end bg-light h-9 mb-4">
                <div className="p-3 bg-gray-100">Flex item 1</div>
                <div className="p-3 bg-gray-200">Flex item 2</div>
                <div className="p-3 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex flex-row align-items-stretch bg-light h-9">
                <div className="p-3 bg-gray-100">Flex item 1</div>
                <div className="p-3 bg-gray-200">Flex item 2</div>
                <div className="p-3 bg-gray-300">Flex item 3</div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Align Self</CardTitle>
          </CardHeader>
          <CardBody>
            <div>
              <div className="d-flex flex-row bg-light h-9 mb-4">
                <div className="p-3 bg-gray-100 align-self-start">Flex item 1</div>
                <div className="p-3 bg-gray-200 align-self-center">Flex item 2</div>
                <div className="p-3 bg-gray-300 align-self-end">Flex item 3</div>
                <div className="p-3 bg-gray-400 align-self-stretch">
                  Flex item 4
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fill</CardTitle>
          </CardHeader>
          <CardBody>
            <div>
              <div className="d-flex bg-light">
                <div className="p-3 bg-gray-100 flex-fill">
                  Flex item with a lot of content
                </div>
                <div className="p-3 bg-gray-200 flex-fill">Flex item</div>
                <div className="p-3 bg-gray-300 flex-fill">Flex item</div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Grow and Shrink</CardTitle>
          </CardHeader>
          <CardBody>
            <div>
              <div className="d-flex bg-light">
                <div className="p-3 bg-gray-100 flex-grow-1">Flex item</div>
                <div className="p-3 bg-gray-200">Flex item</div>
                <div className="p-3 bg-gray-300">Third flex item</div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Auto Margins</CardTitle>
          </CardHeader>
          <CardBody>
            <div>
              <div className="d-flex bg-light">
                <div className="p-3 bg-gray-100">Flex item</div>
                <div className="p-3 bg-gray-200">Flex item</div>
                <div className="p-3 bg-gray-300 mg-l-auto">Third flex item</div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Order</CardTitle>
          </CardHeader>
          <CardBody>
            <div>
              <div className="d-flex bg-light">
                <div className="p-3 bg-gray-100 order-3">First Item</div>
                <div className="p-3 bg-gray-200 order-2">Second Item</div>
                <div className="p-3 bg-gray-300 order-1">Third Item</div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

FlexItems.propTypes = {};

FlexItems.defaultProps = {};

export default FlexItems;
