module.exports = {
  linkImages: function (site, images) {
    const getImage = name => {
      return images.find(
        image => image.childImageSharp.fluid.originalName === name
      ).childImageSharp.fluid
    }

    const setParamImage = param => {
      if (param.type === 'IMAGE') {
        param.value = Array.isArray(param.value)
          ? param.value.map(value => getImage(value))
          : getImage(param.value)
      }
    }

    site.logo = getImage(site.logo)
    site.pages.forEach(page =>
      page.sections.forEach(section => {
        section.params.forEach(param => {
          setParamImage(param)
        })
        section.rows.forEach(row =>
          row.blocks.forEach(block => {
            block.params.forEach(param => {
              setParamImage(param)
            })
          })
        )
      })
    )
    return site
  },
}
