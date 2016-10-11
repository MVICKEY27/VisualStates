// **********************************************************************
//
// Copyright (c) 2003-2016 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.6.3
//
// <auto-generated>
//
// Generated from file `genericData.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(module, require, exports)
{
    var Ice = require("ice").Ice;
    var __M = Ice.__M;
    var jderobot = require("jderobot/common").jderobot;
    var Slice = Ice.Slice;

    /**
     * Static description of the image source.
     **/
    jderobot.GenericData = Slice.defineObject(
        function(name, format, data)
        {
            Ice.Object.call(this);
            this.name = name !== undefined ? name : "";
            this.format = format !== undefined ? format : "";
            this.data = data !== undefined ? data : null;
        },
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::jderobot::GenericData"
        ],
        -1,
        function(__os)
        {
            __os.writeString(this.name);
            __os.writeString(this.format);
            jderobot.ByteSeqHelper.write(__os, this.data);
        },
        function(__is)
        {
            this.name = __is.readString();
            this.format = __is.readString();
            this.data = jderobot.ByteSeqHelper.read(__is);
        },
        false);

    jderobot.GenericDataPrx = Slice.defineProxy(Ice.ObjectPrx, jderobot.GenericData.ice_staticId, undefined);

    Slice.defineOperations(jderobot.GenericData, jderobot.GenericDataPrx);

    jderobot.genericDataProvider = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::jderobot::genericDataProvider"
        ],
        -1, undefined, undefined, false);

    jderobot.genericDataProviderPrx = Slice.defineProxy(Ice.ObjectPrx, jderobot.genericDataProvider.ice_staticId, undefined);

    Slice.defineOperations(jderobot.genericDataProvider, jderobot.genericDataProviderPrx,
    {
        "getGenericData": [, 2, 2, , , ["jderobot.GenericData", true], , , , , true]
    });
    exports.jderobot = jderobot;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
