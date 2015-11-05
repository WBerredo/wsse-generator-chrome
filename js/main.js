/**
 * Created by berredo on 11/5/15.
 */
var b64pad  = "=";
var randomLength = 10;

var username = document.getElementById('username');
var password = document.getElementById('password');
var created = document.getElementById('created');
var nonce = document.getElementById('nonce');

var autodate = document.getElementById('autodate');
var autononce = document.getElementById('autononce');

var result = document.getElementById('result');

document.getElementById('generateBtn').addEventListener('click', function generate() {
    if (autononce.checked) {
        nonce.value = getRandomText(randomLength);
    }

    if(autodate.checked) {
        created.value = getW3CDate(new Date());
    }

    var encodedNonce = base64encode(nonce.value);
    var passwordDigest = b64_sha1(nonce.value + created.value + password.value);

    result.value = "X-WSSE: UsernameToken Username=\""
        + username.value + "\", PasswordDigest=\""
        + passwordDigest + "\", Nonce=\""
        + encodedNonce + "\", Created=\""
        + created.value + "\"\n";

    saveLastHeader();
});

document.addEventListener('DOMContentLoaded', function () {
    //alert(1);
});

function saveLastHeader() {
    localStorage['username'] = username.value;
    localStorage['password'] = password.value;
    localStorage['created'] = created.value;
    localStorage['nonce'] = nonce.value;

}

