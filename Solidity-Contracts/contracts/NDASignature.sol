// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NDASignature {
    struct NDADocument {
        string documentHash;      // Hash of the NDA document
        address party1;          // First party address
        address party2;          // Second party address
        bytes32 party1Signature; // Hash of first party's signature
        bytes32 party2Signature; // Hash of second party's signature
        bool isSigned;           // Whether both parties have signed
        uint256 timestamp;       // When the NDA was created
    }

    // Mapping from NDA ID to NDADocument
    mapping(uint256 => NDADocument) public ndaDocuments;
    
    // Counter for NDA IDs
    uint256 private ndaCounter;

    // Events
    event NDACreated(uint256 indexed ndaId, address indexed party1, address indexed party2, string documentHash);
    event NDASigned(uint256 indexed ndaId, address indexed signer);
    event NDACompleted(uint256 indexed ndaId);

    // Create a new NDA
    function createNDA(address _party2, string memory _documentHash) public returns (uint256) {
        require(_party2 != address(0), "Invalid party2 address");
        require(_party2 != msg.sender, "Cannot create NDA with self");
        
        uint256 ndaId = ndaCounter++;
        
        ndaDocuments[ndaId] = NDADocument({
            documentHash: _documentHash,
            party1: msg.sender,
            party2: _party2,
            party1Signature: bytes32(0),
            party2Signature: bytes32(0),
            isSigned: false,
            timestamp: block.timestamp
        });

        emit NDACreated(ndaId, msg.sender, _party2, _documentHash);
        return ndaId;
    }

    // Sign an NDA
    function signNDA(uint256 _ndaId, bytes32 _signatureHash) public {
        NDADocument storage nda = ndaDocuments[_ndaId];
        require(nda.party1 != address(0), "NDA does not exist");
        require(!nda.isSigned, "NDA already fully signed");
        require(msg.sender == nda.party1 || msg.sender == nda.party2, "Not authorized to sign this NDA");

        if (msg.sender == nda.party1) {
            require(nda.party1Signature == bytes32(0), "Party 1 already signed");
            nda.party1Signature = _signatureHash;
        } else {
            require(nda.party2Signature == bytes32(0), "Party 2 already signed");
            nda.party2Signature = _signatureHash;
        }

        emit NDASigned(_ndaId, msg.sender);

        // Check if both parties have signed
        if (nda.party1Signature != bytes32(0) && nda.party2Signature != bytes32(0)) {
            nda.isSigned = true;
            emit NDACompleted(_ndaId);
        }
    }

    // Verify if an NDA is fully signed
    function isNDASigned(uint256 _ndaId) public view returns (bool) {
        return ndaDocuments[_ndaId].isSigned;
    }

    // Get NDA details
    function getNDADetails(uint256 _ndaId) public view returns (
        string memory documentHash,
        address party1,
        address party2,
        bytes32 party1Signature,
        bytes32 party2Signature,
        bool isSigned,
        uint256 timestamp
    ) {
        NDADocument memory nda = ndaDocuments[_ndaId];
        return (
            nda.documentHash,
            nda.party1,
            nda.party2,
            nda.party1Signature,
            nda.party2Signature,
            nda.isSigned,
            nda.timestamp
        );
    }
} 