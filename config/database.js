const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shaluverma13:shaluverma13@cluster0.1j2uh1c.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

