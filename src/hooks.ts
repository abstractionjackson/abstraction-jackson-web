import qs from 'qs'

export async function handle({ event, resolve }) {
    //get the page being requested
    let STRAPI_API_TOKEN;
    let STRAPI_API_URL;
    if (import.meta.env.MODE === 'production') {
        STRAPI_API_TOKEN = event.platform.env.STRAPI_API_TOKEN
        STRAPI_API_URL = event.platform.env.STRAPI_API_URL
    } else {
        STRAPI_API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN
        STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL
    }
    // get all page urlls from ...a store?
    const slugs = [
        '/'
    ]
    //if the requested url is a page, fetch strapi data
    if (!slugs.includes(event.url.pathname)) return await resolve(event)
    const query = qs.stringify({
        filters: {
            slug: {
                $eq: event.url.pathname.slice(1)
            }
        },
        populate:"*"
    })
    console.log("Fetching page data...")
    const res = await fetch(`${STRAPI_API_URL}/api/pages?${query}`, {
        headers: {
            Authorization: `Bearer ${STRAPI_API_TOKEN}`
        }
    })
    if (!res.ok) {
        //handle error
    }
    const data = await res.json()
    //unwrap data
    event.locals= data.data[0].attributes
    return await resolve(event)
}