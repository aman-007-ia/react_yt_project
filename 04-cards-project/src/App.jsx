import Card from './components/Card';

const App = () => {
  const jobOpenings = [
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq1-rUuRFvy3mZ29s_BxzGfMqk76z-KtnsA&s",
    nameOfCompany: "Google",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$72/hour",
    location: "Bangalore, India",
  },
  {
    brandlogo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/microsoft-icon.png",
    nameOfCompany: "Microsoft",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Hyderabad, India",
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    nameOfCompany: "Amazon",
    datePosted: "5 days ago",
    post: "SDE II",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hour",
    location: "Mumbai, India",
  },
  {
    brandlogo: "https://cdn-icons-png.flaticon.com/256/6033/6033716.png",
    nameOfCompany: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Delhi, India",
  },
  {
    brandlogo: "https://cdn-icons-png.flaticon.com/256/0/747.png",
    nameOfCompany: "Apple",
    datePosted: "4 days ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$92/hour",
    location: "Pune, India",
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/500px-Netflix_icon.svg.png?_=20220806170125",
    nameOfCompany: "Netflix",
    datePosted: "10 days ago",
    post: "Platform Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$110/hour",
    location: "Chennai, India",
  },
  {
    brandlogo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-icon.png",
    nameOfCompany: "Adobe",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Noida, India",
  },
  {
    brandlogo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/uber-icon.png",
    nameOfCompany: "Uber",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$58/hour",
    location: "Bangalore, India",
  },
  {
    brandlogo: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png",
    nameOfCompany: "LinkedIn",
    datePosted: "1 day ago",
    post: "Node.js Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$76/hour",
    location: "Gurgaon, India",
  },
  {
    brandlogo: "https://iprsoftwaremedia.com/219/files/202512/692f50553d6332b453bbc5c2_nvidia-logo-vert-blk/nvidia-logo-vert-blk_thmb.png",
    nameOfCompany: "NVIDIA",
    datePosted: "2 months ago",
    post: "AI Software Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$120/hour",
    location: "Hyderabad, India",
  },
];
  return (
    <div className="parent">
      {jobOpenings.map(function (job,index) {
        return <div key={index}><Card {...job} /></div>;
      })}
    </div>
  )
}

export default App