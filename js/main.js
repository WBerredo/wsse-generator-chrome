/**
 * Created by berredo on 11/5/15.
 */
var b64pad = "=";
var randomLength = 10;

var inputs = ['username', 'password', 'created', 'nonce'];
var username = document.getElementById('username');
var password = document.getElementById('password');
var created = document.getElementById('created');
var nonce = document.getElementById('nonce');

var checks = ['autodate', 'autononce'];
var autodate = document.getElementById('autodate');
var autononce = document.getElementById('autononce');

var result = document.getElementById('result');
clipResult = new Clipboard('#generateBtn');

document.addEventListener('DOMContentLoaded', function () {
    getLastData();

    // save last data on inputs
    inputs.forEach(function (input) {
        var inputElement = window[input];

        inputElement.addEventListener('change', function () {
            saveLastData(event)
        });
    });

    // save last data on checkboxes
    checks.forEach(function (check) {
        var checkElement = window[check];

        checkElement.addEventListener('change', function () {
            saveLastData(event);
        });
    });


    // generate a header
    document.getElementById('generateBtn').addEventListener('click', function generate() {
        var changeEvt = document.createEvent("HTMLEvents");
        changeEvt.initEvent("change", false, true);

        if (autononce.checked) {
            nonce.value = getRandomText(randomLength);
            nonce.dispatchEvent(changeEvt);
        }

        if (autodate.checked) {
            created.value = getW3CDate(new Date());
            created.dispatchEvent(changeEvt);
        }

        var encodedNonce = base64encode(nonce.value);
        var passwordDigest = b64_sha1(nonce.value + created.value + password.value);

        result.value = "X-WSSE: UsernameToken Username=\""
            + username.value + "\", PasswordDigest=\""
            + passwordDigest + "\", Nonce=\""
            + encodedNonce + "\", Created=\""
            + created.value + "\"\n";
    });

});

function getLastData() {
    inputs.forEach(function (input) {
        var inputElement = window[input];

        if (localStorage[input]) {
            inputElement.value = localStorage[input];
        }
    });

    checks.forEach(function (check) {
        var checkElement = window[check];

        if (localStorage[check] == "true") {
            checkElement.checked = true;
        }
    });
}

function saveLastData(e) {
    if (e.srcElement.value) {
        var value;

        if (e.srcElement.type == 'text' || e.srcElement.type == 'password') {
            value = e.srcElement.value;
        } else if (e.srcElement.type == 'checkbox') {
            value = e.srcElement.checked;
        }
        localStorage[e.srcElement.id] = value;
    }
}
