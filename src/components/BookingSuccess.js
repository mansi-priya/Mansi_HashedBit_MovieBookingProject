import { useLocation } from "react-router-dom";

function BookingSuccess() {
  const { state } = useLocation();
  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div>
      <h2>Seat Booked Successfully 🎉</h2>
      <p><b>Booking ID:</b> {bookingId}</p>
      <p><b>Name:</b> {state.name}</p>
      <p><b>Email:</b> {state.email}</p>
      <p><b>Mobile:</b> {state.mobile}</p>
    </div>
  );
}

export default BookingSuccess;
