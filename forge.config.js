module.exports = {
    makers: [
        {
            name: '@electron-forge/maker-dmg'
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
                noMsi: true,
                name: 'dns-resolver',
                exe: 'dns-resolver.exe'
            }
        }
    ],
    packagerConfig: {
        name: 'DNS Resolver',
        executableName: 'dns-resolver'
    }
}
