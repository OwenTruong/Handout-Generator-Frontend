# Project Plan

## Introduction

This project will generate a website that is able to receive pictures (jpg/jpeg, png and pdf) and will embed them into a pdf with a custom template. While the default templates are provided, users should be able to create their own templates.

## Features

- Creation of custom templates.
  - Sign Up / Login for saving custom templates to cloud.
    - Ability to share custom templates through a link.
    - (Potentially a public space on the website where people are able to share templates)
  - Ability to save the template to local computer.

## Technologies

- handgen (npm module I made)
- react
  - react router
- typescript
- tailwindcss
  - postcss
  - autoprefixer
- eslint
- prettier

## Requirements

- Sign Up / Login Interface
- Slideshow
  - **Customize Template Panel** for customizing template.
    - Continue / Skip to Create PDF Panel
  - **Create PDF Panel** for creating pdf.
    - Two buttons: Add (Pictures) Button and Continue Button
      - Add Button will add pictures to be added to the pdf into an array.
        - It will also add pictures to the Icon Sub-Panel.
      - Continue Button will go to the Confirmation Panel.
    - An input: Template Input
      - Default template is ThreeTraitLine. Free to change to other templates. Forgot the input type but must not be number, checklist or text.
  - **Confirmation Panel** displays all of the pictures in an Icon Sub-Panel with a confirmation button and a label that accepts a different name for the pdf.
    - It also give the user the ability to change the default name of the pdf (handout.pdf).
    - It should also allow users to rotate a picture counter clockwise every time a picture is clicked on if the rotate button is active/highlighted.
- Guide on how to use.
- Icon Sub-Panel
  - Displays all of the pictures as icons.
  - Separate them by page.

## Difficulties

- I might have to change how the template works depending on the HTML Canvas API or a 2D graphics library.
