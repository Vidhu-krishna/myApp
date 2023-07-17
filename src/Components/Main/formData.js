export const schema = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: "Application Form",
  description: "",
  type: "object",
  required: [ "firstName","telephone", "email"],
  properties: {
    firstName: {
      type: "string",
      title: "First name",
      minLength:3
    },
    lastName: {
      type: "string",
      title: "Last name",
      minLength:3
    },
    dob: {
      type: "string",
      title:"DOB",
      format: "date"
    },
    gender: {
      type: "string",
      title: "Gender",
      enum: ["Male", "Female", "TransGender"]
    },
    martialStatus: {
      type: "boolean",
      title: "Martial Status"
    },
    fatherName: {
      type: "string",
      title: "Father/Husband name"
    },
    qualification: {
      title: "Educational Qualification",
      type: "string",
      default: "graduate",
      oneOf: [
        {
          type: "string",
          enum: ["graduate"],
          title: "Graduate"
        },
        {
          type: "string",
          enum: ["phd"],
          title: "Phd"
        }
      ]
    },
    telephone: {
      type: "string",
      title: "Mobile Number",
      pattern: "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$", //this pattern accepts us phone numbers
      minLength:10,
    },
    email: {
      type: "string",
      title: "Email Id",
      format: "email",
      pattern: "^\\S+@\\S+\\.\\S+$",
    },
    ethinicity: {
      title: "Ethinicity",
      type: "string",
      default: "others",
      oneOf: [
        {
          type: "string",
          enum: ["hispanic or latino"],
          title: "Hispanic or Latino"
        },
        {
          type: "string",
          enum: ["asian"],
          title: "Asian"
        },
        {
          type: "string",
          enum: ["others"],
          title: "Others"
        }
      ]
    }
  }
}

export const uiSchema = {
  firstName: {
    "ui:autofocus": true,
    "ui:emptyValue": "",
  },
  telephone:{
      "ui:options": {
        "inputType": "tel"
      }
  },
  gender:{
    "ui:widget": "radio", 
    "ui:options": {
     inline: true
    }
  },
  ethinicity:{
    "ui:widget": "select"
  },
  martialStatus:{
    "ui:widget": "select"
  }
}
export const formData ={
  firstName:'Lauren',
  lastName:'Guerra'
}
