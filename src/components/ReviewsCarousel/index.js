import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  onRight = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  onLeft = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const reviewsDetails = reviewsList[index]

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="main-heading">Reviews</h1>
          <div className="content-container">
            <button
              type="button"
              className="arrow-buttons"
              onClick={this.onLeft}
              testid="leftArrow"
            >
              <img
                alt=" left arrow"
                className="arrow-image"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
            <div className="profile-card">
              <img src={reviewsDetails.imgUrl} alt={reviewsDetails.username} />
              <p className="profile-name">{reviewsDetails.username}</p>
              <p className="profile-company-desc">
                {reviewsDetails.companyName}
              </p>
              <p className="profile-company-desc">
                {reviewsDetails.description}
              </p>
            </div>
            <button
              type="button"
              className="arrow-buttons"
              onClick={this.onRight}
              testid="rightArrow"
            >
              <img
                alt=" right arrow"
                className="arrow-image"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
