export default {
    name: "vehicle",
    title: "Vehicle",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name / Kind",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "dateRegistered",
            title: "Date Registered",
            type: "date",
            options: {
                dateFormat: "YYYY-MM-DD",
                calendarTodayLabel: "Today",
            },
        },
        {
            name: "proofOfOwnership",
            title: "Proof of Ownership",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal" }],
                    lists: [],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
        },
    },
};
