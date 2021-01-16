module.exports = {
    makers: [
        {
            name: '@electron-forge/maker-dmg',
            config: {
                productName: 'DNS Resolver'
            }
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {
                options: {
                    productName: 'DNS Resolver'
                }
            }
        },
        {
            name: '@electron-forge/maker-deb',
            config: {
                options: {
                    productName: 'DNS Resolver'
                }
            }
        },
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                productName: 'DNS Resolver',
                noMsi: true
            }
        }
    ],
    packagerConfig: {
        executableName: 'DNS Resolver'
    }
}