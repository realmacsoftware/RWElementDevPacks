const transformHook = (rw) => {
    rw.setProps({
        ...rw.collections
    })
}

exports.transformHook = transformHook;
