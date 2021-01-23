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
            name: '@electron-forge/maker-wix',
            config: {
                description: 'A simple DNS Resolver app',
                exe: 'dns-resolver.exe',
                language: 1042,
                manufacturer: 'Team int',
                name: 'DNS Resolver',
                ui: {
                    chooseDirectory: true
                }
            }
        },
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                name: 'dns-resolver',
                exe: 'dns-resolver.exe',
                setupIcon: 'logo.ico'
            }
        }
    ],
    packagerConfig: {
        name: 'DNS Resolver',
        executableName: 'dns-resolver',
        icon: 'logo'
    }
}
