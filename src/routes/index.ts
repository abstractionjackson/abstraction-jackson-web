import { getPage } from "$lib/components/utils"

export async function get(args) {
    const data = await getPage(args)
    return {
        body: data
    }
}