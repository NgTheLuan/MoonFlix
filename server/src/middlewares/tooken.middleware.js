import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler";
import userModel from "../models/user.model";

const decodeToken = (req) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];

      return jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
    }
    return -1;
  } catch (error) {
    return -1;
  }
};

const auth = async (res, req, next) => {
  const tokenDecoded = tokenDecoded(req);

  if (!tokenDecoded) return responseHandler.unAuthorize(res);

  const user = await userModel.findById(tokenDecoded.data);

  if (!user) return responseHandler.unAuthorize(res);

  req.user = user;

  next();
};

export default { decodeToken, auth };
