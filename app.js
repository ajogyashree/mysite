const express = require('express');
const app = express();
const path = require('path')

app.use(function (req, res, next) {
    res.removeHeader("X-Powered-By");
    next();
});

app.set('etag', 'strong');

app.get('/',(req,res)=>{
    res.set({
        'Content-Type': 'text/html; charset=UTF-8',
        'Content-Security-Policy': "default-src 'self'; script-src 'self' cdnjs.cloudflare.com code.jquery.com stackpath.bootstrapcdn.com; img-src 'self'; style-src 'self' cdnjs.cloudflare.com stackpath.bootstrapcdn.com use.fontawesome.com; font-src 'self' use.fontawesome.com; form-action 'self'",
        'Feature-Policy': "accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'",
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Xss-Protection': '1;mode=block',
    })
    res.sendFile(path.resolve(__dirname ,'me.html'))
})

exports.default = app