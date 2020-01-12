export const slugify = str => {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // convert spaces to hyphens "-"
    .replace(/(^-|-$)+/g, "") // replace any trailing hyphens with an empty string.
  return `/${basePath}/${slug}`.replace(/\/\/+/g, "/") // remove any extra "/" from path
  // checks for any sequence of 2 or more "/" in a row.
}
