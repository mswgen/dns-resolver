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
        },
        {
            name: '@davidwinter/electron-forge-maker-snap',
            config: {
                confinement: 'strict',
                grade: 'stable',
                name: 'DNS Resolver',
                applicationName: 'DNS Resolver',
                packagedExecutableName: 'dns-resolver',
                summary: 'A simple app for resolving DNS',
                features: {
                    browserSandbox: false
                },
                icon: './logo.png'
            }
        }
    ],
    packagerConfig: {
        name: 'DNS Resolver',
        executableName: 'dns-resolver'
    }
}
