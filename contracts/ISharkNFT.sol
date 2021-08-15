//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

interface ISharkNFT {
    function sharks(uint256) external view returns(
        uint256,
        string memory,
        string memory
    );

    function totalSharks() external view returns (uint256);

    function ownerOf(uint256) external view returns (address);

    function transfer(uint256, address) external;
}
