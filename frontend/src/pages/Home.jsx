import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "./../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImageGallery from "../components/image-gallery/MasonryImageGallery";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Experience the world through our extensive tours, allowing you
                  to immerse yourself in the diverse cultures, traditions, and
                  customs of our beautiful cities.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* Services section */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h5 className="services__title">We offer our best services</h5>
            </Col>

            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* Featured section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle Subtitle={"Explore"} />
              <h2 className="featured__tour-title">
                Discover the world's top destinations with our exclusive travel packages
              </h2>
            </Col>

            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* Experience section */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle Subtitle={"Experience"} />
                <h2>
                  With our all experience
                  <br />
                  we will serve you the best
                </h2>
                <p>
                  We offer a wide range of travel packages to suit your needs
                  and preferences, ensuring that you have the best experience
                  possible while exploring the world.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trips</h6>
                </div>

                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>

                <div className="counter__box">
                  <span>15</span>
                  <h6>Years of experience</h6>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Explore the world through our eyes
              </h2>
            </Col>

            <Col lg="12">
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Testimonials"} />
              <h2 className="testimonial__title">
                What our clients say about us
              </h2>
            </Col>

            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
