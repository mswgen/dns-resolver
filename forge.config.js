module.exports = {
    makers: [
        {
            name: '@electron-forge/maker-dmg'
        },
        {
            name: '@electron-forge/maker-rpm'
        },
        {
            name: '@electron-forge/maker-deb'
        },
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                noMsi: true
            }
        }
    ],
    packagerConfig: {
        executableName: 'DNS Resolver'
    }
}