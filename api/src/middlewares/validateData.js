module.exports = (schema) => {
    return (req, res, next) => {
        const validation = schema.validate(req.body, {abortEarly: false});
        if(validation.error) return res.json({ success: false, error: validation.error });
        next(); 
    }
}