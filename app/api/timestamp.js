'use strict';
var moment = require('moment')

module.exports = function(app) {
    app.get('/:query', function(req, res){
        var date = req.params.query
        var natural = null
        var unix = null
        
        if (isNaN(date[0]))
          natural = date
        else
          unix = date
        
        if (natural === date) {
            unix = new Date(date).getTime() / 1000;
            var dateObj = { "unix": unix, "natural": natural }
            res.send(JSON.stringify(dateObj))
        } else {
            natural = moment.unix(date).format("MMMM D YYYY");
            var dateObj = { "unix": unix, "natural": natural }
            res.send(JSON.stringify(dateObj))
        }
          
        
        
        
    })
}
        

    //     var unix = null
    //     var natural = null
        
    // // check for initial unix time
    // if (+date >= 0) {
    //     unix = +date;
    //     natural = unixToNat(unix)
    // }
    
    // // check for initial natural time
    // if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
    //     unix = natToUnix(date)
    //     natural = unixToNat(unix)
    // }
    
    // var dateObj = { "unix": unix, "natural": natural }
    // res.send(JSON.stringify(dateObj))
    
    // })
    
    // function natToUnix(date) {
    //     //Convert from natural date to unix timestamp
    //     return moment(date, "MMMM D, YYYY").format("X")
    // }
    
    // function unixToNat(unix) {
    //     // Convert unix timestamp to natural date
    //     return moment.unix(unix).format("MMMM D, YYYY")
    // }
