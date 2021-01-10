// SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

contract SimpleStorage {

    uint256 public number;
    event update(uint256 newNumber);
 
    function set(uint256 _number) public {
        number = _number;
        emit update(_number);
    }
 
    function get() public view returns (uint256) {
        return number;
    }
}