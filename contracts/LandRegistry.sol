// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract LandRegistry is Ownable {
    struct Land {
        address owner;
        string location;
        uint256 surveyNumber;
        bool isRegistered;
    }

    mapping(uint256 => Land) public lands;
    uint256 public landCount;

    event LandRegistered(uint256 indexed surveyNumber, address indexed owner, string location);
    event LandTransferred(uint256 indexed surveyNumber, address indexed from, address indexed to);

    function registerLand(string memory _location, uint256 _surveyNumber) public {
        require(!lands[_surveyNumber].isRegistered, "Land already registered");
        
        lands[_surveyNumber] = Land({
            owner: msg.sender,
            location: _location,
            surveyNumber: _surveyNumber,
            isRegistered: true
        });

        landCount++;
        emit LandRegistered(_surveyNumber, msg.sender, _location);
    }

    function transferLand(uint256 _surveyNumber, address _newOwner) public {
        require(lands[_surveyNumber].isRegistered, "Land not registered");
        require(lands[_surveyNumber].owner == msg.sender, "Not land owner");

        lands[_surveyNumber].owner = _newOwner;
        emit LandTransferred(_surveyNumber, msg.sender, _newOwner);
    }

    function getLandDetails(uint256 _surveyNumber) public view returns (Land memory) {
        return lands[_surveyNumber];
    }
}