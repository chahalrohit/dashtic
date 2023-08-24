
import React from 'react';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Link } from 'react-router-dom';


//Picture
import photo1 from "../../../assets/images/photos/1.jpg"
import photo2 from "../../../assets/images/photos/13.jpg"
import photo3 from "../../../assets/images/photos/3.jpg"
import photo4 from "../../../assets/images/photos/4.jpg"
import photo5 from "../../../assets/images/photos/5.jpg"
import photo6 from "../../../assets/images/photos/6.jpg"
import photo7 from "../../../assets/images/photos/7.jpg"
import photo8 from "../../../assets/images/photos/8.jpg"
import photo9 from "../../../assets/images/photos/9.jpg"
import photo10 from "../../../assets/images/photos/10.jpg"
import photo11 from "../../../assets/images/photos/11.jpg"
import photo12 from "../../../assets/images/photos/14.jpg"


const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12,];

interface LightGalleryState {
    photoIndex: number;
    isOpen: boolean;
  }
  


export class LightGallery extends React.Component<{}, LightGalleryState> {
    constructor(props: any) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }
    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <>


                <ul id="lightgallery" className="list-unstyled row">
                    <li className="col-xs-6 col-sm-4 col-md-3" data-responsive="../assets/images/photos/1.jpg" data-src="../assets/images/photos/1.jpg" data-sub-html="<h4>Gallery Image 1</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
                        <Link to="#">
                            <img className="img-responsive br-5" onClick={() => this.setState({ isOpen: true })} src={photo1} alt="Thumb-1" />
                        </Link>
                    </li>
                    <li className="col-xs-6 col-sm-4 col-md-3" data-responsive="../assets/images/photos/13.jpg" data-src="../assets/images/photos/13.jpg" data-sub-html="<h4>Gallery Image 2</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
                        <Link to="#">
                            <img className="img-responsive br-5" onClick={() => this.setState({ isOpen: true })} src={photo2} alt="Thumb-2" />
                        </Link>
                    </li>
                    <li className="col-xs-6 col-sm-4 col-md-3" data-responsive="../assets/images/photos/3.jpg" data-src="../assets/images/photos/3.jpg" data-sub-html="<h4>Gallery Image 3</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
                        <Link to="#">
                            <img className="img-responsive br-5" onClick={() => this.setState({ isOpen: true })} src={photo3} alt="Thumb-1" />
                        </Link>
                    </li>
                    <li className="col-xs-6 col-sm-4 col-md-3" data-responsive="../assets/images/photos/4.jpg" data-src="../assets/images/photos/4.jpg" data-sub-html=" <h4>Gallery Image 4</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
                        <Link to="#">
                            <img className="img-responsive br-5" onClick={() => this.setState({ isOpen: true })} src={photo4} alt="Thumb-2" />
                        </Link>
                    </li>
                    <li className="col-xs-6 col-sm-4 col-md-3" data-responsive="../assets/images/photos/5.jpg" data-src="../assets/images/photos/5.jpg" data-sub-html="<h4>Gallery Image 5</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
                        <Link to="#">
                            <img className="img-responsive br-5" onClick={() => this.setState({ isOpen: true })} src={photo5} alt="Thumb-1" />
                        </Link>
                    </li>
                    <li className="col-xs-6 col-sm-4 col-md-3" data-responsive="../assets/images/photos/6.jpg" data-src="../assets/images/photos/6.jpg" data-sub-html="<h4>Gallery Image 6</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
                        <Link to="#">
                            <img className="img-responsive br-5" onClick={() => this.setState({ isOpen: true })} src={photo6} alt="Thumb-2" />
                        </Link>
                    </li>
                    <li className="col-xs-6 col-sm-4 col-md-3" data-responsive="../assets/images/photos/7.jpg" data-src="../assets/images/photos/7.jpg" data-sub-html="<h4>Gallery Image 7</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
                        <Link to="#">
                            <img className="img-responsive br-5" onClick={() => this.setState({ isOpen: true })} src={photo7} alt="Thumb-1" />
                        </Link>
                    </li>
                    <li className="col-xs-6 col-sm-4 col-md-3" data-responsive="../assets/images/photos/8.jpg" data-src="../assets/images/photos/8.jpg" data-sub-html="<h4>Gallery Image 8</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
                        <Link to="#">
                            <img className="img-responsive br-5" onClick={() => this.setState({ isOpen: true })} src={photo8} alt="Thumb-2" />
                        </Link>
                    </li>
                    <li className="col-xs-6 col-sm-4 col-md-3" data-responsive="../assets/images/photos/9.jpg" data-src="../assets/images/photos/9.jpg" data-sub-html="<h4>Gallery Image 9</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
                        <Link to="#">
                            <img className="img-responsive br-5" onClick={() => this.setState({ isOpen: true })} src={photo9} alt="Thumb-1" />
                        </Link>
                    </li>
                    <li className="col-xs-6 col-sm-4 col-md-3" data-responsive="../assets/images/photos/10.jpg" data-src="../assets/images/photos/10.jpg" data-sub-html="<h4>Gallery Image 10</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
                        <Link to="#">
                            <img className="img-responsive br-5" onClick={() => this.setState({ isOpen: true })} src={photo10} alt="Thumb-2" />
                        </Link>
                    </li>
                    <li className="col-xs-6 col-sm-4 col-md-3" data-responsive="../assets/images/photos/11.jpg" data-src="../assets/images/photos/11.jpg" data-sub-html="<h4>Gallery Image 11</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
                        <Link to="#">
                            <img className="img-responsive br-5" onClick={() => this.setState({ isOpen: true })} src={photo11} alt="Thumb-1" />
                        </Link>
                    </li>
                    <li className="col-xs-6 col-sm-4 col-md-3" data-responsive="../assets/images/photos/14.jpg" data-src="../assets/images/photos/14.jpg" data-sub-html="<h4>Gallery Image 12</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
                        <Link to="#">
                            <img className="img-responsive br-5" onClick={() => this.setState({ isOpen: true })} src={photo12} alt="Thumb-2" />
                        </Link>
                    </li>
                </ul>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </>
        );
    }
}