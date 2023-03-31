import { createClient } from 'soap';

interface AddIntegerInput {
  Arg1: number;
  Arg2: number;
}

interface AddIntegerOutput {
  AddIntegerResult: number;
}

interface DivideIntegerInput {
  Arg1: number;
  Arg2: number;
}

interface DivideIntegerOutput {
  DivideIntegerResult: number;
}

interface LookupCityInput {
  zip: string;
}

interface LookupCityOutput {
  LookupCityResult: {
    City: string;
    State: string;
    Zip: string;
  };
}

const url = 'https://www.crcind.com/csp/samples/SOAP.Demo.cls?WSDL';
const addIntegerArgs: AddIntegerInput = { Arg1: 1, Arg2: 2 };
const divideIntegerArgs: DivideIntegerInput = { Arg1: 25, Arg2: 5 };
const lookupCityArgs: LookupCityInput = { zip: '90210' };

createClient(url, (err, client) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  client.AddInteger(addIntegerArgs, (err, result: AddIntegerOutput) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(`Resultado do AddInteger: ${result.AddIntegerResult}`);
  });

  client.DivideInteger(divideIntegerArgs, (err, result: DivideIntegerOutput) => {
    if(err) {
      console.error(err);
      process.exit(1);
    }

    console.log(`Resultado do DivideInteger: ${result.DivideIntegerResult}`);
  });

  client.LookupCity(lookupCityArgs, (err, result: LookupCityOutput) => {
  
    console.log(`Resultado do LookupCity: ${result.LookupCityResult.City}, ${result.LookupCityResult.State}, ${result.LookupCityResult.Zip}`);

  });


});

