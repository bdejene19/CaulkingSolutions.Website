import React from 'react'
import Section from '../Section'
import Review from './Review';

interface ReviewDto {
    name: string;
    rating: number;
    description: string;
}

const reviews: ReviewDto[] = [];
const ReviewContent = () => {
  return (
    <Section title='Reviews'>
        {reviews.map((review, index) => <Review key={`review-${index}`}/>)}
    </Section>
  )
}

export default ReviewContent