export const updateDidDocument = ''

export const privateKey =
  '3f6254328fa58202094c954d89964119830f85e2f4bfdbabb1d8bcfc008d2fdd'

export const network = 'testnet'

export const schemaResourceJson = {
  resourceURI:
    'did:polygon:testnet:0x13cd23928Ae515b86592C630f56C138aE4c7B79a/resources/398cee0a-efac-4643-9f4c-74c48c72a14b',
  resourceCollectionId: '55dbc8bf-fba3-4117-855c-1e0dc1d3bb47',
  resourceId: '398cee0a-efac-4643-9f4c-74c48c72a14b',
  resourceName: 'Eventbrite1 Logo',
  resourceType: 'image/png',
  mediaType: 'image/svg+xml',
  created: '2022-11-17T08:10:36Z',
  checksum: 'a95380f460e63ad939541a57aecbfd795fcd37c6d78ee86c885340e33a91b559',
  previousVersionId: null,
  nextVersionId: null,
}

export const testResourceId = 'a2e3e176-2111-4e8f-85ab-699f4e17e296' // Add your test resourceId

export const didRegistryAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_id',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_resourceId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_resourcePayload',
        type: 'string',
      },
    ],
    name: 'addResource',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_id',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_doc',
        type: 'string',
      },
    ],
    name: 'createDID',
    outputs: [
      {
        internalType: 'address',
        name: 'controller',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'created',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'updated',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'didDoc',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'id',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'doc',
        type: 'string',
      },
    ],
    name: 'DIDCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'id',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'doc',
        type: 'string',
      },
    ],
    name: 'DIDUpdated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_id',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_resourceId',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_resourcePayload',
        type: 'string',
      },
    ],
    name: 'ResourceAdded',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'TransferOwnership',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_id',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_doc',
        type: 'string',
      },
    ],
    name: 'updateDIDDoc',
    outputs: [
      {
        internalType: 'address',
        name: 'controller',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'created',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'updated',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'didDoc',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_id',
        type: 'address',
      },
    ],
    name: 'getAllResources',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_id',
        type: 'address',
      },
    ],
    name: 'getDIDDoc',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'getDIDDocByIndex',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getOwner',
    outputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_id',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_resourceId',
        type: 'string',
      },
    ],
    name: 'getResource',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTotalNumberOfDIDs',
    outputs: [
      {
        internalType: 'uint256',
        name: '_totalDIDs',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export const testDidDetails = {
  address: '0x13cd23928Ae515b86592C630f56C138aE4c7B79a',
  did: 'did:polygon:testnet:0x13cd23928Ae515b86592C630f56C138aE4c7B79a',
  privateKey:
    '3f6254328fa58202094c954d89964119830f85e2f4bfdbabb1d8bcfc008d2fdd', //test key
  publicKeyBase58:
    '7Lnm1Zi2K75KVgHPrHADCpfa9cLAtRRocBgLsFVLw5NRPUgoLBBv1Se8ttjx4P7fXfNS5gazJmKqohNmwEqx8VjDYfPvw',
}

export const testContractDetails = {
  schemaManagerContract: '0x552992e9f14b15bBd76488cD4c38c89B80259f37',
  contractAddress: '0x12513116875BB3E4F098Ce74624739Ee51bAf023',
  networkUrl: 'https://rpc-mumbai.maticvigil.com',
}

export const testSchemaSample = {
  '@context': [
    {
      '@version': 1.1,
    },
    'https://www.w3.org/ns/odrl.jsonld',
    {
      ex: 'https://example.org/examples#',
      schema: 'http://schema.org/',
      rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',

      '3rdPartyCorrelation': 'ex:3rdPartyCorrelation',
      AllVerifiers: 'ex:AllVerifiers',
      Archival: 'ex:Archival',
      BachelorDegree: 'ex:BachelorDegree',
      Child: 'ex:Child',
      CLCredentialDefinition2019: 'ex:CLCredentialDefinition2019',
      CLSignature2019: 'ex:CLSignature2019',
      IssuerPolicy: 'ex:IssuerPolicy',
      HolderPolicy: 'ex:HolderPolicy',
      Mother: 'ex:Mother',
      RelationshipCredential: 'ex:RelationshipCredential',
      UniversityDegreeCredential: 'ex:UniversityDegreeCredential',
      AlumniCredential: 'ex:AlumniCredential',
      DisputeCredential: 'ex:DisputeCredential',
      PrescriptionCredential: 'ex:PrescriptionCredential',
      ZkpExampleSchema2018: 'ex:ZkpExampleSchema2018',

      issuerData: 'ex:issuerData',
      attributes: 'ex:attributes',
      signature: 'ex:signature',
      signatureCorrectnessProof: 'ex:signatureCorrectnessProof',
      primaryProof: 'ex:primaryProof',
      nonRevocationProof: 'ex:nonRevocationProof',

      alumniOf: { '@id': 'schema:alumniOf', '@type': 'rdf:HTML' },
      child: { '@id': 'ex:child', '@type': '@id' },
      degree: 'ex:degree',
      degreeType: 'ex:degreeType',
      degreeSchool: 'ex:degreeSchool',
      college: 'ex:college',
      name: { '@id': 'schema:name', '@type': 'rdf:HTML' },
      givenName: 'schema:givenName',
      familyName: 'schema:familyName',
      parent: { '@id': 'ex:parent', '@type': '@id' },
      referenceId: 'ex:referenceId',
      documentPresence: 'ex:documentPresence',
      evidenceDocument: 'ex:evidenceDocument',
      spouse: 'schema:spouse',
      subjectPresence: 'ex:subjectPresence',
      verifier: { '@id': 'ex:verifier', '@type': '@id' },
      currentStatus: 'ex:currentStatus',
      statusReason: 'ex:statusReason',
      prescription: 'ex:prescription',
    },
  ],
}

export const testSchemaId = '7db36918-723d-4fb9-a50a-094f21ec03d1'

export const fileServerUrl =
  'https://9756-2401-4900-1c9a-21cf-183c-5bf7-1354-aff3.ngrok-free.app'

export const fileServerAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBeWFuV29ya3MiLCJpZCI6IjdmYjRmN2I3LWQ5ZWUtNDYxOC04OTE4LWZiMmIzYzY1M2EyYiJ9.x-kHeTVqX4w19ibSAspCYgIL-JFVss8yZ0CT21QVRYM'
