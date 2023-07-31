module.exports = function toReadable(number) {

    function firstNumb(firstNumber) {
        switch (firstNumber) {
            case 0:
                return "zero"
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine"

        }
    }

    function firstTen(tenNumber) {
        switch (tenNumber) {
            case 10:
                return "ten";
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 14:
                return "fourteen";
            case 15:
                return "fifteen";
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen'
        }
    }

    function tens(tensNumb) {
        switch (tensNumb) {
            case 2:
                return "twenty";
            case 3:
                return "thirty";
            case 4:
                return "forty";
            case 5:
                return "fifty";
            case 6:
                return "sixty";
            case 7:
                return "seventy";
            case 8:
                return 'eighty';
            case 9:
                return 'ninety';
        }
    }

    let str;
    let checkNumb = number.toString().split('');

    if (checkNumb.length < 2) return firstNumb(parseInt(checkNumb));
    
    if (checkNumb.length < 3) {
        if (checkNumb[0] < 2) return firstTen(parseInt(checkNumb.join('')));
        if (checkNumb[0] > 1) {
            if (checkNumb[1] === "0") return tens(parseInt(checkNumb[0]));
            str = tens(parseInt(checkNumb[0])) + " " + firstNumb(parseInt(checkNumb[1]));
            return str;
        }
    }

    if (checkNumb.length < 4) {
        if (checkNumb[1] < 1) {
            if (checkNumb[2] === "0") return firstNumb(parseInt(checkNumb[0])) + " hundred";
            str = firstNumb(parseInt(checkNumb[0])) + " hundred " + firstNumb(parseInt(checkNumb[2]));
            return str
        }
        if (checkNumb[1] < 2) {
            str = firstNumb(parseInt(checkNumb[0])) + " hundred " + firstTen(parseInt(checkNumb[1] + checkNumb[2]));
            return str
        }
        if (checkNumb[1] > 1) {
            if (checkNumb[2] === "0") return firstNumb(parseInt(checkNumb[0])) + " hundred " + tens(parseInt(checkNumb[1]));
            str = firstNumb(parseInt(checkNumb[0])) + " hundred " + tens(parseInt(checkNumb[1])) + " " + firstNumb(parseInt(checkNumb[2]));
            return str;
        }
    }
}
