import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <>
      <style>{`
        .reservation {
          background: #fff8f3;
          padding: 4rem 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          gap: 3rem;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
        .banner.image {
          flex: 1;
          min-width: 300px;
        }
        .banner.image img {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(226, 88, 34, 0.25);
          object-fit: cover;
          height: 100%;
        }
        .banner.form {
          flex: 1;
          min-width: 320px;
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(226, 88, 34, 0.15);
        }
        .banner.form h1 {
          color: #e25822;
          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 0.25rem;
        }
        .banner.form p {
          margin-bottom: 1.8rem;
          font-size: 1rem;
          color: #555;
        }
        form div {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        input[type="text"],
        input[type="email"],
        input[type="date"],
        input[type="time"],
        input[type="tel"] {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 1.5px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="date"]:focus,
        input[type="time"]:focus,
        input[type="tel"]:focus {
          outline: none;
          border-color: #e25822;
          box-shadow: 0 0 8px rgba(226, 88, 34, 0.3);
        }
        button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #e25822;
          color: white;
          font-weight: 700;
          padding: 0.85rem 1.8rem;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.3s ease;
          user-select: none;
        }
        button:hover {
          background: #c84612;
        }
        button span {
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
          form div {
            flex-direction: column;
          }
          input[type="text"],
          input[type="email"],
          input[type="date"],
          input[type="time"],
          input[type="tel"] {
            flex: unset;
            width: 100%;
          }
        }
      `}</style>

      <section className="reservation" id="reservation">
        <div className="container">
          <div className="banner image">
            <img src="/reservation.png" alt="Reservation" />
          </div>
          <div className="banner form">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button type="submit">
                RESERVE NOW <span><HiOutlineArrowNarrowRight /></span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
