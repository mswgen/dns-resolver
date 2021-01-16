module.exports = {
    makers: [
        {
            name: '@electron-forge/maker-dmg'
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {
                options: {
                    name: 'DNS Resolver',
                    productName: 'DNS Resolver'
                }
            }
        },
        {
            name: '@electron-forge/maker-deb',
            config: {
                options: {
                    name: 'DNS Resolver',
                    productName: 'DNS Resolver'
                }
            }
        },
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                noMsi: true,
                name: 'DnsResolver'
            }
        }
    ],
    packagerConfig: {
        executableName: 'DNS Resolver',
        name: 'DNS Resolver'
    }
}