export const schema = {
  title: "Application Form",
  description: "",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    firstName: {
      type: "string",
      title: "First name"
    },
    lastName: {
      type: "string",
      title: "Last name"
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
    select: {
      type: "boolean",
      title: "Martial Status"
    },
    fatherName: {
      type: "string",
      title: "Father/Husband name"
    },
    qualificcation: {
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
      minLength: 10
    },
    email: {
      type: "string",
      title: "Email Id",
      format: "email"
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
    radio: {
      "ui:widget": "radio"
    },
    select: {
      "ui:widget": "select"
    },
    gender: {
      "ui:widget": "radio",
      "ui:options": {
        inline: true
      }
    }
}

export const formData = {
  firstName:"",
  lastName:"",
  telephone:"9686764825",
  radio: true,
  select: false
}
