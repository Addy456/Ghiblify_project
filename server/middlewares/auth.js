import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized. Login Again' });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            req.userId = tokenDecode.id; 
            next();
        } else {
            return res.json({ success: false, message: 'Invalid Token. Login Again' });
        }
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export default userAuth
