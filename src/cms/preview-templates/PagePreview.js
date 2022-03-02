import React from "react"

const PagePreview = ({ entry, widgetFor, getAsset }) => {
  return (
    <section id="body-wrapper" className="section blog-listing">
      <div className="container grid-md">
        <div className="columns">
          <div id="item" className="column col-12">
            <div className="content-item h-entry">
              <div className="content-title">
                {entry.getIn(["data", "hero_subtitle"]) ? (
                  <div>
                    <h1 className="p-name h2 mt-1">
                      {entry.getIn(["data", "hero_title"])}
                    </h1>
                    <div className="text-grey">
                      <h2 className="p-name h3 mt-1 light">
                        {entry.getIn(["data", "hero_subtitle"])}
                      </h2>
                    </div>
                  </div>
                ) : (
                  <h2 className="p-name mt-1">
                    {entry.getIn(["data", "hero_title"])}
                  </h2>
                )}
              </div>
              <div className="e-content">
                {entry.getIn(["data", "hero_image"]) && (
                  <div className="mb-2">
                    <img
                      alt={entry.getIn(["data", "hero_title"])}
                      className="mb-2"
                      src={getAsset(entry.getIn(["data", "hero_image"]))}
                    />
                  </div>
                )}
                {widgetFor("body")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PagePreview
