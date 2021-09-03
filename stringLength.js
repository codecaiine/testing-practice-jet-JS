const stringLength = (string) => {
    if (string.length >= 1 && string.length <= 10) {
        let result = string.length;
        return result;
    } else
        throw new Error(
            'string length must be greater than or equal to 1 but less than or equal 10'
        );
};

module.exports = stringLength;