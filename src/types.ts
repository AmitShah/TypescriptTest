
const util = require('ethereumjs-util');
const assert = require('assert');

type EthAddress = string & { __ETH_ADDRESS__: true }

const toEthAddress = (s: string) => {
  if (s.length !== 22 || !s.startsWith('0x')) throw new Error('INCORRECT ETH ADDRESS: ' + s)
  return s as EthAddress
}

export class Address{


  hexAddress: string;
  buffer: Buffer;

  constructor(hexAddress:string){
    assert(hexAddress.length == 22, 'invalid length');
    //assert(hexAddress.startsWith('0x')==true, 'address must start with hex prefix 0x');
    this.hexAddress = hexAddress;
    this.buffer = new util.toBuffer(this.hexAddress);
    var bigNumber = new util.BN(0);
  }

  getBuffer(){
    return this.buffer;
  }

}

export class Signature{
  constructor(){

  }
}

