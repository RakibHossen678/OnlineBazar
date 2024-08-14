import toast from "react-hot-toast"; // Importing the toast notification library
import "./NewsLetter.css"; // Importing the stylesheet for the component

const NewsLetter = () => {
  // Function to validate email using a regular expression
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return regex.test(email); // Returns true if the email matches the pattern, false otherwise
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    const email = e.target.email.value; // Gets the value of the email input field
    console.log(email); // Logs the email to the console (for debugging purposes)
    if (validateEmail(email)) {
      // Checks if the email is valid
      e.target.reset(); // Resets the form input
      toast.success("Email successfully submitted"); // Displays a success toast notification
    } else {
      toast.error("Please enter a valid email address."); // Displays an error toast notification
    }
  };

  // JSX structure for the newsletter subscription section
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
