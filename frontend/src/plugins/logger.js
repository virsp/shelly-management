const inProduction = process.env.NODE_ENV === 'production';

exports.log = (msg) => {
    if(!inProduction) console.log(msg);
}

exports.error = (err) => {
    if(!inProduction) console.log(err)
}
