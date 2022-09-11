export default {
    name: "property",
    title: "Property",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "homeowner",
            title: "Homeowner",
            type: "reference",
            to: { type: "homeowner" },
        },
        {
            name: "mainImage",
            title: "Main image",
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
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        },
        {
            name: "homeownerHistory",
            title: "History of Homeowners",
            type: "array",
            of: [{ type: "reference", to: { type: "homeowner" } }],
        },
        {
            name: "vehicles",
            title: "Vehicles",
            type: "array",
            of: [{ type: "reference", to: { type: "vehicle" } }],
        },
        {
            name: "description",
            title: "Description",
            type: "blockContent",
        },
    ],

    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage",
        },
        prepare(selection) {
            const { homeowner } = selection;
            return Object.assign({}, selection, {
                subtitle: homeowner && `by ${homeowner}`,
            });
        },
    },
};
