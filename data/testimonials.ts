export type Testimonial = {
  name: string;
  img: string;
  stars: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sara Mohamed",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    stars: 5,
    text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly and I appreciate the detailed information and real-time availability of hotels.",
  },
  {
    name: "Ahmed Khan",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    stars: 5,
    text: "Parwaaz transformed our hiring process. Their international recruitment expertise and dedication to quality candidates is unmatched. The team is professional, responsive, and truly understands our business needs.",
  },
  {
    name: "Fatima Hassan",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
    stars: 5,
    text: "The Coursera partnership opened up incredible learning opportunities for our team. World-class courses combined with personalized guidance made all the difference in our professional development journey.",
  },
  {
    name: "Bilal Ahmad",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    stars: 5,
    text: "Outstanding service and remarkable attention to detail. Parwaaz delivered exactly what they promised, on time and within budget. I highly recommend them for any digital transformation initiative.",
  },
];