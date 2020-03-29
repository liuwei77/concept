export const conceptContainerUrl = (storage) => `${storage}concept/v3.5/`
export const appContainerUrl = conceptContainerUrl
export const publicPagesUrl = (conceptContainer) => `${conceptContainer}publicPages.ttl`
export const sharingUrl = (page) => `https://useconcept.art/page/${encodeURIComponent(page)}`
