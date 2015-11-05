/**
 * Created by berredo on 11/5/15.
 */

function getRandomText(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function getW3CDate(date) {
    var yyyy = date.getUTCFullYear();
    var mm = (date.getUTCMonth() + 1);
    if (mm < 10) mm = "0" + mm;
    var dd = (date.getUTCDate());
    if (dd < 10) dd = "0" + dd;
    var hh = (date.getUTCHours());
    if (hh < 10) hh = "0" + hh;
    var mn = (date.getUTCMinutes());
    if (mn < 10) mn = "0" + mn;
    var ss = (date.getUTCSeconds());
    if (ss < 10) ss = "0" + ss;
    return yyyy + "-" + mm + "-" + dd + "T" + hh + ":" + mn + ":" + ss + "Z";
}