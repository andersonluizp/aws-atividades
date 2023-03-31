"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const soap_1 = require("soap");
const url = 'https://www.crcind.com/csp/samples/SOAP.Demo.cls?WSDL';
const addIntegerArgs = { Arg1: 1, Arg2: 2 };
const divideIntegerArgs = { Arg1: 25, Arg2: 5 };
const lookupCityArgs = { zip: '90210' };
(0, soap_1.createClient)(url, (err, client) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    client.AddInteger(addIntegerArgs, (err, result) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Resultado do AddInteger: ${result.AddIntegerResult}`);
    });
    client.DivideInteger(divideIntegerArgs, (err, result) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Resultado do DivideInteger: ${result.DivideIntegerResult}`);
    });
    client.LookupCity(lookupCityArgs, (err, result) => {
        console.log(`Resultado do LookupCity: ${result.LookupCityResult.City}`);
    });
});
//# sourceMappingURL=index.js.map