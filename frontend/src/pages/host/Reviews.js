import React from "react";
import { BsStarFill } from "react-icons/bs";
import reviewsImg from "../../assets/images/reviews-graph.png";
import { Form, useLoaderData } from "react-router-dom";
import { createReview, deleteReview, getReviews } from "../../api";
import { formatDate } from "../../utils";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const rating = formData.get('rating');
    const text = formData.get('text');

    const reviewId = formData.get('reviewId');
    const actionType = formData.get('actionType');

    if (actionType === 'delete' && reviewId) {
        const response = await deleteReview(reviewId);
        return response;
    }

    const response = await createReview({ rating, text });
    return response;
};

export const loader = async () => {
    return await getReviews();
};

export default function Reviews() {
    const reviewsData = useLoaderData();

    return (
        <section className="host-reviews container">
            <div className="top-text my-4">
                <h2>Your reviews</h2>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <img
                className="graph img-fluid mb-4"
                src={reviewsImg}
                alt="Review graph"
            />
            <h3>Reviews ({reviewsData.length})</h3>
            {reviewsData.map((review) => (
                <div key={review.id} className="mb-4">
                    <div className="review">
                        {[...Array(review.rating)].map((_, i) => (
                            <BsStarFill className="review-star text-warning" key={i} />
                        ))}
                        <div className="info">
                            <p className="name mb-1">{review.name.split('@')[0]}</p>
                            <p className="date mb-3 text-muted">{formatDate(review.time)}</p>
                        </div>
                        <p>{review.text}</p>
                    </div>
                    <Form method="post">
                        <input type="hidden" name="reviewId" value={review._id} />
                        <input type="hidden" name="actionType" value="delete" />
                        <button type="submit" className="btn btn-danger">Delete</button>
                    </Form>
                    <hr />
                </div>
            ))}

            <h3 className="mt-5">Add a Review</h3>
            <Form method="POST" className="review-form">
                <div className="form-group">
                    <label htmlFor="rating">Rating:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="rating"
                        name="rating"
                        min="1"
                        max="5"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Review:</label>
                    <textarea
                        className="form-control"
                        id="text"
                        name="text"
                        rows="3"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </Form>
        </section>
    );
}
