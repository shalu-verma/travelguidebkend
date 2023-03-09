const mongoose = require("mongoose");
const Hotel = require("../config/Hotel");

const hotels = [
  {
    src: "/img/Bookings/hotel1.jpg",
    cardtitle: "Make My Trip",
    cardtext: "Get best deals on hotels from Make My Trip",
    link: "https://www.makemytrip.com/hotels/",
  },
  {
    src: "/img/Bookings/hotel2.jpg",
    cardtitle: "Booking.com",
    cardtext: "Get best deals on hotels from Booking.com",
    link:
      "https://www.booking.com/",
  },
  {
    src: "/img/Bookings/hotel3.jpg",
    cardtitle: "Trivago",
    cardtext: "Get best deals on hotels from Trivago",
    link:
      "https://www.trivago.in/",
  },
  {
    src: "/img/Bookings/hotel4.jpg",
    cardtitle: "Goibibo",
    cardtext: "Get best deals on hotels from Goibibo",
    link:
      "https://www.goibibo.com/hotels/",
  },
  {
    src: "/img/Bookings/hotel5.jpg",
    cardtitle: "OYO Rooms",
    cardtext: "Get best deals on from OYO Rooms",
    link: "https://www.oyorooms.com/",
  },
  {
    src: "/img/Bookings/hotel6.jpg",
    cardtitle: "Yatra",
    cardtext: "Get best deals on hotels from Yatra",
    link: "https://www.yatra.com/hotels/",
  },
];

mongoose
  .connect(
    "mongodb+srv://shaluverma13:shaluverma13@cluster0.1j2uh1c.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => insertSeeds())
  .catch((err) => console.log(err));

const insertSeeds = () => {
  console.log("Reset");

  Hotel.insertMany(hotels)
    .then(() => {
      console.log("Done!");
      mongoose.disconnect();
    })
    .catch((err) => {
      console.error(err.stack);
      process.exit(1);
    });
};
