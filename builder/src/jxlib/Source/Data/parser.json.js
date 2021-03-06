/*
---

name: Jx.Store.Parser.JSON

description: Parser for reading and writting JSON formatted data.

license: MIT-style license.

requires:
 - Jx.Store.Parser
 - Core/JSON

provides: [Jx.Store.Parser.JSON]

...
 */
// $Id$
/**
 * Class: Jx.Store.Parser.JSON
 *
 * Extends: <Jx.Store.Parser>
 *
 * A Parser that handles encoding and decoding JSON strings
 *
 * License:
 * Copyright (c) 2009, Jon Bomgardner.
 *
 * This file is licensed under an MIT style license
 */
Jx.Store.Parser.JSON = new Class({

    Extends: Jx.Store.Parser,
    Family: "Jx.Store.Parser.JSON",

    options: {
        /**
         * Option: secure
         * Whether to use secure decoding. When using secure decoding the
         * parser will return null if any invalid JSON characters are in the
         * passed in string. Defaults to false.
         */
        secure: false
    },
    /**
     * APIMethod: parse
     * Turns a string into a JSON object if possible.
     *
     * Parameters:
     * data - the string representation of the data we're parsing
     */
    parse: function (data) {
        var type = Jx.type(data);

        if (type === 'string') {
            return JSON.decode(data, this.options.secure);
        }
        //otherwise just return the data object
        return data;
    },

    /**
     * APIMethod: encode
     * Takes an object and turns it into JSON.
     *
     * Parameters:
     * object - the object to encode
     */
    encode: function (object) {
        var data;
        if (object instanceof Jx.Record) {
            data = object.asObject();
        } else {
            data = object;
        }

        return JSON.encode(data);
    }
});