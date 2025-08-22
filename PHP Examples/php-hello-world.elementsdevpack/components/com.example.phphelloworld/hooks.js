const transformHook = (rw) => {

    // Get the shared asset path from the component
    const { sharedAssetPath } = rw.component;

    // Set the shared asset path in the template props
    rw.setProps({
        sharedAssetPath
    });
}

exports.transformHook = transformHook; 