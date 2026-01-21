import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const submitForm = (e) => {
    e.preventDefault();
    navigate("/success", { state: form });
  };

  return (
    <form onSubmit={submitForm}>
      <h2>Book Seat</h2>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      /><br /><br />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      /><br /><br />

      <input
        placeholder="Mobile"
        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        required
      /><br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
