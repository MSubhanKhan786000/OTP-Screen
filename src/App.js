// Search App Coding # 01
// import React, { useState } from "react";
// const App = () => {
//   const [list, setList] = useState([
//     "Ali",
//     "Usman",
//     "Subhan",
//     "Salman",
//     "Shahrukh",
//     "Areeb",
//   ]);
//   const [result, setResult] = useState("");

//   const searchText = () => {
//     return list.filter((item) =>
//       item.toLowerCase().includes(result.toLowerCase())
//     );
//   };

//   return (
//     <>
//       <h1>Search Name</h1>
//       <input
//         type="text"
//         placeholder="Search Person..."
//         onChange={(e) => setResult(e.target.value)} // Update the result state
//       />
//       <ul>
//         {searchText().map((item) => {
//           return <li>{item}</li>;
//         })}
//       </ul>
//     </>
//   );
// };

// export default App;

import { useState } from "react"; // Importing useState to manage state in React
import "./styles.css"; // Optional: This is for custom styling

export default function App() {
  // OTP state initialized with 4 empty strings (representing the 4 input boxes)
  const [otp, setOtp] = useState(["", "", "", ""]);

  // Function to handle changes in the input fields
  const handleChange = (element, index) => {
    const value = element.value; // Get the current value entered
    const newOtp = [...otp]; // Copy the current OTP array using the spread operator

    // Update the current box with the new value
    newOtp[index] = value;

    // Find the next empty box (empty string in the OTP array)
    const nextEmptyIndex = newOtp.findIndex((item) => item === "");

    // If a number is entered and there is another empty box, focus on the next empty box
    if (value && nextEmptyIndex !== -1) {
      document.getElementById(`otpInput-${nextEmptyIndex}`).focus();
    }

    // Update the OTP state with the new values
    setOtp(newOtp);
  };

  // Function to handle backspace and move back to the previous box
  const handleBackspace = (e, index) => {
    const value = e.target.value;

    // If backspace is pressed and the input box is empty, move to the previous box
    if (e.key === "Backspace" && !value && index > 0) {
      document.getElementById(`otpInput-${index - 1}`).focus(); // Move to the previous input
    }
  };

  return (
    <div className="App">
      <h1>Enter OTP</h1>
      <div>
        {otp.map((_, index) => (
          <input
            key={index}
            id={`otpInput-${index}`}
            type="text"
            maxLength="1" // Limit the input to 1 digit
            value={otp[index]} // The value of the current input box
            onChange={(e) => handleChange(e.target, index)} // Handle change when a number is typed
            onKeyDown={(e) => handleBackspace(e, index)} // Handle backspace for navigation
            style={{
              width: "40px",
              height: "40px",
              margin: "5px",
              textAlign: "center",
              fontSize: "20px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
