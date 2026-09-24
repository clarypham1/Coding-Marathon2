import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = ({ signupSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

   const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    setError(null);

      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, email, password, phone_number: phoneNumber, }),
    });

    if (response.ok) {
        setError(user.error);
        return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    console.log("User signed up successfully:", user);
    navigate("/");
  };

  return (
    <div className= "create">
        <h2>SIGN UP</h2>
        <form onSubmit={submitForm}> 
            <label> Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
             <label> Email: </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label> Password: </label>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label> Phone Number: </label>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            <button type="submit"> SIGN UP  </button>
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  );
};

export default Signup;