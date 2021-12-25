import jsonwebtoken from "jsonwebtoken";
const PRIVATE_KEY = "OwFgZYgS0BGsjcAV9ClNCnGvVj3t0OD9";

const authentication = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.substring(7);
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }

  let decodedToken;

  try {
    decodedToken = jsonwebtoken.verify(token, PRIVATE_KEY);
    //console.log(decodedToken);
  } catch (err) {
    req.isAuth = false;
    console.log(err)
    return next();
  }
  //console.log("TOKEN: " + token);
  req.isAuth = true;
  req.userId = decodedToken.userId;
  req.userRole = decodedToken.userRole;
  next();
};

export default authentication;
