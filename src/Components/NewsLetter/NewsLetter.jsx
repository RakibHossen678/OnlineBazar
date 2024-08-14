import toast from "react-hot-toast";
import "./NewsLetter.css";
const NewsLetter = () => {
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    if (validateEmail(email)) {
      toast.success("Email successfully submitted");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };
  return (
    <section className="news">
      <div className="container">
        <div className="news_row">
          <h1>Newsletter</h1>
          <p>Stay up to date with our latest news and products</p>
          <form onSubmit={handleSubmit} action="">
            <input
              type="email"
              placeholder="Your email address"
              name="email"
              id=""
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
