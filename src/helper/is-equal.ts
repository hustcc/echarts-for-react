import isEqual from 'fast-deep-equal';


const isEqualEvents=(a:Record<string, Function>,b:Record<string, Function>)=>{
  if(a&&b&&typeof a==="object"&&typeof b==="object"){
    const keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (let i = 0; i<length;i++)  if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (let i = 0; i<length;i++) {
      var key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }
    return true
  }
  return a!==a && b!==b;
}

const equal=(a:Function,b:Function):boolean=>{
  return a.toString() === b.toString()
}

export { isEqual,isEqualEvents };
