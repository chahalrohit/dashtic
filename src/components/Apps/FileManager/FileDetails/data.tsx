import React, { Component } from "react"
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import photo1 from "../../../../assets/images/photos/1.jpg"
import photo2 from "../../../../assets/images/photos/7.jpg"
import photo3 from "../../../../assets/images/photos/3.jpg"
import photo4 from "../../../../assets/images/photos/4.jpg"
import photo5 from "../../../../assets/images/photos/5.jpg"
import photo6 from "../../../../assets/images/photos/6.jpg"
import photo7 from "../../../../assets/images/photos/7.jpg"
import photo8 from "../../../../assets/images/photos/8.jpg"

interface IState {
  photoIndex: number;
  isOpen: boolean;
}

export const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  arrows: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 3000,
        autoplay: true
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 3000,
        autoplay: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        speed: 3000,
        autoplay: true
      }
    }
  ]

};
const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8,];

export class LightGallery extends Component<{}, IState> {
  constructor(props: {}) {
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

        <ul id="lightgallery" className="list-unstyled row mb-0">
          <li
            className="col-xs-6 col-sm-4 col-md-4 col-xl-3  border-bottom-0"
            data-sub-html="<h4>Gallery Image 1</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
          >
            <a href="#">
              <img
                onClick={() => this.setState({ isOpen: true })}
                className="img-responsive br-5"
                src={photo1}
                alt="Thumb-1"
              />
            </a>
          </li>
          <li
            className="col-xs-6 col-sm-4 col-md-4 col-xl-3  border-bottom-0"
            data-sub-html="<h4>Gallery Image 2</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
          >
            <a href="#">
              <img
                onClick={() => this.setState({ isOpen: true })}
                className="img-responsive br-5"
                src={photo2}
                alt="Thumb-2"
              />
            </a>
          </li>
          <li
            className="col-xs-6 col-sm-4 col-md-4 col-xl-3  border-bottom-0"
            data-sub-html="<h4>Gallery Image 3</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
          >
            <a href="#">
              <img
                onClick={() => this.setState({ isOpen: true })}
                className="img-responsive br-5"
                src={photo3}
                alt="Thumb-1"
              />
            </a>
          </li>
          <li
            className="col-xs-6 col-sm-4 col-md-4 col-xl-3  border-bottom-0"
            data-sub-html=" <h4>Gallery Image 4</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
          >
            <a href="#">
              <img
                onClick={() => this.setState({ isOpen: true })}
                className="img-responsive br-5"
                src={photo4}
                alt="Thumb-2"
              />
            </a>
          </li>
          <li
            className="col-xs-6 col-sm-4 col-md-4 col-xl-3  border-bottom-0"
            data-sub-html="<h4>Gallery Image 5</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
          >
            <a href="#">
              <img
                onClick={() => this.setState({ isOpen: true })}
                className="img-responsive br-5"
                src={photo5}
                alt="Thumb-1"
              />
            </a>
          </li>
          <li
            className="col-xs-6 col-sm-4 col-md-4 col-xl-3  border-bottom-0"
            data-sub-html="<h4>Gallery Image 6</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
          >
            <a href="#">
              <img
                onClick={() => this.setState({ isOpen: true })}
                className="img-responsive br-5"
                src={photo6}
                alt="Thumb-2"
              />
            </a>
          </li>
          <li
            className="col-xs-6 col-sm-4 col-md-4 col-xl-3  border-bottom-0"
            data-sub-html="<h4>Gallery Image 5</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
          >
            <a href="#">
              <img
                onClick={() => this.setState({ isOpen: true })}
                className="img-responsive br-5"
                src={photo7}
                alt="Thumb-1"
              />
            </a>
          </li>
          <li
            className="col-xs-6 col-sm-4 col-md-4 col-xl-3  border-bottom-0"
            data-sub-html="<h4>Gallery Image 6</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>"
          >
            <a href="#">
              <img
                onClick={() => this.setState({ isOpen: true })}
                className="img-responsive br-5"
                src={photo8}
                alt="Thumb-2"
              />
            </a>
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