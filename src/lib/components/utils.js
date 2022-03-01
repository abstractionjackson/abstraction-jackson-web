import qs from 'qs'

export async function getPage({
    url,
    platform
}) {
    let STRAPI_API_TOKEN;
    let STRAPI_API_URL;
    if (import.meta.env.MODE === 'production' && platform) {
        STRAPI_API_TOKEN = platform.env.STRAPI_API_TOKEN
        STRAPI_API_URL = platform.env.STRAPI_API_URL
    } else {
        STRAPI_API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN
        STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL
    }
    const query = qs.stringify({
        filters: {
            slug: {
                $eq: url.pathname.slice(1)
            }
        },
        populate:"*"
    })
    const res = await fetch(`${STRAPI_API_URL}/api/pages?${query}`, {
        headers: {
            Authorization: `Bearer ${STRAPI_API_TOKEN}`
        }
    })
    if (!res.ok) {
        //handle error
    }
    const data = await res.json()
    return data.data[0].attributes
}