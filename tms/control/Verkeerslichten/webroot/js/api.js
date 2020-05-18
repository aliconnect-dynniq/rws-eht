aim = {
    "info": {
        "title": "RWS A2 Maastricht Verkeerslichten",
        "description": ".",
        "termsOfService": "http://aliconnect.nl/terms/",
        "contact": {
            "email": "max.van.kampen@alicon.nl"
        },
        "license": {
            "name": "Apache 2.0",
            "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        },
        "version": "1.0.0"
    },
    css: {
        rules: {
            ".row.top.bar":  "background-color:#0D0A52; color:white;"
        }
    },
    externalDocs: { description: "Find out more about Aliconnect", url: "https://aliconnect.nl" },
    servers: [ { url: "https://tms.aliconnect.nl/api" } ],
    tags: [],
	paths: {},
	components: {
        schemas: {
			Company: aim.components.schemas.Company,
            Contact: aim.components.schemas.Contact,
			Website: aim.components.schemas.Website,
			Webpage: aim.components.schemas.Webpage,
			Task: aim.components.schemas.Task,
            Map: aim.components.schemas.Map,
            System: aim.components.schemas.System,
            Attribute: aim.components.schemas.Attribute,
            ControlIO: aim.components.schemas.ControlIO,
            Device: aim.components.schemas.Device,
            Product: aim.components.schemas.Product,
            lfv_Verkeerslichten_Verkeersbuis: {

            },
            lfv_Verkeerslicht_Verkeersbuis: {

            },
        }
    },
    om: {
        nav: {
            items: {
                Admin: {
                    className: "admin", items: {
                        "Publish": { href: "#/admin/publish" },
                    }
                },
            },
        },
    },
}
