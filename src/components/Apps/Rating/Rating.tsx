import React, {SetStateAction, useState } from "react"
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CircleIcon from '@mui/icons-material/Circle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarsIcon from '@mui/icons-material/Stars';
import StarIcon from '@mui/icons-material/Star';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";
import { Box } from "@mui/system";

//Heart rating
const StyledRating = styled(Rating)(
	{ color: '#F1C40F' }
);

// Multi Star Rating

const StyledStarRating = styled(Rating)(
	{ color: '#E74C3C' }
);

// Multi Heart Rating
const StyledheartRating = styled(Rating)(
	{ color: '#E74C3C' }
);

interface labelstypes{
    0.5: String,
    1: String,
    1.5: String,
	2: String,
	2.5: String,
	3: String,
	3.5: String,
	4: String,
	4.5: String,
	5: String,
}

const labels: { [index: string]: string } = {
	0.5: 'Useless',
	1: 'Useless+',
	1.5: 'Poor',
	2: 'Poor+',
	2.5: 'Ok',
	3: 'Ok+',
	3.5: 'Good',
	4: 'Good+',
	4.5: 'Excellent',
	5: 'Excellent+',
};

function getLabelText(value:number ) {
	return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Ratings = () => {
//Execute callback when rating function
const [data, setData] = useState<Number>(3)

let myAlert = (value:Number) => {
    if (value != undefined) {
        alert(`Rating Stage is ${value}`)
    }
    setData(value)
}


const [value, setValue] = React.useState<any>(2);
const [hover, setHover] = React.useState(-1);
    
    return(
  <div>
     <PageHeaders
      title="Rating"
      home="Home"
      name="Apps"
      fonticonsname="Rating"
    />
                        
                        <Row className="row-deck">
                            <Col md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Star Rating
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="rating-stars block" id="rating-1" data-stars="2">
                                            <Rating name="no-value" size="large" value={3} max={5} />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Heart Rating
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="rating-stars block" id="rating-2" data-stars="2">
									<StyledRating name="customized-color" defaultValue={2} icon={<FavoriteIcon fontSize="inherit" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Multi Star Rating
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="rating-stars block" id="rating-3" data-stars="2">
                                            <StyledStarRating name="no-value" size="large" value={3} max={8} />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Multi Heart Rating
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="rating-stars block" id="rating-6" data-stars="2">
									<StyledheartRating name="no-value" size="large" value={3} max={8} icon={<FavoriteIcon fontSize="inherit" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Multi circle Rating
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="rating-stars block" id="rating-4" data-stars="2">
									<Rating name="no-value" size="large" value={3} max={8} icon={<CircleIcon fontSize="inherit" />} emptyIcon={<CircleIcon fontSize="inherit" />} />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Thumbs-up Rating
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="rating-stars block" id="rating-5" data-stars="2">
									<Rating name="no-value" size="large" value={3} max={5} icon={<ThumbUpIcon fontSize="inherit" />} emptyIcon={<ThumbUpIcon fontSize="inherit" />} />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Basic Star Rating
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="rating-stars block my-rating">
                                        <Stack spacing={1} className="rating-stars block my-rating ratingcenter">
								<Rating name="half-rating" value={3} precision={0.5} size="large" icon={<StarRateIcon fontSize="inherit" />} emptyIcon={<StarRateIcon fontSize="inherit" />} />
							</Stack>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Rounded star Rating
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="rating-stars block my-rating-4" data-rating="2.5">
                                        <Stack spacing={1} className="rating-stars  block my-rating-4">
								<Rating name="half-rating" value={3} precision={0.5} size="large" icon={<StarsIcon fontSize="inherit" />} emptyIcon={<StarsIcon fontSize="inherit" />} />
							</Stack>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                             gradients Rating
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="rating-stars block my-rating-5" data-stars="2">
                                            <Rating name="no-value" size="large" value={3} max={5} />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Execute callback when rating
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="rating-stars block my-rating-6"   data-stars="2">
                                            <Rating name="no-value" size="large" value={Number(data)} max={5} onChange={(ele:any) => { myAlert(ele.target.value) }}  />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            read only mode
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="rating-stars block my-rating-7"  data-stars="2">
                                        <Stack spacing={1} className="rating-stars block my-rating-7">
								<Rating name="half-rating-read" value={3} max={5} size="large" readOnly />
							</Stack>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                        On hover event
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="rating-stars block my-rating-8" data-stars="2">
									<Rating name="hover-feedback" value={value} precision={0.5} getLabelText={getLabelText} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
										onChange={(event, newValue) => {
											setValue(newValue);
										}}
										onChangeActive={(event, newHover) => {
											setHover(newHover);
										}}
									/>
                                    {value !== null && (
                                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                        )}
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            
                        </Row>
  </div>
);
}
Ratings.propTypes = {};

Ratings.defaultProps = {};

export default Ratings;
