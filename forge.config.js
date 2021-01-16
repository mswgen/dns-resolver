module.exports = {
    makers: [
        {
            name: '@electron-forge/maker-dmg',
            config: {
                name: 'DNS Resolver'
            }
        },
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                name: 'DNS Resolver',
                noMsi: true,
                setupExe: 'DNS Resolver'
            }
        }
    ]
}