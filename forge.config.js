module.exports = {
    makers: [
        {
            name: '@electron-forge/maker-dmg',
            config: {
                name: 'DNS Resolver'
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