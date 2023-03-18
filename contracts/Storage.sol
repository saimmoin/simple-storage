//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Storage {
    string public message;

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}