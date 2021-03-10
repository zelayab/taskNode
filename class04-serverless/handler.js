/* create a handler with the serverless-offline to create a transaction who gets the result from amount USD and AR together.
/* Use postman to check the GET/POST.



module.exports.main = (event, context, callback) => {

  //destructuring to transaction and parse the JSON
  let {transaction} = JSON.parse(event.body);
  
  if ( transaction === undefined || transaction === null){
    const response = {
    statusCode: 400,
    body: JSON.stringify({
      message:("Bad Request error")
    })
  };
  return callback(null,response);
  } else {
  //definir ARS y USD
  let argMoney =  0;
  let usaMoney = 0;
  };
  //if transaction it's equal to status succeeded
  const stat = transaction.filter(transaction => transaction.status === "succeeded");

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, the current time is ${}.`,
    }),
  };


  callback(null, response);
};
