export const util = require('ethereumjs-util');

export class Message{
  nonce:util.BN;

  constructor(){

  }
  pack():Buffer{
    return util.toBuffer(util.addHexPrefix(''));
  }

}