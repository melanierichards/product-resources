name: Suggestion
description: Suggest a product resource
title: "[Suggestion]: "
labels: ["type: suggestion"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for suggesting a product resource! Please review the contribution guidelines to know what to expect.
  - type: input
    id: title
    attributes:
      label: Title of the resource
    validations:
      required: true
  - type: input
    id: url
    attributes:
      label: URL
    validations:
      required: true
  - type: input
    id: type
    attributes:
      label: Resource type
      description: Is this a book, podcast, article, etc.?
    validations:
      required: true
  - type: textarea
    id: why-this
    attributes:
      label: Why this resource
      description: Why are you suggesting this resource? Please share anything you think is particularly interesting, offers up an underrepresented viewpoint, etc.
    validations:
      required: true