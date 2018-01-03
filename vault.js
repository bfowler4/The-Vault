'use strict';
module.exports = function() {
    const vault = {};

    function setValue(key, value) {
        vault[key] = value;
    }

    function getValue(key) {
        if (vault.hasOwnProperty(key))
            return vault[key];
        return null;
    }

    return {
        setValue: setValue,
        getValue: getValue
    }
};