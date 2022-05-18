var mongoose = require("mongoose"); //inyección de dependencia
require("dotenv").config();
(async () => {
  try {
    const db = await mongoose.connect( //Nos conectamos a la base de datos que creamos utilizando mongodb 
      "mongodb+srv://karla:123@cluster0.p9dla.mongodb.net/?retryWrites=true&w=majority", //Este es el link que nos proporcionó mongodb Atlas para poder conectarnos a la base de datos que creamos 
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("La base de datos está conectada", db.connection.host);
  } catch (error) { 
    console.error(error); //En caso de que haya un error nos lo va a mostrar en consola
  }
})();