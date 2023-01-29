/* eslint tailwindcss/no-custom-classname: "off" */

const Giscus = () => {
  return (
    <>
      <hr />
      <div
        className="gsc-custom flex grow-0"
        dangerouslySetInnerHTML={{
          __html:
            '<script src="https://giscus.app/client.js" data-repo="aozaki-kuro/blog-gisucs-comment" data-repo-id="R_kgDOG5436Q" data-category="Announcements" data-category-id="DIC_kwDOG5436c4CBUsG" data-mapping="pathname" data-strict="1" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="bottom" data-theme="preferred_color_scheme" data-lang="en" data-loading="lazy" crossorigin="anonymous" async> </script>'
        }}
      ></div>
    </>
  )
}

export default Giscus
