// look at the expected var below to compare what you are supposed to get
function textNormalizer(text) {
    // trim means to remove white spaces on either end of the string
    var output = text.toLowerCase().trim();
    //the value of this console log is going to be similar with the expected variable bellow
    console.log(output);
    return output;
}


/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/



// tests

function testTextNormalizer() {
    var text = "   let's GO SURFING NOW everyone is learning how   ";
    var expected = "let's go surfing now everyone is learning how";
    if (textNormalizer(text) === expected) {
        console.log('SUCCESS: `textNormalizer` is working');
    } else {
        console.log('FAILURE: `textNormalizer` is not working');
    }
}

testTextNormalizer();
