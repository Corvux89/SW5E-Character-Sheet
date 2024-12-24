const primaryFontFamily = "Georgia"
const hiddenFontFamily = "Trebuchet MS"

const darkGrey4 = "#434343"
const darkGrey3 = "#666666"
const darkGrey2 = "#999999"
const darkGrey1 = "#b7b7b7"
const lightGrey3 = "#f3f3f3"
const lightGrey20 = "#dddddd"
const black = "#000000"

const url = `1ng9YaowxYLOopLK6fjzBUTP3eLG3bS7TOCYMukD5laM`

const tabs = [`v2.1`, `Additional`, `Inventory`, `?`, `Attack Info`, `Gear Info`, `Class Info`, `Race Info`, `Additional Import`]

const patches = [
    {
        version: "1.1",
        desc: "Testing an update",
        updates: {

        }
    }
]

const menus = [
    {
        caption: 'SW5e Tools 🔧',
        children: [
            {
                caption: "SW5e Players Handbook 📖",
                function: "gotoPlayersHandbook"
            },
            {
                caption: `Point Buy Calculator ➕➖`,
                function: "gotoPointBuy"
            },
            {
                caption: "Classes/Archtypes",
                children: [
                    {
                        caption: "Classes",
                        function: "gotoClasses"
                    },
                    {
                        caption: "Additional Berserker Archetypes",
                        children: [
                            {
                                caption: "Nightbrother Approach",
                                function: "gotoNightbrother"
                            },
                            {
                                caption: "Projection Approach",
                                function: "gotoProjection"
                            },
                            {
                                caption: "Bonesetter Approach",
                                function: "gotoBonesetter"
                            }
                        ]   
                    }
                ]
            }
        ]
    },
    {
        caption: 'Feats',
        function: "gotoFeats",
    }
]

