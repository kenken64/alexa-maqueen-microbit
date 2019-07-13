// Learn codes here:
// http://rm-bridge.fun2code.de/rm_manage/code_learning.html

// After learning a code, define the command name
// mac address or ip address and leave the data as is.
// add a secret value that must match the request in order to validate (sent as POST parameter).

/*
Example:

    {
        "command": "YOUR_COMMAND_HERE",
        "secret": "SET_A_RANDOM_HASH_HERE",
        "ip": "YOUR_DEVICE_IP_HERE",
        "mac": "MAC_ADDRESS_HERE", // Use mac instead of IP when possible.
        "sequence": ["command", "command"], // If sequence is defined, all the commands inside the array will be run in sequence.
        "data": "RM_BRIDGE_DATA_HERE" // only runs if there is no sequence defined.
    }
*/

module.exports = [{
        "command": "TVONOFF",
        "secret": "dp6mlxaiae",
        "mac": "77:0f:78:b3:a6:18",
        "data": "26007e00571f0d1e0e100d102b2d0d100d110d100d100d110d100d100e100d100d110d101c100e1e0d100d000acb581d0f1d0f0e0f0f2c2c0e0f0f0e0f0f0f0e0f0e0f0f0f0e0f0e0f0f0f0e0f0e1e0e0f1d0f0f0e000aca581d0f1d0f0e0f0e2d2b0f0f0f0e0f0e0f0f0f0e0f0e0f0f0f0e0f0e100e0f0e1e0e0f1d0f0e0f000d0500000000000000000000"
    },
    {
        "command": "TVVOLUP",
        "secret": "dp6mlxaiae",
        "mac": "77:0f:78:b3:a6:18",
        "ip": false,
        "data": "26008400581d0f1d0f0e0f0f0f1d1d0f0f0e0f0f0f0e0f0f0e0f0f0e0f0f0f0e0f0e0f0f1d1d0f0f0f0e0f0e0f000ac8581d0f1d0f0f0f0e0f1d1e0e0f0f0f0e0f0e0f0f0f0e0f0e100e0f0e0f0f0f0e1e1d0f0e0f0e0f0f0f000ac8581d0f1d0f0e0f0f0f1d1d0e0f0f0f0e0f0f0f0e0f0f0f0e0f0e0f0f0f0e0f0e1e1d0f0e100e0f0e0f000d0500000000"
    },
    {
        "command": "robotup",
        "secret": "dp6mlxaiae",
        "mac": "77:0f:78:b3:a6:18",
        "data": "2600580000012696111411141114111412131213121411141138123811381138123811381238113812131213121411141114111411381213123811381238113812381138111412371200051c0001274a13000c4e0001284a11000d05"
    },
    {
        "command": "robotdown",
        "secret": "dp6mlxaiae",
        "mac": "77:0f:78:b3:a6:18",
        "ip": false,
        "data": "2600500000012695131311141213111411141213131213131237113813371237123812371138133711381313111411381237121411141114111412371337121311141238123712371200051c0001264b13000d050000000000000000"
    },
    {
        "command": "robotleft",
        "secret": "dp6mlxaiae",
        "mac": "77:0f:78:b3:a6:18",
        "ip": false,
        "data": "2600500000012794131312131213121311141114121312131337123713371138123712381138133711381337113812131213121312141114111412131213123712381237123811381200051c0001274a12000d050000000000000000"
    },
    {
        "command": "robotright",
        "secret": "dp6mlxaiae",
        "mac": "77:0f:78:b3:a6:18",
        "ip": false,
        "data": "2600500000012794131212141213121311141114121313121238123713371237123812371138123812371312121312381213111412131312121312381237121312381138123812371200051c0001264b11000d050000000000000000"
    },
    {
        "command": "robotled",
        "secret": "dp6mlxaiae",
        "mac": "77:0f:78:b3:a6:18",
        "ip": false,
        "data": "2600580000012795121312141114111412131213111412131238113812381237123811381138133711141138123811141237121411141213113813131213113811141238113812381100051d0001264b12000c510001264c11000d05"
    },
    {
        "command": "robotrgb",
        "secret": "dp6mlxaiae",
        "mac": "77:0f:78:b3:a6:18",
        "ip": false,
        "data": "2600500000012894121312131214111412131114121312131238123712381138123811381138123811141213123812371213121312141213113811391114121312371238123712381100051d0001264b12000d050000000000000000"
    }
];
