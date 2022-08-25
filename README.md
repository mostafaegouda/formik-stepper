# Headless Formik Stepper Component

Status: `dev`

Headless form stepper components using Formik

## Installation

Still under development
Will be available for install soon

## Demo

Clone the demo folder and run `npm start` to start the demo in the development mode.

## Components

### FormikStepper

| Props                          | Type                        | Default value | Description                                                       |
| ------------------------------ | --------------------------- | ------------- | ----------------------------------------------------------------- |
| Offcial Formik Component Props | ......                      | .....         | [Formik Documentation](https://formik.org/docs/api/formik)        |
| `validationSchemas`            | OptionalObjectSchema<any>[] | Required      | A List of Yup schema objects. Each object validates a single step |

### Step

| Props               | Type                            | Default value | Description                          |
| ------------------- | ------------------------------- | ------------- | ------------------------------------ |
| HTML div Attributes | HTMLAttributes<HTMLDivElement>> | ....          | Native HTML attributes for <div> tag |

### StepperButton.(Next | Prev)

You can target these buttons in CSS using:

- `.stepper-next-btn` for Next
- .`stepper-prev-btn` for Prev

| Properties                                     | Type                                    | Default value | Description                             |
| ---------------------------------------------- | --------------------------------------- | ------------- | --------------------------------------- |
| HTML button Attributes except onClick and type | ButtonHTMLAttributes<HTMLButtonElement> | .....         | Native HTML attributes for <button> tag |

### StepperProgressItem

You can target these items in CSS using:

- `[data-status]` for unvisited items
- `[data-status="visited"]` for visited items
- `[data-status="active"]` for the active item

| Properties          | Type                            | Default value | Description                          |
| ------------------- | ------------------------------- | ------------- | ------------------------------------ |
| HTML div attributes | HTMLAttributes<HTMLDivElement>> | ....          | Native HTML attributes for <div> tag |

## Example

Coming Soon...
