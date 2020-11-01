/* eslint-disable react/no-danger */
import { ResumeData } from "models/resume"
import React from "react"

const Resume: React.FC<ResumeData> = ({ info = null }: ResumeData) => {
  return (
    <>
      <div id="resume" />
      <section className="section modular-resume bg-gray">
        <section className="container grid-lg">
          {info.map(section => (
            <div className={`columns ${section.cssClass}`} key={section.id}>
              <div className="column col-3 col-md-12 header-col">
                <h4>
                  <span>{section.title}</span>
                </h4>
              </div>
              <div className="column col-9 col-md-12 main-col">
                {section.items.map(item => (
                  <div className="columns item" key={item.id}>
                    <div className="column col-12">
                      <h4>{item.title}</h4>
                      <p className="info">
                        {item.info} <span>•</span>{" "}
                        <em className="date">{item.date}</em>
                      </p>
                      <p
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  )
}

export default Resume
