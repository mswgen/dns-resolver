module.exports = {
    makers: [
        {
            name: '@electron-forge/maker-dmg',
            config: {
                productName: 'DNS Resolver',
                name: 'dns-resolver'
            }
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {
                options: {
                    name: 'dns-resolver',
                    productName: 'DNS Resolver'
                }
            }
        },
        {
            name: '@electron-forge/maker-deb',
            config: {
                options: {
                    name: 'dns-resolver',
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
    ]
}