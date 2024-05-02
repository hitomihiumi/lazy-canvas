class BaseMethod {
    data; 

    constructor (data = {}) {
        this.data = { ...data };
    }

    setName(name) {
        if (!name) throw new Error('Name must be provided');
        if (typeof name !== 'string') throw new Error('Name must be a string');
        this.data.name = name;
        return this;
    }

    setMethod(method) {
        if (!method) throw new Error('Method must be provided');
        if (typeof method !== 'function') throw new Error('Method must be a function');
        this.data.method = method;
        return this;
    }

    toJSON() {
        return { ...this.data };
    }
}

module.exports = BaseMethod;