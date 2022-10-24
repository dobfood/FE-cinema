/**
 * inspiration repo: https://github.com/bradtraversy/vanillawebprojects
 * movie seat booking: https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking
 * but in react 🤓
 */

import "./seat.css";
import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

const movies = [
  {
    name: "Avenger",
    price: 70,
    occupied: [20, 21, 30, 1, 2, 8 ,60,75,49,59,75,76],
  },
  {
    name: "Joker",
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: "Toy story",
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: "the lion king",
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
  },
];

const seats = Array.from({ length: 7 * 5 }, (_, i) => i);

export default function Seat() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isSelectedSeat, setIsSelectedSeat] = useState(false);
  function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
    function handleSelectedState(seat) {
      const isSelected = selectedSeats.includes(seat);
      if (isSelected) {
        onSelectedSeatsChange(
          selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
        );
        setIsSelectedSeat(false);
      } else {
        onSelectedSeatsChange([...selectedSeats, seat]);
        setIsSelectedSeat(true);
      }
    }
    
    return (
      <div className="Cinema">
        <div className="screen">
          <span className="text">Màn hình chiếu</span>
        </div>
        <div className="seats">
          {seats.map((seat, key) => {
            const isSelected = selectedSeats.includes(seat);
            const isOccupied = movie.occupied.includes(seat);
            return (
              <div>
                <span
                  tabIndex="0"
                  key={seat}
                  className={clsx(
                    "seat",
                    isSelected && "selected", 
                    isOccupied && "occupied"
                  )}
                  onClick={isOccupied ? null : () => handleSelectedState(seat)}
                  onKeyPress={
                    isOccupied
                      ? null
                      : (e) => {
                          if (e.key === "Enter") {
                            handleSelectedState(seat);
                          }
                        }
                  }
                >
                  {key + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      {/* <Movies
        movie={selectedMovie}
        onChange={(movie) => {
          setSelectedSeats([]);
          setSelectedMovie(movie);
        }}
      /> */}
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats) =>
          setSelectedSeats(selectedSeats)
        }
      />

      <p className="info text-lg" style={{ marginBottom: 20 }}>
        Bạn đã chọn <span className="count">{selectedSeats.length}</span> ghế và
        tổng tiền cần thanh toán là{" "}
        <span className="total ">
          {selectedSeats.length * selectedMovie.price }{isSelectedSeat ? '.000':''} VND
        </span>
        {isSelectedSeat ? (
          <Link to='/mua-ve/thanh-toan'>
            <button
            style={{ marginLeft: 10 }}
            type="button"
            className="text-lg bg-green-600 hover:bg-green-600 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none"
          >
            Thanh toán
          </button>
          </Link>
        ) : (
          <button
            style={{ marginLeft: 10 }}
            disabled
            type="button"
            className="text-lg bg-gray-500  py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none"
          >
           Thanh toán
          </button>
        )}
      </p>
    </div>
  );
}

// function Movies({ movie, onChange }) {
//   return (
//     <div className="Movies">
//       <label htmlFor="movie">Pick a movie</label>
//       <select
//         id="movie"
//         value={movie.name}
//         onChange={(e) => {
//           onChange(movies.find((movie) => movie.name === e.target.value));
//         }}
//       >
//         {movies.map((movie) => (
//           <option key={movie.name} value={movie.name}>
//             {movie.name} (${movie.price})
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>Có thể chọn</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Ghế đang chọn</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Ghế đã bán</small>
      </li>
    </ul>
  );
}
