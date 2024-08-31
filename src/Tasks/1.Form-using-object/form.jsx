import { useState } from "react";
import { toast } from "react-toastify";
import { BackgroundContainer, Button, LoginFormData, Span } from "./form.Styles";

const TodoApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    url: "",
    password: "",
    state : "",
    address : "",
  });

  const [submitted, setSubmitted] = useState(false);

  console.log("Submitted:", submitted);
  

  const handleInputChange = (e) => {
    const {name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name] : value,
    }));
  }

  const handleSubmit = () => {
    // console.log("Form Submitted Successfully:", formData);
    const {name, email, password} = formData;
    if(!name || !email || !password) {
      toast.error("Fill the mandatory fields");
      return;
    }

    setSubmitted(true)
    toast.success("Submit Successfully");
  }

  return (
   <BackgroundContainer>

   <LoginFormData>
      <p>Name <Span>*</Span></p>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleInputChange}
        value={formData.name}
      />

      <p>Email <Span>*</Span></p>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
        value={formData.email}
      />

      <p>Mobile Number</p>
      <input
        type="tel"
        name="mobileNumber"
        placeholder="Mobile NUmber"
        onChange={handleInputChange}
        value={formData.mobileNumber}
      />

      <p>Url</p>
      <input
        type="url"
        name="url"
        placeholder="Url"
        onChange={handleInputChange}
        value={formData.url}
      />

      <p>Password <Span>*</Span></p>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
        value={formData.password}
      />

      <p>State</p>
      <select
       name="state"
       value={formData.select}
       onChange={handleInputChange}>
        <option value="A.P.">A.P.</option>
        <option value="Delhi">Delhi</option>
        <option value="M.P.">M.P.</option>
        <option value="U.P.">U.P.</option>
      </select>

      <p>Address</p>
      <textarea
       name="address"
       placeholder="Address" 
       onChange={handleInputChange}
       value={formData.address}></textarea>


       <Button onClick={handleSubmit}>Submit</Button>

    </LoginFormData>
 
   </BackgroundContainer>
  );
};

export default TodoApp;